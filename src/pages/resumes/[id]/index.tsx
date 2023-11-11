import type { ReactElement } from "react";
import { useDisclosure } from "@mantine/hooks";

import type { NextPageWithLayout } from "../../_app";
import { IoIosArrowDown } from "react-icons/io";

import Layout from "@/layouts/layout";
import clsx from "clsx";

const ResumeEditor: NextPageWithLayout = () => {
  const [opened, { open, close, toggle }] = useDisclosure(false);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Resume editor</h1>
      {/* CVs */}
      <div className="flex w-1/2 flex-col gap-5">
        {[1, 2, 3].map((i) => {
          return (
            <div className="flex flex-col gap-5" key={i}>
              <div className="flex items-center space-x-2 p-4" onClick={toggle}>
                <h1>Personal Informations</h1>
                <IoIosArrowDown
                  className={clsx("", {
                    "rotate-180": true,
                  })}
                />
              </div>
              <div className="">ss</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ResumeEditor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ResumeEditor;
