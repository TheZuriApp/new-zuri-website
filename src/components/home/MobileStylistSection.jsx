import phoneShowcaseImage from "../../assets/HomePage/g4.png";
import ShimmerImage from "./ShimmerImage";

export default function MobileStylistSection() {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 pb-9 pt-5 text-center sm:pt-6 sm:pb-10 lg:hidden">
      <h2 className="mx-auto mb-4 max-w-[20ch] text-2xl font-medium leading-[1.16] text-[#2A2A2A] sm:mb-5 sm:text-[1.58rem] min-[400px]:text-[1.68rem]">
        Your personal stylist,
        <br />
        on demand
      </h2>

      <div className="relative w-full overflow-hidden rounded-[24px] min-[400px]:rounded-[28px]">
        <ShimmerImage
          src={phoneShowcaseImage}
          alt="Zuri stylist chat and outfits on multiple phones"
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-cover object-top"
        />

        <div className="pointer-events-none absolute bottom-0 left-0 h-[52%] w-full bg-linear-to-b from-white/0 via-white/88 via-55% to-white to-100%" />

        <div className="absolute bottom-4 left-0 w-full px-3 sm:bottom-5 min-[400px]:bottom-6 min-[400px]:px-4">
          <h3 className="text-base font-semibold leading-snug text-black sm:text-[17px] min-[400px]:text-[19px]">
            Ask Zuri about any “look” or
            <br />
            “outfit”.
          </h3>
        </div>
      </div>

      <p className="mt-3 px-0.5 text-[13px] font-medium leading-[1.55] text-[#444444] sm:mt-4 sm:px-1 min-[400px]:mt-5 min-[400px]:text-sm">
        Ask Zuri about any “look” or “outfit”. Upload up to 3 photos and get
        clear, honest advice on what works, what doesn’t, and what to change.
      </p>
    </section>
  );
}
