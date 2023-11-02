import { useState, type ReactElement } from "react";
import Image from "next/image";
import Layout from "@/layouts/layout";
import type { NextPageWithLayout } from "./_app";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
  const [state, setState] = useState({ name: "" });
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {[
          "https://cdn.dribbble.com/userupload/10567628/file/original-2f1c97a21b6f5046a208824adfd48b64.jpg?resize=1504x1128",
          "https://cdn.dribbble.com/users/1727695/screenshots/16672599/media/092e741152ccb9397c3e4ba0710252ca.jpg?resize=1600x1200&vertical=center",
          "https://cdn.dribbble.com/userupload/10567628/file/original-2f1c97a21b6f5046a208824adfd48b64.jpg?resize=1504x1128",
        ].map((url, i) => {
          return (
            <Card key={i}>
              <CardContent>
                <Image
                  width={100}
                  height={100}
                  className="h-full w-full"
                  src={url}
                  alt=""
                />
              </CardContent>
              <CardFooter>
                <div className="flex flex-1 items-center justify-between">
                  <p>Template - {i}</p>

                  <Dialog>
                    <DialogTrigger>
                      <span className="cursor-pointer rounded bg-slate-800 p-3 text-sm text-white">
                        Use this template
                      </span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader className="gap-4">
                        <DialogTitle>Create new resume</DialogTitle>
                        <DialogDescription>
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              onChange={(e) => {
                                setState({ ...state, name: e.target.value });
                              }}
                              id="name"
                              value={state.name}
                            />
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="ml-auto flex items-center space-x-2">
                        <DialogTrigger>
                          <span className="cursor-pointer rounded bg-slate-100 p-3 text-sm">
                            Cancel
                          </span>
                        </DialogTrigger>
                        <Button variant="default">Create new resume</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
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
