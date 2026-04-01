import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StoreBadge } from "./HeroPrimitives";
import woman1Image from "../../assets/HomePage/Woman 1.jpg";
import woman2Image from "../../assets/HomePage/Woman 2.jpg";
import woman3Image from "../../assets/HomePage/Woman 3.jpg";
import ShimmerImage from "./ShimmerImage";

const slides = [
  {
    key: "warm",
    imgPath: woman1Image,
  },
  {
    key: "green",
    imgPath: woman2Image,
  },
  {
    key: "gold",
    imgPath: woman3Image,
  },
];

const mobileSlides = [slides[slides.length - 1], ...slides, slides[0]];

const HERO_MOBILE_SLIDE_RATIO = 422 / 375;
const HERO_MOBILE_FRAME_W = 375;
const HERO_MOBILE_FRAME_H = 771;

export default function HeroSection() {
  const [current, setCurrent] = useState(1);
  const [isSliding, setIsSliding] = useState(true);
  const startX = useRef(0);
  const mobileViewportRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const loopFallbackRef = useRef(null);
  const currentRef = useRef(1);
  const lastMobileIndex = mobileSlides.length - 1;
  const [mobileSlidePx, setMobileSlidePx] = useState(0);

  const measureMobileHero = () => {
    const el = mobileViewportRef.current;
    if (!el) return;
    setMobileSlidePx(Math.max(1, el.clientWidth * HERO_MOBILE_SLIDE_RATIO));
  };

  useLayoutEffect(() => {
    measureMobileHero();
  }, []);

  useLayoutEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    const el = mobileViewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measureMobileHero());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev < lastMobileIndex) return prev + 1;
        return prev;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [lastMobileIndex]);

  useEffect(() => {
    if (current !== lastMobileIndex) return;
    if (loopFallbackRef.current) clearTimeout(loopFallbackRef.current);
    loopFallbackRef.current = setTimeout(() => {
      loopFallbackRef.current = null;
      if (currentRef.current !== lastMobileIndex) return;
      setIsSliding(false);
      setCurrent(1);
    }, 650);
    return () => {
      if (loopFallbackRef.current) {
        clearTimeout(loopFallbackRef.current);
        loopFallbackRef.current = null;
      }
    };
  }, [current, lastMobileIndex]);

  const onTransitionEnd = (event) => {
    if (event.target !== mobileTrackRef.current) return;
    if (event.propertyName !== "transform") return;
    if (loopFallbackRef.current) {
      clearTimeout(loopFallbackRef.current);
      loopFallbackRef.current = null;
    }
    const c = currentRef.current;
    if (c === 0) {
      setIsSliding(false);
      setCurrent(slides.length);
      return;
    }
    if (c === lastMobileIndex) {
      setIsSliding(false);
      setCurrent(1);
    }
  };

  useEffect(() => {
    if (!isSliding) {
      const frame = requestAnimationFrame(() => setIsSliding(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [isSliding]);

  const onTouchStart = (event) => {
    startX.current = event.touches[0]?.clientX ?? 0;
  };

  const onTouchEnd = (event) => {
    const endX = event.changedTouches[0]?.clientX ?? 0;
    const diff = startX.current - endX;
    if (Math.abs(diff) <= 40) return;
    setCurrent((prev) => {
      const next = diff > 0 ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(lastMobileIndex, next));
    });
  };

  return (
    <>
      <section className="relative hidden h-145 min-h-72 w-full min-w-0 overflow-hidden rounded-2xl lg:grid lg:grid-cols-3">
        {slides.map((slide, idx) => (
          <div
            key={slide.key}
            className="group relative h-full overflow-hidden"
          >
            {/* Divider between slides */}
            {idx < slides.length - 1 && (
              <div className="absolute right-0 top-0 z-10 h-full w-px bg-white/15" />
            )}
            <div
              className={`relative h-full w-full bg-cover bg-center transition-transform duration-6000 ease-out group-hover:scale-105`}
            >
              <ShimmerImage
                src={slide.imgPath}
                alt={`Woman ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-transparent" />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[55%] bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_50%,transparent_100%)]" />

        <div className="absolute inset-x-0 bottom-0 z-30 flex w-full flex-col items-start gap-6 px-5 py-6 sm:flex-row sm:items-end sm:px-7 sm:py-7 lg:justify-between lg:px-9 lg:py-8">
          <div className="shrink-0 text-left">
            <h1 className="text-[clamp(2.6rem,4vw,3.8rem)] font-extralight leading-none tracking-tight text-white">
              Show up looking
            </h1>
            <p className="mt-1 text-base text-white text-[clamp(0.6rem,4vw,1.6rem)]">
              Confident. Fabulous. Unforgettable.
            </p>
          </div>

          <div className="w-full max-w-md shrink-0 text-left sm:max-w-115 lg:max-w-115 lg:text-right">
            <p className="mb-4 text-[0.92rem] leading-[1.65] text-white font-normal">
              Zuri is a personal styling app that helps you always know what to
              wear for work, weekends, weddings, and everything in between.
            </p>
            <div className="flex flex-wrap justify-start gap-2.5 lg:justify-end">
              <StoreBadge />
              <StoreBadge apple />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={mobileViewportRef}
        className="relative w-full min-w-0 overflow-hidden rounded-2xl bg-zinc-200 max-lg:max-h-[min(92svh,820px)] max-lg:min-h-[min(320px,88svh)] lg:hidden"
        style={{ aspectRatio: `${HERO_MOBILE_FRAME_W} / ${HERO_MOBILE_FRAME_H}` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={mobileTrackRef}
          className={`relative z-0 flex h-full ${isSliding ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${current * mobileSlidePx}px)`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {mobileSlides.map((slide, idx) => (
            <div
              key={`mobile-${slide.key}-${idx}`}
              className="relative h-full shrink-0"
              style={{ width: `${mobileSlidePx}px` }}
            >
              <div className="relative h-full w-full bg-cover bg-center">
                <ShimmerImage
                  src={slide.imgPath}
                  alt={`Woman ${idx + 1}`}
                  loading={idx === 1 ? "eager" : "lazy"}
                  fetchPriority={idx === 1 ? "high" : "auto"}
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[47%] bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.52)_48%,transparent_100%)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-4 pb-6 pt-3 text-center sm:px-5 sm:pb-7 sm:pt-4 min-[400px]:px-6">
          <h2 className="max-w-[18ch] text-[clamp(1.45rem,5.5vw,2.2rem)] font-medium leading-[1.08] text-white sm:max-w-[20ch] sm:text-[clamp(1.55rem,5.6vw,2.35rem)]">
            Show up looking
          </h2>

          <p className="mt-2 text-[0.8125rem] font-normal leading-snug text-white/93 sm:mt-2.5 sm:text-sm min-[400px]:text-[0.9375rem]">
            Confident. Fabulous. Unforgettable.
          </p>

          <p className="mb-3 mt-2.5 max-w-[40ch] text-[0.8125rem] font-normal leading-[1.58] text-white/80 sm:mb-4 sm:mt-3 sm:max-w-[42ch] sm:text-[0.84375rem] min-[400px]:text-sm">
            Zuri is a personal styling app that helps you always know what to
            wear for work, weekends, weddings, and everything in between.
          </p>

          <div className="pointer-events-auto flex w-full max-w-57.5 flex-col items-stretch gap-2 sm:max-w-60 sm:gap-2.5 min-[480px]:max-w-65">
            <StoreBadge mobile className="w-full justify-center" />
            <StoreBadge apple mobile className="w-full justify-center" />
          </div>
        </div>
      </section>
    </>
  );
}
