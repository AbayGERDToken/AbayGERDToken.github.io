/**
 * ETN Logout Handler Route
 * Clears the ETN session
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ success: true });

  // Clear the ETN session cookie
  response.cookies.delete('etn_session');

  return response;
}

export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL('/auth', req.url));

  // Clear the ETN session cookie
  response.cookies.delete('etn_session');

  return response;
}
