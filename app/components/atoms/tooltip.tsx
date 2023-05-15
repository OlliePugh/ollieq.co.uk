"use client";
import { ReactNode, useState } from "react";

const Tooltip = ({ text, children }: { text: string; children: ReactNode }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
      <div
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 z-10">
          <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 -translate-x-1/2 mx-auto top-0 left-1/2" />
          <div className="px-2 py-1 text-sm text-white bg-gray-800 rounded-md text-center">
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
