# Testing Guide - GERD Token Claim PWA

## Prerequisites for Testing

1. **Web3Auth Account**
   - Sign up at https://dashboard.web3auth.io
   - Create an application
   - Copy Client ID

2. **Test Contracts** (optional for UI testing)
   - Deploy on BSC testnet first
   - Or use existing contract addresses

3. **Test Environment**
   - Node.js 18+
   - npm or yarn
   - Modern browser (Chrome, Firefox, Safari, Edge)

---

## Environment Setup for Testing

Create `.env.local` with test values:

```env
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=your_test_client_id

# BSC Testnet (recommended for testing)
NEXT_PUBLIC_BSC_RPC_URL=https://data-seed-prebsc-1-1.binance.org:8545

# Test contract addresses (deploy your own)
NEXT_PUBLIC_GERD_TOKEN_ADDRESS=0xYourTestTokenAddress
NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS=0xYourTestClaimContractAddress

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting Test BNB

For BSC Testnet:
1. Visit https://testnet.binance.org/faucet
2. Enter your wallet address
3. Request 0.5 tBNB

---

## Testing Phases

## Phase 1: Setup & Installation Testing

### Test: Dependencies Installed

```bash
npm ls @web3auth/modal ethers
# Should show all packages installed
```

✅ **Expected**: All packages listed with versions

---

### Test: Environment Variables Loaded

```bash
npm run dev
# Check terminal for any env warnings
```

✅ **Expected**: No warnings about missing env variables (after configuring `.env.local`)

---

## Phase 2: Web3Auth Integration Testing

### Test: Web3Auth Initializes

1. Start dev server: `npm run dev`
2. Open http://localhost:3000/auth
3. Open browser console (F12)
4. Look for: `"Service Worker registered"` or `"Web3Auth initializing"`

✅ **Expected**: No console errors, Web3Auth modal should be ready

---

### Test: Google Login

1. Navigate to http://localhost:3000/auth
2. Click "Login with Google"
3. Complete Google OAuth flow
4. Should redirect to `/gerd-claim`

✅ **Expected**: 
- Web3Auth modal opens
- Google login works
- Redirected to claim page
- Wallet address displayed

❌ **If fails**:
- Check Client ID in `.env.local`
- Verify domain in Web3Auth dashboard
- Check browser console for errors

---

### Test: Facebook Login

1. Navigate to http://localhost:3000/auth
2. Click "Login with Facebook"
3. Complete Facebook OAuth flow
4. Should redirect to `/gerd-claim`

✅ **Expected**: Same as Google login but with Facebook

---

### Test: Session Persistence

1. Log in with Google
2. Refresh the page (F5)
3. Should remain logged in

✅ **Expected**: Address and BNB balance still show (no re-login required)

---

### Test: Logout

1. While logged in, click "Logout" button
2. Redirects to `/auth`
3. Try to access `/gerd-claim` directly
4. Should redirect back to `/auth`

✅ **Expected**: Logout works, protected routes redirect to auth

---

## Phase 3: Wallet Operations Testing

### Test: Wallet Address Display

1. Log in
2. Go to `/gerd-claim`
3. Check "Your Wallet Address" section

✅ **Expected**: 
- Valid Ethereum address (0x...)
- Can copy address with button
- Address is consistent

---

### Test: BNB Balance Fetching

1. Make sure you have some test BNB
2. Log in
3. Go to `/gerd-claim`
4. Check "BNB Balance" section

✅ **Expected**: 
- Shows balance > 0
- Format: "0.5000" (4 decimals)
- Updates when balance changes

❌ **If shows 0**:
- Request testnet BNB from faucet
- Check RPC URL in `.env.local`
- Verify wallet has funds

---

### Test: Token Balance Fetching

1. Ensure GERD token contract is deployed
2. Send test tokens to your address
3. Log in
4. Go to `/gerd-claim`
5. Check if balance shows in claimable amount

✅ **Expected**: Shows token balance

---

## Phase 4: Claiming Functionality Testing

### Test: Claimable Amount Fetch

**Prerequisites:**
- Smart contract deployed with test claim
- Contract configured with claimable amounts

1. Log in
2. Go to `/gerd-claim`
3. Check "Available to Claim" section

✅ **Expected**: Shows amount > 0

❌ **If shows 0**:
- Contract not deployed correctly
- User not registered for claim
- Wrong contract address in `.env.local`

---

### Test: Claim Transaction

**Prerequisites:**
- Have BNB for gas (~0.001 BNB)
- Claimable amount > 0
- Claim contract configured

1. Log in
2. Go to `/gerd-claim`
3. If claimable amount > 0, click "Claim Now"
4. Confirm in wallet (Web3Auth modal)
5. Wait for confirmation

✅ **Expected**: 
- Button shows "Processing..."
- Transaction hash displays
- Success message shows
- BSCScan link works
- Balance updates to 0

❌ **If fails**:
- Check gas (need BNB)
- Check contract deployment
- Check contract address
- Check contract state (claim active?)

---

### Test: Double Claim Prevention

1. Successfully claim tokens
2. Try to claim again immediately
3. Button should be disabled or show error

✅ **Expected**: Cannot claim twice

---

## Phase 5: UI/UX Testing

### Test: Responsive Design - Mobile

1. Open http://localhost:3000/web3-claim
2. Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
3. Test on iPhone SE, iPhone 12, Pixel 5

✅ **Expected**: 
- All elements visible
- No horizontal scroll
- Buttons are tappable size
- Text readable

---

### Test: Responsive Design - Tablet

1. Set viewport to iPad (768x1024)
2. Check layout

✅ **Expected**: Good spacing, not too zoomed

---

### Test: Landing Page Features

1. Visit http://localhost:3000/web3-claim
2. Scroll through all sections
3. Test all buttons
4. Check responsiveness

✅ **Expected**: 
- All sections load
- Animations smooth
- Buttons clickable
- Links work

---

### Test: Error Messages

1. Intentionally cause errors:
   - Remove network
   - Use invalid contract address
   - Try to claim with 0 balance

✅ **Expected**: Clear error messages shown

---

## Phase 6: PWA Testing

### Test: Service Worker Registration

1. Open DevTools (F12) → Application tab
2. Check "Service Workers"
3. Should show registered service worker

✅ **Expected**: Service worker listed and active

---

### Test: Offline Support

1. Open app in browser
2. DevTools (F12) → Network tab
3. Check "Offline" checkbox
4. Try to navigate pages

✅ **Expected**: Previously visited pages load from cache

---

### Test: Install as App (Desktop)

1. Chrome: Address bar → "Install app" icon
2. Or: Menu → "Install GERD Claim"
3. App installs to desktop

✅ **Expected**: App runs in standalone mode (no browser bars)

---

### Test: Install as App (Mobile)

**iPhone:**
1. Safari → Share → Add to Home Screen
2. App opens full-screen

**Android:**
1. Chrome menu → Install app
2. Or: Add to Home Screen
3. App opens full-screen

✅ **Expected**: App runs like native app

---

### Test: Manifest Configuration

1. DevTools (F12) → Application → Manifest
2. Check all fields populated

✅ **Expected**: 
- name: "GERD Token Claim - ..."
- display: "standalone"
- start_url: "/"
- theme_color: "#667eea"
- icons present

---

## Phase 7: Security Testing

### Test: No Private Keys Logged

1. Open DevTools → Console
2. Log in
3. Check logs
4. Search for "private" or "key"

✅ **Expected**: No private keys in console

---

### Test: Local Storage Inspection

1. DevTools → Application → Local Storage
2. Check what's stored

✅ **Expected**: 
- No private keys stored
- Only safe user info cached

---

### Test: Network Requests

1. DevTools → Network tab
2. Perform login and claim
3. Inspect requests

✅ **Expected**: 
- No private keys in request body
- No seed phrases transmitted
- Only gas estimation before confirm

---

## Phase 8: Cross-Browser Testing

Test on:
- [ ] Chrome / Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

For each:
1. Load app
2. Login
3. Claim tokens
4. Check console for errors

✅ **Expected**: All features work on all browsers

---

## Phase 9: Performance Testing

### Test: Load Time

1. DevTools → Network tab
2. Slow 4G network (DevTools → Network throttling)
3. Load app

✅ **Expected**: Loads in < 5 seconds

---

### Test: Large Transactions

1. Try to claim large amount
2. Monitor gas estimation
3. Check transaction confirmation time

✅ **Expected**: No errors, smooth UX

---

## Phase 10: Stress Testing

### Test: Multiple Logins/Logouts

```bash
# 1. Login
# 2. Logout
# 3. Login again
# 4. Repeat 5 times
```

✅ **Expected**: No memory leaks, consistent behavior

---

### Test: Network Instability

1. DevTools → Network tab
2. Simulate "Offline → Online" transitions
3. While loading data
4. While claiming

✅ **Expected**: Graceful error handling, retry options

---

## Automated Testing Commands

```bash
# Build for production
npm run build

