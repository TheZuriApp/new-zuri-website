import { useEffect } from "react";
import { Link } from "react-router-dom";
import ZuriLogo from "../assets/ZURI.svg";
import ShimmerImage from "../components/home/ShimmerImage";

export default function TermsOfServicePage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Terms of Service | Zuri";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#2A2A2A]">
      <header className="homepage-fade-in sticky top-0 z-50 w-full border-b border-black/6 bg-white/95 backdrop-blur-sm">
        <nav className="relative mx-auto flex min-h-13 max-w-360 items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-28 md:py-2">
          <Link
            to="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0"
            aria-label="Zuri home"
          >
            <ShimmerImage
              src={ZuriLogo}
              className="h-6 w-auto"
              alt="Zuri"
              loading="eager"
              decoding="async"
            />
          </Link>
        </nav>
      </header>

      <main className="mx-auto mt-2 w-full min-w-0 max-w-360 px-3 pb-16 pt-6 sm:px-4 sm:pb-20 sm:pt-8 md:my-5 md:px-6 md:pt-10 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 border-b border-[#00000014] pb-8 sm:mb-10 sm:pb-10">
            <h1 className="text-[clamp(1.5rem,4.2vw,2.25rem)] font-medium leading-[1.12] tracking-tight text-[#2A2A2A] sm:font-normal">
              Zuri Terms of Service
            </h1>
            <p className="mt-3 text-[0.8125rem] text-[#666666] sm:text-sm">
              Last Updated: December 2025
            </p>
          </div>

          <article className="space-y-5 text-[0.9375rem] leading-relaxed text-[#2A2A2A] sm:text-base sm:leading-[1.65]">
            <p className="text-[1.02rem] leading-snug text-[#2A2A2A] sm:text-lg sm:leading-relaxed">
              Welcome to the Zuri website (zuri.in), owned and operated by{" "}
              <strong className="font-semibold">Zuri Technologies Private Limited</strong>.
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              our website, including all content, functionality, and services offered
              thereon.
            </p>
            <p>
              By accessing or using the website, you confirm that you are at least 18
              years old and agree to be bound by these Terms, forming a binding legal
              contract between you and Zuri Technologies Private Limited. If you
              disagree with any part of these terms, you must not use the website.
            </p>
            <p>
              The website provides information, updates, and links related to the Zuri
              application, alongside curated fashion recommendations, some of which
              contain affiliate links. Zuri retains all rights, title, and interest in
              its proprietary technology, including the Virtual Try-On (VTO)
              methodology and any content, branding, or trademarks displayed on the
              website. Your use of this site is subject to the conditions of use,
              content guidelines, and the exclusive jurisdiction detailed below.
            </p>

            <h2 className="pt-6 text-[1.125rem] font-medium text-[#2A2A2A] sm:pt-8 sm:text-xl sm:font-normal">
              Key Conditions of Use:
            </h2>
            <ul className="list-disc space-y-2.5 pl-5 marker:text-[#7C1631]">
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Affiliate Disclaimer:
                </strong>{" "}
                Some links on the website are affiliate links, meaning Zuri earns a
                commission on qualifying purchases made through those links at no extra
                cost to you. This relationship does not influence our product
                recommendations.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Intellectual Property (IP):
                </strong>{" "}
                All software, designs, text, and images related to Zuri are our
                exclusive property. You may not copy, reverse engineer, or commercially
                exploit any website content without our express written permission.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">User Conduct:</strong>{" "}
                You agree not to use the website for any unlawful purpose, including
                posting malicious code, infringing on others&apos; rights, or
                disseminating harmful content.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Governing Law &amp; Jurisdiction:
                </strong>{" "}
                These Terms are governed by the Laws of India. You agree to submit to
                the exclusive jurisdiction of the Courts in Kolkata, West Bengal, India
                for the resolution of any disputes arising out of these Terms.
              </li>
            </ul>
          </article>
        </div>
      </main>
    </div>
  );
}
