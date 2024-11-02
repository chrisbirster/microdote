import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.DB_URL ?? "db://url",
  authToken: process.env.DB_TOKEN ?? "some_auth_token",
});
