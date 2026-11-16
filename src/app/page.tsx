import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { HowItWorks } from "@/components/how-it-works";
import { Companies } from "@/components/companies";
import { PilotPlan } from "@/components/pilot-plan";
import { Women } from "@/components/women";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Stats />
        <HowItWorks />
        <Companies />
        <PilotPlan />
        <Women />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
