export interface Project {
  title: string;
  imagePath: string;
  technologiesUsed: Tech[];
  youtubeUrl?: string;
}

export enum Tech {
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  FIREBASE = "firebase",
  ARDUINO = "arduino",
  REACT = "react",
  UNITY = "unity",
  CSHARP = "csharp",
}
