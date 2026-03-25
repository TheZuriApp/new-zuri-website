import phoneShowcaseImage from '../../assets/HomePage/g4.png'

export default function MobileStylistSection() {
    return (
        <section className="md:hidden w-full max-w-md mx-auto px-4 pt-10 pb-6 text-center">

            {/* Top Heading */}
            <h2 className="text-[28px] leading-[1.2] font-medium text-[#2A2A2A] mb-6">
                Your personal stylist,
                <br />
                on demand
            </h2>

            {/* Image Section */}
            <div className="relative w-full overflow-hidden rounded-[28px]">

                {/* Phones Image */}
                <img
                    src={phoneShowcaseImage}
                    alt="Zuri app preview"
                    className="w-full h-auto object-cover"
                />

                {/* Bottom White Gradient Fade */}
                <div className="absolute bottom-0 left-0 w-full h-[55%] 
                    bg-linear-to-b 
                    from-white/0 
                    via-white/90
                    via-60% 
                    to-white 
                    to-100%"
                />
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-0 w-full px-4">
                    <h3 className="text-[20px] font-semibold text-black">
                        Ask Zuri about any “look” or<br />“outfit”.
                    </h3>
                </div>
            </div>

            {/* Description */}
            <p className=" text-[14px] text-[#444444] px-2 font-medium">
                Ask Zuri about any “look” or “outfit”. Upload<br />up to 3 photos and get clear,
                honest advice on<br />what works, what doesn’t, and what to<br />change.
            </p>

        </section>
    )
}