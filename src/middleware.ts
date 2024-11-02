import { authMiddleware } from "@solid-mediakit/auth";
import { createMiddleware } from "@solidjs/start/middleware";
import { authOptions } from "./server/auth";
import { createDB } from "./server/db";
import { FetchEvent } from "@solidjs/start/server";

const pathsToPreload = ["/"];

export const injectDB = async (event: FetchEvent) => {
  event.locals.db = createDB();
};

export default createMiddleware({
  onRequest: [injectDB, authMiddleware(pathsToPreload, authOptions)],
});
