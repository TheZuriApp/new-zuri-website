import { useEffect, useRef, useState } from 'react'

export default function ShimmerImage({
    src,
    alt,
    className,
    shimmer = true,
    onLoad,
    onError,
    ...imgProps
}) {
    const imageRef = useRef(null)
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        setStatus('loading')
    }, [src])

    useEffect(() => {
        const imageElement = imageRef.current
        if (!imageElement) {
            return
        }

        // Handles cached images that may finish loading before React fires onLoad.
        if (imageElement.complete) {
            setStatus(imageElement.naturalWidth > 0 ? 'loaded' : 'error')
        }
    }, [src])

    const handleLoad = (event) => {
        setStatus('loaded')
        onLoad?.(event)
    }

    const handleError = (event) => {
        setStatus('error')
        onError?.(event)
    }

    const isSkeletonVisible = shimmer && status !== 'loaded'

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            className={`${className ?? ''} ${isSkeletonVisible ? 'zuri-image-skeleton' : ''}`.trim()}
            onLoad={handleLoad}
            onError={handleError}
            {...imgProps}
        />
    )
}
