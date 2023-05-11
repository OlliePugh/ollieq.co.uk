interface Project {
  title: string;
  imagePath: string;
  technologiesUsed: Tech[];
  youtubeUrl: string;
}

enum Tech {
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
}
