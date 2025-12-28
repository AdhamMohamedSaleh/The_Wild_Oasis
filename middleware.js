import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);

// Only run middleware on account routes
export const config = {
  matcher: ["/account/:path*"],
};
