import React, { useState, type ReactElement } from "react";
import clsx from "clsx";
import type { NextPageWithLayout } from "../../_app";
import Layout from "@/layouts/layout";
import {
  Building,
  GraduationCap,
  LanguagesIcon,
  Link,
  type LucideIcon,
  StarIcon,
  UserCircleIcon,
} from "lucide-react";
import { IoIosArrowDown, IoMdArrowDropleft, IoMdEye } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TextInput } from "@/components/ui/text-input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdDownload } from "react-icons/md";
import Image from "next/image";

const ProfileInformations = () => {
  const { profilePic } = PROFILE;

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <Label className="text-sm text-slate-600">Picture</Label>

          <Avatar className="h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center rounded border hover:border-slate-500 hover:p-0.5">
            {false ? (
              <AvatarImage src={profilePic} />
            ) : (
              <BsPersonCircle className="text-slate-500" />
            )}
          </Avatar>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-1 gap-5">
            <TextInput title="First Name" className="flex-1" />
            <TextInput title="Last Name" className="flex-1" />
          </div>
          <TextInput title="Adress Email" />
        </div>
      </div>
      <TextInput title="Job Title" />
      <TextInput title="Phone" />
      <Textarea title="Profile Description" />
      <div className="flex flex-1 gap-5">
        <TextInput title="City" className="flex-1" />
        <TextInput title="Country" className="flex-1" />
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput title="Portfolio" />
      <TextInput title="Github" />
      <TextInput title="LinkedIn" />
    </div>
  );
};

const Educations = () => {
  const [date, setDate] = useState<{
    startDate: string;
    endDate: string;
    isCurrent: boolean;
  }>({
    startDate: "",
    endDate: "",
    isCurrent: false,
  });

  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput title="Title" />
      <Textarea title="Description" />
      <div className="flex items-center gap-2 space-x-5">
        <TextInput
          type="date"
          value={date.startDate}
          onChange={(e) => {
            setDate({ ...date, startDate: e.target.value });
          }}
          title="Start date"
          className="flex-1"
        />
        <TextInput
          type="date"
          value={date.endDate}
          disabled={!!date.isCurrent}
          onChange={(e) => {
            setDate({ ...date, endDate: e.target.value });
          }}
          title="End date"
          className="flex-1"
        />

        <div className="flex items-center gap-2 text-slate-600">
          <Checkbox
            title="Present"
            checked={date?.isCurrent}
            onCheckedChange={(checked) => {
              setDate((prevState) => {
                return { ...prevState, isCurrent: !!checked };
              });
            }}
          />
          <Label>Present</Label>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  const [date, setDate] = useState<{
    startDate: string;
    endDate: string;
    isCurrent: boolean;
  }>({
    startDate: "",
    endDate: "",
    isCurrent: false,
  });

  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput title="Title" />
      <Textarea title="Description" />
      <div className="flex items-center gap-2 space-x-5">
        <TextInput
          type="date"
          value={date.startDate}
          title="Start date"
          className="flex-1"
          onChange={(e) => {
            setDate({ ...date, startDate: e.target.value });
          }}
        />
        <TextInput
          type="date"
          value={date.endDate}
          disabled={!!date.isCurrent}
          title="End date"
          className="flex-1"
          onChange={(e) => {
            setDate({ ...date, endDate: e.target.value });
          }}
        />
        <div className="flex items-center gap-2   text-slate-600">
          <Checkbox
            title="Present"
            checked={date?.isCurrent}
            onCheckedChange={(checked) => {
              setDate((prevState) => {
                return { ...prevState, isCurrent: !!checked };
              });
            }}
          />
          <Label>Present</Label>
        </div>
      </div>
    </div>
  );
};

