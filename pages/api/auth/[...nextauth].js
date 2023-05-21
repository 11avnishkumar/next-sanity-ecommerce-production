import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret:process.env.JWT_SECRET
}

export default NextAuth(authOptions)
