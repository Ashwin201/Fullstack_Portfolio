import User from "@/models/User";
import { connectToDb } from "@/mongodb/database";
import NextAuth, { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            throw new Error("No credentials provided");
          }
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
            console.log("Invalid password");
            return null;
          }
        } catch (error) {
          console.log("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
