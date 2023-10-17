import { type ReactElement } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import Layout from "@/layouts/layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const { status } = useSession();
  const { push } = useRouter();

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium">Landing Page</h1>
      {status == "authenticated" ? (
        <Link
          href="/resumes"
          className="flex items-center space-x-2 text-blue-500"
        >
          <p>Go to Dashboard</p>
          <BsArrowRightShort size={24} />
        </Link>
      ) : (
        <Button
          onClick={() => {
            void push("/login");
          }}
        >
          <p>Get Started</p>
        </Button>
      )}
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
