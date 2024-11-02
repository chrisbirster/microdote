export const FeaturesSection = () => {
  return (
    <section id="features" class="bg-green py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white text-center">Key Features</h2>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-red-900">
              Customizable Study Timer
            </h3>
            <p class="text-gray-600 mt-2">
              Select your preferred study duration to fit your schedule and
              optimize productivity.
            </p>
          </div>
          {/* Feature 2 */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-red-900">
              Randomized Gap Effects
            </h3>
            <p class="text-gray-600 mt-2">
              Experience random, short breaks inserted into your study sessions,
              designed to reset your focus and prevent cognitive fatigue.
            </p>
          </div>
          {/* Feature 3 */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-red-900">
              Neuroscience-Backed Protocols
            </h3>
            <p class="text-gray-600 mt-2">
              Inspired by the research of Dr. Andrew Huberman, Microdote
              utilizes techniques proven to enhance learning and memory.
            </p>
          </div>
          {/* Feature 4 */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-red-900">
              Integrated Task Manager
            </h3>
            <p class="text-gray-600 mt-2">
              Add, edit, and delete tasks seamlessly as you study, keeping all
              your to-dos organized in one place.
            </p>
          </div>
          {/* Feature 5 */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-red-900">Secure Login</h3>
            <p class="text-gray-600 mt-2">
              Protect your progress and data with password-protected accounts
              accessible across all your devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
