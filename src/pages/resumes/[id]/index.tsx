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
import { IoIosArrowDown } from "react-icons/io";
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
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-medium">Resume editor</h1>
      {/* CVs */}
      <div className="flex gap-6">
        <div className="flex w-1/2 flex-col gap-6">
          {PROFILE_SECTIONS?.map((section, i) => {
            return <SectionItem section={section} key={i} />;
          })}
        </div>

        <div className="flex h-[842px] w-[595px] flex-1 items-center justify-center rounded border p-5">
          CV Preview
        </div>
      </div>
    </div>
  );
};

interface SectionItemI {
  title: string;
  value: string;
  Icon: LucideIcon;
  Component: () => React.ReactNode;
}

const SectionItem = ({ section }: { section: SectionItemI }) => {
  const [opened, setOpen] = useState(false);
  const { title, Icon, Component } = section;
  return (
    <div className="flex flex-col gap-5 rounded border p-3">
      <div
        className={clsx(
          "-m-3 flex cursor-pointer items-center justify-between bg-slate-50/50 p-3",
          {
            "border-b": opened,
          },
        )}
        onClick={() => setOpen(!opened)}
      >
        <div className="flex items-center space-x-2">
          <Icon size={16} className="text-slate-500" />
          <h1>{title}</h1>
        </div>
        <IoIosArrowDown
          className={clsx("", {
            "rotate-180": opened,
          })}
        />
      </div>
      {opened && Component ? (
        <div className="flex p-2">
          <Component />
        </div>
      ) : null}
    </div>
  );
};

ResumeEditor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ResumeEditor;
