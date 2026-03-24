import g1Image from "../../assets/HomePage/g1.png"
import g2Image from "../../assets/HomePage/g2.png"
import g3Image from "../../assets/HomePage/g3.png"
export default function StyleClosetSection() {
    return (
        <>
            {/* Section 1 content */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10 md:py-20">
                <div>
                    <h2 className="mb-8 text-[clamp(2rem,3.2vw,3rem)] font-medium leading-tight text-[#111] md:mb-9 md:font-serif">
                        Finally, understand
                        <br />
                        what truly suits you
                    </h2>

                    <ul className="flex list-none flex-col gap-5">
                        <li className="flex items-start gap-3 text-[0.9rem] leading-[1.65] text-[#333]">
                            <span className="-mt-1 text-[1.6rem] leading-none text-[#888]">·</span>
                            <span>
                                Discover your power colours and silhouettes. Zuri shows you what
                                actually suits you.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-[0.9rem] leading-[1.65] text-[#333]">
                            <span className="-mt-1 text-[1.6rem] leading-none text-[#888]">·</span>
                            <span>
                                Understand why they work. Simple visuals explain what makes you look
                                better.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="relative flex h-[320px] items-center justify-center md:h-[400px]">
                    <img src={g1Image} alt="Style Closet" className="h-full w-full object-contain" />
                </div>
            </section>
            {/* Section 2 content */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-14 md:px-10 md:pb-20 md:pt-14">
                <div className="flex justify-center">
                    <img src={g2Image} alt="Style Closet" className="h-[600px] w-full object-contain" />
                    {/* <video src="your-clip.mp4" autoplay muted loop playsinline></video> */}

                </div>

                <div>
                    <h2 className="mb-8 text-[clamp(1.9rem,2.8vw,2.8rem)] font-medium leading-tight text-[#111] md:mb-9 md:font-serif">
                        Meet the world&apos;s smartest closet that styles you
                    </h2>

                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="mb-1 text-[0.82rem] font-semibold tracking-[0.01em] text-[#8a6a50]">
                                Your photos, turned into a smart closet
                            </p>
                            <p className="text-[0.82rem] leading-[1.65] text-[#444]">
                                Zuri identifies each piece you&apos;re wearing and converts them into clean
                                flatlays.
                            </p>
                        </div>

                        <div>
                            <p className="mb-1 text-[0.82rem] font-semibold tracking-[0.01em] text-[#8a6a50]">
                                Everything gets organised automatically
                            </p>
                            <p className="text-[0.82rem] leading-[1.65] text-[#444]">
                                By colour, category, occasion, fabric and more.
                            </p>
                        </div>

                        <div>
                            <p className="mb-1 text-[0.82rem] font-semibold tracking-[0.01em] text-[#8a6a50]">
                                See your best outfits on yourself
                            </p>
                            <p className="text-[0.82rem] leading-[1.65] text-[#444]">
                                Zuri creates looks using your closet and shows them on you virtually
                                before you try anything on.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 content */}
            <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10 md:py-20">
                <div>
                    <h2 className="mb-8 text-[clamp(2rem,3.2vw,3rem)] font-medium leading-tight text-[#111] md:mb-9 md:font-serif">
                        Stop guessing. Finally,
                        <br />
                        shop what actually
                        <br />
                        suits you.
                    </h2>

                    <ul className="flex list-none flex-col gap-5">
                        <li className="flex items-start gap-3 text-[0.9rem] leading-[1.65] text-[#333]">
                            <span className="-mt-1 text-[1.6rem] leading-none text-[#888]">·</span>
                            <span>
                                Zuri curates pieces that actually complete your looks — based on your body type, undertone, style, plans, and budget.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-[0.9rem] leading-[1.65] text-[#333]">
                            <span className="-mt-1 text-[1.6rem] leading-none text-[#888]">·</span>
                            <span>
                                No more “closet full of clothes, nothing to wear”
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="relative flex h-[320px] items-center justify-center md:h-[400px]">
                    <img src={g3Image} alt="Style Closet" className="h-full w-full object-contain" />
                </div>
            </section>
        </>
    )
}
