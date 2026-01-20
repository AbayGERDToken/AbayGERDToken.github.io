/**
 * Constants and utilities for the GERD Token Claim PWA
 */

// Network Configuration
export const BSC_CONFIG = {
  chainId: 56,
  chainIdHex: "0x38",
  name: "Binance Smart Chain",
  rpcUrl: process.env.NEXT_PUBLIC_BSC_RPC_URL || "https://bsc-dataseed1.binance.org:443",
  explorerUrl: "https://bscscan.com",
  nativeCurrency: {
    name: "Binance Coin",
    symbol: "BNB",
    decimals: 18,
  },
};

// Contract Addresses
export const CONTRACT_ADDRESSES = {
  gerdToken: process.env.NEXT_PUBLIC_GERD_TOKEN_ADDRESS || "",
  claimContract: process.env.NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS || "",
};

// Web3Auth Configuration
export const WEB3AUTH_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
  network: "sapphire_mainnet" as const,
  chainNamespace: "eip155" as const,
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x38",
    rpcTarget: BSC_CONFIG.rpcUrl,
    displayName: BSC_CONFIG.name,
    blockExplorer: BSC_CONFIG.explorerUrl,
    ticker: "BNB",
    tickerName: "BNB",
  },
};

// Application URLs
export const APP_URLS = {
  home: "/",
  auth: "/auth",
  claim: "/gerd-claim",
  dashboard: "/dashboard-vesting",
};

// UI Configuration
export const UI_CONFIG = {
  appName: "GERD Token Claim",
  theme: "dark",
  loginGridCol: 2,
  primaryButton: "socialLogin",
  logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
  logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
};

// Messages
export const MESSAGES = {
  error: {
    web3authFailed: "Failed to initialize Web3Auth. Please refresh the page.",
    loginFailed: "Login failed. Please try again.",
    logoutFailed: "Logout failed. Please refresh the page.",
    noWallet: "User not logged in.",
    claimFailed: "Failed to claim tokens. Please try again.",
    invalidAddress: "Invalid wallet address.",
    networkError: "Network error. Please check your connection.",
  },
  success: {
    claimSuccess: "Tokens claimed successfully!",
    walletCreated: "Your wallet has been created securely.",
  },
  info: {
    nonCustodial: "Your wallet is non-custodial. Only you have access to your keys.",
    noSeedPhrase: "No seed phrases to manage or write down.",
    secureBrowser: "Your keys are stored securely in your browser.",
  },
};

// Token Configuration
export const TOKEN_CONFIG = {
  symbol: "GERD",
  decimals: 18,
  displayDecimals: 2,
};

// Gas Configuration (for advanced features)
export const GAS_CONFIG = {
  claimGasLimit: "200000",
  approveGasLimit: "150000",
};

/**
 * Format address to show first and last characters
 * @param address Full wallet address
 * @param chars Number of characters to show (default 4)
 */
export function formatAddress(address: string, chars = 4): string {
  if (!address || address.length < chars * 2) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

/**
 * Format token amount with decimals
 * @param amount Amount to format
 * @param decimals Number of decimal places (default 2)
 */
export function formatAmount(amount: string | number, decimals = 2): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return num.toFixed(decimals);
}

/**
 * Convert amount to wei (multiply by 10^18)
 */
export function toWei(amount: string | number): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return (num * Math.pow(10, 18)).toString();
}

/**
 * Convert wei to amount (divide by 10^18)
 */
export function fromWei(amount: string | number): string {
  const num = typeof amount === "string" ? BigInt(amount) : BigInt(amount);
  return (num / BigInt(Math.pow(10, 18))).toString();
}

/**
 * Validate Ethereum address
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Get explorer URL for address or transaction
 */
export function getExplorerUrl(
  type: "address" | "tx" | "token",
  value: string
): string {
  const base = BSC_CONFIG.explorerUrl;
  switch (type) {
    case "address":
      return `${base}/address/${value}`;
    case "tx":
      return `${base}/tx/${value}`;
    case "token":
      return `${base}/token/${value}`;
    default:
      return base;
  }
}

/**
 * Log error with context (for debugging)
 */
export function logError(context: string, error: unknown): void {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`[${context}]`, errorMessage);
  
  // In production, you might send this to an error tracking service
  if (process.env.NODE_ENV === "production") {
    // Example: sentry.captureException(error, { tags: { context } });
  }
}

/**
 * Check if code is running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Check if device is mobile
 */
export function isMobileDevice(): boolean {
  if (!isBrowser()) return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Delay execution (useful for testing)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Safe JSON parse with fallback
 */
export function safeParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

/**
 * Get local storage item safely
 */
export function getLocalStorage(key: string): string | null {
  if (!isBrowser()) return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Set local storage item safely
 */
export function setLocalStorage(key: string, value: string): boolean {
  if (!isBrowser()) return false;
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Remove local storage item safely
 */
export function removeLocalStorage(key: string): boolean {
  if (!isBrowser()) return false;
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

export default {
  BSC_CONFIG,
  CONTRACT_ADDRESSES,
  WEB3AUTH_CONFIG,
  APP_URLS,
  UI_CONFIG,
  MESSAGES,
  TOKEN_CONFIG,
  GAS_CONFIG,
  formatAddress,
  formatAmount,
  toWei,
  fromWei,
  isValidAddress,
  getExplorerUrl,
  logError,
  isBrowser,
  isMobileDevice,
  delay,
  safeParse,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
