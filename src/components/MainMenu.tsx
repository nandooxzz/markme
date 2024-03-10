"use client"

import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "./ui/menubar";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogDescription} from "./ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MenubarShortcut } from "./ui/menubar";
import { Button } from "./ui/button";

import { Session } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { authOptions } from "@/../prisma/client";

type MenuProps = {
    session: Session | null
}

export default function MainMenu(props: MenuProps) {
   let image = ""
   props.session?.user?.image ? image = props.session.user.image : image = ""
   return(
        <div className="flex items-center justify-between p-5">
            <Menubar className="bg-zinc-900 border-zinc-700">
            <MenubarMenu>
                <MenubarTrigger>Notes</MenubarTrigger>
                <MenubarContent>
                <MenubarItem>New<MenubarShortcut>Ctrl-N</MenubarShortcut></MenubarItem>
                <MenubarItem>Open<MenubarShortcut>Ctrl-O</MenubarShortcut></MenubarItem>
                <MenubarSeparator/>
                <MenubarItem>Exit</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                </MenubarContent>
            </MenubarMenu>
            </Menubar>
            
            {props.session?
                <AlertDialog>
                    <AlertDialogTrigger>
                        <Avatar>
                            <AvatarImage src={image} alt="User profile picture"/>
                            <AvatarFallback>404 Not found</AvatarFallback>
                        </Avatar>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-zinc-800 text-zinc-50 border-zinc-600">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Your Account</AlertDialogTitle>
                        </AlertDialogHeader>

                        <AlertDialogDescription className="font-mono">
                            <div className="flex gap-2">
                                <div className="border-r p-2 border-zinc-600">
                                    <Image src={image} width={100} height={100} className="rounded-full border mr-6" alt="User profile picture"/>
                                </div>
                                <div className="text-zinc-100 ml-2">
                                    <h1 className="text-[1.3em] font-semibold">{props.session.user?.name}</h1>
                                    <p className="text-zinc-400 mt-2 text-[1.1em]">
                                        Email: {props.session.user?.email}</p>
                                </div>
                            </div>
                        </AlertDialogDescription>

                        <AlertDialogFooter>
                            <Button className="bg-zinc-700 border border-zinc-600 hover:bg-zinc-500" onClick={() => {
                                signOut({callbackUrl: "/"})
                            }}>Sign Out</Button>
                            <AlertDialogCancel className="bg-zinc-900 border-zinc-700">Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            : <Link href="/api/auth"><Button variant={'secondary'}>Log in</Button></Link>
            }
        </div>
  )
}