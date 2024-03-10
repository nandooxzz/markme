import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { authOptions } from "../../../../../prisma/client"

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}