const fs = require('fs');
const path = require('path');

function walk(dir, ext = '.tsx'){
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items){
    const full = path.join(dir, it.name);
    if (it.isDirectory()) files.push(...walk(full, ext));
    else if (it.isFile() && full.endsWith(ext)) files.push(full);
  }
  return files;
}

function getKeysFromContent(content){
  const keys = new Set();
  const regexLT = /LocalizedText\s+id=\"([^\"]+)\"/g;
  let m;
  while((m = regexLT.exec(content))){ keys.add(m[1]); }
  const regexT = /\bt\(\s*['\"]([^'\"]+)['\"]\s*\)/g;
  while((m = regexT.exec(content))){ keys.add(m[1]); }
  return Array.from(keys);
}

function hasKey(obj, keyPath){
  const parts = keyPath.split('.');
  let cur = obj;
  for(const p of parts){
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
    else return false;
  }
  return true;
}

const root = path.resolve(__dirname, '..');
const files = walk(path.join(root, 'app')).concat(walk(path.join(root, 'components')));
const en = JSON.parse(fs.readFileSync(path.join(root, 'locales', 'en.json'),'utf8'));

const report = [];
for(const file of files){
  const content = fs.readFileSync(file,'utf8');
  const keys = getKeysFromContent(content);
  for(const k of keys){
    if (!hasKey(en, k)) report.push({file: path.relative(root, file), key: k});
  }
}

if(report.length === 0){
  console.log('No missing keys found in locales/en.json for LocalizedText and t() usages.');
  process.exit(0);
}

console.log('Missing keys in locales/en.json:');
for(const r of report){
  console.log(`- ${r.key}  (used in ${r.file})`);
}
process.exit(2);
