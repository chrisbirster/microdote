"use server";

import { createClient } from "@libsql/client";

export const db = createClient({
  url: import.meta.env.DB_URL,
  authToken: import.meta.env.DB_TOKEN,
});
