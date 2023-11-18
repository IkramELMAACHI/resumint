import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  // createProfile();
  // createResumes();
  // createSections();
  // createSectionContents();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const createProfile = async () => {
  await prisma.profile.create({
    data: {
      fullName: "Ikram EL MAACHI",
      email: "ikram.elmaachi01@gmail.com",
      userId: "clp2ef230000012qfetl4tr9b",
    },
  });
};

const createResumes = async () => {
  await prisma.resume.createMany({
    data: [
      {
        title: "Resume01",
        description: "",
        userId: "clp2ef230000012qfetl4tr9b",
        templateId: "template-1",
      },
      {
        title: "Resume02",
        description: "",
        userId: "clp2ef230000012qfetl4tr9b",
        templateId: "template-2",
      },
    ],
  });
};

const createSections = async () => {
  await prisma.section.createMany({
    data: [
      {
        title: "Education",
        description: "",
        type: "EDUCATION",
        resumeId: "clp44ob520000ldy5lwr9pqez",
      },
      {
        title: "Experience",
        type: "WORK",
        resumeId: "clp44ob520000ldy5lwr9pqez",
      },
    ],
  });
};

const createSectionContents = async () => {
  await prisma.sectionContent.createMany({
    data: [
      {
        title: "Master dgree",
        description: "",
        from: new Date(),
        until: new Date(),
        sectionId: "clp44szwd0000szsil27kp4zw",
      },
      {
        title: "Graphic web designer",
        description: "",
        from: new Date(),
        until: null,
        sectionId: "clp44szwd0001szsixr2bpg93",
      },
    ],
  });
};