# Run tests (if added)
npm test

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

---

## Common Issues & Solutions

### Issue: Web3Auth Modal Not Opening

**Solutions:**
1. Check Client ID in `.env.local`
2. Verify domain in Web3Auth dashboard
3. Clear browser cache
4. Check browser console for errors

### Issue: Wallet Address Not Displaying

**Solutions:**
1. Ensure user logged in successfully
2. Check RPC URL is correct
3. Verify provider is initialized
4. Check browser console

### Issue: Claim Transaction Failing

**Solutions:**
1. Ensure sufficient BNB for gas
2. Check contract address
3. Verify contract deployed correctly
4. Check if user already claimed
5. Verify claim period is active

### Issue: PWA Not Installing

**Solutions:**
1. Must use HTTPS (not localhost for production)
2. Check manifest.json exists
3. Check service worker registered
4. Clear browser cache
5. Update .env variables

---

## Testing Checklist

- [ ] Web3Auth initializes
- [ ] Google login works
- [ ] Facebook login works
- [ ] Logout works
- [ ] Wallet address displays
- [ ] BNB balance fetches
- [ ] Token balance fetches
- [ ] Claimable amount shows
- [ ] Claim transaction succeeds
- [ ] Double-claim prevented
- [ ] Mobile responsive
- [ ] PWA installs
- [ ] Service worker active
- [ ] Works offline (cached)
- [ ] No console errors
- [ ] No private keys logged
- [ ] All browsers compatible
- [ ] Fast load time
- [ ] No memory leaks
- [ ] Network errors handled

---

## Reporting Issues

When reporting issues, include:

1. **Steps to reproduce**
2. **Expected behavior**
3. **Actual behavior**
4. **Browser & OS**
5. **Console errors** (F12 → Console tab)
6. **Network issues** (F12 → Network tab)
7. **Screenshots/videos**

---

## Next Steps After Testing

1. ✅ All tests pass
2. Deploy to staging environment
3. Final security audit
4. Deploy to production
5. Monitor for issues
6. Gather user feedback
7. Iterate improvements
