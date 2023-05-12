import FadedOverlay from "../atoms/faded-overlay";
import IntroSection from "../atoms/intro-section";
import ProjectTile from "./project-tile";

const fakeProject: Project = {
  title: "Some interactive project",
  imagePath: "/images/headshot.jpeg",
  technologiesUsed: [],
  youtubeUrl: "",
};

const Projects = () => {
  return (
    <IntroSection>
      <div className="py-8 px-8 md:px-0 max-h-[36rem] sm:max-h-[50rem] overflow-hidden">
        <h1 className="text-center font-bold text-2xl">Projects</h1>
        <div className="flex flex-wrap justify-center pt-8 gap-6">
          <ProjectTile project={fakeProject} />
          <ProjectTile project={fakeProject} />
          <ProjectTile project={fakeProject} />
          <ProjectTile project={fakeProject} />
          <ProjectTile project={fakeProject} />
          <ProjectTile project={fakeProject} />
        </div>
      </div>
    </IntroSection>
  );
};

export default Projects;
