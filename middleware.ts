import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();

  if (pathname.startsWith("/article")) {
    res.headers.set("x-no-ads", "1");
  }

  return res;
}

export const config = {
  matcher: "/:path*",
};
