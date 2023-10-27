import { routeIsPublic } from "@/lib/utils";
import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   afterAuth(auth, req, evt) {
//     const requestHeaders = new Headers(req.headers);
//     const pathname = req.nextUrl.pathname;
//     requestHeaders.set("x-url", pathname);
//     const isRoutePublic = routeIsPublic(pathname);
//     if (!auth.userId && !isRoutePublic) {
//       return NextResponse.redirect(
//         `${new URL("/login", req.url)}?redirect_url=${encodeURIComponent(
//           req.nextUrl.toString()
//         )}`,
//         {
//           headers: requestHeaders,
//         }
//       );
//     }
//     if (auth.userId && isRoutePublic) {
//       return NextResponse.redirect(new URL("/buildings", req.url), {
//         headers: requestHeaders,
//       });
//     }
//     return NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     });
//   },
// });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
