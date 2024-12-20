import { testRouter } from "./router/test";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  test: testRouter,
});

export type AppRouter = typeof appRouter;
