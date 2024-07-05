import User from "@/models/User";
import { connectToDb } from "@/mongodb/database";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          await connectToDb();

          const user = await User.findOne({ email: email });
          if (!user) {
            console.log("User not found");
            return null;
          }
          if (user.password === password) {
            return user;
          } else {
            console.log("User not found");
            return null;
          }
        } catch (error) {
          console.log("Error during authentication:", error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
