import React, { useEffect, useRef, useState } from "react";

interface ColourFollowCursorBgProps {
  children: React.ReactNode;
  className?: string;
  foregroundColour: string;
  backgroundColour: string;
  radius: number;
  increaseRate?: number;
  decreaseRate?: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const ColourFollowCursorBg: React.FC<ColourFollowCursorBgProps> = ({
  children,
  className,
  foregroundColour,
  backgroundColour,
  radius: desiredRadius,
  increaseRate = 50,
  decreaseRate = 50,
}) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: -1, y: -1 });
  const [mouseIn, setMouseIn] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(0);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (mouseIn && radius < desiredRadius) {
      interval = setInterval(() => {
        setRadius((prevRadius) => {
          const nextRadius = prevRadius + increaseRate;
          return nextRadius >= desiredRadius ? desiredRadius : nextRadius;
        });
      }, 10);
    } else if (!mouseIn && radius > 0) {
      interval = setInterval(() => {
        setRadius((prevRadius) => {
          const nextRadius = prevRadius - decreaseRate;
          return nextRadius <= 0 ? 0 : nextRadius;
        });
      }, 10);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [mouseIn, radius, desiredRadius, increaseRate, decreaseRate]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (componentRef.current) {
        const componentRect = componentRef.current.getBoundingClientRect();
        const isInsideComponent =
          event.clientX >= componentRect.left &&
          event.clientX <= componentRect.right &&
          event.clientY >= componentRect.top &&
          event.clientY <= componentRect.bottom;

        if (isInsideComponent) {
          const offsetX = event.clientX - componentRect.left;
          const offsetY = event.clientY - componentRect.top;
          setMousePos({ x: offsetX, y: offsetY });
          setMouseIn(true);
        } else {
          setMouseIn(false);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    background:
      mouseIn || radius !== 0
        ? `radial-gradient(${radius}px ${radius}px at ${mousePos.x}px ${mousePos.y}px, ${foregroundColour}, ${backgroundColour})`
        : backgroundColour,
  };

  return (
    <div
      ref={componentRef}
      className={`-z-10 relative ${className ?? ""}`}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export default ColourFollowCursorBg;
