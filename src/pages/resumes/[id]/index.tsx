import { useState, type ReactElement } from "react";
import clsx from "clsx";
import { useDisclosure } from "@mantine/hooks";
import type { NextPageWithLayout } from "../../_app";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Layout from "@/layouts/layout";
import {
  GraduationCap,
  LanguagesIcon,
  Link,
  StarIcon,
  UserCircleIcon,
} from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { Dropzone } from "@mantine/dropzone";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DateInput } from "@mantine/dates";
import { Checkbox, Select, TextInput, Textarea } from "@mantine/core";

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
    Icon: BiBuilding,
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

const PROFILE = {
  profilePic: "https://github.com/shadcn.png",
};

const SectionItem = ({ section }: { section: Record<string, any> }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { title, value, Icon, Component } = section;
  return (
    <div className="flex flex-col gap-5 rounded border p-4">
      <div
        className={clsx(
          "-m-3 flex cursor-pointer items-center justify-between bg-slate-50/50 p-3",
          {
            "border-b": opened,
          },
        )}
        onClick={toggle}
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
      {opened ? <Component /> : null}
    </div>
  );
};

function ProfileInformations() {
  const { profilePic } = PROFILE;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-600">Picture</p>
          <Dropzone
            onDrop={(files) => console.log("accepted files", files)}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
          >
            <Avatar className="h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center rounded border hover:border-slate-500 hover:p-0.5">
              {false ? (
                <AvatarImage src={profilePic} />
              ) : (
                <BsPersonCircle className="text-slate-500" />
              )}
            </Avatar>
          </Dropzone>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-1 gap-5">
            <TextInput label="First Name" className="flex-1" />
            <TextInput label="Last Name" className="flex-1" />
          </div>
          <TextInput label="Adress Email" />
        </div>
      </div>
      <TextInput label="Job Title" />
      <TextInput label="Phone" />

      <Textarea label="Profile Description" />
      <div className="flex space-x-2">
        <TextInput label="City" className="flex-1" />
        <TextInput label="Country" className="flex-1" />
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput label="Portfolio" />
      <TextInput label="Github" />
      <TextInput label="LinkedIn" />
    </div>
  );
}

function Educations() {
  const [date, setDate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
  }>({
    startDate: null,
    endDate: null,
    isCurrent: false,
  });

  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput label="Title" />

      <Textarea label="Description" />

      <div className="flex items-center gap-2 space-x-5">
        <DateInput
          value={date.startDate}
          onChange={(d) => {
            setDate({ ...date, startDate: d });
          }}
          label="Start date"
          className="flex-1"
        />
        <DateInput
          value={date.endDate}
          disabled={date.isCurrent}
          onChange={(d) => {
            setDate({ ...date, endDate: d });
          }}
          label="Start date"
          className="flex-1"
        />
        <Checkbox
          label="Present"
          checked={date?.isCurrent}
          onChange={(event) => {
            setDate({ ...date, isCurrent: event.currentTarget.checked });
          }}
        />
      </div>
    </div>
  );
}

function Experiences() {
  const [date, setDate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
  }>({
    startDate: null,
    endDate: null,
    isCurrent: false,
  });

  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput label="Title" />

      <Textarea label="Description" />

      <div className="flex items-center gap-2 space-x-5">
        <DateInput
          value={date.startDate}
          onChange={(d) => {
            setDate({ ...date, startDate: d });
          }}
          label="Start date"
          className="flex-1"
        />
        <DateInput
          value={date.endDate}
          disabled={date.isCurrent}
          onChange={(d) => {
            setDate({ ...date, endDate: d });
          }}
          label="Start date"
          className="flex-1"
        />
        <Checkbox
          label="Present"
          checked={date?.isCurrent}
          onChange={(event) => {
            setDate({ ...date, isCurrent: event.currentTarget.checked });
          }}
        />
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput label="Language" />
      <Select data={["A1", "A2", "B1", "B2", "C1", "C2"]} label="Level" />
    </div>
  );
}

function Skills() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <TextInput label="Language" />
      <Select
        data={["Novice", "Intermediate", "Proficient", "Expert"]}
        label="Level"
      />
    </div>
  );
}

ResumeEditor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ResumeEditor;
