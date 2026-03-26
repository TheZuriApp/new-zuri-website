import zuriLogo from '../../assets/ZURI.svg'
import { StoreBadge } from './HeroPrimitives'
import ShimmerImage from './ShimmerImage'

export default function HomeNav() {
    return (
        <nav className="relative flex items-center justify-between bg-white px-6 py-6 md:px-28 md:py-2">

            <ShimmerImage
                src={zuriLogo}
                className="h-6 w-auto absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
                alt="Zuri Logo"
            />

            <div className="hidden gap-2.5 md:flex">
                <StoreBadge />
                <StoreBadge apple />
            </div>

        </nav>
    )
}
