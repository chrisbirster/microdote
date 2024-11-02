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

          <div class="flex items-center gap-4">
            <a
              href="https://github.com/chrisbirster/microdote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-6 h-6 text-white hover:text-gray-400"
                fill="text-secondary"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
      2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87
      .31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.69
      7.69 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44
      1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
      3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55
      .38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a
              href={auth.status() === "authenticated" ? "/logout" : "/login"}
              class="bg-secondary text-white hover:bg-secondaryhover px-3 py-2 rounded-md text-sm font-medium"
            >
              {auth.status() === "authenticated" ? "Logout" : "login"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
