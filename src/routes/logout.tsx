import { useAuth } from "@solid-mediakit/auth/client";

export default async function Logout() {
  const auth = useAuth();
  await auth.signOut({ redirectTo: "/" });

  return (
    <div class="mt-16">
      <div class="h-16" />
    </div>
  );
}
