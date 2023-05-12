"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const shouldFadeIn: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });
  };

  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(shouldFadeIn);
    const current = domRef.current;

    if (!current) {
      return;
    }

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <div
      className={`duration-1000 transition-all ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
