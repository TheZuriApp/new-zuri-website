import { StoreBadge } from './HeroPrimitives'
import BookOpenSvg from '../../assets/HomePage/book-open.svg'
import BookmarkSvg from '../../assets/HomePage/bookmark.svg'
import LightningSvg from '../../assets/HomePage/lightning.svg'
import InstagramSvg from '../../assets/HomePage/instagram.svg'
import LinkedInSvg from '../../assets/HomePage/linkedin.svg'
import ZuriLogo from '../../assets/zuri.svg'
import ShimmerImage from './ShimmerImage'


export default function FooterSection() {
    return (
        <section className="mt-6 bg-white md:mt-8 md:p-6 ">
            {/* Top card: "Zuri keeps getting smarter" */}
            <div className="rounded-[20px] bg-white mx-3 px-2 py-9 md:bg-[#F7F7F7] md:px-12 md:py-14">
                <p className="mb-2 text-[0.95rem] tracking-[0.01em] text-[#666666] md:text-center md:text-[1.25rem]">
                    And there&apos;s more
                </p>
                <h2 className="mb-8 text-[clamp(1.6rem,5vw,2.67rem)] leading-tight text-[#2A2A2A] md:mb-13 md:text-center md:font-normal font-medium">
                    Zuri keeps getting smarter
                    <br />
                    the more you use it
                </h2>

                {/* Articles: horizontal on desktop, vertical list on mobile */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
                    {/* Article 1 */}
                    <article className="flex flex-col gap-3 pb-6 md:pb-0 md:pr-8 md:gap-3.5">
                        {/* Mobile: icon + title inline */}
                        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white md:h-9.5 md:w-9.5">
                                <ShimmerImage src={BookmarkSvg} alt="Bookmark" loading="lazy" decoding="async" />
                            </div>
                            <p className="text-[17px] font-medium text-[#2A2A2A] md:text-[21px]">
                                Save outfits/looks you
                                <br className="hidden md:block" />
                                {' '}know already work
                            </p>
                        </div>
                        <p className="text-[0.85rem] text-[#2A2A2A] md:mt-8 md:text-[0.8rem]">
                            Upload and name outfits from your gallery so you can find them instantly
                            when you need them.
                        </p>
                    </article>

                    {/* Article 2 */}
                    <article className="flex flex-col gap-3 pb-6 md:px-8 md:pb-0 md:gap-3.5">
                        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white md:h-9.5 md:w-9.5">
                                <ShimmerImage src={LightningSvg} alt="Lightning" loading="lazy" decoding="async" />
                            </div>
                            <p className="text-[17px] font-medium text-[#2A2A2A] md:text-[21px]">
                                Any Outfit in Seconds
                            </p>
                        </div>
                        <p className="text-[0.85rem] text-[#2A2A2A] md:mt-8 md:text-[0.8rem]">
                            Search &quot;brunch&quot;, &quot;black dress&quot;, or &quot;Goa trip&quot; and Zuri pulls it up.
                        </p>
                    </article>

                    {/* Article 3 */}
                    <article className="flex flex-col gap-3 md:pl-8 md:gap-3.5">
                        <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white md:h-9.5 md:w-9.5">
                                <ShimmerImage src={BookOpenSvg} alt="Book Open" loading="lazy" decoding="async" />
                            </div>
                            <p className="text-[17px] font-medium text-[#2A2A2A] md:text-[21px]">
                                Zuri Magazine
                            </p>
                        </div>
                        <p className="text-[0.85rem] text-[#2A2A2A] md:mt-8 md:text-[0.8rem]">
                            Practical style ideas. Not runway fantasy. Learn what works for real
                            wardrobes, real bodies, real life.
                        </p>
                    </article>
                </div>
            </div>

            {/* Bottom card: CTA + store badges */}
            <div className="mt-6 md:rounded-[20px] rounded-tr-[40px] rounded-tl-[40px] bg-[#EEEEEE]  py-4 md:mt-5 md:mx-3 md:px-12 md:py-14">

                {/* Mobile: fully centered, stacked. Desktop: 2-col grid */}
                <div className="mb-7 md:mb-9 md:grid md:grid-cols-2 md:items-start md:gap-10">

                    {/* Left: heading + social */}
                    <div className="text-center md:text-left">
                        <h2 className="mb-2.5 text-[clamp(1.5rem,5vw,2.14rem)] leading-tight text-[#2A2A2A] font-medium md:font-normal">
                            Ready to meet your most
                            <br />
                            confident, fabulous self?
                        </h2>
                        <p className="text-[0.9rem] font-medium text-[#666666]">
                            Download Zuri and start dressing with confidence.
                        </p>

                        {/* Store badges: stacked + centered on mobile, hidden here; shown in right col on desktop */}
                        <div className="mt-6 flex flex-col items-center gap-3.5 md:hidden">
                            <StoreBadge className="w-full max-w-[220px]" />
                            <StoreBadge apple className="w-full max-w-[220px]" />
                        </div>

                        {/* Social links */}
                        <div className="mt-6 flex flex-col items-center gap-3 md:mt-12 md:flex-row md:items-center">
                            <span className="text-[1.2rem] text-[#121212] md:text-[1.5rem] md:mr-8">Connect with us on</span>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-[1.633px] border-[#00000033] bg-white transition hover:border-[#888] hover:bg-black/4 md:h-14 md:w-14"
                                >
                                    <ShimmerImage src={InstagramSvg} alt="Instagram" loading="lazy" decoding="async" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-[1.633px] border-[#00000033] bg-white transition hover:border-[#888] hover:bg-black/4 md:h-14 md:w-14"
                                >
                                    <ShimmerImage src={LinkedInSvg} alt="LinkedIn" loading="lazy" decoding="async" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: store badges — desktop only */}
                    <div className="hidden md:block">
                        <p className="mb-3.5 text-[1.5rem] text-[#121212]">
                            Find us on
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-3">
                            <StoreBadge />
                            <StoreBadge apple />
                        </div>
                    </div>
                </div>

                {/* Footer bottom row */}
                {/* Mobile: Privacy Policy centered top, then logo, then copyright */}
                {/* Desktop: copyright | logo | privacy — in a row */}
                <div className="pt-2 md:pt-0">
                    {/* Mobile layout */}
                    <div className="flex flex-col items-center gap-6 md:hidden justify-between">
                        <a
                            href="#"
                            className="cursor-pointer text-[1rem] text-[#121212] underline underline-offset-[3px]"
                        >
                            Privacy Policy
                        </a>
                        <ShimmerImage className="h-4" src={ZuriLogo} alt="Zuri Logo" loading="lazy" decoding="async" />
                        <span className="text-[0.9rem] text-[#666666]">©All Rights Reserved 2026</span>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-4">
                        <span className="text-[1rem] text-[#666666]">©All Rights Reserved 2026</span>
                        <ShimmerImage className="h-4" src={ZuriLogo} alt="Zuri Logo" loading="lazy" decoding="async" />
                        <a
                            href="#"
                            className="cursor-pointer text-[1rem] text-[#121212] underline underline-offset-[3px]"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}