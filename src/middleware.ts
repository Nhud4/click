import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = cookies();
  const { pathname } = request.nextUrl;
  const token = cookie.get('token')?.value;
  const protectedPaths = ['/', '/video'];

  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  const isLoggedIn = pathname.startsWith('/login') && token;
  const isRequireAuth = isProtectedPath && !token;

  if (isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isRequireAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/video'],
};
