import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/../prisma/client";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="w-full h-full flex justify-center items-center">
      {session? (
            <div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-[2.75em] font-semibold font-sans">You're not signed in!</h1>
              <h3 className="font-sans text-sm w-[350px] text-center text-zinc-400">Connect to your markme account to unlock the platform</h3>
              <Link href={"/api/auth"}><Button className="bg-zinc-800 border border-zinc-600 p-5 w-[150px] mt-6 hover:bg-none ">Login</Button></Link>
            </div>
          )}
    </div>
  )
}
