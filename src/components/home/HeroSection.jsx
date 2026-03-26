import { useEffect, useRef, useState } from 'react'
import { Silhouette, StoreBadge } from './HeroPrimitives'
import woman1Image from '../../assets/HomePage/Woman 1.jpg'
import woman2Image from '../../assets/HomePage/Woman 2.jpg'
import woman3Image from '../../assets/HomePage/Woman 3.jpg'
import ShimmerImage from './ShimmerImage'

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

const mobileSlides = [slides[slides.length - 1], ...slides, slides[0]]

export default function HeroSection() {
    const [current, setCurrent] = useState(1)
    const [isSliding, setIsSliding] = useState(true)
    const startX = useRef(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => prev + 1)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    const onTransitionEnd = () => {
        if (current === 0) {
            setIsSliding(false)
            setCurrent(slides.length)
            return
        }

        if (current === slides.length + 1) {
            setIsSliding(false)
            setCurrent(1)
        }
    }

    useEffect(() => {
        if (!isSliding) {
            const frame = requestAnimationFrame(() => setIsSliding(true))
            return () => cancelAnimationFrame(frame)
        }
    }, [isSliding])

    const onTouchStart = (event) => {
        startX.current = event.touches[0]?.clientX ?? 0
    }

    const onTouchEnd = (event) => {
        const endX = event.changedTouches[0]?.clientX ?? 0
        const diff = startX.current - endX
        if (Math.abs(diff) > 40) {
            setCurrent((prev) => (diff > 0 ? prev + 1 : prev - 1))
        }
    }

    return (
        <>
            <section className="relative hidden h-145 overflow-hidden rounded-2xl md:grid md:grid-cols-3 mx-3">
                {slides.map((slide, idx) => (
                    <div key={slide.key} className="group relative h-full overflow-hidden">
                        {/* Divider between slides */}
                        {idx < slides.length - 1 && (
                            <div className="absolute right-0 top-0 z-10 h-full w-[1px] bg-white/15" />
                        )}
                        <div
                            className={`relative h-full w-full bg-cover bg-center transition-transform duration-[6000ms] ease-out group-hover:scale-105`}
                        >
                            <ShimmerImage
                                src={slide.imgPath}
                                alt={`Woman ${idx + 1}`}
                                loading={idx === 0 ? 'eager' : 'lazy'}
                                fetchPriority={idx === 0 ? 'high' : 'auto'}
                                decoding="async"
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
            // here have to adjust the height
                className="relative h-[168vw] max-h-290 overflow-hidden rounded-2xl md:hidden mx-3"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className={`flex h-full ${isSliding ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                        width: `${mobileSlides.length * 100}%`,
                        transform: `translateX(-${(current * 100) / mobileSlides.length}%)`,
                    }}
                    onTransitionEnd={onTransitionEnd}
                >
                    {mobileSlides.map((slide, idx) => (
                        <div
                            key={`mobile-${slide.key}-${idx}`}
                            className="relative h-full shrink-0"
                            style={{ width: `${100 / mobileSlides.length}%` }}
                        >
                            <div
                                className="relative h-full w-full bg-cover bg-center transition-transform duration-[6000ms] ease-out"
                            >
                                <ShimmerImage
                                    src={slide.imgPath}
                                    alt={`Woman ${idx + 1}`}
                                    loading={idx === 1 ? 'eager' : 'lazy'}
                                    fetchPriority={idx === 1 ? 'high' : 'auto'}
                                    decoding="async"
                                    className="h-full w-full object-cover object-top"
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[65%] bg-[linear-gradient(to_top,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.5)_55%,transparent_100%)]" />

                            <div className="absolute inset-x-0 bottom-0 z-20 px-5.5 pb-6 pt-4 text-center flex flex-col items-center">

                                <h2 className="text-[2.3rem] font-medium leading-none text-white">
                                    Show up looking
                                </h2>

                                <p className="mt-1 text-[0.95rem] text-white/90">
                                    Confident. Fabulous. Unforgettable.
                                </p>

                                <p className="mb-3 mt-2 text-[0.72rem] leading-[1.6] text-white/75 max-w-[300px]">
                                    Zuri is a personal styling app that helps you always know what to wear
                                    for work, weekends, weddings, and everything in between.
                                </p>

                                <div className="flex flex-col gap-2 items-center">
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
