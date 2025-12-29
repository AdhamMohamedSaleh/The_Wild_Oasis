import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import { authConfig } from "@/auth.config";

const config = {
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      try {
        const guest = await getGuest(session.user.email);
        if (guest) {
          session.user.guestId = guest.id;
        }
      } catch (error) {
        console.error("Error fetching guest:", error);
      }
      return session;
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(config);
