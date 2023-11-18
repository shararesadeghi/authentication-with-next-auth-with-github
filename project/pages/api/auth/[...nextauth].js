import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      adapter: MongoDBAdapter(clientPromise)
    }),
  ],
};

export default NextAuth(authOptions);
