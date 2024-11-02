export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 text-center">
          How It Works
        </h2>
        <div class="mt-12 space-y-8">
          {/* Step 1 */}
          <div class="flex items-start">
            <span class="text-red-900 text-3xl font-bold mr-4">1.</span>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">
                Set Your Study Duration
              </h3>
              <p class="text-gray-600 mt-2">
                Choose how long you want to study. Microdote adapts to your
                needs, whether it's a quick review or an intensive prep session.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div class="flex items-start">
            <span class="text-red-900 text-3xl font-bold mr-4">2.</span>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">
                Embrace the Gaps
              </h3>
              <p class="text-gray-600 mt-2">
                Let Microdote introduce random, short breaks. Use these moments
                to relax briefly, so you return to studying refreshed.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div class="flex items-start">
            <span class="text-red-900 text-3xl font-bold mr-4">3.</span>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">
                Manage Your Tasks
              </h3>
              <p class="text-gray-600 mt-2">
                Keep track of assignments, projects, and deadlines with the
                built-in task manager.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div class="flex items-start">
            <span class="text-red-900 text-3xl font-bold mr-4">4.</span>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">
                Monitor Your Progress
              </h3>
              <p class="text-gray-600 mt-2">
                Stay motivated by seeing how much you've accomplished, and
                adjust your study habits based on what works best for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
