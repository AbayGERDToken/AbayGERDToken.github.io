'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, IProvider } from '@web3auth/base';

interface Web3AuthContextType {
  web3auth: Web3Auth | null;
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
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;

        if (!clientId) {
          throw new Error('Missing Web3Auth Client ID');
        }

        const web3authInstance = new Web3Auth({
          clientId,
          web3AuthNetwork: 'sapphire_devnet',
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

        await web3authInstance.init();
        setWeb3auth(web3authInstance);

        if (web3authInstance.status === 'connected') {
          setProvider(web3authInstance.provider);
          const userAccount = await getUserAccount(web3authInstance.provider);
          setAddress(userAccount);
          setIsLogged(true);
        }
      } catch (err) {
        console.error('Web3Auth init error:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize Web3Auth');
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

      const result = await web3auth.connect();
      
      if (result) {
        setProvider(result);
        const userAccount = await getUserAccount(result);
        setAddress(userAccount);
        setIsLogged(true);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
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
