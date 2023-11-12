import { type ReactElement } from "react";
import Link from "next/link";
import Layout from "@/layouts/layout";
import type { NextPageWithLayout } from "./_app";
import { Card } from "@/components/ui/card";
import { BsArrowLeftShort } from "react-icons/bs";

const NewResume: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/resumes" className="flex items-center space-x-2">
        <BsArrowLeftShort size={24} />
        <p className="">Create a new resume </p>
      </Link>
      {/* Templates */}
      <Templates />
    </div>
  );
};

const Templates = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3, 4].map((i) => {
          return (
            <Card key={i} className="p-5">
              <div className="flex flex-1 justify-center">Template - {i}</div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

NewResume.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default NewResume;
