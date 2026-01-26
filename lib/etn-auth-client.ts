/**
 * ETN Identity SDK Client
 * Handles client-side ETN authentication flow
 */

export interface ETNAuthConfig {
  clientId: string;
  redirectUri: string;
  scope?: string;
}

export class ETNAuthClient {
  private clientId: string;
  private redirectUri: string;
  private scope: string;
  private authorizationEndpoint = 'https://auth.etnecosystem.org/oauth/authorize';

  constructor(config: ETNAuthConfig) {
    this.clientId = config.clientId;
    this.redirectUri = config.redirectUri;
    this.scope = config.scope || 'openid profile offline_access';
  }

  /**
   * Generate a random state for CSRF protection
   */
  private generateState(): string {
    return crypto.getRandomValues(new Uint8Array(32))
      .reduce((acc, val) => acc + ('0' + val.toString(16)).slice(-2), '');
  }

  /**
   * Build the authorization URL for redirecting to ETN Identity Provider
   */
  buildAuthorizeUrl(state?: string): string {
    const authState = state || this.generateState();
    
    // Store state in sessionStorage for verification after redirect
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('etn_auth_state', authState);
    }

    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: 'code',
      scope: this.scope,
      state: authState,
    });

    return `${this.authorizationEndpoint}?${params.toString()}`;
  }

  /**
   * Initiate the login flow by redirecting to ETN Identity Provider
   */
  signIn(): void {
    const authorizeUrl = this.buildAuthorizeUrl();
    window.location.href = authorizeUrl;
  }
}

/**
 * Initialize ETN Auth Client from environment variables
 */
export function initETNAuthClient(): ETNAuthClient | null {
  const clientId = process.env.NEXT_PUBLIC_ETN_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_ETN_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    console.warn('[ETN Auth] Missing configuration. Set NEXT_PUBLIC_ETN_CLIENT_ID and NEXT_PUBLIC_ETN_REDIRECT_URI');
    return null;
  }

  return new ETNAuthClient({
    clientId,
    redirectUri,
  });
}
