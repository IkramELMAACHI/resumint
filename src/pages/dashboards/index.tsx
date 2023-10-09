import type { ReactElement } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import type { NextPageWithLayout } from "../_app";
import Layout from "@/layouts/layout";
import Image from "next/image";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium">Resumes</h1>
      {/* <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3].map((c) => {
          return (
            <Card key={c}>
         
              <CardContent>
                <Image
                  width={100}
                  height={100}
                  className="h-full w-full"
                  src="https://cdn.dribbble.com/users/1727695/screenshots/16672599/media/092e741152ccb9397c3e4ba0710252ca.jpg?resize=1600x1200&vertical=center"
                  alt=""
                />
              </CardContent>
              <CardFooter>
                <p>Resume - {c}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div> */}
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
