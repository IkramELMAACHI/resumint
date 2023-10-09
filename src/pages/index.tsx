import type { ReactElement } from "react";

import type { NextPageWithLayout } from "./_app";
import Layout from "@/layouts/layout";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium">Home</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
