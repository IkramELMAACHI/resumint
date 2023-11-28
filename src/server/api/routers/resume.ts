import { protectedProcedure } from "@/server/api/trpc";

export const ResumeRouter = {
  listResumes: protectedProcedure.query(async ({ ctx }) => {
    const {
      session: {
        user: { email },
      },
    } = ctx;

    const user = await ctx.db.user.findFirstOrThrow({
      where: { email },
    });

    if (!user) {
      console.log("no user found with this email", email);
    }

    const profile = await ctx.db.profile.findFirstOrThrow({
      where: {
        userId: user?.id,
      },
    });

    const resumes = await ctx.db.resume.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        sections: {
          include: { sectionContent: true },
        },
      },
    });

    return {
      profile,
      resumes,
    };
  }),
};
