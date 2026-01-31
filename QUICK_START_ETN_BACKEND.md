# ETN Backend OAuth - Quick Reference

## At a Glance

| Aspect | Details |
|--------|---------|
| **Problem** | GitHub Pages can't do OAuth code→token exchange |
| **Solution** | Use Render Flask backend to handle OAuth |
| **User ID** | `sub` (UUID from ETN provider, not wallet address) |
| **Frontend** | Calls backend API, never touches OAuth tokens |
| **Backend** | Handles all OAuth, stores in Firestore, issues session cookie |
| **Status** | ✅ Ready to test |

## Key Files

```
lib/etn-backend-client.ts      ← API calls to Render backend
lib/ETNAuthContext.tsx          ← React auth state management
app/auth/page.tsx               ← Login UI with ETN button
.env.local                       ← NEXT_PUBLIC_ETN_BACKEND_URL
```

## Environment Setup

```bash
# Required for production
NEXT_PUBLIC_ETN_BACKEND_URL=https://abay-gerd-backend.onrender.com

# For local development (optional)
NEXT_PUBLIC_ETN_BACKEND_URL=http://localhost:5000
```

## Component Usage

```typescript
// In any React component
import { useETNAuth } from '@/lib/ETNAuthContext';

function MyComponent() {
  const { isLogged, sub, signIn, logout, isLoading, error } = useETNAuth();

  if (isLoading) return <div>Loading...</div>;
  
  if (isLogged) {
    return (
      <div>
        <p>Welcome! Your ID: {sub}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <button onClick={signIn}>Login with ETN</button>
    </div>
  );
}
```

## Authentication Flow (In 5 Steps)

```
┌─────────────────────────────────────────────────┐
│ 1. User clicks "Continue with ETN Identity"   │
│    → Frontend calls: GET /auth/etn/login        │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│ 2. Backend returns ETN provider URL              │
│    → Frontend: window.location.href = URL      │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│ 3. User authenticates with ETN provider         │
│    → ETN redirects to backend callback          │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│ 4. Backend exchanges code for tokens (secure)   │
│    → Stores in Firestore                        │
│    → Issues etn_session httpOnly cookie         │
│    → Redirects to frontend                      │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│ 5. Frontend calls: GET /auth/etn/me             │
│    → Returns {sub: "user-uuid", status: "ok"}  │
│    → Frontend stores in localStorage            │
│    → User is logged in! ✅                      │
└─────────────────────────────────────────────────┘
```

## API Endpoints (Backend)

```bash
# Get authorization URL (start login)
GET /auth/etn/login
→ {authorizeUrl: "https://auth.etn.io/authorize?..."}

# OAuth callback (handled by backend)
GET /auth/etn/callback?code=...&state=...
→ Backend exchanges code → stores tokens → redirects

# Get current user identity (verify login)
GET /auth/etn/me
→ {status: "success", sub: "uuid"} OR 401 Unauthorized

# Logout (clear session)
POST /auth/etn/logout
→ {status: "success"}
```

## Common Tasks

### Check if User is Logged In
```typescript
const { isLogged } = useETNAuth();
if (isLogged) { /* User is logged in */ }
```

### Get User's ID
```typescript
const { sub } = useETNAuth();
console.log('User ID:', sub); // "550e8400-e29b-41d4-a716-446655440000"
```

### Handle Login
```typescript
const { signIn, isLoading, error } = useETNAuth();

const handleClick = async () => {
  try {
    await signIn();
    // User will be redirected to ETN provider
  } catch (err) {
    console.error('Login failed:', err);
  }
};

return <button onClick={handleClick} disabled={isLoading}>Login</button>;
```

### Handle Logout
```typescript
const { logout, isLoading } = useETNAuth();

const handleClick = async () => {
  try {
    await logout();
    // Session cleared, user logged out
  } catch (err) {
    console.error('Logout failed:', err);
  }
};

return <button onClick={handleClick} disabled={isLoading}>Logout</button>;
```

### Verify Session After Callback
```typescript
// In auth page after OAuth redirect
const { checkSession, isLogged, sub } = useETNAuth();

useEffect(() => {
  if (searchParams.get('etn_callback') === 'true') {
    checkSession(); // Verify session with backend
  }
}, [searchParams, checkSession]);

if (isLogged) {
  return <p>Welcome, {sub}</p>;
}
```

### Persist User ID Locally
```typescript
import { saveETNUser, getStoredETNUser } from '@/lib/etn-backend-client';

// Save after login
saveETNUser(sub);

// Retrieve on page load
const storedId = getStoredETNUser();
```

## Error Handling

```typescript
const { error } = useETNAuth();

if (error) {
  if (error.includes('authorization')) {
    return <p>Failed to get login URL. Please try again.</p>;
  } else if (error.includes('session')) {
    return <p>Session verification failed. Please login again.</p>;
  } else if (error.includes('logout')) {
    return <p>Logout failed. Please refresh the page.</p>;
  } else {
    return <p>Error: {error}</p>;
  }
}
```

## Testing Checklist

```
⚪ Backend is running and accessible
⚪ NEXT_PUBLIC_ETN_BACKEND_URL is set
⚪ Click "Continue with ETN Identity" button
⚪ Redirected to ETN provider login
⚪ Can authenticate with ETN account
⚪ Redirected back with session cookie
⚪ User ID displays correctly
⚪ Can copy user ID
⚪ "Proceed to Claim Form" passes user ID
⚪ Logout clears backend session
⚪ Refresh page maintains login (localStorage + session check)
⚪ Close/reopen browser shows login page
⚪ Error messages are helpful
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| ETN button not showing | Check `!isLogged && !etnIsLogged` condition in auth page |
| "Failed to get authorization URL" | Verify backend URL in .env.local, check backend is running |
| Redirects to blank page | Backend callback URL is likely incorrect |
| Session not persisting | Check etn_session cookie is being sent, verify Firestore TTL |
| Can't proceed to claim form | Verify etnSub is not null, check URL uses `address=${sub}` |
| "Not authenticated" error | Backend session expired or Firestore data missing |

## Security Notes

✅ **What's Protected**:
- OAuth tokens stored only on backend
- Client secrets never exposed to browser
- HTTPOnly cookies prevent JavaScript access
- PKCE flow prevents code interception
- State parameter prevents CSRF

❌ **What's NOT Secret**:
- User's `sub` (UUID) - This is the public identifier
- User's authentication status
- User's email/profile (if returned by ETN)

## Migration from Old Implementation

**Old** (doesn't work):
```typescript
import { initETNAuthClient } from './etn-auth-client';
const client = initETNAuthClient();
client.signIn(); // ❌ Frontend tries to do OAuth
```

**New** (works):
```typescript
import { useETNAuth } from '@/lib/ETNAuthContext';
const { signIn } = useETNAuth();
signIn(); // ✅ Frontend calls backend, backend does OAuth
```

## Related Documentation

- [ETN_BACKEND_OAUTH_IMPLEMENTATION.md](ETN_BACKEND_OAUTH_IMPLEMENTATION.md) - Full guide
- [PULL_REQUEST_SUMMARY.md](PULL_REQUEST_SUMMARY.md) - PR details
- [ETN_ARCHITECTURE.md](ETN_ARCHITECTURE.md) - Original architecture

## Quick Links

- **Feature Branch**: `feature/etn-backend-oauth`
- **Backend URL**: `https://abay-gerd-backend.onrender.com`
- **Auth Page**: `/auth`
- **Claim Form**: `/claim-form`

---

**Status**: ✅ Implemented & Ready  
**Last Updated**: 2024  
**Maintainers**: ETN Integration Team
