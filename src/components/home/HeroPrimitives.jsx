import AppleIcon from '../../assets/HomePage/app_store.svg'
import GooglePlayIcon from '../../assets/HomePage/google_play.svg'
import ShimmerImage from './ShimmerImage'

export function StoreBadge({ apple = false, mobile = false }) {
    const iconSrc = apple ? AppleIcon : GooglePlayIcon
    const sub = apple ? 'Download on the' : 'GET IT ON'
    const main = apple ? 'App Store' : 'Google Play'

    const containerClasses = mobile
        ? `inline-flex items-center gap-2.5 rounded-[8px] border-[0.22px] border-white bg-black/55 ${apple ? 'px-3' : 'px-4'
        } py-2.5 text-white no-underline backdrop-blur-md`
        : `inline-flex items-center gap-2 rounded-[8px] border-[0.22px] border-white bg-zinc-950 ${apple ? 'px-2.5' : 'px-3.5'
        } py-1.5 text-white no-underline transition-colors hover:bg-zinc-900`
    const iconSize = mobile ? 'h-[30px] w-[30px]' : 'h-[30px] w-[30px]'

    return (
        <a href="#" className={containerClasses}>
            <ShimmerImage src={iconSrc} alt={main} className={iconSize} />
            <span className="flex flex-col leading-tight">
                <span
                    className={
                        mobile
                            ? 'text-[0.6rem] tracking-[0.04em] text-white'
                            : 'text-[0.58rem] tracking-[0.04em] text-white'
                    }
                >
                    {sub}
                </span>
                <span className={mobile ? 'text-[0.78rem] font-medium' : 'text-[0.76rem] font-medium'}>
                    {main}
                </span>
            </span>
        </a>
    )
}

export function Silhouette({ wider = false }) {
    return (
        <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20"
            width="180"
            height="420"
            viewBox="0 0 180 420"
            fill="none"
            aria-hidden="true"
        >
            <ellipse cx="90" cy="55" rx="38" ry="45" fill="rgba(255,255,255,0.12)" />
            {wider ? (
                <path
                    d="M20 420 Q35 240 90 190 Q145 240 160 420Z"
                    fill="rgba(255,255,255,0.08)"
                />
            ) : (
                <path
                    d="M30 420 Q40 250 90 200 Q140 250 150 420Z"
                    fill="rgba(255,255,255,0.08)"
                />
            )}
        </svg>
    )
}
