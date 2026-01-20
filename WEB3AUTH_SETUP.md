# Web3Auth Setup Guide

## Configured Projects

### Available Web3Auth Projects

| Project Name | Platform | Client ID | Environment | Status |
|-------------|----------|-----------|-------------|--------|
| Web3 GERD Token Claim | Web Application, React Native | `BNcEwCq57jR.....Zu7vhP3nGM` | Sapphire Devnet | Active |
| GERDInternalWallet | Web Application | `BOzh4dnIQ7M.....c5ZG_32E78` | Sapphire Devnet | Active |

## Error: "web3auth.initModal is not a function"

This error occurs when the **Web3Auth Client ID is not configured**. The application requires a valid Web3Auth Client ID to initialize properly.

## Quick Setup (5 minutes)

### Step 1: Create a Web3Auth Account
1. Go to [https://dashboard.web3auth.io](https://dashboard.web3auth.io)
2. Sign up with your email or GitHub account
3. Verify your email

### Step 2: Create a New Project
1. Click "Create Project" in the dashboard
2. Project Name: `GERD Token Claim` (or your preferred name)
3. Select your environment type (choose "Web" for web applications)
4. Click "Create"

### Step 3: Configure Your Project
After creating the project, you'll see the **Client ID** and **Client Secret**. 
- Copy your **Client ID** (you'll need this)

### Step 4: Add Authorized URLs
In your project settings, add the following URLs to "Allowed URLs":
- `http://localhost:3000`
- `http://localhost:3001`
- `http://127.0.0.1:3000`
- `http://127.0.0.1:3001`

(Add your production domain here once deployed)

### Step 5: Update Environment File
Create or edit `.env.local` in the project root:

**Option 1: Web3 GERD Token Claim (Recommended for main application)**
```
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=BNcEwCq57jR5I5e5DPH4MXK0QXUIcMfFDjOC7-z3CH7hdBs3xIszdCbbfXgMdhzAOvJaJgb9zZQRFZu7vhP3nGM
NEXT_PUBLIC_GERD_TOKEN_ADDRESS=0xYourGERDTokenAddress
NEXT_PUBLIC_BSC_RPC_URL=https://bsc-dataseed1.binance.org:443
NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS=0xYourClaimContractAddress
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

**Option 2: GERDInternalWallet (For internal wallet application)**
```
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=BOzh4dnIQ7M.....c5ZG_32E78
NEXT_PUBLIC_GERD_TOKEN_ADDRESS=0xYourGERDTokenAddress
NEXT_PUBLIC_BSC_RPC_URL=https://bsc-dataseed1.binance.org:443
NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS=0xYourClaimContractAddress
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

> **Note**: An `.env.local.example` file has been created in the project root with both configurations. Copy it to `.env.local` and choose the appropriate client ID.

### Step 6: Restart the Development Server
```bash
# Kill the current server (Ctrl+C)
# Restart with:
npm run dev
```

### Step 7: Test
Visit `http://localhost:3001/auth` and you should see the login buttons instead of the error.

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_WEB3AUTH_CLIENT_ID` | Web3Auth Client ID (REQUIRED) | `BNxxx...` |
| `NEXT_PUBLIC_APP_URL` | Your app URL | `http://localhost:3001` |
| `NEXT_PUBLIC_BSC_RPC_URL` | Binance Smart Chain RPC | `https://bsc-dataseed1.binance.org:443` |
| `NEXT_PUBLIC_GERD_TOKEN_ADDRESS` | GERD token contract address | `0x1234...` |
| `NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS` | Token claim contract address | `0x5678...` |

## Testing After Setup

1. **Page loads without errors** → Client ID is correct ✅
2. **See "Login with Google" button** → Web3Auth initialized ✅
3. **Click button opens Web3Auth modal** → Configuration working ✅

## Troubleshooting

### Error: "Module not found"
- **Cause**: Missing dependencies
- **Fix**: Run `npm install`

### Error: "initModal is not a function"
- **Cause**: Web3Auth SDK issue
- **Fix**: Clear browser cache and restart dev server

### Error: "Unauthorized URL"
- **Cause**: Domain not whitelisted in Web3Auth
- **Fix**: Add your domain to "Allowed URLs" in Web3Auth dashboard

### Login redirects to error page
- **Cause**: Invalid RPC URL or network configuration
- **Fix**: Verify `NEXT_PUBLIC_BSC_RPC_URL` is correct

## Production Deployment

Before deploying to production:

1. ✅ Update `.env.production` with production URLs
2. ✅ Add your production domain to Web3Auth "Allowed URLs"
3. ✅ Test on staging environment first
4. ✅ Verify all contract addresses are correct
5. ✅ Enable HTTPS (required for Web3Auth)

## Next Steps

Once Web3Auth is configured:

1. **Configure smart contracts** in `.env.local`:
   - `NEXT_PUBLIC_GERD_TOKEN_ADDRESS` → Your GERD token contract
   - `NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS` → Your token claim contract

2. **Test the full flow**:
   - Login with Google/Facebook
   - Check wallet balance
   - Test claiming tokens

3. **Read other setup docs**:
   - [PWA_SETUP.md](PWA_SETUP.md) - Progressive Web App configuration
   - [API_REFERENCE.md](API_REFERENCE.md) - Developer API reference
   - [TESTING_GUIDE.md](TESTING_GUIDE.md) - Testing procedures

## Support

- **Web3Auth Documentation**: https://web3auth.io/docs
- **Dashboard**: https://dashboard.web3auth.io
- **Support Email**: support@web3auth.io

---

**Status**: 🔴 Not configured → ✅ Follow setup above → 🟢 Ready to use
