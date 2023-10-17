import { env } from "@/env.mjs";
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/ (special page for OG tags proxying)
     * 4. /_static (inside /public)
     * 5. /_vercel (Vercel internals)
     * 6. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    "/((?!api/|_next/|_proxy/|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const token = await getToken({
    req,
    secret: env.NEXTAUTH_SECRET,
  });

  if (!token?.email) {
    if (path.startsWith("/resumes")) {
      return NextResponse.redirect(new URL(`/login`, req.url));
    }
  } else {
    // there is a token
    if (path === "/login") {
      return NextResponse.redirect(new URL("/resumes", req.url));
    }
  }
}
