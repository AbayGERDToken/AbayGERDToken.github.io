# ETN Backend OAuth Implementation - Pull Request Summary

## Branch: `feature/etn-backend-oauth`

### Status: ✅ Ready for Review & Testing

## Overview

This PR implements the ETN Identity authentication using a backend-first OAuth approach. It solves the critical limitation of GitHub Pages (static hosting) where server-side OAuth code exchange is not possible.

## Why This Change?

### Problem
The original implementation attempted client-side OAuth code exchange, which is:
- ❌ **Impossible on GitHub Pages** (static hosting, no backend)
- ❌ **Security risk** (OAuth secrets exposed to browser)
- ❌ **Non-standard OAuth** (proper flow requires backend)

Result: ETN login was disabled because the flow couldn't work.

### Solution
Move OAuth code exchange to a dedicated Render Flask backend:
- ✅ **Backend handles token exchange** securely
- ✅ **Frontend never sees tokens** (only sees user ID)
- ✅ **Proper OAuth 2.0 PKCE flow** with server-side session management
- ✅ **Works on GitHub Pages** (frontend only calls backend API)
- ✅ **Secure by design** (httpOnly cookies, no exposed secrets)

## Files Changed

### 1. New File: `lib/etn-backend-client.ts` (141 lines)
**Purpose**: Client library for communicating with Render backend OAuth endpoints

**Key Functions**:
- `startETNLogin()` - GET /auth/etn/login → returns ETN provider URL
- `getETNUser()` - GET /auth/etn/me → returns user's `sub` (identity)
- `logoutETN()` - POST /auth/etn/logout → clears backend session
- `saveETNUser()` / `getStoredETNUser()` - localStorage persistence

**Type Interfaces**:
```typescript
interface ETNLoginResponse {
  authorizeUrl: string;
}

interface ETNMeResponse {
  status: 'success' | 'error';
  sub?: string; // ETN user ID (UUID)
  message?: string;
}
```

### 2. Updated: `lib/ETNAuthContext.tsx` (187 lines)
**Changes**:
- ❌ Removed: client-side OAuth client initialization
- ❌ Removed: session token storage and refresh logic
- ✅ Added: backend client integration
- ✅ Added: `checkSession()` for callback verification
- ✅ Changed: `address` property → `sub` property

**New Interface**:
```typescript
interface ETNAuthContextType {
  isLoading: boolean;
  isLogged: boolean;
  sub: string | null;           // User ID instead of wallet address
  error: string | null;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>; // NEW: verify session after callback
}
```

**Behavior**:
1. On mount: Checks localStorage and backend for existing session
2. On signIn: Redirects to backend's authorization URL
3. On callback: Calls checkSession to verify and get user ID
4. On logout: Calls backend to clear session, clears localStorage

### 3. Updated: `app/auth/page.tsx` (67 lines changed)
**Changes**:
- ✅ Added "Continue with ETN Identity" button as 3rd login option
- ✅ Added ETN-specific success message with user ID display
- ✅ Added callback handler for ETN OAuth redirect
- ✅ Integrated new `useETNAuth()` hook
- ✅ Updated claim form navigation to use `sub` instead of address

**UI Changes**:
```
Before:  [Google Button] [Facebook Button]
After:   [Google Button] [Facebook Button] [ETN Identity Button]
```

**New ETN Flow**:
1. Click "Continue with ETN Identity"
2. Redirect to ETN provider login
3. Return to app with session cookie
4. Display user ID: "ETN Identity Connected"
5. Can copy user ID or proceed to claim form

### 4. Updated: `.env.local`
**Changes**:
- ✅ Added `NEXT_PUBLIC_ETN_BACKEND_URL=https://abay-gerd-backend.onrender.com`
- ✅ Commented out old client-side OAuth configuration
- ✅ Added comment for local development override

### 5. New File: `ETN_BACKEND_OAUTH_IMPLEMENTATION.md` (333 lines)
**Purpose**: Comprehensive implementation guide covering:
- Architecture diagrams and flow
- Component descriptions
- Environment configuration
- Error handling patterns
- Testing checklist
- Backend integration requirements
- Troubleshooting guide

## Architecture

### Authentication Flow
```
1. User clicks "Continue with ETN Identity"
   ↓
2. Frontend calls: GET /auth/etn/login
   (from backend at https://abay-gerd-backend.onrender.com)
   ↓
3. Backend returns: {authorizeUrl: "https://auth.etn.io/authorize?..."}
   ↓
4. Frontend redirects: window.location.href = authorizeUrl
   ↓
5. User authenticates with ETN provider
   ↓
6. ETN redirects to backend callback: /auth/etn/callback
   ↓
7. Backend exchanges code for tokens (securely, server-side)
   Backend stores tokens in Firestore
   Backend sets etn_session httpOnly cookie
   Backend redirects to frontend
   ↓
8. Frontend calls: GET /auth/etn/me
   ↓
9. Backend returns: {status: "success", sub: "user-uuid"}
   ↓
10. Frontend stores sub in localStorage
    Frontend displays: "ETN Identity Connected"
    ↓
11. User can now proceed to claim form with sub as address
```

### Security Properties
- 🔒 OAuth tokens never exposed to browser
- 🔒 OAuth client secrets never exposed to frontend
- 🔒 HTTPOnly cookies prevent XSS attacks
- 🔒 PKCE flow prevents authorization code interception
- 🔒 State parameter prevents CSRF attacks
- 🔒 Server-side session management with TTL

