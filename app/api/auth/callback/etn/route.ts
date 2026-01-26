/**
 * ETN Identity Callback Handler Route
 * Handles the OAuth redirect from ETN Identity Provider
 */

import { NextRequest, NextResponse } from 'next/server';

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
      console.error('[ETN Callback] Token exchange failed:', errorData);
      return NextResponse.redirect(
        new URL(
          `/auth?error=${encodeURIComponent(errorData.error_description || 'Token exchange failed')}`,
          req.url
        )
      );
    }

    const tokens = await tokenResponse.json();

    // Decode the access token to get user info (optional, depends on your needs)
    // You can also fetch user info from the userinfo endpoint
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

    // Create response that includes session data
    const response = NextResponse.redirect(
      new URL('/auth?method=etn&success=true', req.url)
    );

    // Store tokens and session info in a secure HTTP-only cookie
    const sessionData = {
      isLoggedIn: true,
      token: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiresAt: Date.now() + (tokens.expires_in * 1000) - 60000, // 1-minute buffer
      userInfo: userInfo || {},
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
