import { Link } from "react-router-dom";
import { StoreBadge } from "./HeroPrimitives";
import BookOpenSvg from "../../assets/HomePage/book-open.svg";
import BookmarkSvg from "../../assets/HomePage/bookmark.svg";
import LightningSvg from "../../assets/HomePage/lightning.svg";
import InstagramSvg from "../../assets/HomePage/instagram.svg";
import LinkedInSvg from "../../assets/HomePage/linkedin.svg";
import ZuriLogo from "../../assets/ZURI.svg";
import ShimmerImage from "./ShimmerImage";

export default function FooterSection() {
  return (
    <section className="mt-0 bg-white md:mt-8 md:p-6">
      <div className="mx-0 w-full rounded-[20px] bg-white px-3 py-8 sm:px-3.5 sm:py-9 md:bg-[#F7F7F7] md:px-12 md:py-14">
        <p className="mb-1.5 text-[0.8125rem] tracking-[0.01em] text-[#666666] sm:mb-2 sm:text-[0.9rem] md:text-center md:text-[1.25rem]">
          And there&apos;s more
        </p>
        <h2 className="mb-6 text-[clamp(1.38rem,4.8vw,2.67rem)] leading-[1.12] text-[#2A2A2A] sm:mb-7 md:mb-13 md:text-center md:font-normal md:leading-tight font-medium">
          Zuri keeps getting smarter
          <br />
          the more you use it
        </h2>

        {/* Articles: horizontal on desktop, vertical list on mobile */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-0">
          {/* Article 1 */}
          <article className="flex flex-col gap-3 pb-6 md:pb-0 md:pr-8 md:gap-3.5">
            {/* Mobile: icon + title inline */}
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white md:h-9.5 md:w-9.5">
                <ShimmerImage
                  src={BookmarkSvg}
                  alt="Bookmark"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[15px] font-medium leading-snug text-[#2A2A2A] sm:text-base md:text-[21px]">
                Save outfits/looks you
                <br className="hidden md:block" /> know already work
              </p>
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-[#2A2A2A] sm:text-[0.84375rem] md:mt-8 md:text-[0.8rem]">
              Upload and name outfits from your gallery so you can find them
              instantly when you need them.
            </p>
          </article>

          {/* Article 2 */}
          <article className="flex flex-col gap-3 pb-6 md:px-8 md:pb-0 md:gap-3.5">
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white md:h-9.5 md:w-9.5">
                <ShimmerImage
                  src={LightningSvg}
                  alt="Lightning"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[15px] font-medium leading-snug text-[#2A2A2A] sm:text-base md:text-[21px]">
                Any Outfit in Seconds
              </p>
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-[#2A2A2A] sm:text-[0.84375rem] md:mt-8 md:text-[0.8rem]">
              Search &quot;brunch&quot;, &quot;black dress&quot;, or &quot;Goa
              trip&quot; and Zuri pulls it up.
            </p>
          </article>

          {/* Article 3 */}
          <article className="flex flex-col gap-3 md:pl-8 md:gap-3.5">
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white md:h-9.5 md:w-9.5">
                <ShimmerImage
                  src={BookOpenSvg}
                  alt="Book Open"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[15px] font-medium leading-snug text-[#2A2A2A] sm:text-base md:text-[21px]">
                Zuri Magazine
              </p>
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-[#2A2A2A] sm:text-[0.84375rem] md:mt-8 md:text-[0.8rem]">
              Practical style ideas. Not runway fantasy. Learn what works for
              real wardrobes, real bodies, real life.
            </p>
          </article>
        </div>
      </div>

      {/* Bottom card: CTA + store badges */}
      <div className="mt-5 w-full rounded-tl-[40px] rounded-tr-[40px] bg-[#EEEEEE] px-2 py-5 sm:mt-6 sm:py-6 md:mt-5 md:rounded-[20px] md:px-12 md:py-14">
        {/* Mobile: fully centered, stacked. Desktop: 2-col grid */}
        <div className="mb-6 md:mb-9 md:grid md:grid-cols-2 md:items-start md:gap-10">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-[clamp(1.35rem,4.7vw,2.14rem)] leading-[1.12] text-[#2A2A2A] font-medium sm:mb-2.5 sm:leading-tight md:font-normal">
              Ready to meet your most
              <br />
              confident, fabulous self?
            </h2>
            <p className="text-[0.8125rem] font-medium leading-snug text-[#666666] sm:text-sm">
              Download Zuri and start dressing with confidence.
            </p>

            <div className="mt-5 flex flex-col items-center gap-3 sm:mt-6 sm:gap-3.5 md:hidden">
              <StoreBadge className="max-w-55 mx-auto" />
              <StoreBadge apple className="max-w-55 mx-auto" />
            </div>

            {/* Social links */}
            <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-6 sm:gap-3 md:mt-12 md:flex-row md:items-center">
              <span className="text-[1.05rem] text-[#121212] sm:text-lg md:text-2xl md:mr-8">
                Connect with us on
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/stylemezuri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-[1.633px] border-[#00000033] bg-white transition hover:border-[#888] hover:bg-black/4 md:h-14 md:w-14"
                >
                  <ShimmerImage
                    src={InstagramSvg}
                    alt="Instagram"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/stylemezuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-[1.633px] border-[#00000033] bg-white transition hover:border-[#888] hover:bg-black/4 md:h-14 md:w-14"
                >
                  <ShimmerImage
                    src={LinkedInSvg}
                    alt="LinkedIn"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: store badges — desktop only */}
          <div className="hidden md:block">
            <p className="mb-3.5 text-2xl text-[#121212]">Find us on</p>
            <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-3">
              <StoreBadge />
              <StoreBadge apple />
            </div>
          </div>
        </div>

        {/* Footer bottom row */}
        {/* Mobile: legal links, then logo, then copyright */}
        {/* Desktop: copyright | logo | legal links */}
        <div className="pt-2 md:pt-0">
          {/* Mobile layout */}
          <div className="flex flex-col items-center gap-6 md:hidden justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link
                to="/support"
                className="cursor-pointer text-base text-[#121212] underline underline-offset-2"
              >
                Support
              </Link>
              <Link
                to="/privacy-policy"
                className="cursor-pointer text-base text-[#121212] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="cursor-pointer text-base text-[#121212] underline underline-offset-2"
              >
                Terms of Service
              </Link>
            </div>
            <ShimmerImage
              className="h-4"
              src={ZuriLogo}
              alt="Zuri Logo"
              loading="lazy"
              decoding="async"
            />
            <span className="text-[0.9rem] text-[#666666]">
              ©All Rights Reserved 2026
            </span>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-4">
            <span className="text-base text-[#666666]">
              ©All Rights Reserved 2026
            </span>
            <ShimmerImage
              className="h-4"
              src={ZuriLogo}
              alt="Zuri Logo"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1">
              <Link
                to="/support"
                className="cursor-pointer text-base text-[#121212] underline underline-offset-2"
              >
                Support
              </Link>
              <Link
                to="/privacy-policy"
                className="cursor-pointer text-base text-[#121212] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="cursor-pointer text-base text-[#121212] underline underline-offset-2"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
