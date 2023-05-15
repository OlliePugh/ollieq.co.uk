import InteractiveChristmasTreeContent from "./projects/[id]/interactive-christmas-tree";
import { Project, Tech } from "./types";
import InternetControllableRcCarsV1 from "./projects/[id]/internet-controllable-rc-cars-v1";
import RcRocketLeague from "./projects/[id]/rc-rocket-league";
import HalloweenVrGame from "./projects/[id]/halloween-vr-game";

export interface ProjectMap {
  [index: string]: Project;
}

const projects: ProjectMap = {
  "interactive-christmas-tree": {
    title: "Interactive Christmas Tree",
    imagePath: "/images/christmas-tree.png",
    technologiesUsed: [
      Tech.JAVASCRIPT,
      Tech.REACT,
      Tech.FIREBASE,
      Tech.ARDUINO,
    ],
    youtubeUrl: "https://youtu.be/QkLoyxMwcz4",
    content: InteractiveChristmasTreeContent(), // can be instantiated here because its static content
  },
  "internet-controllable-rc-cars-v1": {
    title: "Internet Controllable RC Cars V1",
    imagePath: "/images/car-racing-v1.png",
    technologiesUsed: [Tech.JAVASCRIPT, Tech.ARDUINO],
    youtubeUrl: "https://youtu.be/HwvNMShiPvQ",
    content: InternetControllableRcCarsV1(),
  },
  "halloween-vr-game": {
    title: "Halloween VR Game",
    imagePath: "/images/vr-horror.png",
    technologiesUsed: [Tech.REACT, Tech.JAVASCRIPT, Tech.UNITY, Tech.CSHARP],
    youtubeUrl: "https://youtu.be/bmulngc14-U",
    content: HalloweenVrGame(),
  },
  "rc-rocket-league": {
    title: "Internet RC Rocket League",
    imagePath: "/images/vr-horror.png",
    technologiesUsed: [Tech.REACT, Tech.JAVASCRIPT, Tech.UNITY, Tech.CSHARP],
    youtubeUrl: "https://youtu.be/bmulngc14-U",
    content: RcRocketLeague(),
  },
};

export default projects;
