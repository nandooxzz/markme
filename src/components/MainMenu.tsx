import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "./ui/menubar";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MenubarShortcut } from "./ui/menubar";

export default function MainMenu() {
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
        
        <AlertDialog>
        <AlertDialogTrigger>
            <Avatar>
                <AvatarImage src="/user.jpeg"/>
                <AvatarFallback>404 Not found</AvatarFallback>
            </Avatar>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-zinc-800 text-zinc-50 border-zinc-600">
            <AlertDialogHeader>
            <AlertDialogTitle>Your Account</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className="bg-zinc-900 border-zinc-700">Close</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}