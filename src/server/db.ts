import { createClient } from "@libsql/client";
import { serverEnv } from "~/env/server";

export default function db() {
  "use server";
  return createClient({
    url: serverEnv.DB_URL,
    authToken: serverEnv.DB_TOKEN,
  });
}
