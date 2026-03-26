import { useEffect, useState } from 'react'

export default function ShimmerImage({
    src,
    alt,
    className,
    onLoad,
    onError,
    ...imgProps
}) {
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        setStatus('loading')
    }, [src])

    const handleLoad = (event) => {
        setStatus('loaded')
        onLoad?.(event)
    }

    const handleError = (event) => {
        setStatus('error')
        onError?.(event)
    }

    const isSkeletonVisible = status !== 'loaded'

    return (
        <img
            src={src}
            alt={alt}
            className={`${className ?? ''} ${isSkeletonVisible ? 'zuri-image-skeleton' : ''}`.trim()}
            onLoad={handleLoad}
            onError={handleError}
            {...imgProps}
        />
    )
}
