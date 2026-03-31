import { Suspense } from "react";

function SectionFallback() {
  return (
    <div
      className="section-suspense-fallback mx-3 my-5 md:my-7"
      aria-hidden
    >
      <div className="section-suspense-fallback__surface rounded-[1.35rem] border border-white/35 bg-white/45 px-6 py-7 shadow-[0_24px_80px_-48px_rgba(15,15,20,0.35)] backdrop-blur-md md:rounded-[1.75rem] md:px-9 md:py-9">
        <div className="section-suspense-fallback__lines mx-auto flex max-w-2xl flex-col gap-3.5">
          <div className="section-suspense-fallback__line h-[0.65rem] w-[68%] rounded-full bg-zinc-400/22" />
          <div className="section-suspense-fallback__line section-suspense-fallback__line--mid h-[0.65rem] w-full rounded-full bg-zinc-400/18" />
          <div className="section-suspense-fallback__line h-[0.65rem] w-[44%] rounded-full bg-zinc-400/15" />
        </div>
      </div>
    </div>
  );
}

export default function SectionSuspense({ children }) {
  return <Suspense fallback={<SectionFallback />}>{children}</Suspense>;
}
