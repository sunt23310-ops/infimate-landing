import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import CSideSection from "@/components/sections/CSideSection";
import AICapabilitiesSection from "@/components/sections/AICapabilitiesSection";
import BSideSection from "@/components/sections/BSideSection";
import StatsSection from "@/components/sections/StatsSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)] text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CSideSection />
      <AICapabilitiesSection />
      <BSideSection />
      <StatsSection />
      <CaseStudySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
