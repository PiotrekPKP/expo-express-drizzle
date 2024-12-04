import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter, createTRPCContext } from "@repo/trpc";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  })
);

app.listen(process.env.PORT || 8000);
