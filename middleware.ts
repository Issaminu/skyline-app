import { routeIsPublic } from "@/lib/utils";
import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-url", req.url);
    const pathname = req.nextUrl.pathname;
    const isRoutePublic = routeIsPublic(pathname);
    if (!auth.userId && !isRoutePublic) {
      return NextResponse.redirect(
        `${new URL("/login", req.url)}?redirect_url=${pathname.slice(1)}`,
        {
          headers: requestHeaders,
        }
      );
    }
    if (auth.userId && isRoutePublic) {
      return NextResponse.redirect(new URL("/immeubles", req.url), {
        headers: requestHeaders,
      });
    }
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
