'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import {
  startETNLogin,
  getETNUser,
  logoutETN,
  saveETNUser,
  getStoredETNUser,
  clearStoredETNUser,
} from './etn-backend-client';

interface ETNAuthContextType {
  isLoading: boolean;
  isLogged: boolean;
  sub: string | null; // ETN user identity (UUID)
  error: string | null;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

const ETNAuthContext = createContext<ETNAuthContextType | undefined>(undefined);

export function ETNAuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const initSession = async () => {
      try {
        console.log('[ETN Auth] Initializing...');
        
        // First check if we have a stored sub (from previous session)
        const storedSub = getStoredETNUser();
        if (storedSub) {
          console.log('[ETN Auth] Found stored session:', storedSub);
          setSub(storedSub);
          setIsLogged(true);
          setIsLoading(false);
          return;
        }

        // Try to get fresh session from backend
        const userSub = await getETNUser();
        if (userSub) {
          console.log('[ETN Auth] Session is valid:', userSub);
          setSub(userSub);
          setIsLogged(true);
          saveETNUser(userSub);
        } else {
          console.log('[ETN Auth] No active session');
          setIsLogged(false);
          setSub(null);
        }
      } catch (err) {
        console.error('[ETN Auth] Init error:', err);
        // Don't set error on init, it's normal if not logged in
      } finally {
        setIsLoading(false);
      }
    };

    initSession();
  }, []);

  const signIn = async () => {
    try {
      setError(null);
      setIsLoading(true);
      console.log('[ETN Auth] Starting sign in...');

      // Get authorization URL from backend
      const authorizeUrl = await startETNLogin();
      if (!authorizeUrl) {
        throw new Error('Failed to get authorization URL');
      }

      // Redirect to ETN provider
      // ETN will redirect back to backend callback which sets the session cookie
      // Then user should return to the app and we'll verify the session
      console.log('[ETN Auth] Redirecting to ETN provider...');
      window.location.href = authorizeUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to start login';
      console.error('[ETN Auth] Sign in error:', message);
      setError(message);
      setIsLoading(false);
    }
  };

  const checkSession = async () => {
    try {
      setError(null);
      setIsLoading(true);
      console.log('[ETN Auth] Checking session after callback...');

      const userSub = await getETNUser();
      if (userSub) {
        console.log('[ETN Auth] Session confirmed:', userSub);
        setSub(userSub);
        setIsLogged(true);
        saveETNUser(userSub);
      } else {
        console.log('[ETN Auth] Session check failed');
        setError('Failed to verify session');
        setIsLogged(false);
        setSub(null);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to check session';
      console.error('[ETN Auth] Session check error:', message);
      setError(message);
      setIsLogged(false);
      setSub(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setError(null);
      setIsLoading(true);
      console.log('[ETN Auth] Logging out...');

      // Call backend to clear session
      await logoutETN();

      // Clear local state
      setSub(null);
      setIsLogged(false);
      clearStoredETNUser();
      console.log('[ETN Auth] Logged out successfully');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Logout failed';
      console.error('[ETN Auth] Logout error:', message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ETNAuthContext.Provider
      value={{
        isLoading,
        isLogged,
        sub,
        error,
        signIn,
        logout,
        checkSession,
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
