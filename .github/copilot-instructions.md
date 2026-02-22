# Copilot Instructions for Abay GERD Token Project

## Overview
This is a Next.js-based website for the Abay GERD Token project—a decentralized, community-powered digital asset inspired by Ethiopia's Grand Renaissance Dam. The project features token distribution, vesting management, multiple authentication methods, and educational content about the token ecosystem.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14.2.0 (React 18.3.0, TypeScript)
- **Authentication**: Web3Auth (Google/Facebook) + ETN Identity Provider (OAuth 2.0)
- **Blockchain**: Binance Smart Chain (BSC), Web3.js 4.x
- **Styling**: Bootstrap 5.3.3, custom CSS
- **Backend**: Next.js API routes for OAuth callbacks, session management

### Core Directories
- **`lib/`**: Authentication providers and utilities
  - `Web3AuthContext.tsx`: Web3Auth (Google/Facebook) state management
  - `ETNAuthContext.tsx`: ETN Identity OAuth provider
  - `etn-auth-client.ts`, `etn-session.ts`: ETN-specific OAuth logic
  - `firebase.ts`, `wallet-generator.ts`: Support utilities
- **`app/`**: Next.js App Router with nested pages
  - `auth/`: Login page with multi-auth options
  - `api/auth/`: OAuth callbacks and logout handlers
  - `claim-form/`: Token claim interface
  - `vesting/`, `dashboard-vesting/`: Vesting schedule viewers
  - `gerd-wallets/`, `metamask-wallet/`, `trust-wallet/`, `base-wallet/`: Wallet guides
  - `developer-transparency/`: Open-source transparency page
  - `gerd-airdrop/`, `gerd-ama/`, `qna/`, `timeline/`, `migration-announcement/`: Educational pages
- **`components/`**: Reusable React components (Navbar, Footer, HeroSection, etc.)
- **`public/`, `styles/`, `image/`**: Static assets

## Developer Workflows

### Build & Deploy
```bash
npm install          # Install dependencies
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm start            # Production server
npm run lint         # Code quality check
```
Build outputs to `.next/` and `out/` directories; deployed via GitHub Pages.

### Authentication Flow (Dual-Provider System)
1. **Web3Auth Path**: Google/Facebook login → Web3Auth SDK → wallet generation
2. **ETN Identity Path**: "Continue with ETN Identity" button → OAuth redirect → `/api/auth/callback/etn` → session cookie → access token + user info
3. Both methods coexist on the auth page; user can choose

### Session Management
- Web3Auth: Client-side wallet state
- ETN: HTTP-only session cookies (`/api/auth/callback/etn`, `/api/auth/logout/etn`)
- State restored on page reload via context providers

## Project-Specific Conventions

### Naming
- React components: PascalCase (`HeroSection.tsx`, `ContractAddress.tsx`)
- Utilities/hooks: camelCase (`etn-session.ts`, `useETNAuth()`)
- Pages: match route structure (`app/claim-form/page.tsx` → `/claim-form`)

### State Management
- **Global state**: React Context (`Web3AuthContext`, `ETNAuthContext`)
- Providers wrap layout in `app/layout.tsx`: `<Web3AuthProvider><ETNAuthProvider>{children}</ETNAuthProvider></Web3AuthProvider>`
- Use hooks to consume: `useETNAuth()`, `useWeb3Auth()`

### Styling
- Bootstrap 5 utility classes for layout/spacing
- Custom CSS in `styles/globals.css` for project-specific theming
- Color scheme: success (green), primary (blue), danger (red)
- Responsive: mobile-first with Bootstrap breakpoints (md, lg)

### Error Handling
- OAuth errors: Catch in callback handlers, return error response with details
- Session validation: Check expiry in context hooks before allowing protected actions
- Display user-friendly error messages on auth page

## Integration Points

### Multi-Authentication Support
- **Web3Auth**: Manages traditional social login; extracted to context
- **ETN Identity**: OAuth 2.0 OIDC provider; own context + API routes
- Both share the auth page UI; users select preferred method
- Logout must clear appropriate session (ETN cookie vs Web3Auth state)

