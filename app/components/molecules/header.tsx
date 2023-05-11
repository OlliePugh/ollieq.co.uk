"use client";
import { useMediaQuery } from "react-responsive";
import FadedOverlay from "../atoms/faded-overlay";
import HeadshotImage from "../atoms/headshot-image";
import { BREAK_POINTS } from "@/app/consts";

const IntroductionName = () => {
  const isMediumScreen = useMediaQuery({ query: BREAK_POINTS.md });

  return (
    <div className="flex flex-col-reverse md:flex-row py-8">
      <div className="md:basis-2/3 flex justify-center items-center">
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
        <div className=" h-48 w-48 sm:h-64 sm:w-64 relative flex m-auto md:m-0">
          {/* <FadedOverlay enabled={!isMediumScreen}> */}
          {/* the fade overlay is causing errors as use media query does not work straight away AFAIK */}
          <HeadshotImage />
          {/* </FadedOverlay> */}
        </div>
      </div>
    </div>
  );
};

export default IntroductionName;
