# ETN Integration - Code Examples

## Using ETN Auth in Components

### Basic Usage

```tsx
import { useETNAuth } from '@/lib/ETNAuthContext';

export function LoginButton() {
  const { isLogged, address, signIn, logout, isLoading, error } = useETNAuth();

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (isLogged) {
    return (
      <div>
        <p>Logged in as: {address}</p>
        <button onClick={logout} disabled={isLoading}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <button onClick={signIn} disabled={isLoading}>
      {isLoading ? 'Connecting...' : 'Continue with ETN Identity'}
    </button>
  );
}
```

### Accessing User Information

```tsx
import { useETNAuth } from '@/lib/ETNAuthContext';

export function UserProfile() {
  const { isLogged, session } = useETNAuth();

  if (!isLogged || !session) {
    return <div>Not logged in</div>;
  }

  const { userInfo, token } = session;

  return (
    <div>
      <h3>User Profile</h3>
      <p>User ID: {userInfo?.sub}</p>
      <p>Email: {userInfo?.email}</p>
      <p>Wallet Address: {userInfo?.wallet_address}</p>
      
      {/* Don't display tokens in real apps! */}
      <p>Token expires in: {session.expiresAt ? new Date(session.expiresAt).toLocaleString() : 'Unknown'}</p>
    </div>
  );
}
```

### Protecting Routes

```tsx
'use client';

import { useETNAuth } from '@/lib/ETNAuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedComponent() {
  const { isLogged, isLoading } = useETNAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLogged) {
      router.push('/auth');
    }
  }, [isLoading, isLogged, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Protected Content</h1>
      <p>Only logged-in users can see this</p>
    </div>
  );
}
```

### Dual Auth Support

```tsx
import { useWeb3Auth } from '@/lib/Web3AuthContext';
import { useETNAuth } from '@/lib/ETNAuthContext';

export function DualAuthStatus() {
  const { isLogged: web3Logged, address: web3Address } = useWeb3Auth();
  const { isLogged: etnLogged, address: etnAddress } = useETNAuth();

  return (
    <div>
      {web3Logged && <p>Web3Auth: {web3Address}</p>}
      {etnLogged && <p>ETN: {etnAddress}</p>}
      {!web3Logged && !etnLogged && <p>Not logged in</p>}
    </div>
  );
}
```

## Backend Usage

### Accessing ETN Session in Route Handlers

```tsx
// app/api/user/profile/route.ts
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('etn_session');

  if (!sessionCookie) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const session = JSON.parse(sessionCookie.value);

  // Use the token for API calls
  const accessToken = session.token;
  const userInfo = session.userInfo;

  return Response.json({
    user: userInfo,
    authenticated: true,
  });
}
```

### Using ETN Token for External API Calls

```tsx
// app/api/claim/route.ts
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('etn_session');

  if (!sessionCookie) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const session = JSON.parse(sessionCookie.value);
  const { token } = session;

  // Use token to authenticate requests
  const response = await fetch('https://api.etnecosystem.org/claim', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wallet: req.body.wallet,
    }),
  });

  return response.json();
}
```

## Environment Variables - Full Example

```bash
# .env.local

# ETN Identity Configuration
NEXT_PUBLIC_ETN_CLIENT_ID=etn_client_xyz123abc
NEXT_PUBLIC_ETN_REDIRECT_URI=http://localhost:3000/api/auth/callback/etn
ETN_CLIENT_SECRET=etn_secret_abc123xyz

# Web3Auth Configuration (existing)
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=web3auth_client_id

# Other configurations
NEXT_PUBLIC_BSC_RPC_URL=https://bsc-dataseed.binance.org
```

## Integration in Existing Components

### Update Auth Page

The auth page has already been updated to include the ETN button. Here's what was added:

```tsx
// app/auth/page.tsx - snippet showing ETN integration

const { signIn: etnSignIn, logout: etnLogout, isLoading: etnIsLoading, ... } = useETNAuth();

// In the JSX:
<button
  className={styles.loginButton}
  onClick={etnSignIn}
  disabled={etnIsLoading}
  style={{ backgroundColor: '#3668FF' }}
>
  <i className="fas fa-fingerprint me-2"></i>
  Continue with ETN Identity
</button>
```

