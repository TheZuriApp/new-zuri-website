import { lazy } from "react";
import SectionSuspense from "../components/common/SectionSuspense";
import HeroSection from "../components/home/HeroSection";
import HomeNav from "../components/home/HomeNav";
import ScrollReveal from "../components/home/ScrollReveal";

const GettingDressedSection = lazy(
  () => import("../components/home/GettingDressedSection"),
);
const StyleClosetSection = lazy(
  () => import("../components/home/StyleClosetSection"),
);
const FooterSection = lazy(() => import("../components/home/FooterSection"));

export default function HomePage() {
  return (
    <div className="homepage-shell min-h-screen bg-[rgba(255,255,255,0.2)] font-sans text-zinc-900">
      <header className="homepage-fade-in sticky top-0 z-50 w-full bg-white py-2">
        <HomeNav />
      </header>
      <main className="mx-auto mt-3 w-full md:my-5 md:px-8 md:pb-5">
        <ScrollReveal delay={90}>
          <HeroSection />
        </ScrollReveal>
        <SectionSuspense>
          <ScrollReveal delay={160}>
            <GettingDressedSection />
          </ScrollReveal>
        </SectionSuspense>
        <SectionSuspense>
          <StyleClosetSection />
        </SectionSuspense>
        <SectionSuspense>
          <ScrollReveal delay={280}>
            <FooterSection />
          </ScrollReveal>
        </SectionSuspense>
      </main>
    </div>
  );
}
