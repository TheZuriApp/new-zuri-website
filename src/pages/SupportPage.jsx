import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ZuriLogo from "../assets/ZURI.svg";
import ShimmerImage from "../components/home/ShimmerImage";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function SupportPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Support | Zuri";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setResult("");
    const formData = new FormData(form);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ""
    );
    formData.append("subject", "Zuri Support Request");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult(
          "Thanks—we received your message and will get back to you soon."
        );
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Support
            </h1>
            <p className="mt-3 text-[0.8125rem] text-[#666666] sm:text-sm">
              Questions, feedback, or help with Zuri? Send us a note and we will
              reply by email.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#0000001a] bg-[#F7F7F7] px-5 py-6 sm:px-7 sm:py-8">
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-[#2A2A2A]"
                  htmlFor="support-name"
                >
                  Full name
                </label>
                <input
                  id="support-name"
                  className="h-12 rounded-full border border-black/10 bg-white px-5 text-base text-[#2A2A2A] outline-none focus:border-[#7C1631]/40 focus:ring-2 focus:ring-[#7C1631]/15"
                  name="name"
                  placeholder="Your name"
                  required
                  type="text"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-[#2A2A2A]"
                  htmlFor="support-email"
                >
                  Email
                </label>
                <input
                  id="support-email"
                  className="h-12 rounded-full border border-black/10 bg-white px-5 text-base text-[#2A2A2A] outline-none focus:border-[#7C1631]/40 focus:ring-2 focus:ring-[#7C1631]/15"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-[#2A2A2A]"
                  htmlFor="support-message"
                >
                  How can we help?
                </label>
                <textarea
                  id="support-message"
                  className="min-h-[130px] rounded-3xl border border-black/10 bg-white px-5 py-4 text-base text-[#2A2A2A] outline-none focus:border-[#7C1631]/40 focus:ring-2 focus:ring-[#7C1631]/15"
                  name="message"
                  placeholder="Describe your question or issue..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 h-12 w-full rounded-full bg-[#7C1631] text-base font-medium text-white transition hover:bg-[#651429] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
              {result ? (
                <p
                  className={`text-center text-sm font-medium ${
                    result.startsWith("Thanks")
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {result}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
