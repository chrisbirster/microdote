import { type SolidAuthConfig } from "@solid-mediakit/auth";
import Google from "@auth/core/providers/google";
import { serverEnv } from "~/env/server";

declare module "@auth/core/types" {
  export interface Session {
    user: DefaultSession["user"];
  }
}

console.log(serverEnv);

export const authOptions: SolidAuthConfig = {
  providers: [
    Google({
      clientId: serverEnv.AUTH_GOOGLE_ID,
      clientSecret: serverEnv.AUTH_GOOGLE_SECRET,
    }),
  ],
  debug: true,
  basePath: import.meta.env.VITE_AUTH_PATH,
};
