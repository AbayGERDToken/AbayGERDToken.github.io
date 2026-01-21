# Web3Auth PWA - API Reference

## Context Hook: `useWeb3Auth()`

Access Web3Auth state and functions from any component.

```tsx
import { useWeb3Auth } from "@/lib/Web3AuthContext";

function MyComponent() {
  const {
    provider,      // IProvider - ethers provider
    isLogged,      // boolean - user logged in
    userInfo,      // object - user data from OAuth
    address,       // string - wallet address
    loading,       // boolean - initialization state
    error,         // string | null - error message
    login,         // function - login with provider
    logout,        // function - logout
    getBalance,    // function - get token balance
    claimGERD,     // function - claim tokens
  } = useWeb3Auth();

  return (
    <>
      {!isLogged && <button onClick={() => login('google')}>Login</button>}
      {isLogged && <p>Address: {address}</p>}
    </>
  );
}
```

### Methods

#### `login(provider: 'google' | 'facebook')`

Login with specified provider.

```tsx
const { login } = useWeb3Auth();

try {
  await login('google');
  // User is now logged in
  // Wallet created automatically
} catch (error) {
  console.error('Login failed:', error);
}
```

#### `logout()`

Logout current user.

```tsx
const { logout } = useWeb3Auth();

try {
  await logout();
  // User logged out
  // Context state reset
} catch (error) {
  console.error('Logout failed:', error);
}
```

#### `getBalance(tokenAddress: string): Promise<string>`

Get user's token balance.

```tsx
const { getBalance } = useWeb3Auth();

try {
  const balance = await getBalance('0xTokenAddress');
  console.log('Balance:', balance); // "1234.56"
} catch (error) {
  console.error('Failed to get balance:', error);
}
```

#### `claimGERD(claimContractAddress: string, amount: string): Promise<string>`

Claim tokens.

```tsx
const { claimGERD } = useWeb3Auth();

try {
  const txHash = await claimGERD(
    process.env.NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS,
    '1000'  // amount in GERD
  );
  console.log('Transaction:', txHash);
  // Wait for confirmation
} catch (error) {
  console.error('Claim failed:', error);
}
```

---

## WalletService Class

Low-level wallet operations.

```tsx
import { WalletService } from "@/lib/WalletService";
import { useWeb3Auth } from "@/lib/Web3AuthContext";

function MyComponent() {
  const { provider } = useWeb3Auth();

  const handleOperation = async () => {
    if (!provider) return;
    
    const wallet = new WalletService(provider);
    
    // Use wallet methods
  };
}
```

### Methods

#### `getWalletInfo(): Promise<WalletInfo>`

Get wallet address and BNB balance.

```tsx
const wallet = new WalletService(provider);
const info = await wallet.getWalletInfo();

console.log(info.address);         // "0x..."
console.log(info.displayBalance);  // "1.23"
console.log(info.balance);         // "1230000000000000000"
```

#### `getTokenInfo(tokenAddress: string): Promise<TokenInfo>`

Get token balance and metadata.

```tsx
const info = await wallet.getTokenInfo('0xTokenAddress');

console.log(info.symbol);           // "GERD"
console.log(info.decimals);         // 18
console.log(info.displayBalance);   // "5000.50"
```

#### `getClaimableAmount(claimContract: string, userAddress: string): Promise<string>`

Get claimable amount for user.

```tsx
const amount = await wallet.getClaimableAmount(
  '0xClaimContract',
  '0xUserAddress'
);

console.log(amount); // "1000.00" (formatted)
```

#### `checkIfClaimed(claimContract: string, userAddress: string): Promise<boolean>`

Check if user already claimed.

```tsx
const claimed = await wallet.checkIfClaimed(
  '0xClaimContract',
  '0xUserAddress'
);

if (claimed) {
  console.log('User already claimed');
}
```

#### `claimTokens(claimContract: string, amount: string): Promise<string>`

Execute claim transaction.

```tsx
const txHash = await wallet.claimTokens(
  '0xClaimContract',
  '1000'  // amount in GERD
);

console.log('Transaction hash:', txHash);
```

#### `waitForTransaction(txHash: string): Promise<any>`

Wait for transaction confirmation.

```tsx
const receipt = await wallet.waitForTransaction(txHash);

if (receipt.status === 1) {
  console.log('Transaction successful');
}
```

#### `getExplorerLink(txHash: string): string`

Get BSCScan link for transaction.

```tsx
const link = wallet.getExplorerLink(txHash);
// "https://bscscan.com/tx/0x..."

window.open(link);
```

---

## Utility Functions (`lib/constants.ts`)

### Address & Amount Formatting

```tsx
import { formatAddress, formatAmount, toWei, fromWei } from "@/lib/constants";

// Format address for display
formatAddress('0x123456789abcdef...', 4);  // "0x12...cdef"

// Format amount with decimals
formatAmount('1234.56789', 2);  // "1234.57"
formatAmount('1000', 2);        // "1000.00"

// Convert to wei
toWei('1.5');  // "1500000000000000000"

// Convert from wei
fromWei('1500000000000000000');  // "1.5"
```

### Validation

```tsx
import { isValidAddress } from "@/lib/constants";

isValidAddress('0x1234...abcd');  // true
isValidAddress('invalid');        // false
```

