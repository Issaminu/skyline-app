import { routeIsPublic } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    // const pathname = req.nextUrl.pathname;
    // const isRoutePublic = routeIsPublic(pathname);
    // if (!auth.userId && !isRoutePublic) {
    //   return redirectToSignIn({ returnBackUrl: req.url });
    // }
    // if (auth.userId && isRoutePublic) {
    //   return NextResponse.redirect(new URL("/immeubles", req.url));
    // }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
