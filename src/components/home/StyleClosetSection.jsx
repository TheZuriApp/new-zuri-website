import { useEffect, useRef, useState } from "react";
import g1Image from "../../assets/HomePage/g1.png";
import closetVideo from "../../assets/HomePage/video_closet.mp4";
import g3Image from "../../assets/HomePage/g3.png";
import ScrollReveal from "./ScrollReveal";
import MobileStylistSection from "./MobileStylistSection";
import ShimmerImage from "./ShimmerImage";

function ClosetDemoVideo({ src }) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
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

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !shouldLoad) return;
    const kickPlayback = () => {
      v.muted = true;
      const promise = v.play();
      if (promise !== undefined && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    };
    kickPlayback();
    v.addEventListener("loadeddata", kickPlayback, { once: true });
    v.addEventListener("canplay", kickPlayback, { once: true });
  }, [shouldLoad, src]);

  return (
    <div
      ref={rootRef}
      className="relative h-full min-h-0 w-full overflow-hidden"
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Smart closet demo"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-100" aria-hidden />
      )}
    </div>
  );
}

export default function StyleClosetSection() {
  return (
    <>
      {/* Section 1 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-5 px-0 py-5 sm:gap-6 sm:py-6 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14 md:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="order-1 md:order-1">
            <h2 className="mb-4 text-center text-[clamp(1.32rem,4.9vw,2.67rem)] font-medium leading-[1.14] text-[#2A2A2A] sm:mb-5 min-[400px]:leading-tight md:mb-9 md:text-left md:font-normal">
              Finally, understand
              <br />
              what truly suits you
            </h2>

            <ul className="flex list-none flex-col gap-3 text-left sm:gap-3.5 md:gap-4">
              <li className="flex items-start gap-2 text-sm leading-[1.52] text-[#444444] min-[400px]:gap-2.5 min-[400px]:text-[15px] md:gap-3 md:text-2xl md:leading-[1.65]">
                <span className="-mt-0.5 text-lg leading-none text-[#444444] min-[400px]:text-xl md:-mt-1 md:text-[1.6rem]">
                  ·
                </span>
                <span>
                  Discover your power colours and silhouettes. Zuri shows you
                  what actually suits you.
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-[1.52] text-[#444444] min-[400px]:gap-2.5 min-[400px]:text-[15px] md:gap-3 md:text-2xl md:leading-[1.65]">
                <span className="-mt-0.5 text-lg leading-none text-[#444444] min-[400px]:text-xl md:-mt-1 md:text-[1.6rem]">
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
              <p className="mt-2.5 w-full text-center text-[13px] font-normal leading-relaxed text-[#444444] sm:mt-3 sm:text-sm min-[400px]:text-[15px] md:hidden">
                Upload three photos or take a quick quiz
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-5 px-0 pb-5 pt-6 sm:gap-6 sm:pb-6 sm:pt-7 md:grid-cols-2 md:items-center md:gap-14 md:px-6 md:pb-16 md:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="order-1 w-full max-w-lg justify-self-center min-[480px]:max-w-xl md:order-2 md:max-w-none md:justify-self-auto">
            <h2 className="mb-3.5 text-center text-[clamp(1.32rem,4.9vw,2.67rem)] font-medium leading-[1.14] text-[#2A2A2A] sm:mb-4 min-[400px]:mb-5 min-[400px]:leading-tight md:mb-9 md:text-left md:font-normal">
              Meet the world&apos;s smartest closet that styles you
            </h2>

            <p className="mb-5 text-center text-[13px] leading-[1.52] text-[#444444] sm:mb-6 sm:text-sm min-[400px]:text-[15px] md:hidden">
              Upload photos of yourself in outfits — straight from your phone
              gallery or mirror selfies. No need to take new photos.
            </p>

            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div>
                <p className="mb-1 text-center text-sm font-semibold tracking-[0.01em] text-[#8A8A8A] min-[400px]:text-[15px] md:text-left md:text-xl">
                  Your photos, turned into a smart closet
                </p>
                <p className="text-center text-[12.5px] font-medium leading-normal text-[#121212] min-[400px]:text-[13px] min-[400px]:leading-[1.55] md:text-left md:text-sm">
                  Zuri identifies each piece you&apos;re wearing and converts
                  them into clean flatlays.
                </p>
              </div>

              <div>
                <p className="mb-1 text-center text-sm font-semibold tracking-[0.01em] text-[#8A8A8A] min-[400px]:text-[15px] md:text-left md:text-xl">
                  Everything gets organised automatically
                </p>
                <p className="text-center text-[12.5px] font-medium leading-normal text-[#121212] min-[400px]:text-[13px] md:text-left md:text-sm">
                  By colour, category, occasion, fabric and more.
                </p>
              </div>

              <div>
                <p className="mb-1 text-center text-sm font-semibold tracking-[0.01em] text-[#8A8A8A] min-[400px]:text-[15px] md:text-left md:text-xl">
                  See your best outfits on yourself
                </p>
                <p className="text-center text-[12.5px] font-medium leading-normal text-[#121212] min-[400px]:text-[13px] min-[400px]:leading-[1.55] md:text-left md:text-sm">
                  Zuri creates looks using your closet and shows them on you
                  virtually — before you try anything on.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 relative isolate w-full max-w-65 justify-self-center overflow-hidden rounded-[20px] border border-black bg-zinc-100 aspect-338/396 min-h-122 min-[400px]:max-w-70 min-[400px]:min-h-132 min-[480px]:max-w-75 min-[480px]:min-h-148 min-[480px]:aspect-355/410 md:order-1 md:max-w-62 md:aspect-auto md:h-[590px] md:min-h-0 md:rounded-[22px] lg:max-w-68">
            <ClosetDemoVideo src={closetVideo} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <MobileStylistSection />
      </ScrollReveal>

      {/* Section 3 */}
      <ScrollReveal delay={160}>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-5 px-0 py-6 sm:gap-6 sm:py-7 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14 md:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="order-1 w-full max-w-lg justify-self-center min-[480px]:max-w-xl md:max-w-none md:justify-self-auto">
            <h2 className="mb-3.5 text-center text-[clamp(1.32rem,4.9vw,2.67rem)] font-medium leading-[1.14] text-[#2A2A2A] sm:mb-4 min-[400px]:mb-5 md:mb-9 md:text-left md:font-normal md:leading-tight">
              Stop guessing. Finally,
              <br />
              shop what actually
              <br />
              suits you.
            </h2>

            <div className="flex flex-col gap-3.5 min-[400px]:gap-4 sm:gap-5 md:gap-8">
              <div>
                <p className="text-center text-[13px] font-medium leading-[1.52] tracking-[0.01em] text-[#666666] sm:text-sm min-[400px]:text-[15px] md:text-left md:text-lg md:leading-normal">
                  Zuri curates pieces that actually complete your looks — based
                  on your body type, undertone, style, plans, and budget.
                </p>
              </div>
              <div>
                <p className="text-center text-base font-semibold leading-snug text-[#121212] min-[400px]:text-[17px] sm:text-[17px] md:text-left md:text-[23px]">
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
