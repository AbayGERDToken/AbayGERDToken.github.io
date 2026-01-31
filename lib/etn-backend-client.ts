/**
 * ETN Backend Auth Client
 * Handles OAuth flow with Render backend API
 * 
 * Flow:
 * 1. User clicks ETN button → signIn()
 * 2. GET /auth/etn/login → get authorizeUrl
 * 3. Redirect to ETN provider
 * 4. ETN redirects to backend callback
 * 5. Backend exchanges code → creates session in Firestore
 * 6. Frontend calls getETNUser() to confirm and get wallet address (sub)
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_ETN_BACKEND_URL || 'https://abay-gerd-backend.onrender.com';

export interface ETNLoginResponse {
  authorizeUrl: string;
}

export interface ETNMeResponse {
  status: 'success' | 'error';
  sub?: string;
  wallet_address?: string;
  message?: string;
}

export interface ETNCallbackParams {
  code: string;
  state: string;
}

/**
 * Initiate ETN login
 * Calls backend to get the authorization URL
 */
export async function startETNLogin(): Promise<string | null> {
  try {
    console.log('[ETN] Starting login flow...');
    const response = await fetch(`${BACKEND_URL}/auth/etn/login`, {
      method: 'GET',
      credentials: 'include', // Include cookies
    });

    if (!response.ok) {
      throw new Error(`Failed to get authorization URL: ${response.status}`);
    }

    const data: ETNLoginResponse = await response.json();
    console.log('[ETN] Got authorization URL');
    return data.authorizeUrl;
  } catch (error) {
    console.error('[ETN] Error starting login:', error);
    throw error;
  }
}

/**
 * Get current user session with wallet address
 * Called after OAuth callback to confirm login and get wallet address
 */
export async function getETNUser(): Promise<string | null> {
  try {
    console.log('[ETN] Checking session...');
    const response = await fetch(`${BACKEND_URL}/auth/etn/me`, {
      method: 'GET',
      credentials: 'include', // Include cookies (etn_session)
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.log('[ETN] Not authenticated');
        return null;
      }
      throw new Error(`Failed to get user: ${response.status}`);
    }

    const data: ETNMeResponse = await response.json();
    if (data.status === 'success' && data.sub) {
      console.log('[ETN] User authenticated:', data.sub, 'Wallet:', data.wallet_address);
      // Return wallet_address if available, otherwise fall back to sub
      return data.wallet_address || data.sub;
    }
    return null;
  } catch (error) {
    // Silently handle errors on session check
    // 401 and CORS errors are expected when not logged in
    if (error instanceof Error && error.message.includes('Failed to fetch')) {
      console.log('[ETN] Session check skipped (backend unreachable or CORS issue)');
    } else {
      console.error('[ETN] Error getting user:', error);
    }
    return null;
  }
}

/**
 * Logout from ETN
 * Calls backend to clear session
 */
export async function logoutETN(): Promise<boolean> {
  try {
    console.log('[ETN] Logging out...');
    const response = await fetch(`${BACKEND_URL}/auth/etn/logout`, {
      method: 'POST',
      credentials: 'include', // Include cookies
    });

    if (!response.ok) {
      console.warn('[ETN] Logout request failed:', response.status);
      // Still clear local state even if backend fails
      return true;
    }

    console.log('[ETN] Logged out successfully');
    return true;
  } catch (error) {
    console.error('[ETN] Error logging out:', error);
    // Still clear local state even if backend fails
    return true;
  }
}

/**
 * Store ETN user wallet address in localStorage
 */
export function saveETNUser(walletAddress: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('etn_wallet_address', walletAddress);
  }
}

/**
 * Get stored ETN user wallet address from localStorage
 */
export function getStoredETNUser(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('etn_wallet_address');
  }
  return null;
}

/**
 * Clear stored ETN user data
 */
export function clearStoredETNUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('etn_wallet_address');
  }
}
