import { createClient } from "@libsql/client";
import { serverEnv } from "~/env/server";
import { clientEnv } from "~/env/client";

export const db = createClient({
  url: clientEnv.DB_URL,
  authToken: clientEnv.DB_TOKEN,
});
