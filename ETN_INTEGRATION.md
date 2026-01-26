# ETN Identity SDK Integration

## Environment Variables Required

Add the following environment variables to your `.env.local` file:

```
# ETN Identity Configuration
NEXT_PUBLIC_ETN_CLIENT_ID=your_etn_client_id_here
NEXT_PUBLIC_ETN_REDIRECT_URI=http://localhost:3000/api/auth/callback/etn
ETN_CLIENT_SECRET=your_etn_client_secret_here
```

### Environment Variables Explanation

- **NEXT_PUBLIC_ETN_CLIENT_ID**: Your ETN application client ID (public, safe to expose)
- **NEXT_PUBLIC_ETN_REDIRECT_URI**: The redirect URI after authentication (must match ETN dashboard settings)
- **ETN_CLIENT_SECRET**: Your ETN application secret (KEEP SECRET - server-side only)

## Getting Started

1. **Register an Application**
   - Go to [ETN Ecosystem Developer Portal](https://docs.etnecosystem.org/)
   - Create a new application
   - Configure the redirect URI: `https://yourdomain.com/api/auth/callback/etn`
   - Copy your Client ID and Client Secret

2. **Set Environment Variables**
   - Add the credentials to your `.env.local` file
   - Update the redirect URI in production

3. **How It Works**
   - User clicks "Continue with ETN Identity"
   - Gets redirected to ETN Identity Provider
   - Logs in with their ETN credentials
   - Gets redirected back to `/api/auth/callback/etn`
   - Session is created and user is logged in

## File Structure

```
lib/
  etn-auth-client.ts      # ETN Auth SDK client
  etn-session.ts          # Session management utilities
  ETNAuthContext.tsx      # React context for ETN auth
  
app/
  api/auth/
    callback/etn/route.ts  # OAuth callback handler
    logout/etn/route.ts    # Logout handler
```

## Using ETN Auth in Components

```tsx
import { useETNAuth } from '@/lib/ETNAuthContext';

export function MyComponent() {
  const { isLogged, address, signIn, logout } = useETNAuth();

  return (
    <>
      {!isLogged && <button onClick={signIn}>Sign in with ETN</button>}
      {isLogged && (
        <>
          <p>Logged in as: {address}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
}
```

## Retrieving User Information

After successful login, the following user information is available:

```tsx
const { session } = useETNAuth();

// Access user info
const userEmail = session?.userInfo?.email;
const userId = session?.userInfo?.sub;
const walletAddress = session?.userInfo?.wallet_address;
```

## Token Refresh (Future Enhancement)

Currently, the implementation stores the refresh token but doesn't automatically refresh expired tokens. To implement automatic token refresh:

1. Implement a refresh endpoint at `/api/auth/refresh/etn`
2. Add middleware to check token expiration
3. Automatically refresh tokens before they expire

## Troubleshooting

### "ETN Identity is not configured"
- Make sure `NEXT_PUBLIC_ETN_CLIENT_ID` and `NEXT_PUBLIC_ETN_REDIRECT_URI` are set
- Check that the environment variables are properly loaded

### Redirect URI mismatch error
- Ensure the redirect URI in your code matches the one registered in ETN dashboard
- Development: `http://localhost:3000/api/auth/callback/etn`
- Production: `https://yourdomain.com/api/auth/callback/etn`

### Session not persisting
- Check that cookies are enabled in the browser
- Verify that the session cookie is being set (check browser DevTools > Application > Cookies)

## Security Considerations

- **Client Secret**: Never expose the `ETN_CLIENT_SECRET` in frontend code
- **Cookies**: Use HTTP-only, Secure, SameSite cookies for session storage
- **CSRF Protection**: State parameter is validated to prevent CSRF attacks
- **Token Rotation**: Implement token refresh before expiration for long-lived sessions
