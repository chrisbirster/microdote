import { useAuth } from "@solid-mediakit/auth/client";

export const Navbar = () => {
  const auth = useAuth();
  return (
    <nav class="bg-primary shadow-lg fixed top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between space-x-8 h-16 items-center">
          <div class="flex gap-12 items-center">
            <a href="/" class="text-secondary hover:text-secondaryhover">
              <i class="fa fa-flask fa-lg"></i>
            </a>
            <a
              href="/app"
              class="text-red-900 hover:text-red-800 px-3 py-2 rounded-md text-md font-bold"
            >
              Timer
            </a>
          </div>
          <a
            href={auth.status() === "authenticated" ? "/logout" : "/login"}
            class="bg-secondary text-white hover:bg-secondaryhover px-3 py-2 rounded-md text-sm font-medium"
          >
            {auth.status() === "authenticated" ? "Logout" : "login"}
          </a>
        </div>
      </div>
    </nav>
  );
};
