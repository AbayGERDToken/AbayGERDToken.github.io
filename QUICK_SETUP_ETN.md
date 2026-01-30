# Quick Setup Guide - ETN Identity Integration

## Step 1: Register Application with ETN Ecosystem

1. Visit [ETN Ecosystem Developer Portal](https://docs.etnecosystem.org/)
2. Create a new application
3. Get your **Client ID** and **Client Secret**
4. Register redirect URI: `http://localhost:3000/api/auth/callback/etn` (for development)

## Step 2: Configure Environment Variables

Create or update `.env.local` file in your project root:

```bash
# ETN Identity Configuration
NEXT_PUBLIC_ETN_CLIENT_ID=your_client_id_from_etn
NEXT_PUBLIC_ETN_REDIRECT_URI=http://localhost:3000/api/auth/callback/etn
ETN_CLIENT_SECRET=your_client_secret_from_etn
```

## Step 3: Restart Development Server

```bash
npm run dev
```

## Step 4: Test the Integration

1. Navigate to `/auth` page
2. You should see three login options:
   - Continue with Google
   - Continue with Facebook
   - Continue with ETN Identity (NEW)

3. Click "Continue with ETN Identity"
4. You'll be redirected to ETN Identity Provider
5. Login with your ETN credentials
6. Should redirect back and show you're logged in
7. Click "Proceed to Claim Form" with your address pre-filled

## Troubleshooting

### Button doesn't appear?
- Check environment variables are set
- Refresh page if still on old code

### "ETN Identity is not configured" error?
- Verify `NEXT_PUBLIC_ETN_CLIENT_ID` is set
- Verify `NEXT_PUBLIC_ETN_REDIRECT_URI` is set
- Make sure variables are in `.env.local`

### Redirect URI mismatch error from ETN?
- Check the redirect URI matches exactly in ETN dashboard
- For production: use `https://yourdomain.com/api/auth/callback/etn`
- Make sure no trailing slashes or extra characters

### Session not persisting after redirect?
- Check browser cookies are enabled
- Open DevTools → Application → Cookies
- Look for `etn_session` cookie

## File Changes Summary

### New Files
- `lib/etn-auth-client.ts` - ETN SDK client
- `lib/etn-session.ts` - Session utilities
- `lib/ETNAuthContext.tsx` - React context
- `app/api/auth/callback/etn/route.ts` - Callback handler
- `app/api/auth/logout/etn/route.ts` - Logout handler

### Modified Files
- `app/auth/page.tsx` - Added ETN login button
- `app/layout.tsx` - Added ETN provider

## How Users See It

On the auth page, users now see:

```
Welcome to GERD Token
Sign in to access your wallet and claim tokens

[Google Button] [Facebook Button] [ETN Identity Button]

Your credentials are secured with industry-standard authentication
```

When they click ETN Identity, they:
1. Get redirected to ETN Identity Provider
2. Login with their credentials
3. Get redirected back with an access token
4. See their account ID and can proceed to claim form

## Production Deployment

When deploying to production:

1. Update `NEXT_PUBLIC_ETN_REDIRECT_URI` to production URL
2. Register new redirect URI with ETN
3. Update `ETN_CLIENT_SECRET` in production environment
4. Ensure HTTPS is enabled

## Support & Documentation

- [ETN SDK Documentation](https://github.com/ETN-Ecosystem/ETN-Identity-SDK)
- [ETN Ecosystem Docs](https://docs.etnecosystem.org/)
- [OIDC Standard](https://openid.net/specs/openid-connect-core-1_0.html)