### Contract Interaction
- GERD token: `0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c` (BSC mainnet)
- Legacy contract marked deprecated
- Web3.js used for read-only contract calls in dashboards
- Vesting logic verified on-chain; frontend displays verified data

### OAuth Callback Flow (ETN-Specific)
1. User redirected to ETN with `state` param (CSRF protection)
2. ETN redirects back: `/api/auth/callback/etn?code=xxx&state=xxx`
3. Backend validates state, exchanges code for tokens
4. Fetches user profile (includes wallet address)
5. Creates HTTP-only session cookie
6. Redirects to `/auth` with success flag
7. Frontend detects session, updates context

## Communication Patterns

### Component-to-Component
- Props for local communication within a page
- Context hooks (`useETNAuth()`, `useWeb3Auth()`) for global state
- Example: `auth/page.tsx` uses both hooks to render appropriate UI

### Component-to-Backend
- Next.js API routes in `app/api/`
- POST/GET to `/api/auth/callback/etn`, `/api/auth/logout/etn`
- Use native `fetch()` (Next.js optimized); no external HTTP library required
- Return JSON responses; client handles parsing

### User Data Flow
- **ETN**: OAuth token → session → context hook
- **Web3Auth**: SDK state → context hook
- No database; session data in HTTP-only cookie (production) or localStorage (dev)

## Key Files/Directories to Know

| File/Directory | Purpose |
|---|---|
| `app/layout.tsx` | Root layout; wraps providers |
| `app/auth/page.tsx` | Multi-auth login page |
| `app/api/auth/callback/etn/route.ts` | ETN OAuth callback handler |
| `lib/ETNAuthContext.tsx` | ETN authentication state + hook |
| `lib/Web3AuthContext.tsx` | Web3Auth state + hook |
| `app/claim-form/page.tsx` | Token claim interface |
| `DOCUMENTATION_INDEX.md` | ETN integration docs overview |
| `ETN_ARCHITECTURE.md` | ETN system design details |
| `ETN_CODE_EXAMPLES.md` | ETN code patterns & examples |

## Testing & Quality Assurance
- Run `npm run lint` before committing to catch TypeScript/linting errors
- Test auth flows locally: Web3Auth at `/auth` (Google/Facebook), ETN at `/auth` (ETN Identity button)
- Verify session restoration on page reload—both auth methods should persist state
- Check contract address displays match mainnet (`0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c`)
- Test mobile responsiveness; all pages must work on small screens

## Deployment
- **Production Build**: `npm run build` compiles to `.next/` and `out/` directories
- **GitHub Pages**: Site auto-deploys on push to `main` branch via GitHub Actions
- **Environment Variables**: Set in `.env.local` for dev, production values stored in repo secrets
- **Testnet First**: New smart contract logic deployed to testnet before mainnet rollout

## Contract Interaction Patterns
- **Web3.js 4.x**: Read-only calls for token info, vesting schedules, wallet balances
- **Contract Calls**: Use `web3.eth.call()` for vesting dashboards; never write without explicit user action
- **Address Format**: Always validate and checksum addresses before display
- **Error Handling**: Catch network failures gracefully; display fallback message if RPC unavailable
- **Example**: Vesting dashboard fetches schedule from contract, displays in a time-series chart

## Documentation Structure
- **For quick reference**: `QUICK_SETUP_ETN.md` (5 min), `QUICK_REFERENCE_ETN.md` (cheat sheet)
- **For implementation**: `ETN_INTEGRATION.md` (detailed), `ETN_CODE_EXAMPLES.md` (copy-paste)
- **For design**: `ETN_ARCHITECTURE.md` (system design), `ETN_BUTTON_UI_REFERENCE.md` (UI details)
- **Project overview**: `README.md`, `IMPLEMENTATION_COMPLETE.md`, `developer-transparency/page.tsx`

## Important Context
- **120 billion total tokens**: 115 billion locked under 115-year vesting schedule
- **Fair distribution**: No presale, no private allocation; free claims for eligible users
- **Community-first**: Designed for unbanked communities with internet access
- **Transparent**: Smart contracts open-source on BSC, all logic publicly verifiable
- **Dual auth**: Supports both Web3 (social) and ETN identity (OAuth) for accessibility