import createMiddleware from 'next-intl/middleware';
import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default withAuth(
  async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === '/' || pathname === '/home') {
      return NextResponse.redirect(new URL('/weterynarze', request.url));
    }

    return intlMiddleware(request);
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const allowedEmails = process.env.ALLOWED_EMAILS?.split(';');
        return !!(
          !req.nextUrl.pathname?.includes('/dashboard') ||
          (allowedEmails?.length &&
            typeof token?.email === 'string' &&
            allowedEmails.includes(token.email))
        );
      },
    },
  },
);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/:locale/dashboard/:path*'],
};