const Languages = () => {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput title="Language" />
      <Label>Levels</Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent>
          {["A1", "A2", "B1", "B2", "C1", "C2"].map((s, i) => {
            return (
              <SelectItem value={s} key={i}>
                {s}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput title="Language" />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent>
          {["Novice", "Intermediate", "Proficient", "Expert"].map((s, i) => {
            return (
              <SelectItem value={s} key={i}>
                {s}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

const PROFILE_SECTIONS = [
  {
    title: "Personal Informations",
    value: "BASE_INFOS",
    Icon: UserCircleIcon,
    Component: ProfileInformations,
  },
  {
    title: "Socials",
    value: "SOCIALS",
    Icon: Link,
    Component: Socials,
  },
  {
    title: "Educations",
    value: "EDUCATIONS",
    Icon: GraduationCap,
    Component: Educations,
  },
  {
    title: "Experiences",
    value: "EXPERIENCES",
    Icon: Building,
    Component: Experiences,
  },
  {
    title: "Skills",
    value: "SKILLS",
    Icon: StarIcon,
    Component: Skills,
  },
  {
    title: "Languages",
    value: "LANGUAGES",
    Icon: LanguagesIcon,
    Component: Languages,
  },
];

const PROFILE = {
  profilePic: "https://github.com/shadcn.png",
};

const ResumeEditor: NextPageWithLayout = () => {
  return (
    <div className="flex flex-1 flex-col">
      <SubNav />
      <MainEditor />
    </div>
  );
};

function SubNav() {
  return (
    <div className="flex w-full flex-col items-center border-b border-b-slate-100 bg-white px-5 py-4 max-md:max-w-full">
      <div className="flex w-full max-w-screen-xl items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="my-auto flex items-center gap-1 rounded-full bg-slate-100 px-4 py-1">
          <IoMdArrowDropleft size={20} />
          <div className="whitespace-nowrap font-medium leading-6 text-slate-700">
            Back to dashboard
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5">
          <Button className="flex items-center gap-2" variant="outline">
            <IoMdEye />
            <span>Preview</span>
          </Button>
          <Button>
            <div className="flex items-center gap-2">
              <MdDownload />
              <span> Download PDF</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

function MainEditor() {
  return (
    <div className="mx-auto my-12 flex w-full  max-w-screen-xl max-md:my-10 max-md:max-w-full">
      <div className="flex flex-1 flex-col items-stretch max-md:ml-0 max-md:w-full">
        {PROFILE_SECTIONS.map((section, i) => {
          return <SectionItem key={i} section={section} />;
        })}
      </div>
      <div className="ml-5 flex w-[48%] flex-col items-stretch max-md:ml-0 max-md:w-full">
        <Image
          width={100}
          height={100}
          alt="img"
          // loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7a355db-1165-4a25-9fe7-540d9f5f304d?apiKey=b4774bd3ec384adea96ede89c16c6bc7&amp;"
          className="aspect-[0.71] w-full overflow-hidden object-contain object-center shadow max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
}

interface SectionItemI {
  title: string;
  Icon: LucideIcon;
  Component: () => React.JSX.Element;
}
function SectionItem({ section }: { section: SectionItemI }) {
  const { title, Icon, Component } = section;
  const [opened, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        "mt-6 flex w-full cursor-pointer flex-col rounded-lg border border-slate-100 bg-white",
        {
          "border-b": opened,
        },
      )}
      onClick={() => setOpen(!opened)}
    >
      <div
        className={clsx("flex w-full justify-between gap-5 p-5", {
          "rounded border-b border-b-slate-50": opened,
        })}
      >
        <div className="flex items-center justify-between gap-3">
          <Icon size={16} className="text-slate-500" />
          <h3 className="whitespace-nowrap font-medium leading-6 text-slate-700">
            {title}
          </h3>
        </div>
        <IoIosArrowDown
          className={clsx("", {
            "rotate-180": opened,
          })}
        />
      </div>
      {opened && Component ? (
        <div className="flex p-3">
          <Component />
        </div>
      ) : null}
    </div>
  );
}

ResumeEditor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ResumeEditor;
