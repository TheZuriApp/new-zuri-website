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
          className="h-full w-full min-h-0 object-fill object-center"
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
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 px-0 py-4 sm:gap-7 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14 md:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="order-1 md:order-1">
            <h2 className="mb-5 text-center text-[clamp(1.45rem,5.1vw,2.67rem)] font-medium leading-[1.12] text-[#2A2A2A] min-[400px]:leading-tight md:mb-9 md:text-left md:font-normal">
              Finally, understand
              <br />
              what truly suits you
            </h2>

            <ul className="flex list-none flex-col gap-3.5 text-left md:gap-4">
              <li className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-[#444444] min-[400px]:text-[16px] md:gap-3 md:text-[24px] md:leading-[1.65]">
                <span className="-mt-0.5 text-[1.25rem] leading-none text-[#444444] md:-mt-1 md:text-[1.6rem]">
                  ·
                </span>
                <span>
                  Discover your power colours and silhouettes. Zuri shows you
                  what actually suits you.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-[#444444] min-[400px]:text-[16px] md:gap-3 md:text-[24px] md:leading-[1.65]">
                <span className="-mt-0.5 text-[1.25rem] leading-none text-[#444444] md:-mt-1 md:text-[1.6rem]">
                  ·
                </span>
                <span>
                  Understand why they work. Simple visuals explain what makes
                  you look better.
                </span>
              </li>
            </ul>
          </div>

          <div className="order-2 flex w-full max-w-lg justify-self-center min-[480px]:max-w-xl md:order-2 md:max-w-none md:justify-self-end md:h-[590px]">
            <div className="flex w-full flex-col items-center md:items-stretch">
              <div className="relative flex w-full items-center justify-center">
                <ShimmerImage
                  src={g1Image}
                  alt="Style analysis on your phone"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mt-3 w-full text-center text-[14px] font-normal leading-snug text-[#444444] min-[400px]:text-[15px] md:hidden">
                Upload three photos or take a quick quiz
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 px-0 pb-6 pt-8 sm:gap-7 md:grid-cols-2 md:items-center md:gap-14 md:px-6 md:pb-16 md:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="order-1 w-full max-w-lg justify-self-center min-[480px]:max-w-xl md:order-2 md:max-w-none md:justify-self-auto">
            <h2 className="mb-4 text-center text-[clamp(1.45rem,5.1vw,2.67rem)] font-medium leading-[1.12] text-[#2A2A2A] min-[400px]:mb-5 min-[400px]:leading-tight md:mb-9 md:text-left md:font-normal">
              Meet the world&apos;s smartest closet that styles you
            </h2>

            <p className="mb-6 text-center text-[14px] leading-[1.55] text-[#444444] min-[400px]:text-[15px] md:hidden">
              Upload photos of yourself in outfits — straight from your phone
              gallery or mirror selfies. No need to take new photos.
            </p>

            <div className="flex flex-col gap-5 md:gap-6">
              <div>
                <p className="mb-1 text-center text-[15px] font-semibold tracking-[0.01em] text-[#8A8A8A] min-[400px]:text-[16px] md:text-left md:text-[20px]">
                  Your photos, turned into a smart closet
                </p>
                <p className="text-center text-[13px] font-medium leading-[1.55] text-[#121212] min-[400px]:leading-[1.65] md:text-left md:text-[14px]">
                  Zuri identifies each piece you&apos;re wearing and converts
                  them into clean flatlays.
                </p>
              </div>

              <div>
                <p className="mb-1 text-center text-[15px] font-semibold tracking-[0.01em] text-[#8A8A8A] min-[400px]:text-[16px] md:text-left md:text-[20px]">
                  Everything gets organised automatically
                </p>
                <p className="text-center text-[13px] font-medium leading-[1.55] text-[#121212] md:text-left md:text-[14px]">
                  By colour, category, occasion, fabric and more.
                </p>
              </div>

              <div>
                <p className="mb-1 text-center text-[15px] font-semibold tracking-[0.01em] text-[#8A8A8A] min-[400px]:text-[16px] md:text-left md:text-[20px]">
                  See your best outfits on yourself
                </p>
                <p className="text-center text-[13px] font-medium leading-[1.55] text-[#121212] min-[400px]:leading-[1.65] md:text-left md:text-[14px]">
                  Zuri creates looks using your closet and shows them on you
                  virtually — before you try anything on.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 relative flex w-full max-w-[260px] justify-self-center overflow-hidden rounded-[20px] border border-black bg-zinc-100 aspect-338/396 min-h-[440px] min-[400px]:max-w-[280px] min-[400px]:min-h-[500px] min-[480px]:max-w-[300px] min-[480px]:min-h-[560px] min-[480px]:aspect-355/410 md:order-1 md:max-w-[248px] md:aspect-auto md:h-[590px] md:min-h-0 md:rounded-[22px] lg:max-w-[272px]">
            <ClosetDemoVideo src={closetVideo} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <MobileStylistSection />
      </ScrollReveal>

      {/* Section 3 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 px-0 py-8 sm:gap-7 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14 md:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="order-1 w-full max-w-lg justify-self-center min-[480px]:max-w-xl md:max-w-none md:justify-self-auto">
            <h2 className="mb-4 text-center text-[clamp(1.45rem,5.1vw,2.67rem)] font-medium leading-[1.12] text-[#2A2A2A] min-[400px]:mb-5 md:mb-9 md:text-left md:font-normal md:leading-tight">
              Stop guessing. Finally,
              <br />
              shop what actually
              <br />
              suits you.
            </h2>

            <div className="flex flex-col gap-4 min-[400px]:gap-5 md:gap-8">
              <div>
                <p className="text-center text-[14px] font-medium leading-[1.55] tracking-[0.01em] text-[#666666] min-[400px]:text-[15px] md:text-left md:text-[18px] md:leading-normal">
                  Zuri curates pieces that actually complete your looks — based
                  on your body type, undertone, style, plans, and budget.
                </p>
              </div>
              <div>
                <p className="text-center text-[17px] font-semibold leading-snug text-[#121212] min-[400px]:text-[18px] md:text-left md:text-[23px]">
                  No more &ldquo;closet full of clothes, nothing to wear&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 flex w-full max-w-lg justify-self-center min-[480px]:max-w-xl md:max-w-none md:h-[590px] md:justify-self-end">
            <ShimmerImage
              src={g3Image}
              alt="Personalized shopping recommendations"
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