### Explorer Links

```tsx
import { getExplorerUrl } from "@/lib/constants";

getExplorerUrl('address', '0x123...');  
// "https://bscscan.com/address/0x123..."

getExplorerUrl('tx', '0xabc...');       
// "https://bscscan.com/tx/0xabc..."

getExplorerUrl('token', '0xgerd...');   
// "https://bscscan.com/token/0xgerd..."
```

### Local Storage

```tsx
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage
} from "@/lib/constants";

// Safe operations (don't error if not in browser)
setLocalStorage('key', 'value');
const value = getLocalStorage('key');
removeLocalStorage('key');
```

### Device Detection

```tsx
import { isMobileDevice, isBrowser } from "@/lib/constants";

if (isMobileDevice()) {
  console.log('Running on mobile');
}

if (isBrowser()) {
  console.log('Can use browser APIs');
}
```

---

## Constants & Configuration

```tsx
import {
  BSC_CONFIG,
  CONTRACT_ADDRESSES,
  WEB3AUTH_CONFIG,
  APP_URLS,
  MESSAGES,
  TOKEN_CONFIG,
} from "@/lib/constants";

// Network config
console.log(BSC_CONFIG.name);      // "Binance Smart Chain"
console.log(BSC_CONFIG.rpcUrl);    // RPC endpoint

// Contracts
console.log(CONTRACT_ADDRESSES.gerdToken);
console.log(CONTRACT_ADDRESSES.claimContract);

// App routes
console.log(APP_URLS.auth);        // "/auth"
console.log(APP_URLS.claim);       // "/gerd-claim"

// User-facing messages
console.log(MESSAGES.error.loginFailed);
console.log(MESSAGES.success.claimSuccess);

// Token info
console.log(TOKEN_CONFIG.symbol);  // "GERD"
console.log(TOKEN_CONFIG.decimals); // 18
```

---

## Component Examples

### Simple Claim Button

```tsx
"use client";

import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useState } from "react";

export function ClaimButton() {
  const { claimGERD, address } = useWeb3Auth();
  const [loading, setLoading] = useState(false);

  const handleClaim = async () => {
    if (!address) return;

    setLoading(true);
    try {
      const txHash = await claimGERD(
        process.env.NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS!,
        '1000'
      );
      alert(`Claimed! TX: ${txHash}`);
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClaim} disabled={loading || !address}>
      {loading ? 'Claiming...' : 'Claim Tokens'}
    </button>
  );
}
```

### Balance Display

```tsx
"use client";

import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useEffect, useState } from "react";
import { WalletService } from "@/lib/WalletService";

export function BalanceDisplay() {
  const { provider, address } = useWeb3Auth();
  const [balance, setBalance] = useState('0');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!provider || !address) return;

    const fetchBalance = async () => {
      try {
        const wallet = new WalletService(provider);
        const info = await wallet.getTokenInfo(
          process.env.NEXT_PUBLIC_GERD_TOKEN_ADDRESS!
        );
        setBalance(info.displayBalance);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [provider, address]);

  if (loading) return <div>Loading...</div>;
  return <div>Balance: {balance} GERD</div>;
}
```

### Login Component

```tsx
"use client";

import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const { login, loading, error } = useWeb3Auth();
  const router = useRouter();

  const handleLogin = async (provider: 'google' | 'facebook') => {
    try {
      await login(provider);
      router.push('/gerd-claim');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      <button onClick={() => handleLogin('google')} disabled={loading}>
        {loading ? 'Logging in...' : 'Login with Google'}
      </button>
      
      <button onClick={() => handleLogin('facebook')} disabled={loading}>
        {loading ? 'Logging in...' : 'Login with Facebook'}
      </button>
    </div>
  );
}
```

---

## Environment Variables Reference

```env
# Web3Auth Configuration
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=your_client_id_here

# Smart Contracts
NEXT_PUBLIC_GERD_TOKEN_ADDRESS=0x...
NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS=0x...

# Blockchain
NEXT_PUBLIC_BSC_RPC_URL=https://bsc-dataseed1.binance.org:443

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Error Handling

All async functions throw errors that should be caught:

```tsx
try {
  await login('google');
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);  // "Login failed"
  }
}
```

Common errors:
- `"Login failed"` - OAuth failed or user cancelled
- `"Failed to initialize Web3Auth"` - Web3Auth SDK error
- `"User not logged in"` - No valid session
- `"Failed to claim tokens"` - Transaction failed

---

## Testing

All functions are safe to call during development and testing:

```tsx
// Safe to call multiple times
await wallet.getWalletInfo();
await wallet.getTokenInfo(tokenAddr);

// Idempotent operations
const balance = await getBalance(tokenAddr);

// Error handling built-in
try { await claimGERD(...); } catch(e) { /* handle */ }
```

---

## Best Practices

1. **Always check isLogged before using address/provider**
2. **Wrap async operations in try-catch**
3. **Use loading states for UX feedback**
4. **Cache addresses to avoid frequent lookups**
5. **Validate contract addresses before use**
6. **Monitor transaction status**
7. **Handle network errors gracefully**

---

## Version Info

- **Web3Auth**: @web3auth/modal latest
- **ethers.js**: 6.x
- **Next.js**: 14.x
- **React**: 18.x
