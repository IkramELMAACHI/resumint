import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../_app";
import Layout from "@/layouts/layout";
import { BiPlus } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

const Resumes: NextPageWithLayout = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Resumes</h1>
      {/* CVs */}
      <div className="grid grid-cols-4 gap-5">
        {[1, 2, 3].map((i) => {
          return (
            <Link href={`/resumes/${i}`} key={i}>
              <p
                key={i}
                className="flex items-center justify-center rounded border p-5"
              >
                <p>Resume - {i}</p>
              </p>
            </Link>
          );
        })}

        <div
          onClick={() => {
            void push("/new");
          }}
          className="flex cursor-pointer items-center justify-center space-x-2 rounded border border-dashed p-5"
        >
          <BiPlus />
          <p>Create new</p>
        </div>
      </div>
    </div>
  );
};

Resumes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Resumes;
