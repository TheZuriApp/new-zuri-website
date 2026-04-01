import { useEffect } from "react";
import { Link } from "react-router-dom";
import ZuriLogo from "../assets/ZURI.svg";
import ShimmerImage from "../components/home/ShimmerImage";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | Zuri";
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
              Privacy Policy
            </h1>
            <p className="mt-3 text-[0.8125rem] text-[#666666] sm:text-sm">
              Last Updated: December 2025
            </p>
          </div>

          <article className="space-y-5 text-[0.9375rem] leading-relaxed text-[#2A2A2A] sm:text-base sm:leading-[1.65]">
            <p className="text-[1.02rem] leading-snug text-[#2A2A2A] sm:text-lg sm:leading-relaxed">
              This Privacy Policy describes how{" "}
              <strong className="font-semibold">Zuri Technologies Private Limited</strong>{" "}
              (&quot;Zuri,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              handles information collected via the Zuri Website (stylmezuri.com) and
              distinguishes it from the sensitive data handled by the Zuri mobile
              application.
            </p>
            <p>
              The purpose of this website policy is primarily to cover browsing and
              contact inquiries, while directing users to the comprehensive in-app
              policy for details on personal data, virtual try-ons (VTO), and biometric
              information collected within the mobile application. We are committed to
              complying with applicable Indian data protection laws, including the
              Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
            <p>
              Our commitment is to transparency in data collection and usage on the
              website. We collect non-sensitive data to improve your experience and
              communicate effectively. For any concerns regarding data privacy, please
              reach out to our designated contact provided on the website.
            </p>

            <h2 className="pt-6 text-[1.125rem] font-medium text-[#2A2A2A] sm:pt-8 sm:text-xl sm:font-normal">
              1. Information Collected by the Website
            </h2>
            <ul className="list-disc space-y-2.5 pl-5 marker:text-[#7C1631]">
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Contact Information:
                </strong>{" "}
                Names and email addresses submitted through contact forms or newsletter
                sign-ups.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Usage Data:
                </strong>{" "}
                Non-personal data like IP addresses, browser type, referring pages, and
                device identifiers for analytics.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Cookies &amp; Tracking:
                </strong>{" "}
                We use cookies for essential website functionality, analytics, and to
                track traffic generated from our affiliate marketing links.
              </li>
            </ul>

            <h2 className="pt-6 text-[1.125rem] font-medium text-[#2A2A2A] sm:pt-8 sm:text-xl sm:font-normal">
              2. How We Use Your Information &amp; Our Commitments
            </h2>
            <ul className="list-disc space-y-2.5 pl-5 marker:text-[#7C1631]">
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Service Delivery:
                </strong>{" "}
                To respond to your inquiries and send you requested newsletters or
                updates.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">Security:</strong> To
                protect the integrity and security of the website and prevent
                unauthorized access or fraud.
              </li>
            </ul>

            <div className="my-8 rounded-[20px] border border-[#0000001a] bg-[#F7F7F7] px-5 py-6 sm:px-7 sm:py-7">
              <h3 className="mb-1.5 text-base font-medium text-[#2A2A2A] sm:text-[1.05rem] sm:font-semibold">
                Sensitive Data Notice
              </h3>
              <p className="text-[0.875rem] leading-relaxed text-[#2A2A2A] sm:text-[0.9375rem]">
                Any sensitive personal data (e.g., user photos, body measurements,
                precise location) required for the Virtual Try-On service is strictly
                handled within the{" "}
                <strong className="font-semibold">Zuri Mobile Application</strong> and
                is governed by the dedicated Zuri App Privacy Policy, which you are
                required to accept upon registration.
              </p>
            </div>

            <h2 className="pt-2 text-[1.125rem] font-medium text-[#2A2A2A] sm:text-xl sm:font-normal">
              3. Your Data Principal Rights (Under DPDP Act)
            </h2>
            <p>
              As a Data Principal (user), you maintain comprehensive rights over your
              personal data processed by Zuri:
            </p>
            <ul className="list-disc space-y-2.5 pl-5 marker:text-[#7C1631]">
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Right to Access Information:
                </strong>{" "}
                You have the right to request a summary of the Personal Data we hold
                about you and the processing activities we undertake.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Right to Correction and Completion:
                </strong>{" "}
                You have the right to request that we correct or update any inaccurate
                or incomplete personal data we hold about you.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Right to Erasure (Deletion):
                </strong>{" "}
                You have the right to request the deletion of your Personal Data once
                the purpose for which it was collected is no longer being served.
              </li>
              <li>
                <strong className="font-semibold text-[#2A2A2A]">
                  Right to Grievance Redressal:
                </strong>{" "}
                You have the right to file a complaint or request assistance regarding
                the exercise of your rights with our designated Data Protection Officer
                (DPO) or Grievance Officer, whose contact information is available in
                the designated section of this Policy.
              </li>
            </ul>
          </article>
        </div>
      </main>
    </div>
  );
}
