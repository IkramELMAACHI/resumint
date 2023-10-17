import Head from "next/head";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface LayoutI {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutI) {
  return (
    <>
      <Head>
        <title>Resumint</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col p-5">{children}</main>
      <Footer />
    </>
  );
}

function Navbar() {
  const { data } = useSession();

  return (
    <nav className="flex flex-1 justify-between border border-gray-200 bg-white px-3 py-2">
      <a href="https://flowbite.com/" className="flex items-center">
        {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          /> */}
        <span className="self-center whitespace-nowrap text-2xl text-green-600">
          Resumint
        </span>
      </a>

      {data?.user ? (
        <div className="flex items-center space-x-2">
          {/* TODO: if there is no user? */}
          <p className="text-sm">{data.user.name}</p>
          <Avatar>
            <AvatarImage
              sizes="sm"
              src={data.user.image ?? "/"}
              alt="@shadcn"
            />
          </Avatar>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}

function Footer() {
  return <div className="flex flex-1 border p-2">Footer</div>;
}
