import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get('etn_session');

  if (!sessionCookie?.value) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }

  try {
    const session = JSON.parse(sessionCookie.value);
    return NextResponse.json(session, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('[ETN Session] Failed to parse session cookie:', err);
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }
}
