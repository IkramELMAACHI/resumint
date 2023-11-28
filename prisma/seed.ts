import { PrismaClient } from "@prisma/client";
import { stringify } from "querystring";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  const user = await prisma.user.findFirstOrThrow();

  if (!user) {
    console.log("no user found");
    return;
  }

  const userId = user.id;

  // Resume
  await prisma.resume.deleteMany();
  const resumes = await prisma.resume.createMany({
    data: [
      {
        title: "Resume01",
        description: "",
        userId,
        templateId: "template-1",
      },
      {
        title: "Resume02",
        description: "",
        userId,
        templateId: "template-2",
      },
    ],
  });
  if (!resumes) {
    console.log("Resumes data not found");
    return;
  }
  // fetch resume
  const resume = await prisma.resume.findFirst();
  if (!resume) {
    console.log("no resume found");
    return;
  }

  // Sections
  await prisma.section.deleteMany();
  const sections = await prisma.section.createMany({
    data: [
      {
        title: "Education",
        description: "",
        type: "EDUCATION",
        resumeId: resume.id,
      },
      {
        title: "Experience",
        type: "WORK",
        resumeId: resume.id,
      },
      {
        title: "Languages",
        description: "",
        type: "LANGUAGES",
        resumeId: resume.id,
      },
      {
        title: "Interests",
        description: "",
        type: "INTERESTS",
        resumeId: resume.id,
      },
      {
        title: "Skills",
        description: "",
        type: "SKILLS",
        resumeId: resume.id,
      },
    ],
  });
  if (!sections) {
    console.log("Sections data not found");
    return;
  }

  // fetch education section
  const educationSection = await prisma.section.findFirst({
    where: {
      type: "EDUCATION",
    },
  });
  if (!educationSection) {
    console.log('no section exist with "EDUCATION" type');
    return;
  }

  // fetch experience section
  const experienceSection = await prisma.section.findFirst({
    where: {
      type: "WORK",
    },
  });
  if (!experienceSection) {
    console.log('no section exist with "WORK" type');
    return;
  }

  // fetch language section
  const languageSection = await prisma.section.findFirst({
    where: {
      type: "LANGUAGES",
    },
  });
  if (!languageSection) {
    console.log('no section exist with "LANGUAGE" type');
    return;
  }

  // fetch skills section
  const skillsSection = await prisma.section.findFirst({
    where: {
      type: "SKILLS",
    },
  });
  if (!skillsSection) {
    console.log('no section exist with "SKILLS" type');
    return;
  }
  // Section contents
  await prisma.sectionContent.deleteMany();
  const sectionContent = await prisma.sectionContent.createMany({
    data: [
      {
        title: "Master dgree",
        description: "",
        establishment: "University of Toronto",
        location: "Toronto, Canada",
        from: new Date(),
        until: new Date(),
        sectionId: educationSection.id,
      },
      {
        title: "Bachelor's degree ",
        establishment: "University of Toronto",
        location: "Toronto, Canada",
        description: "",
        from: new Date(),
        until: new Date(),
        sectionId: educationSection.id,
      },
      {
        title: "Product manager",
        description: "",
        establishment: "Visa",
        location: "Toronto, Canada",
        from: new Date(),
        until: null,
        sectionId: experienceSection.id,
      },
      {
        title: "Graphic web designer",
        description: "",
        establishment: "Blow",
        location: "Toronto, Canada",
        from: new Date(),
        until: new Date(),
        sectionId: experienceSection.id,
      },
      {
        title: "English",
        description: "",
        level: "100",
        sectionId: languageSection.id,
      },
      {
        title: "Portuguese",
        description: "80",
        level: "",
        sectionId: languageSection.id,
      },
      {
        title: "Leadership And The Ability To Take Initiative",
        description: "",
        level: "100",
        sectionId: skillsSection.id,
      },
      {
        title: "Critical Thinking And Analytical Skills",
        description: "50",
        level: "",
        sectionId: skillsSection.id,
      },
    ],
  });

  if (!sectionContent) {
    console.log("sectionContent data not found");
    return;
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
