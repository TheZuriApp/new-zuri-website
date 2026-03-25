import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const nodeRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = nodeRef.current
        if (!node) return

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px',
            },
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={nodeRef}
            className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            {children}
        </section>
    )
}
