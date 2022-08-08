import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET });
  const { pathname } = request.nextUrl;
  if (pathname.includes('api/auth') || token) {
    return NextResponse.next()
  }
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}




