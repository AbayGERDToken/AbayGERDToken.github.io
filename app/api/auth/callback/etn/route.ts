/**
 * ETN Identity Callback Handler Route
 * Handles the OAuth redirect from ETN Identity Provider
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateBSCWalletFromETNId } from '@/lib/wallet-generator';

/**
 * Decode JWT without verification (for display purposes)
 * In production, you should verify the signature
 */
function decodeJWT(token: string): any {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format');
    }

    // Decode the payload (second part)
    const payload = parts[1];
    const decoded = Buffer.from(payload, 'base64').toString('utf-8');
    return JSON.parse(decoded);
  } catch (err) {
    console.error('[ETN Callback] Failed to decode JWT:', err);
    return null;
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  // Handle errors from the authorization server
  if (error) {
    console.error('[ETN Callback] Authorization error:', error, errorDescription);
    return NextResponse.redirect(
      new URL(`/auth?error=${encodeURIComponent(errorDescription || error)}`, req.url)
    );
  }

  // Validate state parameter for CSRF protection
  if (!state) {
    console.error('[ETN Callback] Missing state parameter');
    return NextResponse.redirect(
      new URL('/auth?error=Missing state parameter', req.url)
    );
  }

  if (!code) {
    console.error('[ETN Callback] Missing authorization code');
    return NextResponse.redirect(
      new URL('/auth?error=Missing authorization code', req.url)
    );
  }

  try {
    // Exchange authorization code for tokens
    const tokenEndpoint = 'https://auth.etnecosystem.org/api/v1/oauth/token';
    
    const clientId = process.env.NEXT_PUBLIC_ETN_CLIENT_ID || '';
    const clientSecret = process.env.ETN_CLIENT_SECRET || '';
    const redirectUri = process.env.NEXT_PUBLIC_ETN_REDIRECT_URI || '';
    
    // Per official ETN SDK docs: Use application/json, NOT form-urlencoded
    const tokenBody = {
      grant_type: 'authorization_code',
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
    };

    const tokenResponse = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenBody),
    });

    const responseText = await tokenResponse.text();

    if (!tokenResponse.ok) {
      console.error('[ETN Callback] Token exchange failed:', tokenResponse.status);
      return NextResponse.redirect(
        new URL(
          `/auth?error=${encodeURIComponent('Token exchange failed: ' + responseText)}`,
          req.url
        )
      );
    }

    const tokens = JSON.parse(responseText);

    // Decode the id_token to extract user data
    let idTokenData = null;
    let etnWalletAddress = null; // TON wallet from ETN
    let bscWalletAddress = null; // Generated BSC wallet
    let isOG = false;
    let etnUserId = null;

    if (tokens.id_token) {
      idTokenData = decodeJWT(tokens.id_token);
      
      if (idTokenData) {
        etnWalletAddress = idTokenData.wallet_address; // TON format
        etnUserId = idTokenData.sub || idTokenData.id;
        isOG = idTokenData.is_og || false;
        
        // Generate BSC wallet address from ETN user ID
        if (etnUserId) {
          try {
            const bscWallet = generateBSCWalletFromETNId(etnUserId);
            bscWalletAddress = bscWallet.address;
          } catch (walletErr) {
            console.error('[ETN Callback] Failed to generate BSC wallet:', walletErr);
          }
        }
      }
    }

    // Fetch user info from the userinfo endpoint
    let userInfo = null;
    try {
      const userInfoResponse = await fetch('https://auth.etnecosystem.org/api/v1/oauth/userinfo', {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      });

      if (userInfoResponse.ok) {
        userInfo = await userInfoResponse.json();
      }
    } catch (err) {
      console.warn('[ETN Callback] UserInfo fetch failed:', err);
    }

    // Create response that includes session data
    const response = NextResponse.redirect(
      new URL('/auth?method=etn&success=true', req.url)
    );

    // Store tokens and session info in a secure HTTP-only cookie
    const sessionData = {
      isLoggedIn: true,
      token: tokens.access_token,
      idToken: tokens.id_token,
      refreshToken: tokens.refresh_token,
      expiresAt: Date.now() + (tokens.expires_in * 1000) - 60000, // 1-minute buffer
      userInfo: userInfo || {},
      walletAddress: bscWalletAddress, // BSC wallet for claiming GERD tokens
      etnWalletAddress: etnWalletAddress, // Original TON wallet from ETN (for reference)
      isOG: isOG,
      userId: etnUserId,
    };

    // Set secure HTTP-only cookie
    response.cookies.set('etn_session', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokens.expires_in || 3600, // 1 hour default
      path: '/',
    });

    return response;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error';
    console.error('[ETN Callback] Unexpected error:', err);
    return NextResponse.redirect(
      new URL(`/auth?error=${encodeURIComponent(errorMessage)}`, req.url)
    );
  }
}

export async function POST(req: NextRequest) {
  // Also support POST method for token exchange
  const body = await req.json();
  const { code } = body;

  if (!code) {
    return NextResponse.json(
      { error: 'Missing authorization code' },
      { status: 400 }
    );
  }

  try {
    const tokenEndpoint = 'https://auth.etnecosystem.org/api/v1/oauth/token';
    const tokenResponse = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.NEXT_PUBLIC_ETN_CLIENT_ID,
        client_secret: process.env.ETN_CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_ETN_REDIRECT_URI,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      return NextResponse.json(
        { error: errorData.error_description || 'Token exchange failed' },
        { status: 400 }
      );
    }

    const tokens = await tokenResponse.json();

    // Fetch user info
    let userInfo = null;
    try {
      const userInfoResponse = await fetch('https://auth.etnecosystem.org/api/v1/oauth/userinfo', {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      });

      if (userInfoResponse.ok) {
        userInfo = await userInfoResponse.json();
      }
    } catch (err) {
      console.warn('[ETN Callback] Failed to fetch user info:', err);
    }

    const response = NextResponse.json({
      success: true,
      tokens,
      userInfo,
    });

    // Also set cookie in POST response
    const sessionData = {
      isLoggedIn: true,
      token: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiresAt: Date.now() + (tokens.expires_in * 1000) - 60000,
      userInfo: userInfo || {},
    };

    response.cookies.set('etn_session', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokens.expires_in || 3600,
      path: '/',
    });

    return response;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error';
    console.error('[ETN Callback] Unexpected error:', err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
