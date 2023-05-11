"use client";

import { useEffect, useState } from "react";

interface ColourFollowCursorBgProps {
  children: React.ReactNode;
}

const ColourFollowCursorBg = ({ children }: ColourFollowCursorBgProps) => {
  const [elementRect, setElementRect] = useState<DOMRect | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateElementRect = () => {
      const element = document.getElementById("colour-follow-cursor-bg");
      if (element) {
        setElementRect(element.getBoundingClientRect());
      }
    };

    updateElementRect();
    window.addEventListener("resize", updateElementRect);

    return () => {
      window.removeEventListener("resize", updateElementRect);
    };
  }, []);

  const gradientX =
    elementRect && elementRect.width > 0
      ? ((mousePos.x - elementRect.left) / elementRect.width) * 100
      : 0;

  const gradientY =
    elementRect && elementRect.height > 0
      ? ((mousePos.y - elementRect.top) / elementRect.height) * 100
      : 0;

  return (
    <div
      id="colour-follow-cursor-bg"
      className="-z-10 relative"
      style={{
        background: `radial-gradient(120px 120px at ${gradientX}% ${gradientY}%, rgb(230, 230, 230), rgb(255, 255, 255))`,
      }}
    >
      {children}
    </div>
  );
};

export default ColourFollowCursorBg;
