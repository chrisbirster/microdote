import { type VoidComponent } from "solid-js";
import { HeroSection } from "~/components/hero-section";
import { FeaturesSection } from "~/components/features-section";
import { HowItWorksSection } from "~/components/how-it-works-section";
import { CallToActionSection } from "~/components/call-to-action-section";
import { FAQSection } from "~/components/faq-section";
import { FooterSection } from "~/components/footer-section";
import { Navbar } from "~/components/navbar";

const Home: VoidComponent = () => {
  return (
    <>
      <Navbar />
      <div class="pt-16 bg-accent min-h-screen flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToActionSection />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Home;
