import { StoreBadge } from './HeroPrimitives'

function FeatureIcon({ children }) {
    return (
        <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-[#6b1a2a] text-white">
            {children}
        </div>
    )
}

function SocialButton({ label, children }) {
    return (
        <a
            href="#"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ccc] bg-transparent transition hover:border-[#888] hover:bg-black/4"
        >
            {children}
        </a>
    )
}

export default function FooterSection() {
    return (
        <section className="mt-6 bg-white p-3 md:mt-8 md:p-6">
            <div className="rounded-[20px] bg-[#f5f3f0] px-5 py-9 md:px-12 md:py-14">
                <p className="mb-2.5 text-center text-[0.82rem] tracking-[0.01em] text-[#888]">
                    And there&apos;s more
                </p>
                <h2 className="mb-9 text-center text-[clamp(1.9rem,3vw,2.75rem)] font-medium leading-[1.2] text-[#111] md:mb-13 md:font-serif">
                    Zuri keeps getting smarter
                    <br />
                    the more you use it
                </h2>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-0">
                    <article className="flex flex-col gap-3.5 border-b border-[#e2ddd8] pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                        <FeatureIcon>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                        </FeatureIcon>
                        <p className="text-[0.9rem] font-semibold leading-[1.4] text-[#111]">
                            Save outfits/looks you
                            <br />
                            know already work
                        </p>
                        <p className="text-[0.78rem] leading-[1.65] text-[#666]">
                            Upload and name outfits from your gallery so you can find them instantly
                            when you need them.
                        </p>
                    </article>

                    <article className="flex flex-col gap-3.5 border-b border-[#e2ddd8] pb-7 md:border-b-0 md:border-r md:px-8 md:pb-0">
                        <FeatureIcon>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </FeatureIcon>
                        <p className="text-[0.9rem] font-semibold leading-[1.4] text-[#111]">
                            Any Outfit in Seconds
                        </p>
                        <p className="mt-1 text-[0.78rem] leading-[1.65] text-[#666]">
                            Search &quot;brunch&quot;, &quot;black dress&quot;, or &quot;Goa trip&quot; and Zuri pulls it up.
                        </p>
                    </article>

                    <article className="flex flex-col gap-3.5 md:pl-8">
                        <FeatureIcon>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <rect x="3" y="3" width="7" height="18" rx="1" />
                                <rect x="14" y="3" width="7" height="10" rx="1" />
                                <rect x="14" y="17" width="7" height="4" rx="1" />
                            </svg>
                        </FeatureIcon>
                        <p className="text-[0.9rem] font-semibold leading-[1.4] text-[#111]">Zuri Magazine</p>
                        <p className="mt-1 text-[0.78rem] leading-[1.65] text-[#666]">
                            Practical style ideas. Not runway fantasy. Learn what works for real
                            wardrobes, real bodies, real life.
                        </p>
                    </article>
                </div>
            </div>

            <div className="mt-3 rounded-[20px] bg-[#f5f3f0] px-5 py-8 md:mt-5 md:px-12 md:py-11">
                <div className="mb-7 grid grid-cols-1 items-center gap-7 md:mb-9 md:grid-cols-2 md:gap-10">
                    <div>
                        <h2 className="mb-2.5 text-[clamp(1.7rem,2.6vw,2.4rem)] font-medium leading-[1.2] text-[#111] md:font-serif">
                            Ready to meet your most
                            <br />
                            confident, fabulous self?
                        </h2>
                        <p className="text-[0.8rem] leading-normal text-[#777]">
                            Download Zuri and start dressing with confidence.
                        </p>

                        <div className="mt-5 flex items-center gap-3.5 md:mt-5">
                            <span className="text-[0.8rem] text-[#555]">Connect with us on</span>
                            <SocialButton label="Instagram">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#333"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="#333" stroke="none" />
                                </svg>
                            </SocialButton>
                            <SocialButton label="LinkedIn">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#333"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </SocialButton>
                        </div>
                    </div>

                    <div>
                        <p className="mb-3.5 text-center text-[0.8rem] font-medium text-[#555] md:text-left">
                            Find us on
                        </p>
                        <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-3">
                            <StoreBadge />
                            <StoreBadge apple />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2.5 border-t border-[#e2ddd8] pt-6 text-center md:flex-row md:gap-4 md:text-left">
                    <span className="text-[0.75rem] text-[#999]">©All Rights Reserved 2026</span>
                    <span className="text-[1.3rem] font-semibold tracking-[0.22em] text-[#8b1a2a] md:font-serif">
                        ZURI
                    </span>
                    <a
                        href="#"
                        className="cursor-pointer text-[0.75rem] text-[#444] underline underline-offset-[3px] hover:text-[#111]"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </section>
    )
}
