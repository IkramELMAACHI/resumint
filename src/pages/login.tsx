"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

import { BiLogoLinkedin } from "react-icons/bi";

export default function LogIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">LogIn to Resumint</CardTitle>
          <CardDescription>
            Welcome back, please Connect your LinkedIn account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            variant="outline"
            className="flex items-center space-x-2 bg-blue-600 text-white hover:bg-blue-600  hover:text-white"
            onClick={() => void signIn("linkedin")}
          >
            <BiLogoLinkedin
              className="rounded border bg-white text-blue-600"
              size={25}
            />
            <p className="text-sm">Sign in with LinkedIn</p>
          </Button>

          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div> */}
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled>
            Create account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
