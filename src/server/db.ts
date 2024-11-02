import { createClient } from "@libsql/client";
import { serverEnv } from "~/env/server";

export const db = () => {
  "use server";
  return createClient({
    url: serverEnv.DB_URL,
    authToken: serverEnv.DB_TOKEN,
  });
};
