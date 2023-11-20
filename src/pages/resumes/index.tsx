import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/layouts/layout";
import { BiPlus } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "@/lib/api";
import Image from "next/image";

const Resumes: NextPageWithLayout = () => {
  const { push } = useRouter();

  const { data, isLoading } = api.listResumes.useQuery();

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  // if (data) {
  //   return (

  //     // <pre>{JSON.stringify(data, null, 2)}</pre>;
  //   );
  // }

  return (
    <div className="mx-auto flex flex-1 flex-col items-center justify-center gap-5">
      <h1 className="self-start text-2xl font-medium">Resumes</h1>
      {/* CVs */}
      <div className="grid hidden grid-cols-4 gap-5">
        {[1, 2, 3].map((i) => {
          return (
            <Link href={`/resumes/${i}`} key={i}>
              <p
                key={i}
                className="flex items-center justify-center rounded border p-5"
              >
                <span>Resume - {i}</span>
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
      <Template01 />
    </div>
  );
};

Resumes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Template01 = () => {
  return (
    <div className="flex h-[842px] w-[595px] flex-1 bg-white font-thin">
      <div className="flex w-[188px] flex-col border bg-slate-600 px-3 py-5 text-white">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col border p-5">
        <Content />
      </div>
    </div>
  );
};

const EXPERIENCES = [
  {
    title: "Product Designer",
    establishment: "Uber",
    date: "Dec 2013 - Mar 2015",
    section: "WORK",
    sectionContent: [
      "Designed safety-focused experiences for Riders and Drivers",
      "Physical space problem solving and it’s interaction with the digital",
      "Navigated organization to achieve operational improvements",
    ],
  },
  {
    title: "Product Designer",
    establishment: "IFTTT",
    date: "Mar 2015 - Present",
    section: "WORK",
    sectionContent: [
      "Product and system design for a complex product",
      "Designed both consumer and developer products for IFTTT",
      "Responsible for maintaining design across iOS, Android, and web",
    ],
  },
  {
    title: "Product Designer",
    establishment: "Facebook",
    date: "June 2013 - Sep 2013",
    section: "WORK",
    sectionContent: [
      "Designer and prototyped internal tools",
      "Worked with Privacy team to build assets and features",
      "Redesigned Newsfeed curation experience for mobile",
    ],
  },
  {
    title: "UX/UI Design Intern",
    establishment: "Google Maps",
    date: "June 2012 - Sep 2013",
    section: "WORK",
    sectionContent: [
      "Contributed to Maps on iOS wireframe ans user experience",
      "Designed and prototyped onboarding experience",
      "Asset and feature design for Maps on Android",
    ],
  },
];

const EDUCATIONS = [
  {
    title: "Interdisciplinary studies",
    establishment: "Brown University",
    date: "Sep 2010 - May 2013",
    section: "EDUCATION",
  },
];
function Content() {
  return (
    <>
      <div className="flex flex-col gap-3.5">
        <h3 className="text-lg font-medium capitalize">Profile</h3>
        <p className="text-justify text-sm">
          I'm a product designer focused on ensuring great user experience and
          meeting business needs of designed products. I’m also experienced in
          implementing marketing strategies and developing both on and offline
          campaigns. My philosophy is to make products understandable, useful
          and long-lasting at the same time recognizing they're never finished
          and constantly changing. I'm always excited to face new challenges and
          problems.
        </p>
      </div>

      <div className="mt-8 flex flex-col">
        <h3 className="text-lg font-medium">Experience</h3>
        <div className="mt-3.5 flex flex-col gap-1">
          {EXPERIENCES.map((ex, i) => {
            const { title, date, establishment, sectionContent } = ex;
            return (
              <div className="mt-2 flex flex-col">
                <span className="text-sm font-medium">{establishment}</span>
                <div className="flex justify-between">
                  <span className="text-sm">{title}</span>
                  <span className="text-xs text-slate-500">{date}</span>
                </div>
                <ul className="list-disc px-2 text-justify text-[13px]">
                  {sectionContent?.map((sec, i) => {
                    return <li key={i}>{sec}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <h3 className="text-lg font-medium">Education</h3>
        <div className="mt-3.5 flex flex-col gap-1">
          {EDUCATIONS.map((ex, i) => {
            const { title, date, establishment } = ex;
            return (
              <div className="mt-2 flex flex-col">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{establishment}</span>
                  <span className="text-xs text-slate-500">{date}</span>
                </div>
                <span className="text-sm">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Image
          src="/picture01.png"
          alt="pic"
          className="rounded-full border border-slate-500"
          width={80}
          height={80}
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">Taylor Stimbert</h3>
          <span className="text-sm">Product Designer</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <h3 className="text-lg font-medium">Details</h3>
        <div className="mt-3.5 flex flex-col gap-1">
          <span className="text-sm font-medium">Adress</span>
          <span className="text-sm">San Francisco, California</span>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Phone</span>
          <span className="text-sm">(315) 802-8179</span>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Email</span>
          <span className="text-sm">tstimbert@gmail.com</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <h3 className="text-lg font-medium">Socials</h3>
        <div className="mt-3.5 flex flex-col gap-1">
          <span className="text-sm font-medium">LinkedIn</span>
          <span className="text-sm">TaylorStimbert</span>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Dribble</span>
          <span className="text-sm">T-Stimbert</span>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Github</span>
          <span className="text-sm">Taylor-Stimbert</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <h3 className="text-lg font-medium">Skills</h3>
        <div className="mt-3.5 flex flex-col gap-1">
          <span className="text-sm font-medium">Figma</span>
          <div className="h-1 w-full rounded-full bg-slate-400">
            <div className="h-1 w-[98%] rounded-full bg-slate-50"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Sketch</span>
          <div className="h-1 w-full rounded-full bg-slate-400">
            <div className="h-1 w-[60%] rounded-full bg-slate-50"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Adob xD</span>
          <div className="h-1 w-full rounded-full bg-slate-400">
            <div className="h-1 w-[80%] rounded-full bg-slate-50"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <h3 className="text-lg font-medium">Languages</h3>
        <div className="mt-3.5 flex flex-col gap-1">
          <span className="text-sm font-medium">English</span>
          <div className="h-1 w-full rounded-full bg-slate-400">
            <div className="h-1 w-[100%] rounded-full bg-slate-50"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Portuguese</span>
          <div className="h-1 w-full rounded-full bg-slate-400">
            <div className="h-1 w-[60%] rounded-full bg-slate-50"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="text-sm font-medium">Spanish</span>
          <div className="h-1 w-full rounded-full bg-slate-400">
            <div className="h-1 w-[80%] rounded-full bg-slate-50"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resumes;
