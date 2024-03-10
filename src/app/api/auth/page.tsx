"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GitHubButton from "@/components/GitHubSignInButton"

import { useState, useEffect } from "react"
import {signIn} from "next-auth/react"

export default async function AuthPage() {
    const { toast } = useToast()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPw] = useState("")

    const handleLogin = async () => {
        if (!email || !password) toast({title: "Error",description: "Provide an email and a password!"})

    }   
    
    const handleSignUp = async () => {
        if (!name || !email || !password) toast({title: "Error",description: "Provide an email and a password!"})
    }

    return( 
        <div className="w-min-full h-full flex items-center justify-center">
            <Tabs defaultValue="login" className="w-[50%]">
                <TabsList className="w-[100%] bg-zinc-800 text-zinc-100 p-5">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card className="bg-zinc-800 text-zinc-100 border-zinc-700">
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Connect to an existent markme account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" placeholder="xxx@xxx.com" className="p-5 border-zinc-500 outline-0 focus:border-zinc-300" 
                                        onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <br />
                            
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" placeholder="123456" className="p-5 border-zinc-500 outline-0 focus:border-zinc-300"
                                        onChange={(e) => setPw(e.target.value)}/>
                            </div>
                            <br /><br />

                            <Button className="w-full p-5 bg-zinc-900" onClick={() => handleLogin()}>Login</Button>
                            <GitHubButton/>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="signup">
                    <Card className="bg-zinc-800 text-zinc-100 border-zinc-700">
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>Join us by creating your markme account!</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Username</Label>
                                <Input type="text" name="name" placeholder="nandooxz" className="p-5 border-zinc-600 outline-0 focus:border-zinc-300" 
                                        onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <br />

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" placeholder="xxx@xxx.com" className="p-5 border-zinc-600 outline-0 focus:border-zinc-300" 
                                        onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <br />
                            
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" placeholder="123456" className="p-5 border-zinc-600 outline-0 focus:border-zinc-300"
                                        onChange={(e) => setPw(e.target.value)}/>
                            </div>
                            <br />

                            <Button className="w-full p-5 bg-zinc-900" onClick={() => handleSignUp()}>Sign Up</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}