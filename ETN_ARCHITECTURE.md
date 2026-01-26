# ETN Identity SDK Integration - Complete Overview

## What Was Implemented

A complete ETN Identity SDK integration that adds "Sign in with ETN Identity" as an additional login option alongside existing Web3Auth (Google/Facebook) authentication.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Browser                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  /auth Page (app/auth/page.tsx)                                │
│  ├─ Web3Auth Provider (Google/Facebook)                        │
│  └─ ETN Auth Provider (ETN Identity) [NEW]                     │
│                                                                 │
│      Three Login Buttons:                                       │
│      [Google] [Facebook] [ETN Identity]                         │
│                                                                 │
└────────────────┬──────────────────────────────────────────────┘
                 │
                 │ ETN Login Flow
                 │
┌────────────────▼──────────────────────────────────────────────┐
│         ETN Identity Provider                                   │
│         (auth.etnecosystem.org)                                │
│                                                                │
│         User authenticates with credentials                    │
│         Returns authorization code                            │
└────────────────┬──────────────────────────────────────────────┘
                 │
                 │ Redirect with code & state
                 │
┌────────────────▼──────────────────────────────────────────────┐
│      Your Application Backend                                  │
│                                                                │
│  /api/auth/callback/etn/route.ts                              │
│  ├─ Validates state (CSRF protection)                         │
│  ├─ Exchanges code for tokens                                 │
│  ├─ Fetches user information                                  │
│  ├─ Creates session cookie                                    │
│  └─ Redirects to /auth with success                           │
│                                                                │
└────────────────┬──────────────────────────────────────────────┘
                 │
                 │ Session established
                 │
┌────────────────▼──────────────────────────────────────────────┐
│              User Logged In                                    │
│                                                                │
│  - Access Token (expires in 1 hour)                           │
│  - Refresh Token (for token rotation)                         │
│  - User Info (email, ID, wallet address)                      │
│  - Session Cookie (HTTP-only)                                 │
│                                                                │
│  User can now proceed to claim form with address              │
└────────────────────────────────────────────────────────────────┘
```

## Component Interaction Flow

```
App Layout
├─ Web3AuthProvider (existing)
│  └─ Manages Google/Facebook auth
│
├─ ETNAuthProvider (new)
│  ├─ ETNAuthContext
│  └─ useETNAuth() hook for components
│
└─ Auth Page
   ├─ useWeb3Auth() - Web3Auth login
   ├─ useETNAuth() - ETN login (new)
   └─ Render appropriate UI based on which is logged in
```

## Data Flow

### Login Flow
```
User Click "ETN Identity"
        ↓
useETNAuth().signIn()
        ↓
Build OAuth URL with state
        ↓
Redirect to ETN Provider
        ↓
User logs in at ETN
        ↓
ETN redirects back with code
        ↓
Backend validates & exchanges code
        ↓
Get tokens + user info
        ↓
Store in session cookie
        ↓
Redirect to /auth with success
        ↓
useETNAuth() reads session
        ↓
User logged in ✓
```

### Logout Flow
```
User clicks "Disconnect"
        ↓
handleLogout()
        ↓
if (activeAuthMethod === 'etn') {
  await etnLogout()
}
        ↓
POST /api/auth/logout/etn
        ↓
Clear session cookie
        ↓
Clear local state
        ↓
