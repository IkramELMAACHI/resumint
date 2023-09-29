import React from "react";
import Link from "next/link";

import { BsArrowLeftShort } from "react-icons/bs";
import AuthLayout from "@/layouts/auth-layout";

export default function Dashboards() {
  return (
    <AuthLayout>
      <div className="m-5 flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl">Welcome to Resumint Dashboards</h1>

        <Link href="/" className="flex items-center space-x-2 text-blue-500">
          <BsArrowLeftShort size={24} />
          <p>Go Back</p>
        </Link>
      </div>
    </AuthLayout>
  );
}
