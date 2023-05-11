"use client";
import { useEffect, useState } from "react";
import FadedOverlay from "../atoms/faded-overlay";
import HeadshotImage from "../atoms/headshot-image";
import { BREAK_POINTS } from "@/app/consts";

const IntroductionName = () => {
  const [isAboveMdThreshold, setIsAboveMdThreshold] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAboveMdThreshold(window.innerWidth >= BREAK_POINTS.md);
    };

    // Calculate screen width on component mount
    handleResize();

    // Add event listener to recalculate on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row py-8">
      <div className="md:basis-2/3 flex justify-center items-center ">
        <div className="-translate-y-8 z-10 sm:-translate-y-12 md:translate-y-0">
          <h1 className="text-3xl tracking-[1rem] font-bold drop-shadow-2xl text-center sm:text-6xl sm:tracking-[1.5rem] md:text-left md:tracking-[2rem]">
            OLLIE•Q
          </h1>
          <h6 className="text-xs text-gray-400 text-center md:text-left">
            Software Engineer & Content Creator
          </h6>
        </div>
      </div>
      <div className="basis-1/3 md:drop-shadow-2xl">
        <div className=" h-48 w-48 sm:h-64 sm:w-64 relative flex m-auto md:m-0 rounded-full overflow-hidden z-1 scale-[1.01]">
          <FadedOverlay enabled={!isAboveMdThreshold}>
            <div className="scale-[0.99] w-full h-full">
              {/* scale is required to hide a strange border clipping issue */}
              <HeadshotImage />
            </div>
          </FadedOverlay>
        </div>
      </div>
    </div>
  );
};

export default IntroductionName;
