/**
 * ETN Session Management
 * Handles ETN token storage and validation
 */

export interface ETNSession {
  isLoggedIn: boolean;
  token: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  userInfo: {
    sub?: string;
    email?: string;
    [key: string]: any;
  } | null;
}

/**
 * Get the ETN session from localStorage
 * Note: In production, use secure HTTP-only cookies via iron-session or similar
 */
export function getETNSession(): ETNSession {
  if (typeof window === 'undefined') {
    return {
      isLoggedIn: false,
      token: null,
      refreshToken: null,
      expiresAt: null,
      userInfo: null,
    };
  }

  try {
    const stored = localStorage.getItem('etn_session');
    if (!stored) {
      return {
        isLoggedIn: false,
        token: null,
        refreshToken: null,
        expiresAt: null,
        userInfo: null,
      };
    }
    return JSON.parse(stored);
  } catch (err) {
    console.error('[ETN Session] Failed to parse session:', err);
    return {
      isLoggedIn: false,
      token: null,
      refreshToken: null,
      expiresAt: null,
      userInfo: null,
    };
  }
}

/**
 * Save ETN session to localStorage
 */
export function saveETNSession(session: ETNSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('etn_session', JSON.stringify(session));
  } catch (err) {
    console.error('[ETN Session] Failed to save session:', err);
  }
}

/**
 * Clear the ETN session
 */
export function clearETNSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem('etn_session');
    sessionStorage.removeItem('etn_auth_state');
  } catch (err) {
    console.error('[ETN Session] Failed to clear session:', err);
  }
}

/**
 * Check if the session token is expired
 */
export function isETNSessionExpired(session: ETNSession): boolean {
  if (!session.isLoggedIn || !session.expiresAt) {
    return true;
  }
  // Add 1-minute buffer for token refresh
  return Date.now() > session.expiresAt - 60000;
}

/**
 * Extract address from ETN user info
 * ETN Identity provides wallet address in the user info
 */
export function getETNWalletAddress(userInfo: any): string | null {
  // ETN provides wallet info in various ways depending on the profile scope
  if (userInfo?.wallet_address) return userInfo.wallet_address;
  if (userInfo?.address) return userInfo.address;
  if (userInfo?.ton_address) return userInfo.ton_address;
  return null;
}
