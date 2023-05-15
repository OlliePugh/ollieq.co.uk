import FadeInSection from "@/app/components/atoms/fade-in-section";
import { TechLogo } from "@/app/components/atoms/tech-icons";
import Tooltip from "@/app/components/atoms/tooltip";
import projects from "@/app/projects";
import { Project } from "@/app/types";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

// TODO this can be improved with generateStaticProps

const IconRow = ({ project }: { project: Project }) => {
  return (
    <>
      <Tooltip text="YouTube Video">
        <a
          href={project.youtubeUrl}
          target="_blank"
          className="h-[20px] w-[20px] overflow-visible"
        >
          <FaYoutube
            className="cursor-pointer transition ease-in-out duration-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:scale-105"
            size={24}
            color="red"
          />
        </a>
      </Tooltip>

      {project.technologiesUsed.slice(0, 3).map((tech) => (
        <Tooltip
          key={tech}
          text={tech
            .toLowerCase()
            .replace(/(^|\s)\w/g, (match) => match.toUpperCase())}
        >
          <div className="h-[20px] w-[20px] overflow-visible">
            <TechLogo
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]"
              height={20}
              width={20}
              tech={tech}
            />
          </div>
        </Tooltip>
      ))}
    </>
  );
};

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  if (id == null || Array.isArray(id) || !(id in projects)) {
    throw new Error("404");
  }

  const project = projects[id];

  return (
    <div className={`flex justify-center`}>
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col min-h-screen">
          <div className="flex items-center justify-around flex-wrap flex-col mt-8 lg:flex-row lg:flex-nowrap">
            <div className="grow ml-4">
              <h1 className="font-bold text-center lg:text-left tracking-widest drop-shadow-2xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {project.title.toUpperCase()}
              </h1>
              <div className="hidden gap-2 mt-2 lg:flex lg:flex-row">
                <IconRow project={project} />
              </div>
            </div>
            <div className="basis-1/3 flex justify-center m-4">
              <div className="relative h-40 w-64 md:h-56 md:w-[22rem] lg:w-96 lg:h-60 m-2 shadow-lg">
                <div className="rounded-sm overflow-hidden">
                  <Image
                    src={project.imagePath}
                    className="object-cover"
                    alt={`Image of the ${project.title} project`}
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="lg:hidden basis-1 flex gap-2 justify-center">
              <IconRow project={project} />
            </div>
          </div>
          <FadeInSection className="grow flex">
            <div className="w-full grow px-8 pt-4 pb-8 mt-4 bg-slate-100 rounded-tl-[2rem] rounded-tr-[2rem] drop-shadow-[0px_-5px_5px_rgba(0,0,0,0.2)]">
              {project.content}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
