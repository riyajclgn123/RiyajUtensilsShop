import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Configure NextAuth
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
    secret: process.env.NEXTAUTH_SECRET,
  // Add additional NextAuth configuration here (e.g., callbacks, session, etc.)
};

// Export the NextAuth handler
export default NextAuth(authOptions);