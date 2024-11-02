"use server";

import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN,
});
