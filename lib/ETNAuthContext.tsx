'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { ETNAuthClient, initETNAuthClient } from './etn-auth-client';
import { getETNSession, saveETNSession, clearETNSession, isETNSessionExpired, getETNWalletAddress, ETNSession } from './etn-session';

interface ETNAuthContextType {
  authClient: ETNAuthClient | null;
  isLoading: boolean;
  isLogged: boolean;
  address: string | null;
  error: string | null;
  signIn: () => void;
  logout: () => Promise<void>;
  session: ETNSession | null;
}

const ETNAuthContext = createContext<ETNAuthContextType | undefined>(undefined);

export function ETNAuthProvider({ children }: { children: ReactNode }) {
  const [authClient, setAuthClient] = useState<ETNAuthClient | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<ETNSession | null>(null);

  // Initialize auth client and check existing session
  useEffect(() => {
    const init = async () => {
      try {
        // Initialize ETN Auth Client
        const client = initETNAuthClient();
        setAuthClient(client);

        if (!client) {
          console.warn('[ETN Auth] ETN Identity is not configured');
          setIsLoading(false);
          return;
        }

        // Check for existing session
        let existingSession = getETNSession();
        
        if (existingSession.isLoggedIn && !isETNSessionExpired(existingSession)) {
          // Session is valid
          setSession(existingSession);
          setIsLogged(true);
          
          // Extract wallet address from user info
          const walletAddress = existingSession.walletAddress || getETNWalletAddress(existingSession.userInfo);
          if (walletAddress) {
            setAddress(walletAddress);
          } else if (existingSession.userInfo?.sub) {
            // Fallback to user ID if wallet address not available
            setAddress(existingSession.userInfo.sub);
          }
        } else if (existingSession.isLoggedIn && isETNSessionExpired(existingSession)) {
          // Session expired, attempt refresh
          console.log('[ETN Auth] Session expired, attempting refresh...');
          // TODO: Implement token refresh using refresh token
          clearETNSession();
          setIsLogged(false);
        }

        // Check for auth callback in URL (handle callback client-side)
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const state = params.get('state');
        
        if (code && state) {
          // This is an OAuth callback - handle it client-side
          console.log('[ETN Auth] Processing OAuth callback...');
          
          // Verify state
          const savedState = typeof window !== 'undefined' ? sessionStorage.getItem('etn_auth_state') : null;
          if (state !== savedState) {
            setError('Invalid state parameter');
          } else {
            // For static sites, we can't exchange the code for tokens server-side
            // Instead, we'll use implicit flow or handle this with a separate backend
            console.warn('[ETN Auth] Code exchange requires backend - use implicit flow instead');
            setError('Authentication requires backend server. Contact administrator.');
          }
          
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } else {
          // Check for existing valid session
          if (!existingSession.isLoggedIn && typeof window !== 'undefined') {
            // No session found
            setIsLogged(false);
          }
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to initialize ETN Auth';
        console.error('[ETN Auth] Init error:', err);
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  const signIn = () => {
    if (authClient) {
      authClient.signIn();
    } else {
      setError('ETN Auth is not configured');
    }
  };

  const logout = async () => {
    try {
      // Clear local state
      clearETNSession();
      setSession(null);
      setIsLogged(false);
      setAddress(null);
      setError(null);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Logout failed';
      console.error('[ETN Auth] Logout error:', err);
      setError(errorMsg);
      throw err;
    }
  };

  return (
    <ETNAuthContext.Provider
      value={{
        authClient,
        isLoading,
        isLogged,
        address,
        error,
        signIn,
        logout,
        session,
      }}
    >
      {children}
    </ETNAuthContext.Provider>
  );
}

export function useETNAuth() {
  const context = useContext(ETNAuthContext);
  if (context === undefined) {
    throw new Error('useETNAuth must be used within ETNAuthProvider');
  }
  return context;
}
