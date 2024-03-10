import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GitHubProvider from "next-auth/providers/github"
import { NextAuthOptions } from "next-auth"
import prisma from "./db"

const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url
                }
            }
        })
    ],
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/api/auth"
    },
} satisfies NextAuthOptions

export {authOptions}