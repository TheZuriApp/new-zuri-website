import { useEffect, useRef, useState } from 'react'
import { Silhouette, StoreBadge } from './HeroPrimitives'
import woman1Image from '../../assets/HomePage/Woman 1.jpg'
import woman2Image from '../../assets/HomePage/Woman 2.jpg'
import woman3Image from '../../assets/HomePage/Woman 3.jpg'

const slides = [
    {
        key: 'warm',
        imgPath: woman1Image,
    },
    {
        key: 'green',
        imgPath: woman2Image,
    },
    {
        key: 'gold',
        imgPath: woman3Image,
    },
]

export default function HeroSection() {
    const [current, setCurrent] = useState(0)
    const startX = useRef(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    const onTouchStart = (event) => {
        startX.current = event.touches[0]?.clientX ?? 0
    }

    const onTouchEnd = (event) => {
        const endX = event.changedTouches[0]?.clientX ?? 0
        const diff = startX.current - endX
        if (Math.abs(diff) > 40) {
            setCurrent((prev) =>
                diff > 0
                    ? (prev + 1) % slides.length
                    : (prev - 1 + slides.length) % slides.length,
            )
        }
    }

    return (
        <>
            <section className="relative hidden h-145 overflow-hidden rounded-2xl md:grid md:grid-cols-3 ">
                {slides.map((slide, idx) => (
                    <div key={slide.key} className="group relative h-full overflow-hidden">
                        {/* Divider between slides */}
                        {idx < slides.length - 1 && (
                            <div className="absolute right-0 top-0 z-10 h-full w-[1px] bg-white/15" />
                        )}
                        <div
                            className={`relative h-full w-full bg-cover bg-center transition-transform duration-[6000ms] ease-out group-hover:scale-105 ${slide.bgClass}`}
                        >
                            <img
                                src={slide.imgPath}
                                alt={`Woman ${idx + 1}`}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                        {/* Gradient Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
                    </div>
                ))}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[55%] bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_50%,transparent_100%)]" />

                <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-6 px-9 py-8">
                    <div>
                        <h1 className="text-[clamp(2.6rem,4vw,3.8rem)] font-extralight leading-none tracking-tight text-white">
                            Show up looking
                        </h1>
                        <p className="mt-1 text-base text-white text-[clamp(0.6rem,4vw,1.6rem)]">
                            Confident. Fabulous. Unforgettable.
                        </p>
                    </div>

                    <div className="max-w-115 shrink-0">
                        <p className="mb-4 text-[0.92rem] leading-[1.65] text-white font-normal">
                            Zuri is a personal styling app that helps you always know what to wear for
                            work, weekends, weddings, and everything in between.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <StoreBadge />
                            <StoreBadge apple />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative h-[88vw] max-h-130 overflow-hidden rounded-2xl md:hidden"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div className="absolute left-1/2 top-3.5 z-30 flex -translate-x-1/2 gap-1.5">
                    {slides.map((slide, idx) => (
                        <button
                            key={`${slide.key}-dot`}
                            type="button"
                            onClick={() => setCurrent(idx)}
                            className={`h-1.5 rounded-full transition-all ${current === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <div
                    className="flex h-full w-[300%] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 33.333}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={`mobile-${slide.key}`} className="relative h-full w-1/3 shrink-0">
                            <div className={`relative h-full w-full ${slide.bgClass}`}>
                                <div className={`absolute inset-0 ${slide.glowClass}`} />
                                {slide.sparkle && (
                                    <>
                                        <div className="absolute left-[72%] top-[12%] h-2.5 w-2.5 rounded-full bg-[#ffdc78]/50" />
                                        <div className="absolute right-[8%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#ffc850]/40" />
                                        <div className="absolute right-[22%] top-[6%] h-3.5 w-3.5 rounded-full bg-[#ffe68c]/30" />
                                        <div className="absolute right-[4%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#ffd264]/45" />
                                    </>
                                )}

                                <svg
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-15"
                                    width="200"
                                    height="400"
                                    viewBox="0 0 200 400"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <ellipse cx="100" cy="65" rx="45" ry="55" fill="white" />
                                    <path
                                        d={
                                            slide.key === 'gold'
                                                ? 'M20 400 Q40 230 100 180 Q160 230 180 400Z'
                                                : 'M25 400 Q45 240 100 190 Q155 240 175 400Z'
                                        }
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[65%] bg-[linear-gradient(to_top,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.5)_55%,transparent_100%)]" />

                            <div className="absolute inset-x-0 bottom-0 z-20 px-5.5 pb-6 pt-4">
                                <h2 className="text-[2.3rem] font-medium leading-none text-white">
                                    Show up looking
                                </h2>
                                <p className="mt-1 text-[0.95rem] text-white/90">
                                    Confident. Fabulous. Unforgettable.
                                </p>
                                <p className="mb-3 mt-2 text-[0.72rem] leading-[1.6] text-white/75">
                                    Zuri is a personal styling app that helps you always know what to wear
                                    for work, weekends, weddings, and everything in between.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <StoreBadge mobile />
                                    <StoreBadge apple mobile />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
