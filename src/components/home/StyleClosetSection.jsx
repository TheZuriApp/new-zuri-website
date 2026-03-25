import g1Image from "../../assets/HomePage/g1.png"
import g2Image from "../../assets/HomePage/g2.png"
import g3Image from "../../assets/HomePage/g3.png"
export default function StyleClosetSection() {
    return (
        <>
            {/* Section 1 content */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 py-12 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10 md:py-20">
                <div>
                    <h2 className="mb-8 text-[clamp(1.8rem,3vw,2.67rem)] font-normal leading-tight text-[#2A2A2A] md:mb-9">
                        Finally, understand
                        <br />
                        what truly suits you
                    </h2>

                    <ul className="flex list-none flex-col gap-5">
                        <li className="flex items-start gap-3 text-[24px] leading-[1.65] text-[#444444]">
                            <span className="-mt-1 text-[1.6rem] leading-none text-[#444444]">·</span>
                            <span>
                                Discover your power colours and silhouettes. Zuri shows you what
                                actually suits you.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-[24px] leading-[1.65] text-[#444444]">
                            <span className="-mt-1 text-[1.6rem] leading-none text-[#444444]">·</span>
                            <span>
                                Understand why they work. Simple visuals explain what makes you look
                                better.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="relative flex h-[320px] items-center justify-center md:h-[590px]">
                    <img src={g1Image} alt="Style Closet" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </div>
            </section>
            {/* Section 2 content */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-14 md:px-10 md:pb-20 md:pt-14">
                <div className="relative flex h-[320px] items-center justify-center md:h-[590px]">
                    <img src={g2Image} alt="Style Closet" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                    {/* <video src="your-clip.mp4" autoplay muted loop playsinline></video> */}

                </div>

                <div>
                    <h2 className="mb-8 text-[clamp(1.8rem,3vw,2.67rem)] font-normal leading-tight text-[#2A2A2A] md:mb-9">
                        Meet the world&apos;s smartest
                        <br />
                        closet that styles you
                    </h2>

                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="mb-1 text-[20px] font-semibold tracking-[0.01em] text-[#8A8A8A]">
                                Your photos, turned into a smart closet
                            </p>
                            <p className="text-[14px] leading-[1.65] text-[#121212] font-medium">
                                Zuri identifies each piece you&apos;re wearing and converts them into clean
                                flatlays.
                            </p>
                        </div>

                        <div>
                            <p className="mb-1 text-[20px] font-semibold tracking-[0.01em] text-[#8A8A8A]">
                                Everything gets organised automatically
                            </p>
                            <p className="text-[14px] leading-[1.65] text-[#121212] font-medium">
                                By colour, category, occasion, fabric and more.
                            </p>
                        </div>

                        <div>
                            <p className="mb-1 text-[20px] font-semibold tracking-[0.01em] text-[#8A8A8A]">
                                See your best outfits on yourself
                            </p>
                            <p className="text-[14px] leading-[1.65] text-[#121212] font-medium">
                                Zuri creates looks using your closet and shows them on you virtually
                                before you try anything on.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 content */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 py-12 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10 md:py-20">
                <div>
                    <h2 className="mb-8 text-[clamp(1.8rem,3vw,2.67rem)] font-normal leading-tight text-[#2A2A2A] md:mb-9">
                        Stop guessing. Finally,
                        <br />
                        shop what actually
                        <br />
                        suits you.
                    </h2>

                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="mb-1 text-[18px] font-medium tracking-[0.01em] text-[#666666]">
                                Zuri curates pieces that actually complete your looks — based on your body type, undertone, style, plans, and budget.
                            </p>
                        </div>
                        <div>
                            <p className="text-[23px] text-[#121212] font-semibold">
                                No more “closet full of clothes, nothing to wear”
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex h-[320px] items-center justify-center md:h-[590px]">
                    <img src={g3Image} alt="Style Closet" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </div>
            </section>
        </>
    )
}
