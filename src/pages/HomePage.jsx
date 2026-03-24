import HeroSection from '../components/home/HeroSection'
import HomeNav from '../components/home/HomeNav'
import GettingDressedSection from '../components/home/GettingDressedSection'
import StyleClosetSection from '../components/home/StyleClosetSection'
import FooterSection from '../components/home/FooterSection'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[rgba(255, 255, 255, 0.2)] font-sans text-zinc-900">
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
                <HomeNav />
            </header>
            <main className="mx-auto my-3 w-full px-3 pb-3 md:my-5 md:px-8 md:pb-5">
                <HeroSection />
                <GettingDressedSection />
                <StyleClosetSection />
                <FooterSection />
            </main>
        </div>
    )
}
