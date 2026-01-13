import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/src/services/auth/auth-service';
import { authConfig } from '@/src/lib/auth/config';

const publicPaths = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',
  '/auth/login',
  '/auth/signup',
  '/funds',
  '/',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get(authConfig.cookies.accessTokenName)?.value;

  if (!accessToken) {
    return NextResponse.redirect(
      new URL('/auth/login', request.url),
      { status: 302 }
    );
  }

  try {
    AuthService.verifyAccessToken(accessToken);
    return NextResponse.next();
  } catch (error) {
    const response = NextResponse.redirect(
      new URL('/auth/login', request.url),
      { status: 302 }
    );

    response.cookies.delete(authConfig.cookies.accessTokenName);
    response.cookies.delete(authConfig.cookies.refreshTokenName);

    return response;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};