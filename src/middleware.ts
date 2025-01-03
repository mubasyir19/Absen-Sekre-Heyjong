import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const encodedToken = req.cookies.get('authToken');

  if (!encodedToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const token = atob(encodedToken.value);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HEYJONG_ATTENDANCE}/verify`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } catch (error) {
    console.log('Error Middle = ', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/dashboard/:path*',
};
