import { protectedProcedure } from "@/server/api/trpc";

export const ResumeRouter = {
  listResumes: protectedProcedure.query(({ ctx }) => {
    return ctx.db.resume.findMany();
  }),
};
