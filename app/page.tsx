import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Industries } from "@/components/industries";
import { Solutions } from "@/components/solutions";
import { WhoWeAre } from "@/components/who-we-are";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhyUs />
      <Solutions />
      <Industries />
      <ContactSection />
    </>
  );
}