## Testing Instructions

### Prerequisites
1. Backend must be running on Render: `https://abay-gerd-backend.onrender.com`
2. Backend must have `/auth/etn/login`, `/auth/etn/callback`, `/auth/etn/me`, `/auth/etn/logout` endpoints
3. Environment variable must be set: `NEXT_PUBLIC_ETN_BACKEND_URL`

### Local Development Testing
```bash
# 1. Verify environment variable is set
echo $NEXT_PUBLIC_ETN_BACKEND_URL

# 2. Start development server
npm run dev

# 3. Navigate to http://localhost:3000/auth

# 4. Test ETN login flow:
# - Click "Continue with ETN Identity" button
# - Should redirect to ETN provider login
# - Login with valid ETN credentials
# - Should redirect back to app
# - Should display "ETN Identity Connected"
# - Should show user ID

# 5. Test proceed to claim form:
# - Click "Proceed to Claim Form"
# - URL should include: ?address=<user-id>
# - Claim form should accept the user ID

# 6. Test logout:
# - Click "Disconnect" button
# - Should call backend to clear session
# - Should return to login page
# - localStorage should be cleared

# 7. Test session persistence:
# - Login with ETN
# - Refresh page
# - Should remain logged in (via localStorage + backend session check)

# 8. Test session expiration:
# - Login with ETN
# - Wait for backend session to expire (or clear Firestore manually)
# - Refresh page or reload app
# - Should return to login page

# 9. Test error handling:
# - Disable network and click ETN button
# - Should show error message
# - Should show "Retry" button
```

### Production Testing
1. Build and deploy to main branch
2. Test on live site: https://www.abaygerdtoken.com/auth
3. Verify ETN button is visible and functional
4. Verify claim form works with ETN user ID

## Breaking Changes

### User ID Format Change
- **Old**: Uses wallet addresses (e.g., "0x123abc...")
- **New**: Uses user IDs from ETN (e.g., "550e8400-e29b-41d4-a716-446655440000")

**Impact**: 
- Claim form must accept user IDs, not just wallet addresses
- User claims will be associated with user ID, not wallet address
- No impact on Google/Facebook login (different auth method)

### Removed Client-Side OAuth
- **Old**: `etn-auth-client.ts` (client-side OAuth library)
- **New**: `etn-backend-client.ts` (backend API calls)

**Impact**:
- Old environment variables no longer used:
  - NEXT_PUBLIC_ETN_CLIENT_ID ❌
  - NEXT_PUBLIC_ETN_REDIRECT_URI ❌
  - ETN_CLIENT_SECRET ❌
- New environment variable required:
  - NEXT_PUBLIC_ETN_BACKEND_URL ✅

## Rollback Plan

If issues occur:
```bash
# Switch back to main branch
git checkout main

# Revert this feature (if merged)
git revert feature/etn-backend-oauth
```

The old implementation files are still in the codebase but not used:
- `lib/etn-auth-client.ts` (unused)
- `lib/etn-session.ts` (unused)

These can be removed in a cleanup PR once the new implementation is stable.

## Dependencies

### No New Dependencies
This implementation uses only existing dependencies:
- React hooks (already in use)
- Next.js router (already in use)
- localStorage API (built-in browser API)
- Fetch API (built-in browser API)

### Backend Dependencies (Render)
The backend must provide these endpoints:
- `GET /auth/etn/login` - returns {authorizeUrl}
- `GET /auth/etn/callback` - OAuth callback handler
- `GET /auth/etn/me` - returns {sub, status}
- `POST /auth/etn/logout` - clears session

Firestore integration for storing:
- OAuth state for PKCE flow
- Session data with TTL
- User claims (optional)

## Related Issues/PRs
- Issue: GitHub Pages cannot support server-side OAuth
- Related: ETN login was disabled due to this limitation
- Solution: Use dedicated backend at Render for OAuth

## Checklist for Reviewers

- [ ] Code follows project style guidelines
- [ ] All TypeScript types are properly defined
- [ ] Error handling is comprehensive
- [ ] Security considerations are addressed
- [ ] Documentation is clear and complete
- [ ] No unnecessary dependencies added
- [ ] localStorage usage is appropriate
- [ ] Backend integration points are documented
- [ ] Testing instructions are clear
- [ ] Breaking changes are documented

## Next Steps

1. **Review Code**: Check implementation for security and correctness
2. **Test Locally**: Follow testing instructions with running backend
3. **Test in Browser**: Verify ETN button works and completes flow
4. **Test Error Cases**: Verify error handling and recovery
5. **Merge**: Once approved, merge to main branch
6. **Deploy**: Deploy to production and verify on live site
7. **Monitor**: Watch for any session/authentication issues in production

## Questions or Issues?

Refer to:
- [ETN_BACKEND_OAUTH_IMPLEMENTATION.md](ETN_BACKEND_OAUTH_IMPLEMENTATION.md) - Full implementation guide
- [ETN_ARCHITECTURE.md](ETN_ARCHITECTURE.md) - Original architecture notes
- Backend repository - For backend endpoint implementation details

---

**Branch Status**: ✅ Ready for Review  
**All Tests**: ✅ Locally verified (awaiting reviewer testing with backend)  
**Documentation**: ✅ Complete  
**Breaking Changes**: ⚠️ Yes, but well-documented
