import phoneShowcaseImage from "../../assets/HomePage/g4.png";
import ShimmerImage from "./ShimmerImage";

export default function MobileStylistSection() {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 pb-8 pt-6 text-center lg:hidden">
      <h2 className="mx-auto mb-5 max-w-[19ch] text-[1.65rem] font-medium leading-[1.15] text-[#2A2A2A] min-[400px]:text-[1.75rem]">
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

        <div className="absolute bottom-5 left-0 w-full px-3 min-[400px]:bottom-6 min-[400px]:px-4">
          <h3 className="text-[18px] font-semibold leading-snug text-black min-[400px]:text-[20px]">
            Ask Zuri about any “look” or
            <br />
            “outfit”.
          </h3>
        </div>
      </div>

      <p className="mt-4 px-1 text-[13px] font-medium leading-normal text-[#444444] min-[400px]:mt-5 min-[400px]:text-[14px]">
        Ask Zuri about any “look” or “outfit”. Upload up to 3 photos and get
        clear, honest advice on what works, what doesn’t, and what to change.
      </p>
    </section>
  );
}
