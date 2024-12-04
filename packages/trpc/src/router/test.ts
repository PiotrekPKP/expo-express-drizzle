import { createTRPCRouter, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
  testData: publicProcedure.query(({ ctx }) => {
    return "Hello!";
  }),
});
