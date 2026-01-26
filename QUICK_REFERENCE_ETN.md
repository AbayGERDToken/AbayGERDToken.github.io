# ETN Integration - Quick Reference Card

## Setup (5 Minutes)

```bash
# 1. Get credentials from ETN Ecosystem portal
#    - Client ID
#    - Client Secret

# 2. Add to .env.local
NEXT_PUBLIC_ETN_CLIENT_ID=your_client_id
NEXT_PUBLIC_ETN_REDIRECT_URI=http://localhost:3000/api/auth/callback/etn
ETN_CLIENT_SECRET=your_client_secret

# 3. Restart dev server
npm run dev

# 4. Test at http://localhost:3000/auth
# Look for "Continue with ETN Identity" button
```

---

## Essential Files

| File | What It Does |
|------|-------------|
| `lib/etn-auth-client.ts` | OAuth client - handles redirect to ETN |
| `lib/etn-session.ts` | Session utilities - save/restore/clear sessions |
| `lib/ETNAuthContext.tsx` | React context - `useETNAuth()` hook |
| `app/api/auth/callback/etn/route.ts` | Backend - exchanges code for tokens |
| `app/api/auth/logout/etn/route.ts` | Backend - clears session |
| `app/auth/page.tsx` | Frontend - displays ETN button |

---

## API

### useETNAuth() Hook

```tsx
const {
  isLogged,      // boolean - user is authenticated
  address,       // string | null - user ID or wallet
  signIn,        // () => void - start login
  logout,        // () => Promise<void> - clear session
  session,       // ETNSession | null - full session
  error,         // string | null - error message
  isLoading      // boolean - login in progress
} = useETNAuth();
```

### Session Object

```tsx
interface ETNSession {
  isLoggedIn: boolean;
  token: string;                    // Access token (expires 1 hour)
  refreshToken: string;             // Refresh token
  expiresAt: number;                // Token expiration timestamp
  userInfo: {
    sub?: string;                   // User ID
    email?: string;                 // Email address
    wallet_address?: string;        // Wallet address
    [key: string]: any;
  };
}
```

---

## Endpoints

### OAuth Callback
```
GET/POST /api/auth/callback/etn?code=...&state=...
├─ Purpose: Handle OAuth redirect from ETN
├─ Returns: Redirect to /auth with session cookie
└─ Security: State validation (CSRF protection)
```

### Logout
```
GET/POST /api/auth/logout/etn
├─ Purpose: Clear session
├─ Returns: JSON success or redirect
└─ Security: Clears HTTP-only cookie
```

---

## Component Usage

### Basic Login Button
```tsx
import { useETNAuth } from '@/lib/ETNAuthContext';

export function LoginButton() {
  const { signIn, isLoading } = useETNAuth();
  
  return (
    <button onClick={signIn} disabled={isLoading}>
      {isLoading ? 'Connecting...' : 'Sign in with ETN'}
    </button>
  );
}
```

### Protected Page
```tsx
import { useETNAuth } from '@/lib/ETNAuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const { isLogged, isLoading } = useETNAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLogged) {
      router.push('/auth');
    }
  }, [isLoading, isLogged, router]);

  if (isLoading) return <div>Loading...</div>;
  
  return <div>Protected content</div>;
}
```

### Display User Info
```tsx
const { session } = useETNAuth();

return (
  <>
    <p>User ID: {session?.userInfo?.sub}</p>
    <p>Email: {session?.userInfo?.email}</p>
    <p>Wallet: {session?.userInfo?.wallet_address}</p>
  </>
);
```

---

## Common Tasks

### Check if User is Logged In
```tsx
const { isLogged } = useETNAuth();
if (isLogged) { /* show user content */ }
```

### Get User's Address/ID
```tsx
const { address } = useETNAuth();
// Use address for claim form, etc.
```

### Logout User
```tsx
const { logout } = useETNAuth();
await logout();
```

### Show User's Email
```tsx
const { session } = useETNAuth();
console.log(session?.userInfo?.email);
```

### Redirect After Login
```tsx
const { isLogged } = useETNAuth();
const router = useRouter();

useEffect(() => {
  if (isLogged) {
    router.push('/claim-form?address=' + address);
  }
}, [isLogged]);
```

---

## Authentication Flow

```
┌────────────────┐
│ User Clicks    │
│ ETN Button     │
└────────┬───────┘
         │
         ↓
┌────────────────────────────┐
│ signIn() called            │
│ Redirect to ETN Provider   │
└────────┬───────────────────┘
         │
         ↓
┌────────────────────────────┐
│ ETN Provider Login Page    │
│ User enters credentials    │
└────────┬───────────────────┘
         │
         ↓
┌────────────────────────────┐
│ Returns to app with code   │
│ /api/auth/callback/etn     │
└────────┬───────────────────┘
         │
         ↓
┌────────────────────────────┐
│ Backend exchanges code for │
│ tokens & user info         │
└────────┬───────────────────┘
         │
         ↓
┌────────────────────────────┐
│ Session created            │
│ isLogged = true            │
│ address = available        │
└────────────────────────────┘
```

