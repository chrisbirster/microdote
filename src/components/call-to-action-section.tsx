import { useAuth } from "@solid-mediakit/auth/client";

export const CallToActionSection = () => {
  const auth = useAuth();

  return (
    <section class="flex flex-col justify-center items-center bg-green py-16 text-center text-white">
      <h2 class="text-3xl font-bold">Ready to Maximize Your Productivity?</h2>
      <p class="mt-4 max-w-2xl mx-auto">
        Sign up now and take the first step towards more efficient and effective
        studying.
      </p>
      <button
        onClick={async () => {
          await auth.signIn("google", { callbackUrl: "/app" });
        }}
        class="flex items-center justify-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 mt-8"
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          class="w-5 h-5 mr-2"
        />
        Sign in with Google
      </button>
    </section>
  );
};
