import { useEffect, useRef, useState } from "react";
import g1Image from "../../assets/HomePage/g1.png";
import closetVideo from "../../assets/HomePage/video_closet.mp4";
import g3Image from "../../assets/HomePage/g3.png";
import ScrollReveal from "./ScrollReveal";
import MobileStylistSection from "./MobileStylistSection";
import ShimmerImage from "./ShimmerImage";

function ClosetDemoVideo({ src }) {
  const rootRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: "140px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="flex h-full min-h-0 w-full items-center justify-center">
      {shouldLoad ? (
        <video
          className="h-full w-full object-contain"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Smart closet demo"
        />
      ) : (
        <div className="h-full w-full" aria-hidden />
      )}
    </div>
  );
}

export default function StyleClosetSection() {
  return (
    <>
      {/* Section 1 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-5 py-4 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10 md:py-20">
          {/* Text: appears second on mobile (after image), first on desktop */}
          <div className="order-1 md:order-1">
            <h2 className="text-center md:text-left mb-5 text-[clamp(1.6rem,5vw,2.67rem)] font-medium md:font-normal leading-tight text-[#2A2A2A] md:mb-9">
              Finally, understand
              <br />
              what truly suits you
            </h2>

            <ul className="flex list-none flex-col gap-4">
              <li className="flex items-start gap-3 text-[16px] leading-[1.65] text-[#444444] md:text-[24px]">
                <span className="-mt-1 text-[1.4rem] leading-none text-[#444444] md:text-[1.6rem]">
                  ·
                </span>
                <span>
                  Discover your power colours and silhouettes. Zuri shows you
                  what actually suits you.
                </span>
              </li>
              <li className="flex items-start gap-3 text-[16px] leading-[1.65] text-[#444444] md:text-[24px]">
                <span className="-mt-1 text-[1.4rem] leading-none text-[#444444] md:text-[1.6rem]">
                  ·
                </span>
                <span>
                  Understand why they work. Simple visuals explain what makes
                  you look better.
                </span>
              </li>
            </ul>
          </div>

          {/* Image: appears first on mobile, second on desktop */}
          <div className="order-1 relative flex items-center justify-center md:order-2 md:h-[590px]">
            <ShimmerImage
              src={g1Image}
              alt="Style Analysis"
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-5 pb-4 pt-6 md:grid-cols-2 md:gap-14 md:px-10 md:pb-20 md:pt-14">
          {/* Text: appears first on mobile (before image) */}
          <div className="order-1 md:order-2">
            <h2 className="mb-5 text-[clamp(1.6rem,5vw,2.67rem)] font-medium md:font-normal leading-tight text-[#2A2A2A] md:mb-9 text-center md:text-left">
              Meet the world&apos;s smartest closet that styles you
            </h2>

            {/* Mobile-only intro line */}
            <p className="text-center md:text-left mb-5 text-[15px] leading-[1.6] text-[#444444] md:hidden">
              Upload photos of yourself in outfits — straight from your phone
              gallery or mirror selfies. No need to take new photos.
            </p>

            <div className="flex flex-col gap-5 md:gap-6">
              <div>
                <p className="text-center md:text-left mb-1 text-[16px] font-semibold tracking-[0.01em] text-[#8A8A8A] md:text-[20px]">
                  Your photos, turned into a smart closet
                </p>
                <p className="text-center md:text-left text-[13px] leading-[1.65] text-[#121212] font-medium md:text-[14px]">
                  Zuri identifies each piece you&apos;re wearing and converts
                  them into clean flatlays.
                </p>
              </div>

              <div>
                <p className=" text-center md:text-left mb-1 text-[16px] font-semibold tracking-[0.01em] text-[#8A8A8A] md:text-[20px]">
                  Everything gets organised automatically
                </p>
                <p className="text-center md:text-left text-[13px] leading-[1.65] text-[#121212] font-medium md:text-[14px]">
                  By colour, category, occasion, fabric and more.
                </p>
              </div>

              <div>
                <p className="text-center md:text-left mb-1 text-[16px] font-semibold tracking-[0.01em] text-[#8A8A8A] md:text-[20px]">
                  See your best outfits on yourself
                </p>
                <p className="text-center md:text-left text-[13px] leading-[1.65] text-[#121212] font-medium md:text-[14px]">
                  Zuri creates looks using your closet and shows them on you
                  virtually before you try anything on.
                </p>
              </div>
            </div>
          </div>

          {/* Image: appears second on mobile */}
          <div className="order-2 relative flex h-[300px] items-center justify-center md:order-1 md:h-[590px]">
            <ClosetDemoVideo src={closetVideo} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <MobileStylistSection />
      </ScrollReveal>

      {/* Section 3 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-5 py-10 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10 md:py-20">
          {/* Text: appears first on mobile */}
          <div className="order-1">
            <h2 className="mb-5 text-[clamp(1.6rem,5vw,2.67rem)] font-medium md:font-normal leading-tight text-[#2A2A2A] md:mb-9  text-center md:text-left">
              Stop guessing. Finally,
              <br />
              shop what actually
              <br />
              suits you.
            </h2>

            <div className="flex flex-col gap-5 md:gap-8">
              <div>
                <p className="text-[15px] font-medium tracking-[0.01em] text-[#666666] md:text-[18px]  text-center md:text-left">
                  Zuri curates pieces that actually complete your looks — based
                  on your body type, undertone, style, plans, and budget.
                </p>
              </div>
              <div>
                <p className="text-[18px] text-[#121212] font-semibold md:text-[23px]  text-center md:text-left">
                  No more &ldquo;closet full of clothes, nothing to wear&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Image: appears second on mobile */}
          <div className="order-2 relative flex items-center justify-center md:h-[590px]">
            <ShimmerImage
              src={g3Image}
              alt="Shop Recommendations"
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain"
            />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
