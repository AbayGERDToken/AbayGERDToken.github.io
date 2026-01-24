const fs = require('fs');
const path = require('path');

function main() {
  const buildIdPath = path.join(__dirname, '..', '.next', 'BUILD_ID');
  const outDir = path.join(__dirname, '..', 'out');
  const versionTxt = path.join(outDir, 'version.txt');
  const versionHtmlDir = path.join(outDir, 'version');
  const versionHtml = path.join(versionHtmlDir, 'index.html');

  if (!fs.existsSync(buildIdPath)) {
    console.error('BUILD_ID not found at', buildIdPath);
    process.exit(1);
  }
  if (!fs.existsSync(outDir)) {
    console.error('out directory not found at', outDir);
    process.exit(1);
  }

  const buildId = fs.readFileSync(buildIdPath, 'utf8').trim();
  const builtAt = new Date().toISOString();
  const content = `buildId: ${buildId}\nbuiltAt: ${builtAt}\nnotes: Static export build marker for cache verification.\n`;

  fs.writeFileSync(versionTxt, content, 'utf8');

  fs.mkdirSync(versionHtmlDir, { recursive: true });
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Build Version</title></head><body><pre>${content}</pre></body></html>`;
  fs.writeFileSync(versionHtml, html, 'utf8');

  console.log('Version files written:', versionTxt, 'and', versionHtml);
}

main();