### Claim Form Already Compatible

The claim form automatically works with both auth methods:

```tsx
// When user logs in with either method, they're redirected to:
/claim-form?address=<their_wallet_or_account_id>

// The claim form reads the address parameter and prefills it
const addressFromUrl = searchParams.get('address');
if (addressFromUrl && !walletAddress) {
  setWalletAddress(addressFromUrl);
  setBalanceAddress(addressFromUrl);
}
```

## Session Management Examples

### Check if Session is Valid

```tsx
import { getETNSession, isETNSessionExpired } from '@/lib/etn-session';

function useETNSessionStatus() {
  const session = getETNSession();
  const isExpired = isETNSessionExpired(session);
  const isValid = session.isLoggedIn && !isExpired;

  return { session, isExpired, isValid };
}
```

### Get Wallet Address from User Info

```tsx
import { getETNWalletAddress } from '@/lib/etn-session';

function useETNWalletAddress() {
  const { session } = useETNAuth();
  
  if (!session?.userInfo) return null;
  
  const address = getETNWalletAddress(session.userInfo);
  return address;
}
```

### Manual Session Management

```tsx
import { getETNSession, saveETNSession, clearETNSession } from '@/lib/etn-session';

// Get current session
const session = getETNSession();

// Update session
const updatedSession = {
  ...session,
  userInfo: {
    ...session.userInfo,
    custom_field: 'value'
  }
};
saveETNSession(updatedSession);

// Clear session
clearETNSession();
```

## Error Handling Examples

### Handle Login Errors

```tsx
export function AuthForm() {
  const { signIn, error, isLoading } = useETNAuth();

  const handleSignIn = async () => {
    try {
      signIn();
    } catch (err) {
      console.error('Sign in failed:', err);
      // Error is automatically stored in context
    }
  };

  return (
    <div>
      {error && (
        <div className="alert alert-danger">
          Authentication failed: {error}
        </div>
      )}
      <button onClick={handleSignIn} disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign in with ETN'}
      </button>
    </div>
  );
}
```

### Handle Logout Errors

```tsx
const { logout } = useETNAuth();

const handleLogout = async () => {
  try {
    await logout();
    // Successfully logged out
  } catch (err) {
    console.error('Logout failed:', err);
    // Show error to user
  }
};
```

## Testing Examples

### Mock ETN Auth for Testing

```tsx
// __mocks__/ETNAuthContext.tsx
import { ReactNode } from 'react';

export const mockETNAuth = {
  isLogged: true,
  address: '0x1234567890abcdef',
  signIn: jest.fn(),
  logout: jest.fn(),
  error: null,
  isLoading: false,
  session: {
    isLoggedIn: true,
    token: 'mock_token',
    refreshToken: 'mock_refresh_token',
    expiresAt: Date.now() + 3600000,
    userInfo: {
      sub: '0x1234567890abcdef',
      email: 'user@example.com',
    },
  },
};

export function useETNAuth() {
  return mockETNAuth;
}
```

### Test Component with ETN Auth

```tsx
import { render, screen } from '@testing-library/react';
import { useETNAuth } from '@/lib/ETNAuthContext';
import MyComponent from './MyComponent';

jest.mock('@/lib/ETNAuthContext');

describe('MyComponent', () => {
  it('should show user address when logged in', () => {
    (useETNAuth as jest.Mock).mockReturnValue({
      isLogged: true,
      address: '0xtest',
      ...mockETNAuth,
    });

    render(<MyComponent />);
    expect(screen.getByText('0xtest')).toBeInTheDocument();
  });
});
```

## Advanced: Token Refresh Implementation

```tsx
// lib/etn-token-refresh.ts
// (This is a future enhancement to implement automatic token refresh)

export async function refreshETNToken(refreshToken: string): Promise<any> {
  const response = await fetch('https://auth.etnecosystem.org/api/v1/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: process.env.NEXT_PUBLIC_ETN_CLIENT_ID,
      client_secret: process.env.ETN_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error('Token refresh failed');
  }

  return response.json();
}
```
