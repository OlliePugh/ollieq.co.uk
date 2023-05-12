import { useEffect, useState } from "react";

interface FadedOverlayProps {
  enabled: boolean;
  className?: string;
  fullPercent?: number;
}

const FadedOverlay = ({
  enabled,
  className,
  fullPercent = 90,
}: FadedOverlayProps) => {
  return (
    <div
      className={`w-full ${className} ${enabled ? "opacity-100" : "opacity-0"}`}
      style={{
        background: `linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 1) ${fullPercent}%)`,
      }}
    ></div>
  );
};

export default FadedOverlay;
