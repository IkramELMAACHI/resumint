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
        </CardContent>
      </Card>
    </div>
  );
}
