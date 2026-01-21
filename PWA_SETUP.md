# GERD Token Claim PWA - Web3Auth Non-Custodial Wallet

A Progressive Web App (PWA) for claiming GERD tokens with automatic non-custodial wallet creation using Web3Auth. Designed specifically for non-technical Ethiopian users - no seed phrases, no MetaMask, just simple social login.

## Features

✅ **Social Login** - Google and Facebook authentication via Web3Auth  
✅ **Non-Custodial Wallet** - Automatic wallet creation, keys never leave the browser  
✅ **No MetaMask Required** - Browser-based experience, works everywhere  
✅ **No Seed Phrases** - Simple and secure for non-technical users  
✅ **Progressive Web App** - Works offline, installable on mobile and desktop  
✅ **BSC (Binance Smart Chain)** - Low gas fees and fast transactions  
✅ **Responsive Design** - Works great on phones, tablets, and desktops  
✅ **Ethereum Integration** - Uses ethers.js for blockchain interactions  

## Architecture

```
┌─────────────────────────────────────────┐
│   User Browser (Web3Auth Modal)         │
├─────────────────────────────────────────┤
│   Web3Auth Context (React Provider)     │
├─────────────────────────────────────────┤
│   Wallet Service (ethers.js)            │
├─────────────────────────────────────────┤
│   BSC Network (Binance Smart Chain)     │
└─────────────────────────────────────────┘
```

### Tech Stack

- **Frontend**: Next.js 14 (React) with TypeScript
- **Authentication**: Web3Auth (Non-custodial)
- **Blockchain**: ethers.js + Binance Smart Chain
- **PWA**: Service Workers, Web App Manifest
- **Styling**: CSS Modules
- **State Management**: React Context API

## Setup Instructions

### 1. Prerequisites

- Node.js 18+
- npm or yarn
- Web3Auth account (free tier available)

### 2. Create Web3Auth Application

