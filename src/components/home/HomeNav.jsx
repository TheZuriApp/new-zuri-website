import zuriLogo from '../../assets/ZURI.svg'
import { StoreBadge } from './HeroPrimitives'

export default function HomeNav() {
    return (
        <nav className="flex items-center justify-between bg-white px-28 py-3 md:px-28 md:py-3.5">
            <img src={zuriLogo} className="h-6 w-auto" alt="Zuri Logo" />
            <div className="hidden gap-2.5 md:flex">
                <StoreBadge />
                <StoreBadge apple />
            </div>
        </nav>
    )
}
