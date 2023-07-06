import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get('session');

  // Return to /signin if don't have a session
  if (!session) {
    console.log('You not getting in mate.');
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // Call the authentication endpoint
  const responseAPI = await fetch(new URL('/api/signin', request.url), {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  // Return to /login if token is not authorized
  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
  // matcher: ['/home/:path*', '/editor/:path*'],
  matcher: ['/home/:path*'],
};