1. Visit [Web3Auth Dashboard](https://dashboard.web3auth.io)
2. Sign up or log in
3. Create a new project
4. Add a new application
5. Configure:
   - **Application Type**: Single Page Application
   - **Framework**: React
   - **Redirect URL**: `http://localhost:3000` (for dev), your domain (for production)
   - **Allowed Origins**: `http://localhost:3000` (for dev)

6. Copy your **Client ID**

### 3. Environment Configuration

Create a `.env.local` file:

```env
# Web3Auth
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=YOUR_WEB3AUTH_CLIENT_ID

# Blockchain
NEXT_PUBLIC_BSC_RPC_URL=https://bsc-dataseed1.binance.org:443

# Smart Contracts
NEXT_PUBLIC_GERD_TOKEN_ADDRESS=0xYourGERDTokenAddress
NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS=0xYourClaimContractAddress

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Install Dependencies

```bash
npm install
```

Already included dependencies:
- `@web3auth/modal` - Web3Auth modal component
- `@web3auth/base` - Web3Auth base types
- `ethers` - Ethereum library

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 6. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── auth/                      # Login page with social options
│   ├── gerd-claim/               # Token claim page
│   ├── layout.tsx                # Root layout with Web3Auth provider
│   └── page.tsx                  # Home page
├── lib/
│   ├── web3auth.ts              # Web3Auth initialization & utilities
│   ├── Web3AuthContext.tsx       # React context for Web3Auth state
│   ├── WalletService.ts          # Wallet & blockchain operations
│   └── firebase.ts               # Firebase config
├── components/
│   ├── ServiceWorkerRegistration.tsx  # PWA service worker setup
│   └── ... (other components)
├── public/
│   ├── manifest.json             # PWA manifest
│   ├── sw.js                     # Service worker
│   ├── offline.html              # Offline fallback
│   └── ... (icons & assets)
├── styles/
│   ├── globals.css
│   └── ... (global styles)
├── .env.local                    # Environment variables
└── next.config.js               # Next.js config
```

## User Flow

### 1. Authentication Flow

```
User visits app
    ↓
Not logged in → Redirect to /auth
    ↓
Click "Login with Google" or "Login with Facebook"
    ↓
Web3Auth modal opens
    ↓
User completes social login
    ↓
Non-custodial wallet created automatically
    ↓
Keys stored securely in user's browser
    ↓
Redirect to /gerd-claim
```

### 2. Token Claim Flow

```
User on /gerd-claim page
    ↓
Fetch claimable GERD amount
    ↓
Check if already claimed
    ↓
Display available balance
    ↓
User clicks "Claim Now"
    ↓
Transaction sent to BSC
    ↓
Wait for confirmation
    ↓
Show success message with BSCScan link
```

## Key Components

### Web3AuthContext (`lib/Web3AuthContext.tsx`)

Provides global state for:
- User authentication status
- Wallet address
- Provider instance
- Error handling
- Loading states

Usage:
```tsx
const { isLogged, address, login, logout, claimGERD } = useWeb3Auth();
```

### WalletService (`lib/WalletService.ts`)

Handles all blockchain operations:
- Get wallet info (address, BNB balance)
- Get token balance
- Get claimable amount
- Check claim status
- Execute claim transaction
- Get transaction receipt

### Authentication Page (`app/auth/page.tsx`)

- Social login buttons (Google, Facebook)
- Wallet creation explanation
- User-friendly error messages
- Security info display

### Claim Page (`app/gerd-claim/page.tsx`)

- Display wallet address and BNB balance
- Show available GERD to claim
- Claim button with loading state
- Transaction confirmation
- BSCScan explorer link
- Info cards about the service

## Smart Contract Integration

### Expected Claim Contract ABI

The claim contract should implement:

```solidity
function claim(uint256 amount) public returns (bool)
function getClaimableAmount(address user) public view returns (uint256)
function isClaimed(address user) public view returns (bool)
function claimStartTime() public view returns (uint256)
function claimEndTime() public view returns (uint256)
```

### GERD Token (ERC20)

Standard ERC20 implementation with:
- `balanceOf(address owner)`
- `decimals()` → returns 18
- `symbol()` → returns "GERD"

## PWA Features

### Offline Support
- Service worker caches key pages
- Offline fallback page
- Graceful degradation

### Installation
Users can:
- Install as app on iOS (Add to Home Screen)
- Install as app on Android (Install App)
- Install on desktop (Chrome, Edge, Firefox)

### Manifest
- App name: "GERD Token Claim"
- Theme color: #667eea
- Display: standalone (app-like experience)
- Icons for multiple sizes

## Security Considerations

✓ **Client-Side Only** - No private keys sent to servers  
✓ **Web3Auth Secured** - Industry-standard OAuth providers  
✓ **No Backend Required** - Frontend directly interacts with blockchain  
✓ **HTTPS Only** - Always use HTTPS in production  
✓ **CSP Headers** - Configure Content Security Policy  

## Configuration for Production

### 1. Update Web3Auth Settings

In Web3Auth Dashboard:
- Add production domain to **Allowed Origins**
- Update **Redirect URL** to your domain

### 2. Update Environment Variables

```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=prod_client_id
```

### 3. Optimize Next.js Build

```bash
npm run build
```

### 4. Deploy

Recommended platforms:
- Vercel (easiest for Next.js)
- Netlify
- GitHub Pages (with build)
- AWS S3 + CloudFront
- Your own server

## Troubleshooting

### Web3Auth Not Initializing

Check:
- Client ID is correct in `.env.local`
- Domain is added to Web3Auth allowed origins
- Browser console for errors

### Transaction Fails

Check:
- User has BNB for gas fees
- Claim contract address is correct
- User hasn't already claimed
- Contract is active (within claim period)

### Wallet Address Not Showing

Check:
- Web3Auth initialized
- User logged in successfully
- Provider is available
- Check browser console for errors

### Service Worker Not Working

Check:
- HTTPS is enabled (required for SW)
- Service worker file exists at `/public/sw.js`
- Clear browser cache and reinstall

## Development Tips

### Testing Social Login Locally

1. Use `http://localhost:3000` (Web3Auth supports localhost)
2. Make sure redirect URL matches exactly

### Debug Blockchain Calls

```tsx
const { provider } = useWeb3Auth();
const walletService = new WalletService(provider);

// Add logs
console.log("Claiming...");
const hash = await walletService.claimTokens(...);
console.log("Transaction hash:", hash);
```

### Monitor Transactions

Use BSCScan: `https://bscscan.com/tx/{txHash}`

## License

MIT License

## Support

For issues:
1. Check browser console for errors
2. Verify Web3Auth configuration
3. Check smart contract deployment
4. Review environment variables

## Roadmap

- [ ] Magic.link as fallback auth option
- [ ] Wallet to wallet transfer functionality
- [ ] Multi-language support (Amharic, Oromo)
- [ ] Transaction history
- [ ] Hardware wallet support
- [ ] Batch claim for multiple users
- [ ] Analytics dashboard
- [ ] Email notifications

## Contributors

Built with ❤️ for the Abay community
