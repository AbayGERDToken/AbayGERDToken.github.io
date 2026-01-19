# Copilot Instructions for Abay GERD Token Project

## Project Overview
Next.js 14 static site (`output: 'export'`) for cryptocurrency token information with bilingual support (English/Amharic). Built for GitHub Pages deployment at AbayGERDToken.github.io. Uses TypeScript, Bootstrap 5.3.3, next-intl for i18n, Firebase for visitor tracking, and web3 for blockchain interactions.

## Architecture & Key Patterns

### Internationalization (Critical)
**Two-layout system for locale routing:**
- English: `app/layout.tsx` → wraps with `NextIntlClientProvider` passing `en` locale
- Amharic: `app/am/layout.tsx` → nested provider with `am` locale
- Each page must exist in BOTH `app/` (English) and `app/am/` (Amharic)
- Config: `next-intl.config.js` defines `['en', 'am']` locales, default `'en'`
- Messages: `locales/en.json` and `locales/am.json` (415+ keys each)

**Translation usage:**
```tsx
// Client components
import { useTranslations } from 'next-intl';
const t = useTranslations();
<p>{t('hero.title')}</p>

// Or use LocalizedText wrapper (supports rich text with <strong>, <em>)
import LocalizedText from '@/components/LocalizedText';
<LocalizedText id="hero.title" tag="h1" />
```

**Path localization in Navbar:**
- `localizePath()` prefixes paths with `/am` for Amharic
- Language switcher sets `locale` cookie and redirects to appropriate route
- Never prefix `/image`, `/dev`, or external paths

### Component Organization
- **Reusable UI:** `components/` → `Navbar`, `Footer`, `HeroSection`, `FeatureCard`, `StatCard`, `LocalizedText`, `CopyButton`, `ContractAddress`
- **Client-only components:** Most components use `'use client'` directive (Bootstrap JS, Firebase, next-intl hooks)
- **Shared layout:** `Navbar` + `Footer` in both root layouts
- **Firebase tracker:** `VisitorTracker` component logs visitor data (city, country, region) via ipinfo.io API

### Styling
- Bootstrap 5.3.3 loaded via CDN in layouts (not npm package despite devDependency)
- Font Awesome 6.5.1 via CDN
- Custom CSS: `styles/globals.css` (global), `css/main.css` (legacy)
- Google Font: Outfit (imported in layout, applied via CSS variable `--font-outfit`)

### Static Export Configuration
```javascript
// next.config.js
output: 'export',        // Generates static HTML
images: { unoptimized: true },  // Required for static export
trailingSlash: true,     // URLs end with /
```

## Development Workflows

### Key Commands
```bash
npm run dev          # Local development server
npm run build        # Production build (generates /out directory)
npm run export       # Alias for build
npm run check:i18n   # Validate en.json has all used keys
npm run check:i18n:am # Validate am.json matches en.json structure
npm run check:i18n:ci # Run both checks (use before commits)
```

### i18n Validation Scripts
- `dev-scripts/check_i18n_keys.js` → scans `.tsx` files for `LocalizedText id="..."` and `t('...')` calls, verifies keys exist in `locales/en.json`
- `dev-scripts/check_i18n_keys_locale.js` → compares locale file structure against `en.json`
- **Critical:** Run `npm run check:i18n:ci` before PRs to catch missing translation keys

### Adding New Pages
1. Create page in `app/[page-name]/page.tsx` (English)
2. Create matching `app/am/[page-name]/page.tsx` (Amharic)
3. Add translation keys to both `locales/en.json` and `locales/am.json`
4. Update `Navbar.tsx` if adding to navigation menu
5. Run `npm run check:i18n:ci` to validate

### Legacy Files
- `legacy_backup/` contains original HTML files (pre-Next.js migration)
- `public/dev/` and `dev/` have development/test pages
- Reference legacy structure when migrating remaining pages

## Tech Stack Details
- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript (strict mode, paths alias `@/*`)
- **UI:** Bootstrap 5.3.3 (CDN), Font Awesome 6, custom CSS
- **i18n:** next-intl 4.6.1 (client-side provider pattern)
- **Database:** Firebase Firestore (visitor tracking only)
- **Blockchain:** web3 4.16.0 (BSC interactions)
- **Fonts:** Google Fonts (Outfit family)

## Project-Specific Conventions
- Use `LocalizedText` component for rich text translations (supports `<strong>`, `<b>`, `<em>` in JSON)
- All interactive components need `'use client'` directive
- Use absolute imports with `@/` prefix (configured in tsconfig.json)
- Bootstrap components initialized client-side in Navbar `useEffect`
- Firebase config exposed in `lib/firebase.ts` (public project)
- Dual pages required for every route (EN + AM)

## Common Tasks
**Add translation key:**
1. Add to `locales/en.json` and `locales/am.json` with matching structure
2. Use `t('new.key')` or `<LocalizedText id="new.key" />`
3. Run `npm run check:i18n:ci`

**Update contract address:**
- Modify `components/ContractAddress.tsx` (displays token contract with copy button)

**Change language switcher behavior:**
- Edit `Navbar.tsx` → `switchLanguage()` function (sets cookie, redirects)

**Add Firebase collection:**
- Import `db` from `@/lib/firebase`
- Use Firestore methods from `firebase/firestore`
