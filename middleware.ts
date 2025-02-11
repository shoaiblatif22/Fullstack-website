import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('auth-token');
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/checkout')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/checkout/:path*', '/admin/:path*']
};