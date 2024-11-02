import { createClient } from "@libsql/client";
import { serverEnv } from "~/env/server";

import { getRequestEvent } from "solid-js/web";

export const env = () => {
  const event = getRequestEvent();
  const env = event?.nativeEvent.context.cloudflare.env ?? process.env;
  return env;
};

export const createDB = () => {
  "use server";

  return createClient({
    url: env().DB_URL,
    authToken: env().DB_TOKEN,
  });
};
