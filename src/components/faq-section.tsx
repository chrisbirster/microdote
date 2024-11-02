export const FAQSection = () => {
  return (
    <section class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 text-center">
          Frequently Asked Questions
        </h2>
        <div class="mt-12 space-y-8">
          {/* FAQ 1 */}
          <div>
            <h3 class="text-xl font-semibold text-gray-800">
              What are gap effects?
            </h3>
            <p class="text-gray-600 mt-2">
              Gap effects are short, intermittent breaks introduced during tasks
              to help reset attention and reduce mental fatigue, leading to
              better focus and retention.
            </p>
          </div>
          {/* FAQ 2 */}
          <div>
            <h3 class="text-xl font-semibold text-gray-800">
              Who is Dr. Andrew Huberman?
            </h3>
            <p class="text-gray-600 mt-2">
              Dr. Huberman is a neuroscientist and professor at Stanford
              University, known for his research on brain function,
              neuroplasticity, and how to optimize performance.
            </p>
          </div>
          {/* FAQ 3 */}
          <div>
            <h3 class="text-xl font-semibold text-gray-800">
              Is there a mobile app?
            </h3>
            <p class="text-gray-600 mt-2">
              Not yet! Microdote is bested used on the web. The application is
              under heavy development adding new features. A mobile app is
              slated for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
