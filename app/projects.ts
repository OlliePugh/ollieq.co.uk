import { Project, Tech } from "./types";

interface ProjectMap {
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
  },
  "internet-controllable-rc-cars-v1": {
    title: "Internet Controllable RC Cars V1",
    imagePath: "/images/car-racing-v1.png",
    technologiesUsed: [Tech.JAVASCRIPT, Tech.ARDUINO],
    youtubeUrl: "https://youtu.be/HwvNMShiPvQ",
  },
  "halloween-vr-game": {
    title: "Halloween VR Game",
    imagePath: "/images/vr-horror.png",
    technologiesUsed: [Tech.REACT, Tech.JAVASCRIPT, Tech.UNITY, Tech.CSHARP],
    youtubeUrl: "https://youtu.be/bmulngc14-U",
  },
  "rc-rocket-league": {
    title: "Internet RC Rocket League",
    imagePath: "/images/vr-horror.png",
    technologiesUsed: [Tech.REACT, Tech.JAVASCRIPT, Tech.UNITY, Tech.CSHARP],
    youtubeUrl: "https://youtu.be/bmulngc14-U",
  },
};

export default projects;
