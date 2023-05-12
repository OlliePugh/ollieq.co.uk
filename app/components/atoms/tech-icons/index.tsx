import Image from "next/image";
import { Tech } from "@/app/types";

type TechIconMap = {
  [K in Tech]: { path: string; styling?: string };
};

interface LogoProps {
  width: number;
  height: number;
  tech: Tech;
}

export const TechLogo = ({ tech, width, height }: LogoProps) => {
  return (
    <Image
      src={TechIconsPaths[tech].path}
      alt={`${tech} logo`}
      width={width}
      height={height}
      className={TechIconsPaths[tech].styling ?? ""}
    />
  );
};

export const TechIconsPaths: TechIconMap = {
  [Tech.JAVASCRIPT]: { path: "/images/javascript.svg" },
  [Tech.TYPESCRIPT]: { path: "/images/typescript.svg" },
  [Tech.ARDUINO]: { path: "/images/arduino.svg" },
  [Tech.REACT]: { path: "/images/react.svg" },
  [Tech.FIREBASE]: { path: "/images/firebase.svg" },
  [Tech.UNITY]: { path: "/images/unity.svg", styling: "translate-y-1" },
  [Tech.CSHARP]: { path: "/images/csharp.svg" },
};
