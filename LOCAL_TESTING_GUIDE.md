# ETN Backend OAuth - Local Testing Guide

## ✅ Development Server Running

**Status**: Server is running on `http://localhost:3000`

### Access Points
- **Auth Page**: http://localhost:3000/auth
- **Home Page**: http://localhost:3000
- **Claim Form**: http://localhost:3000/claim-form

---

## 🧪 Testing Scenarios

### Scenario 1: Verify ETN Button is Visible
**Steps**:
1. Navigate to http://localhost:3000/auth
2. Scroll down to login section
3. Look for three buttons: Google, Facebook, **ETN Identity**

**Expected**:
- ✅ See "Continue with ETN Identity" button with green color (#1a4d2e)
- ✅ Button is below Google and Facebook buttons
- ✅ Button has proper styling and icon

**If it doesn't appear**:
- Check browser console for errors
- Verify `.env.local` has `NEXT_PUBLIC_ETN_BACKEND_URL` set
- Refresh page (Ctrl+R or Cmd+R)

---

### Scenario 2: Click ETN Button (Without Backend)
**Steps**:
1. Go to http://localhost:3000/auth
2. Click "Continue with ETN Identity" button

**Expected (without backend)**:
- 🔴 Error message appears: "Failed to get authorization URL"
- ✅ This is expected - backend is not running
- ✅ Error shows "Retry" button

**What's happening**:
- Frontend tried to call backend GET /auth/etn/login
- Backend is not running, so request failed
- Error is caught and displayed

**Next step**: Start the backend server to complete the flow

---

### Scenario 3: Test Error Handling
**Steps**:
1. Click "Continue with ETN Identity"
2. See error message
3. Click "Retry"

**Expected**:
- ✅ Error message displays clearly
- ✅ Retry button works
- ✅ Error is cleared on retry

---

### Scenario 4: Test UI Layout
**Steps**:
1. Go to http://localhost:3000/auth
2. Check page structure and styling

**Expected**:
- ✅ Logo appears at top
- ✅ Title: "Welcome to GERD Token"
- ✅ Subtitle: "Sign in to access your wallet and claim tokens"
- ✅ Three login buttons visible
- ✅ Footer with security message
- ✅ Page is responsive (works on mobile)

---

### Scenario 5: Test Google & Facebook (No Changes)
**Steps**:
1. Click "Continue with Google" button
2. Verify Google login still works
3. Go back to auth page
4. Click "Continue with Facebook" button
5. Verify Facebook login still works

**Expected**:
- ✅ Google login works as before
- ✅ Facebook login works as before
- ✅ ETN button doesn't affect other auth methods

---

### Scenario 6: Test localStorage Functionality
**Steps**:
1. Open browser DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Refresh the page
4. Check localStorage contents

**Expected**:
- ✅ `etn_user_sub` key exists in localStorage
- ✅ Value is empty/null initially (not logged in)
- ✅ After ETN login, contains user ID

**To test later** (with backend):
- Login with ETN
- Check `etn_user_sub` has user ID
- Refresh page
- Check `etn_user_sub` still exists (session persists)
- Logout
- Check `etn_user_sub` is cleared

---

### Scenario 7: Test Console Logging
**Steps**:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Click "Continue with ETN Identity"
4. Watch console output

**Expected**:
- ✅ `[ETN Auth] Starting sign in...` message
- ✅ `[ETN] Starting login flow...` message
- ✅ Error message about failed authorization URL
- ✅ Console shows clear debugging information

---

## 🔧 Testing With Backend (When Available)

### When Backend is Running

If the Render Flask backend is running on `https://abay-gerd-backend.onrender.com` or locally:

**Steps**:
1. Ensure `NEXT_PUBLIC_ETN_BACKEND_URL` is set correctly in `.env.local`
2. Go to http://localhost:3000/auth
3. Click "Continue with ETN Identity"
4. Should redirect to ETN provider login
5. Log in with your ETN account
6. Should return to app with user ID displayed

**Expected Full Flow**:
```
Click ETN Button
    ↓
Redirect to ETN provider login
    ↓
Authenticate with ETN
    ↓
Redirect back to app
    ↓
Display message: "ETN Identity Connected"
Display user ID
    ↓
Can copy user ID
Can proceed to claim form
Can logout
```

---

## 🔍 Browser DevTools Inspection

### Network Tab
**To check API calls**:
1. Open DevTools (F12)
2. Go to Network tab
3. Click "Continue with ETN Identity"
4. Look for requests to backend

**Expected** (with backend):
- `GET /auth/etn/login` → 200 OK, returns {authorizeUrl: "..."}
- Redirect to ETN provider
- `GET /auth/etn/callback?code=...&state=...` (backend handles)
- `GET /auth/etn/me` → 200 OK, returns {sub: "uuid"}

**Expected** (without backend):
- `GET /auth/etn/login` → FAILED or 502/503
- Error message displayed

### Console Tab
**To check logs**:
```
[ETN Auth] Initializing...
[ETN Auth] No active session
[ETN Auth] Starting sign in...
[ETN] Starting login flow...
[ETN] Error starting login: Failed to get authorization URL: 502/503
[ETN Auth] Sign in error: Failed to get authorization URL
```

### Application Tab
**To check storage**:
- LocalStorage → `etn_user_sub` (user ID)
- Cookies → `etn_session` (after login, from backend)

---

## 📋 Quick Test Checklist

Without backend running:
- [ ] Page loads without errors
- [ ] ETN button is visible
- [ ] ETN button has correct styling
- [ ] Clicking button triggers login flow
- [ ] Error message appears (expected without backend)
- [ ] Retry button works
- [ ] Google/Facebook buttons still work
- [ ] Console shows helpful debug messages
- [ ] localStorage is accessible
- [ ] Page is responsive

With backend running:
- [ ] Click ETN button
- [ ] Redirects to ETN provider
- [ ] Can authenticate with ETN account
- [ ] Redirects back with session cookie
- [ ] User ID displays on page
- [ ] Can copy user ID to clipboard
- [ ] Can proceed to claim form with user ID
- [ ] Can logout
- [ ] Session persists on page refresh
- [ ] Session clears after logout

---

## 🚀 Testing Different Scenarios

### Test Case 1: Fresh Login
```
1. Clear localStorage (DevTools → Application → Clear all)
2. Clear cookies (if needed)
3. Go to http://localhost:3000/auth
4. Click ETN Identity button
5. Complete authentication
6. Should see: "ETN Identity Connected"
```

### Test Case 2: Session Persistence
```
1. Login with ETN
2. Note the user ID
3. Refresh page (Ctrl+R)
4. Should see: Still logged in with same user ID
5. localStorage should contain user ID
```

### Test Case 3: Logout & Re-login
```
1. Login with ETN
2. Click Disconnect button
3. Should see: Login options again
4. localStorage should be empty
5. Click ETN button again
6. Should be able to login again
```

### Test Case 4: Switching Auth Methods
```
1. Login with Google
2. Logout
3. Login with ETN
4. Should see: ETN user ID
5. Logout
6. Login with Facebook
7. Should see: Wallet address (not user ID)
```

### Test Case 5: Error Recovery
```
1. Disable network (DevTools → Network → Offline)
2. Click ETN button
3. Should see: Network error message
4. Enable network
5. Click Retry
6. Should attempt again
```

---

## 🐛 Troubleshooting While Testing

| Issue | Check |
|-------|-------|
| ETN button not showing | Check conditional rendering in auth page, console for errors |
| Clicking button does nothing | Check console for errors, verify button onClick handler |
| Page won't load | Check build succeeded, dev server is running |
| "Cannot find module" error | Check npm install completed, dependencies installed |
| "NEXT_PUBLIC_ETN_BACKEND_URL undefined" | Check .env.local file, verify variable is set |
| Styling looks wrong | Check CSS module import, CSS files loaded |
| Other buttons broken | Revert changes, verify Google/Facebook still work |

---

## 💡 Tips for Testing

1. **Keep DevTools Open**: Press F12 to always see console and network activity
2. **Check Console First**: Most issues show helpful error messages
3. **Clear Cache**: Hard refresh with Ctrl+Shift+R (or Cmd+Shift+R on Mac)
4. **Test Incrementally**: Don't try everything at once
5. **Take Notes**: Write down what works and what doesn't
6. **Test Manually**: Click buttons, type, interact naturally
7. **Test on Mobile**: Test responsive design on different screen sizes

---

## 📸 What You Should See

### Without Backend (Current State)
```
┌─────────────────────────────┐
│   Welcome to GERD Token     │
│  Sign in to access wallet   │
├─────────────────────────────┤
│ [Google Button]             │
│ [Facebook Button]           │
│ [ETN Identity Button] ✨    │
└─────────────────────────────┘

When clicking ETN:
┌─────────────────────────────┐
│ ⚠️ Error:                   │
│ Failed to get              │
│ authorization URL           │
│                            │
│ [Retry Button]              │
└─────────────────────────────┘
```

### With Backend (Future)
```
When clicking ETN:
→ Redirects to ETN login
→ User authenticates
→ Returns to app

┌─────────────────────────────┐
│ ✅ ETN Identity Connected! │
│                            │
│ ETN User ID:               │
│ [550e8400-e29b-41d4...]   │
│ [Copy Button]              │
│                            │
│ [Proceed to Claim Form]    │
│ [Disconnect]               │
└─────────────────────────────┘
```

---

## ✅ Next Steps

1. **Verify Current State**: Check that ETN button appears on auth page
2. **Review Code**: Look at the implementation files in VS Code
3. **Check Logs**: Monitor console output as you interact with the page
4. **Test Error Handling**: See how the app handles missing backend
5. **Prepare for Backend**: Get backend running and test full flow

---

**Dev Server**: http://localhost:3000  
**Auth Page**: http://localhost:3000/auth  
**Status**: ✅ Ready to test!
