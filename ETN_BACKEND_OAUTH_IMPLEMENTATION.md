# ETN Backend OAuth Implementation

## Overview

This document describes the new ETN Identity OAuth implementation that uses a Render Flask backend to handle secure token exchange. This solves the GitHub Pages limitation where static hosting cannot execute server-side OAuth code exchange.

## Architecture

### Previous Approach (Broken)
- Frontend tried to do OAuth code→token exchange client-side
- Impossible on static GitHub Pages (no backend)
- OAuth client secrets would be exposed to frontend
- Implementation disabled due to these limitations

### New Approach (Working)
```
User Browser                    Render Flask Backend              ETN Identity
     |                                  |                               |
     |--1. Click ETN Button----------->|                               |
     |                                  |                               |
     |<--2. Return authorizeUrl---------|                               |
     |                                  |                               |
     |--3. Redirect to ETN Provider----|--------4. OAuth Flow--------->|
     |                                  |                               |
     |                                  |<-----5. Code + Callback------|
     |                                  |                               |
     |                                  |--6. Exchange Code---->|
     |                                  |   for Tokens         |
     |                                  |                       |
     |                                  |<--7. Tokens & User ID-|
     |                                  |                               |
     |                                  |--8. Store in Firestore
     |                                  |   + Set Session Cookie
     |                                  |
     |<--9. Redirect to App (with cookie)----|
     |                                  |
     |--10. Call /auth/etn/me---------->|
     |                                  |
     |<--11. Return User ID (sub)-------|
     |                                  |
     |--12. Store sub in localStorage
```

## Components

### 1. Backend Client Library
**File**: `lib/etn-backend-client.ts`

Communicates with Render backend OAuth endpoints:

```typescript
// Initiate login - get authorization URL
async function startETNLogin(): Promise<string | null>
// GET /auth/etn/login → {authorizeUrl}

// Get current user session - retrieve user identity
async function getETNUser(): Promise<string | null>
// GET /auth/etn/me → {sub: "uuid"}

// Logout - clear backend session
async function logoutETN(): Promise<boolean>
// POST /auth/etn/logout

// localStorage utilities for client-side persistence
function saveETNUser(sub: string): void
function getStoredETNUser(): string | null
function clearStoredETNUser(): void
```

### 2. ETN Auth Context
**File**: `lib/ETNAuthContext.tsx`

React Context providing ETN authentication state and methods:

```typescript
interface ETNAuthContextType {
  isLoading: boolean;        // Auth operation in progress
  isLogged: boolean;         // User is authenticated
  sub: string | null;        // ETN user ID (stable identifier)
  error: string | null;      // Error message if any
  signIn: () => Promise<void>;      // Initiate ETN login
  logout: () => Promise<void>;      // Clear session
  checkSession: () => Promise<void>; // Verify session after callback
}

// Usage in components
const { isLogged, sub, signIn, logout } = useETNAuth();
```

### 3. Auth Page UI
**File**: `app/auth/page.tsx`

Updated login page with three authentication options:
- Google OAuth
- Facebook OAuth
- **ETN Identity** (NEW)

Features:
- ETN button initiates backend OAuth flow
- Shows user ID (sub) after successful login
- Copies user ID to clipboard
- "Proceed to Claim Form" button passes user ID as query parameter
- Logout clears backend session and local state

## Authentication Flow

### 1. Login Initiation
```typescript
// User clicks "Continue with ETN Identity" button
const handleLogin = async () => {
  const authorizeUrl = await startETNLogin();
  // GET /auth/etn/login → returns ETN provider URL
  window.location.href = authorizeUrl;
};
```

### 2. ETN OAuth Redirect
- Backend's `startETNLogin()` calls backend `GET /auth/etn/login`
- Backend returns authorization URL for ETN provider
- User is redirected to ETN provider login page
- User authenticates and approves scopes
- ETN redirects back to backend callback URL

### 3. Token Exchange (Backend)
- Backend callback handler receives `code` and `state`
- Backend exchanges code for tokens securely (secrets not exposed)
- Tokens stored on Render backend
- Session created in Firestore with user identity
- HTTPOnly `etn_session` cookie issued to browser

### 4. Session Verification (Frontend)
```typescript
// After redirect back to app, verify session
const userSub = await getETNUser();
// GET /auth/etn/me → {sub: "user-uuid"}
if (userSub) {
  saveETNUser(userSub); // Store in localStorage
  setIsLogged(true);
}
```

### 5. Claim Form Access
```typescript
// Navigate to claim form with user ID
router.push(`/claim-form?address=${etnSub}`);
```

## Environment Configuration

### Required Variables
```bash
# ETN Backend URL (points to Render Flask API)
NEXT_PUBLIC_ETN_BACKEND_URL=https://abay-gerd-backend.onrender.com

# For local development:
NEXT_PUBLIC_ETN_BACKEND_URL=http://localhost:5000
```

### Backend Endpoints Expected
```
GET    /auth/etn/login          → {authorizeUrl}
GET    /auth/etn/me             → {sub, status}
POST   /auth/etn/logout         → {status}
GET    /auth/etn/callback       → OAuth callback handler
(Backend handles internally)
```

