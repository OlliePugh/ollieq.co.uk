"use client";
import { Tech } from "@/app/types";
import ImageLoader from "../image-loader";

type TechIconDetails = { path: string; styling?: string };

interface LogoProps {
  width: number;
  height: number;
  tech: Tech;
  className?: string;
}

export const TechLogo = ({ tech, width, height, className }: LogoProps) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <ImageLoader
        useNext={false}
        src={TechIconsPaths.get(tech)!.path}
        alt={`${tech} logo`}
        width={width}
        height={height}
        className={`${TechIconsPaths.get(tech)!.styling ?? ""} ${
          className ?? ""
        }`}
      />
    </div>
  );
};

export const TechIconsPaths: Map<Tech, TechIconDetails> = new Map([
  [Tech.JAVASCRIPT, { path: "/images/javascript.svg" }],
  [Tech.TYPESCRIPT, { path: "/images/typescript.svg" }],
  [Tech.ARDUINO, { path: "/images/arduino.svg" }],
  [Tech.REACT, { path: "/images/react.svg" }],
  [
    Tech.FIREBASE,
    { path: "/images/firebase.svg", styling: "scale-[0.8] -translate-y-0.5" },
  ],
  [Tech.UNITY, { path: "/images/unity.svg", styling: "translate-y-1" }],
  [Tech.CSHARP, { path: "/images/csharp.svg" }],
]);
