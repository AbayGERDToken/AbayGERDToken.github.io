'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { CHAIN_NAMESPACES, IProvider } from '@web3auth/base';

// Lazy-load Web3Auth to avoid ethereum property errors during top-level import
// The library tries to set window.ethereum which can conflict with MetaMask
let Web3Auth: any = null;
const initWeb3Auth = async () => {
  if (Web3Auth) return Web3Auth;
  try {
    // Suppress the specific ethereum assignment error thrown by some wallet extensions.
    const suppressEthereumError = (event: ErrorEvent) => {
      if (event?.message?.includes('Cannot set property ethereum')) {
        console.warn('[Web3Auth] Suppressed ethereum property assignment error from extension.');
        event.preventDefault();
        return true;
      }
      return false;
    };
    window.addEventListener('error', suppressEthereumError);

    // Use dynamic import to avoid immediate execution and ethereum property conflicts
    return new Promise(async (resolve) => {
      setTimeout(async () => {
        try {
          // Store existing window.ethereum to restore later if needed
          const existingEthereum = (window as any).ethereum;
          const hasExistingProvider = !!existingEthereum;
          
          if (hasExistingProvider) {
            console.log('[Web3Auth] Detected existing ethereum provider, working around property conflict...');
          }
          
          // Try loading the library with error suppression for ethereum property
          const mod = await import('@web3auth/modal');
          Web3Auth = mod.Web3Auth;
          
          // Restore original ethereum provider if it was overwritten
          if (hasExistingProvider && (window as any).ethereum !== existingEthereum) {
            console.log('[Web3Auth] Restoring original ethereum provider');
            Object.defineProperty(window, 'ethereum', {
              value: existingEthereum,
              writable: false,
              configurable: true
            });
          }
          
          if (!Web3Auth) {
            console.error('[Web3Auth] Module loaded but Web3Auth is undefined');
            resolve(null);
            return;
          }
          console.log('[Web3Auth] Library loaded successfully');
          resolve(Web3Auth);
        } catch (err) {
          console.error('[Web3Auth] Failed to load library:', err instanceof Error ? err.message : err);
          // Check if it's the ethereum property error
          if (err instanceof Error && err.message.includes('ethereum')) {
            console.log('[Web3Auth] Ethereum property conflict detected, continuing anyway...');
            // Try to get Web3Auth from the module despite the error
            try {
              const mod = await import('@web3auth/modal');
              Web3Auth = mod.Web3Auth;
              if (Web3Auth) {
                console.log('[Web3Auth] Successfully recovered from ethereum property error');
                resolve(Web3Auth);
                return;
              }
            } catch (retryErr) {
              console.error('[Web3Auth] Retry failed:', retryErr);
            }
          }
          resolve(null);
        }
        // Remove the temporary error suppression once the library load attempt finishes.
        window.removeEventListener('error', suppressEthereumError);
      }, 100); // Small delay to let other scripts settle
    });
  } catch (err) {
    console.error('[Web3Auth] Failed to load Web3Auth module:', err instanceof Error ? err.message : err);
    return null;
  }
};

interface Web3AuthContextType {
  web3auth: any | null;
  provider: IProvider | null;
  isLoading: boolean;
  isLogged: boolean;
  address: string | null;
  error: string | null;
  login: (provider: 'google' | 'facebook') => Promise<void>;
  logout: () => Promise<void>;
  getUserBalance: (tokenAddress: string) => Promise<string | null>;
}

const Web3AuthContext = createContext<Web3AuthContextType | undefined>(undefined);

