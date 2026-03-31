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
    <div className="homepage-shell min-h-screen max-w-full overflow-x-hidden bg-[rgba(255,255,255,0.2)] font-sans text-zinc-900">
      <header className="homepage-fade-in sticky top-0 z-50 w-full bg-white py-2">
        <HomeNav />
      </header>
      <main className="mx-auto mt-2 flex w-full min-w-0 max-w-360 flex-col gap-10 px-3 pb-6 sm:mt-3 sm:px-4 sm:pb-7 md:my-5 md:gap-0 md:px-6 md:pb-5 lg:px-8 xl:px-10">
        <ScrollReveal delay={90} className="w-full min-w-0">
          <HeroSection />
        </ScrollReveal>
        <SectionSuspense>
          <ScrollReveal delay={160} className="min-w-0 w-full">
            <GettingDressedSection />
          </ScrollReveal>
        </SectionSuspense>
        <SectionSuspense>
          <StyleClosetSection />
        </SectionSuspense>
        <SectionSuspense>
          <ScrollReveal delay={280} className="min-w-0 w-full">
            <FooterSection />
          </ScrollReveal>
        </SectionSuspense>
      </main>
    </div>
  );
}
