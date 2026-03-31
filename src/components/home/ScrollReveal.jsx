import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0, className = "" }) {
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight;
    const rootMargin = vh * 0.1;
    const intersects =
      rect.top < vh - rootMargin && rect.bottom > rootMargin * 0.6;
    if (intersects) {
      queueMicrotask(() => setIsVisible(true));
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      return;
    }
    const node = nodeRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={nodeRef}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </section>
  );
}