---

## Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| "ETN Identity is not configured" | Missing env vars | Set `NEXT_PUBLIC_ETN_CLIENT_ID` and `NEXT_PUBLIC_ETN_REDIRECT_URI` |
| "Redirect URI mismatch" | Wrong URI in ETN settings | Update ETN dashboard to match `NEXT_PUBLIC_ETN_REDIRECT_URI` |
| "Invalid credentials" | User entered wrong password | User should try again |
| "Token exchange failed" | Invalid code or secret | Check `ETN_CLIENT_SECRET` is correct |
| "Session not found" | Cookies disabled | Enable cookies in browser |

---

## Security Checklist

- ✅ Client ID: Public, safe in env vars
- ✅ Client Secret: Server-side only, NEVER expose to client
- ✅ Redirect URI: Must match exactly (including protocol/domain)
- ✅ State: Automatically validated (CSRF protection)
- ✅ Token: Expires after 1 hour, refresh token available
- ✅ Cookie: HTTP-only in production, SameSite=Lax
- ✅ HTTPS: Required in production

---

## Environment Variables

### Development
```env
NEXT_PUBLIC_ETN_CLIENT_ID=dev_id_from_etn
NEXT_PUBLIC_ETN_REDIRECT_URI=http://localhost:3000/api/auth/callback/etn
ETN_CLIENT_SECRET=dev_secret_from_etn
```

### Production
```env
NEXT_PUBLIC_ETN_CLIENT_ID=prod_id_from_etn
NEXT_PUBLIC_ETN_REDIRECT_URI=https://yourdomain.com/api/auth/callback/etn
ETN_CLIENT_SECRET=prod_secret_from_etn
```

**⚠️ Never commit secrets to git!**

---

## Testing Checklist

- [ ] Button appears on /auth page
- [ ] Can click button and get redirected
- [ ] Can login with ETN credentials
- [ ] Session is created (cookie or localStorage)
- [ ] User info is available
- [ ] Can logout
- [ ] Address prefills in claim form
- [ ] No console errors

---

## Files to Know

### Frontend
- `app/auth/page.tsx` - Auth page with login buttons
- `lib/ETNAuthContext.tsx` - useETNAuth() hook

### Backend  
- `app/api/auth/callback/etn/route.ts` - OAuth callback handler
- `app/api/auth/logout/etn/route.ts` - Logout handler

### Utilities
- `lib/etn-auth-client.ts` - OAuth client
- `lib/etn-session.ts` - Session functions

---

## Documentation

| Guide | Read If... |
|-------|-----------|
| `QUICK_SETUP_ETN.md` | You want to get started in 5 minutes |
| `ETN_INTEGRATION.md` | You need detailed setup instructions |
| `ETN_CODE_EXAMPLES.md` | You want code examples to copy |
| `ETN_ARCHITECTURE.md` | You want to understand the design |
| `ETN_BUTTON_UI_REFERENCE.md` | You want to understand the UI |

---

## Gotchas

⚠️ **State Parameter**: Automatically handled, don't worry about it
⚠️ **Token Expiration**: Check `session.expiresAt` before using token
⚠️ **Refresh Token**: Stored but not auto-refreshed (future feature)
⚠️ **HTTPS**: Required in production, use http:// only for localhost
⚠️ **Cookies**: Must be enabled in browser
⚠️ **CORS**: Backend handles, frontend doesn't need to worry

---

## Quick Troubleshooting

```
Problem: Button doesn't appear
Solution: npm run dev (restart), check env vars, reload page

Problem: "Not configured" error
Solution: Set NEXT_PUBLIC_ETN_CLIENT_ID and REDIRECT_URI

Problem: Redirect URI mismatch
Solution: Match URI exactly in ETN dashboard (no trailing slash)

Problem: Session not saving
Solution: Enable cookies, check Network tab for etn_session cookie

Problem: Staying on /auth after successful login
Solution: Clear cache, close DevTools, use incognito mode, restart server
```

---

## Links

- [ETN SDK GitHub](https://github.com/ETN-Ecosystem/ETN-Identity-SDK)
- [ETN Ecosystem Docs](https://docs.etnecosystem.org/)
- [Register Your App](https://etnecosystem.org/developer)

---

## TL;DR

1. Get credentials from ETN
2. Add 3 env variables to `.env.local`
3. Restart dev server
4. Test at `/auth`
5. Done! ✅

**Questions?** See documentation files in project root.
