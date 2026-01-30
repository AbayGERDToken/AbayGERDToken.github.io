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

  const fetchServerSession = async (): Promise<ETNSession | null> => {
    try {
      const res = await fetch('/api/auth/session/etn', { cache: 'no-store' });
      if (!res.ok) return null;
      const data = await res.json();
      if (data?.isLoggedIn) {
        saveETNSession(data);
        return data as ETNSession;
      }
      return null;
    } catch (err) {
      console.warn('[ETN Auth] Failed to fetch server session:', err);
      return null;
    }
  };

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
        } else {
          // Try to hydrate session from HTTP-only cookie
          const serverSession = await fetchServerSession();
          if (serverSession?.isLoggedIn) {
            existingSession = serverSession;
            setSession(existingSession);
            setIsLogged(true);
            const walletAddress = existingSession.walletAddress || getETNWalletAddress(existingSession.userInfo);
            if (walletAddress) {
              setAddress(walletAddress);
            } else if (existingSession.userInfo?.sub) {
              setAddress(existingSession.userInfo.sub);
            }
          }
        }

        // Check for auth callback in URL
        const params = new URLSearchParams(window.location.search);
        if (params.get('method') === 'etn') {
          if (params.get('success') === 'true') {
            // Callback was successful, hydrate from server cookie
            console.log('[ETN Auth] Callback successful, fetching server session...');
            const newSession = await fetchServerSession();
            if (newSession?.isLoggedIn) {
              setSession(newSession);
              setIsLogged(true);
              const walletAddress = newSession.walletAddress || getETNWalletAddress(newSession.userInfo);
              if (walletAddress) {
                setAddress(walletAddress);
              }
            }
          } else {
            const errorMsg = params.get('error');
            setError(errorMsg || 'Authentication failed');
          }
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
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
      // Call logout endpoint to clear session
      await fetch('/api/auth/logout/etn', { method: 'POST' });
      
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