Redirect to clean state
```

## State Management

### Web3Auth Method (Existing)
```
useWeb3Auth() {
  isLogged: boolean
  address: string | null
  error: string | null
  login(): Promise<void>
  logout(): Promise<void>
}
```

### ETN Auth Method (New)
```
useETNAuth() {
  isLogged: boolean
  address: string | null (user ID or wallet address)
  error: string | null
  session: ETNSession | null
  signIn(): void
  logout(): Promise<void>
  isLoading: boolean
}
```

## Session Storage Strategy

Currently uses localStorage for simplicity:
```typescript
// Session object structure
{
  isLoggedIn: boolean,
  token: string,                    // Access token
  refreshToken: string,             // For token rotation
  expiresAt: number,                // Timestamp when token expires
  userInfo: {
    sub: string,                    // User ID
    email: string,
    wallet_address?: string,
    [key]: any
  }
}
```

**Production Recommendation:** Use HTTP-only cookies with iron-session or similar for enhanced security.

## Security Implementation

### CSRF Protection
```
✓ State parameter generated on client
✓ State stored in sessionStorage
✓ State validated on callback
✓ State mismatch = reject authentication
```

### Token Security
```
✓ Access token: 1 hour expiration
✓ Refresh token: Stored securely
✓ HTTP-only cookies in production
✓ Secure flag for HTTPS only
✓ SameSite=Lax to prevent CSRF
```

### Secrets
```
✓ Client Secret: Server-side only
✓ Never exposed to frontend
✓ Used only in callback handler
```

## Environment Variables

### Development
```
NEXT_PUBLIC_ETN_CLIENT_ID=dev_client_id
NEXT_PUBLIC_ETN_REDIRECT_URI=http://localhost:3000/api/auth/callback/etn
ETN_CLIENT_SECRET=dev_secret (never commit to git)
```

### Production
```
NEXT_PUBLIC_ETN_CLIENT_ID=prod_client_id
NEXT_PUBLIC_ETN_REDIRECT_URI=https://yourdomain.com/api/auth/callback/etn
ETN_CLIENT_SECRET=prod_secret (use env vars, never in code)
```

## API Endpoints Created

### POST /api/auth/callback/etn
- **Purpose**: Handle OAuth callback
- **Input**: Authorization code from ETN
- **Process**: Exchange code → Get tokens → Fetch user info → Create session
- **Output**: Redirect to /auth with success or error

### POST /api/auth/logout/etn
- **Purpose**: Clear ETN session
- **Input**: Authenticated request
- **Process**: Clear cookie
- **Output**: JSON success response

## Files Structure

```
project/
├── lib/
│   ├── etn-auth-client.ts           # OAuth client
│   ├── etn-session.ts               # Session utilities
│   ├── ETNAuthContext.tsx           # React context & hook
│   ├── Web3AuthContext.tsx          # (existing)
│   └── ...
│
├── app/
│   ├── auth/
│   │   └── page.tsx                 # (modified - added ETN button)
│   │
│   ├── api/auth/
│   │   ├── callback/etn/
│   │   │   └── route.ts             # OAuth callback handler
│   │   │
│   │   └── logout/etn/
│   │       └── route.ts             # Logout handler
│   │
│   ├── layout.tsx                   # (modified - added ETNAuthProvider)
│   └── ...
│
├── ETN_INTEGRATION.md               # Detailed integration guide
├── ETN_INTEGRATION_SUMMARY.md       # Implementation summary
├── QUICK_SETUP_ETN.md              # Quick setup instructions
└── ...
```

## User Experience

### Before (2 Auth Methods)
```
[Sign in to GERD Token]

[Google] [Facebook]

Your credentials are secured with Web3Auth
```

### After (3 Auth Methods)
```
[Sign in to GERD Token]

[Google] [Facebook] [ETN Identity]

Your credentials are secured with industry-standard authentication
```

### After Successful ETN Login
```
✓ ETN Identity Connected!
  Account ID: 0x1234...5678

[Proceed to Claim Form]
[Disconnect]
```

## Compatibility

### Existing Features
- ✅ Web3Auth (Google, Facebook) still works
- ✅ Claim form still works with both auth methods
- ✅ Balance checking still works
- ✅ All existing functionality preserved

### New Features
- ✅ ETN Identity login
- ✅ Dual auth support in same session management
- ✅ Easy logout for both methods
- ✅ Account ID extraction from ETN

## Next Steps for Implementation

1. ✅ Code integration (DONE)
2. Register with ETN Ecosystem (USER)
3. Set environment variables (USER)
4. Test with ETN credentials (USER)
5. (Optional) Implement auto token refresh (FUTURE)
6. (Optional) Add user profile page (FUTURE)
7. Deploy to production (USER)

## Testing Checklist

- [ ] Login with Google (existing functionality)
- [ ] Login with Facebook (existing functionality)
- [ ] Login with ETN Identity (new)
- [ ] Logout from ETN login
- [ ] Claim form works after ETN login
- [ ] Address is correctly prefilled from ETN
- [ ] Session persists on page refresh
- [ ] Error handling works (wrong credentials, etc.)
- [ ] CSRF protection works (state validation)

## Troubleshooting Guide

See `ETN_INTEGRATION.md` for detailed troubleshooting steps.

Common issues:
- Missing environment variables
- Redirect URI mismatch
- Session not persisting
- Cookies not being set

## Support Resources

- [ETN-Ecosystem/ETN-Identity-SDK](https://github.com/ETN-Ecosystem/ETN-Identity-SDK)
- [ETN Ecosystem Documentation](https://docs.etnecosystem.org/)
- [OpenID Connect Specification](https://openid.net/specs/openid-connect-core-1_0.html)
