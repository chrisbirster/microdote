import { useAuth } from "@solid-mediakit/auth/client";

export default async function Login() {
  const auth = useAuth();
  await auth.signIn("google", { callbackUrl: "/app" });

  return (
    <div class="mt-16">
      <div class="h-16">
        <p>Logging in. Please wait...</p>
      </div>
    </div>
  );
}
