import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of public routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/complete-profile',
  'auth'
];

// List of routes that require authentication
const protectedRoutes = [
  '/host',
  '/renter',
  '/settings'
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || '';
  const pathname = request.nextUrl.pathname;

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // If it's a protected route and there's no token, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If user has token and tries to access login/register pages, redirect to dashboard
  if (token && (pathname === '/login' || pathname === '/complete-profile')) {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

// Configure the paths that Middleware will run on
export const config = {
  matcher: [
    /*
     * Match all routes except:
     * 1. /api/auth/* (authentication routes)
     * 2. /_next/* (Next.js internals)
     * 3. /fonts/* (static resources)
     * 4. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api/auth|_next|fonts|favicon.ico|sitemap.xml).*)',
  ],
};