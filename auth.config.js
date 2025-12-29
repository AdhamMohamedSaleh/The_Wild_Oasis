export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnAccount = request.nextUrl.pathname.startsWith("/account");

      if (isOnAccount && !isLoggedIn) {
        return false; // Redirect to login
      }

      return true; // Allow all other requests
    },
  },
  pages: {
    signIn: "/login",
  },
};