export function Web3AuthProvider({ children }: { children: ReactNode }) {
  const [web3auth, setWeb3auth] = useState<any | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        // Check if Web3Auth is configured before attempting to load
        const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;
        console.log('[Web3Auth] Initializing... clientId present:', !!clientId);
        if (clientId) {
          console.log('[Web3Auth] Client ID length:', clientId.length);
          console.log('[Web3Auth] Client ID first 20 chars:', clientId.substring(0, 20));
        } else {
          console.log('[Web3Auth] CLIENT ID IS UNDEFINED OR EMPTY');
          setError('Web3Auth is not configured. Missing NEXT_PUBLIC_WEB3AUTH_CLIENT_ID environment variable.');
          setIsLoading(false);
          return;
        }

        // Load Web3Auth asynchronously to avoid ethereum property conflicts
        console.log('[Web3Auth] Loading Web3Auth library...');
        const Web3AuthClass = await initWeb3Auth();
        
        if (!Web3AuthClass) {
          const msg = 'Web3Auth library failed to load. The @web3auth/modal package may not be available or was blocked by a browser extension.';
          console.error('[Web3Auth] Library load failed');
          setError(msg);
          setIsLoading(false);
          return;
        }
        
        console.log('[Web3Auth] Library loaded, creating instance with clientId:', clientId.substring(0, 10) + '...');
        
        try {
          const web3authInstance = new Web3AuthClass({
            clientId,
            web3AuthNetwork: 'sapphire_mainnet',
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155,
              chainId: '0x38',
              rpcTarget: process.env.NEXT_PUBLIC_BSC_RPC_URL || 'https://bsc-dataseed1.binance.org:443',
              displayName: 'Binance Smart Chain',
              blockExplorer: 'https://bscscan.com',
              ticker: 'BNB',
              tickerName: 'Binance Coin',
            } as any,
          } as any);

          console.log('[Web3Auth] Instance created, calling init()...');
          await web3authInstance.init();
          console.log('[Web3Auth] Init complete, checking status...');
          
          setWeb3auth(web3authInstance);

          if (web3authInstance.status === 'connected') {
            console.log('[Web3Auth] Already connected, fetching account...');
            setProvider(web3authInstance.provider);
            const userAccount = await getUserAccount(web3authInstance.provider);
            setAddress(userAccount);
            setIsLogged(true);
          } else {
            console.log('[Web3Auth] Ready for login, status:', web3authInstance.status);
          }
        } catch (instanceErr) {
          const detail = instanceErr instanceof Error ? instanceErr.message : String(instanceErr);
          console.error('[Web3Auth] Failed to create/initialize instance:', detail);
          const msg = `Web3Auth initialization failed: ${detail}`;
          setError(msg);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        // Log but still set error for display purposes
        const errorMsg = err instanceof Error ? err.message : 'Failed to initialize Web3Auth';
        console.error('[Web3Auth] Init error:', err);
        console.error('[Web3Auth] Error message:', errorMsg);
        console.error('[Web3Auth] Stack:', err instanceof Error ? err.stack : 'No stack trace');
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  const getUserAccount = async (prov: IProvider | null): Promise<string | null> => {
    if (!prov) return null;
    try {
      const accounts = await prov.request({
        method: 'eth_accounts',
      });
      return Array.isArray(accounts) && accounts.length > 0 ? accounts[0] : null;
    } catch (err) {
      console.error('Error getting account:', err);
      return null;
    }
  };

  const login = async (provider: 'google' | 'facebook') => {
    try {
      setError(null);
      if (!web3auth) throw new Error('Web3Auth not initialized');

      console.log('[Web3Auth] Logging in with provider:', provider);
      // Web3Auth Modal handles the provider selection through its UI
      const result = await web3auth.connect();
      
      if (result) {
        console.log('[Web3Auth] Login successful, fetching account...');
        setProvider(result);
        const userAccount = await getUserAccount(result);
        setAddress(userAccount);
        setIsLogged(true);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      console.error('[Web3Auth] Login error:', err);
      setError(message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      if (!web3auth) throw new Error('Web3Auth not initialized');
      await web3auth.logout();
      setProvider(null);
      setAddress(null);
      setIsLogged(false);
    } catch (err) {
      console.error('Logout error:', err);
      throw err;
    }
  };

  const getUserBalance = async (tokenAddress: string): Promise<string | null> => {
    try {
      if (!provider || !address) return null;

      const Web3 = (await import('web3')).default;
      const web3 = new Web3(process.env.NEXT_PUBLIC_BSC_RPC_URL || '');

      const tokenABI = [
        {
          constant: true,
          inputs: [{ name: 'account', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: '', type: 'uint256' }],
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ name: '', type: 'uint8' }],
          type: 'function',
        },
      ];

      const contract = new web3.eth.Contract(tokenABI as any, tokenAddress);
      const decimals = await contract.methods.decimals().call();
      const balance = await contract.methods.balanceOf(address).call();
      const formatted = (Number(balance) / 10 ** Number(decimals)).toFixed(2);
      return formatted;
    } catch (err) {
      console.error('Error fetching balance:', err);
      return null;
    }
  };

  return (
    <Web3AuthContext.Provider
      value={{
        web3auth,
        provider,
        isLoading,
        isLogged,
        address,
        error,
        login,
        logout,
        getUserBalance,
      }}
    >
      {children}
    </Web3AuthContext.Provider>
  );
}

export function useWeb3Auth() {
  const context = useContext(Web3AuthContext);
  if (context === undefined) {
    throw new Error('useWeb3Auth must be used within Web3AuthProvider');
  }
  return context;
}
