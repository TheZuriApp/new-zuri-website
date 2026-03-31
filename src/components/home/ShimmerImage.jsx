import { useEffect, useRef, useState } from "react";

function ShimmerImageImpl({
  src,
  alt,
  className,
  shimmer = true,
  onLoad,
  onError,
  ...imgProps
}) {
  const imageRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement?.complete) {
      return;
    }
    queueMicrotask(() => {
      setStatus(imageElement.naturalWidth > 0 ? "loaded" : "error");
    });
  }, []);

  const handleLoad = (event) => {
    setStatus("loaded");
    onLoad?.(event);
  };

  const handleError = (event) => {
    setStatus("error");
    onError?.(event);
  };

  const isSkeletonVisible = shimmer && status !== "loaded";

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`${className ?? ""} ${isSkeletonVisible ? "zuri-image-skeleton" : ""}`.trim()}
      onLoad={handleLoad}
      onError={handleError}
      {...imgProps}
    />
  );
}

export default function ShimmerImage(props) {
  return <ShimmerImageImpl key={props.src} {...props} />;
}
