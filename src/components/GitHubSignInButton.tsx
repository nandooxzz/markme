"use client"

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { useRouter } from "next/router";

export default function GitHubButton () {
    return (
        <Button className="mt-4 flex gap-3 w-full p-5" variant="secondary" onClick={() => {
            signIn("github", {
                callbackUrl: `${window.location.origin}`
            })
        }}><GitHubLogoIcon className="w-5 h-5"/>Sign in with GitHub</Button>
    )
}