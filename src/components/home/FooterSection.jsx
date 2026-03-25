import { StoreBadge } from './HeroPrimitives'
import BookOpenSvg from '../../assets/HomePage/book-open.svg'
import BookmarkSvg from '../../assets/HomePage/bookmark.svg'
import LightningSvg from '../../assets/HomePage/lightning.svg'
import InstagramSvg from '../../assets/HomePage/instagram.svg'
import LinkedInSvg from '../../assets/HomePage/linkedin.svg'
import ZuriLogo from '../../assets/zuri.svg'


export default function FooterSection() {
    return (
        <section className="mt-6 bg-white p-3 md:mt-8 md:p-6">
            <div className="rounded-[20px] bg-[#F7F7F7] px-5 py-9 md:px-12 md:py-14">
                <p className="mb-2 text-center text-[1.25rem] tracking-[0.01em] text-[#666666]">
                    And there&apos;s more
                </p>
                <h2 className="mb-9 text-center text-[clamp(1.8rem,3vw,2.67rem)] text-[#2A2A2A] md:mb-13">
                    Zuri keeps getting smarter
                    <br />
                    the more you use it
                </h2>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-0">
                    <article className="flex flex-col gap-3.5 border-b border-[#e2ddd8] pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                        <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white">
                            <img src={BookmarkSvg} alt="Bookmark" loading="lazy" decoding="async" />
                        </div>
                        <p className="text-[21px] font-medium text-[#2A2A2A]">
                            Save outfits/looks you
                            <br />
                            know already work
                        </p>
                        <p className="text-[0.8rem] text-[#2A2A2A] mt-8">
                            Upload and name outfits from your gallery so you can find them instantly
                            when you need them.
                        </p>
                    </article>

                    <article className="flex flex-col gap-3.5 border-b border-[#e2ddd8] pb-7 md:border-b-0 md:border-r md:px-8 md:pb-0">
                        <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white">
                            <img src={LightningSvg} alt="Lightning" loading="lazy" decoding="async" />
                        </div>
                        <p className="text-[21px] font-medium text-[#2A2A2A]">
                            Any Outfit in Seconds
                        </p>
                        <p className="text-[0.8rem] text-[#2A2A2A] mt-8">
                            Search &quot;brunch&quot;, &quot;black dress&quot;, or &quot;Goa trip&quot; and Zuri pulls it up.
                        </p>
                    </article>

                    <article className="flex flex-col gap-3.5 md:pl-8">
                        <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-[#7C1631] text-white">
                            <img src={BookOpenSvg} alt="Book Open" loading="lazy" decoding="async" />
                        </div>
                        <p className="text-[21px] font-medium text-[#2A2A2A]">
                            Zuri Magazine
                        </p>
                        <p className="text-[0.8rem] text-[#2A2A2A] mt-8">
                            Practical style ideas. Not runway fantasy. Learn what works for real
                            wardrobes, real bodies, real life.
                        </p>
                    </article>
                </div>
            </div>

            <div className="mt-6 rounded-[20px] bg-[#EEEEEE] px-5 py-8 md:mt-5 md:px-12 md:py-11">
                <div className="mb-7 grid grid-cols-1 items-top gap-7 md:mb-9 md:grid-cols-2 md:gap-10">
                    <div>
                        <h2 className="mb-2.5 text-[clamp(1.5rem,2.6vw,2.14rem)] text-[#2A2A2A]">
                            Ready to meet your most
                            <br />
                            confident, fabulous self?
                        </h2>
                        <p className="text-[0.9rem] font-medium  text-[#666666]">
                            Download Zuri and start dressing with confidence.
                        </p>

                        <div className="mt-5 flex items-center gap-3.5 md:mt-12">
                            <span className="text-[1.5rem] text-[#121212] mr-8">Connect with us on</span>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-14 w-14 items-center justify-center rounded-full border-[1.633px] border-[#00000033] bg-white transition hover:border-[#888] hover:bg-black/4"
                            >
                                <img src={InstagramSvg} alt="Instagram" loading="lazy" decoding="async" />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-14 w-14 items-center justify-center rounded-full border-[1.633px] border-[#00000033] bg-white transition hover:border-[#888] hover:bg-black/4"
                            >
                                <img src={LinkedInSvg} alt="LinkedIn" loading="lazy" decoding="async" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="mb-3.5 text-center text-[1.5rem] text-[#121212] md:text-left">
                            Find us on
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-3">
                            <StoreBadge />
                            <StoreBadge apple />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2.5 pt-6 text-center md:flex-row md:gap-4 md:text-left">
                    <span className="text-[1rem] text-[#666666]">©All Rights Reserved 2026</span>
                    <img className="h-4" src={ZuriLogo} alt="Zuri Logo" loading="lazy" decoding="async" />
                    <a
                        href="#"
                        className="cursor-pointer text-[1rem] text-[#121212] underline underline-offset-[3px]"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </section>
    )
}
