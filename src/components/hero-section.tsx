export const HeroSection = () => {
  return (
    <section class="flex-grow container mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-gray-800">
        Elevate Your Study Sessions
      </h1>
      <p class="text-gray-600 mt-4 max-w-2xl">
        Harness the power of neuroscience to maximize your productivity.
      </p>
      <a
        href="/app"
        class="mt-8 inline-block bg-secondary text-white px-8 py-4 rounded-full text-lg hover:bg-secondaryhover"
      >
        Get Started
      </a>
    </section>
  );
};
