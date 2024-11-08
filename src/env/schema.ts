import { z } from "zod";

export const serverScheme = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_TRUST_HOST: z.string().optional(),
  AUTH_URL: z.string().optional(),
  DB_URL: z.string(),
  DB_TOKEN: z.string(),
});

export const clientScheme = z.object({
  MODE: z.enum(["development", "production", "test"]).default("development"),
  VITE_AUTH_PATH: z.string().optional(),
});
