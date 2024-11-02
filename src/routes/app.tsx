import { Match, Switch, type VoidComponent } from "solid-js";
import { clientOnly } from "@solidjs/start";
const ClientOnlyComp = clientOnly(() => import("../components/timer"));
import { useAuth } from "@solid-mediakit/auth/client";
import { Navbar } from "~/components/navbar";
import { FooterSection } from "~/components/footer-section";

const TimerPage: VoidComponent = () => {
  const auth = useAuth();
  return (
    <>
      <Navbar />
      <div class="m-16">
        <div class="h-16" />
        <Switch fallback={<p>Loading ...</p>}>
          <Match when={auth.status() === "unauthenticated"}>
            <div class="flex flex-col items-center justify-center gap-12">
              <div class="flex flex-col items-center justify-center">
                <h2 class="font-bold">Welcome to Microdote</h2>
                <p>Sign in to view this page</p>
              </div>
              <button
                onClick={async () => {
                  await auth.signIn("google");
                }}
                class="flex items-center justify-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google Logo"
                  class="w-5 h-5 mr-2"
                />
                Sign in with Google
              </button>
            </div>
          </Match>
          <Match when={auth.status() === "authenticated"}>
            <ClientOnlyComp user={auth.session()?.user} />
            <div class="flex flex-col items-center mt-20">
              <p>
                "If people knew how hard I worked to achieve my mastery, it
                wouldn’t seem so wonderful after all.”
              </p>
              <p>– Michelangelo</p>
            </div>
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default TimerPage;