## Data Flow

### What Frontend Knows
- User's `sub` (stable UUID identifier)
- User's authentication status
- Session validity via backend check

### What Frontend Does NOT Know
- OAuth tokens (stored on backend only)
- OAuth client secrets (stored on backend only)
- Token expiration or refresh logic (backend handles)

### What Backend Stores
- OAuth access/refresh tokens in Firestore
- Session state in Firestore with TTL
- User claims and scopes

### Security Benefits
✅ No secrets exposed to browser  
✅ Tokens never accessible to frontend JavaScript  
✅ HTTPOnly cookies prevent XSS attacks  
✅ PKCE flow for authorization code  
✅ State parameter prevents CSRF  
✅ Server-side session management  

## Error Handling

### Backend Unavailable
```typescript
if (!authorizeUrl) {
  setError('Failed to get authorization URL');
  // User sees error and retry button
}
```

### Session Expired
```typescript
const userSub = await getETNUser();
if (!userSub) {
  // Session expired or invalid
  setIsLogged(false);
  // User sees login options again
}
```

### Network Errors
```typescript
try {
  await getETNUser();
} catch (err) {
  console.error('[ETN Auth] Error:', err);
  // Gracefully handle network failures
}
```

## Testing Checklist

- [ ] Backend is running and accessible
- [ ] `NEXT_PUBLIC_ETN_BACKEND_URL` is set correctly
- [ ] Click "Continue with ETN Identity" button
- [ ] Redirects to ETN provider login
- [ ] Can authenticate with ETN account
- [ ] Redirects back to app with session cookie
- [ ] User ID (sub) is displayed
- [ ] Can copy user ID to clipboard
- [ ] "Proceed to Claim Form" works with user ID
- [ ] Logout clears session on backend and frontend
- [ ] Refresh page maintains session (via localStorage and backend check)
- [ ] Closing browser tab and reopening shows login page again

## Migration Notes

### From Old Implementation
The old implementation tried to:
1. Use client-side OAuth library (etn-auth-client.ts)
2. Exchange code on frontend (impossible on static hosting)
3. Store tokens in browser memory (security risk)

### To New Implementation
The new implementation:
1. Uses backend client library (etn-backend-client.ts)
2. Backend handles all OAuth operations
3. Frontend only knows user's `sub` identifier
4. Tokens never exposed to frontend

### Files Changed
- ✅ `lib/ETNAuthContext.tsx` - Refactored to use backend client
- ✅ `lib/etn-backend-client.ts` - NEW: Backend OAuth client
- ✅ `app/auth/page.tsx` - Added ETN button, updated flow
- ✅ `.env.local` - Added NEXT_PUBLIC_ETN_BACKEND_URL

### Files No Longer Used
- `lib/etn-auth-client.ts` - Old client-side OAuth (deprecated)
- `lib/etn-session.ts` - Old session management (deprecated)

## Backend Implementation Reference

For the Render Flask backend implementation, ensure these endpoints exist:

```python
# Backend: /auth/etn/login
@app.get('/auth/etn/login')
def etn_login():
    """Return ETN provider authorization URL"""
    return {
        'authorizeUrl': f'https://auth.etn.io/authorize?...'
    }

# Backend: /auth/etn/callback
@app.get('/auth/etn/callback')
def etn_callback():
    """Handle OAuth callback from ETN provider"""
    # Exchange code for tokens
    # Store in Firestore
    # Set etn_session cookie
    # Redirect to frontend

# Backend: /auth/etn/me
@app.get('/auth/etn/me')
def etn_me():
    """Get current user identity from session"""
    if session_valid:
        return {'status': 'success', 'sub': user_uuid}
    return {'status': 'error'}

# Backend: /auth/etn/logout
@app.post('/auth/etn/logout')
def etn_logout():
    """Clear user session"""
    # Remove from Firestore
    # Clear session cookie
    return {'status': 'success'}
```

## Troubleshooting

### ETN button not appearing
- Check that `<LoginOptions>` div renders for unauthenticated users
- Verify `handleLogin("etn")` is properly bound

### "Failed to get authorization URL"
- Verify `NEXT_PUBLIC_ETN_BACKEND_URL` is set
- Check backend is running and accessible
- Check browser console for fetch error details
- Verify backend `/auth/etn/login` endpoint works

### Session not persisting
- Check that `etn_session` cookie is sent with `credentials: 'include'`
- Verify Firestore session is being created on backend
- Check session TTL on backend (may have expired)

### Can't proceed to claim form
- Verify `etnSub` is not null
- Check that router push is using correct query parameter: `address=${etnSub}`
- Verify claim form page accepts `address` query parameter

## Summary

The new ETN backend OAuth implementation provides:
- **Security**: Tokens never exposed to frontend
- **Simplicity**: Frontend only deals with user ID
- **Reliability**: Backend handles all OAuth complexity
- **Maintainability**: Clear separation of concerns
- **GitHub Pages Compatibility**: No need for frontend API routes

The feature branch `feature/etn-backend-oauth` contains all these changes ready for testing before merging to main.
