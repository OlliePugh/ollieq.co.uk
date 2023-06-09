import { Project } from "@/app/types";
import FadeInSection from "../atoms/fade-in-section";
import { FaYoutube } from "react-icons/fa";
import { TechLogo } from "../atoms/tech-icons";
import ColourFollowCursorBg from "../atoms/color-follow-cursor-bg";
import colors from "tailwindcss/colors";
import Link from "next/link";
import ImageLoader from "../atoms/image-loader";

const ProjectTile = ({ project, href }: { project: Project; href: string }) => {
  return (
    <FadeInSection>
      <Link
        href={`projects/${href}`}
        className="block w-[16rem] h-[20rem] sm:w-[24rem] sm:h-[28rem]"
      >
        <div className="w-full h-full group/tile cursor-pointer">
          <ColourFollowCursorBg
            radius={300}
            foregroundColour={colors.slate["200"]}
            backgroundColour={colors.slate["100"]}
            className="h-full w-full rounded-sm drop-shadow-md flex flex-col"
          >
            <div className="bg-red grow flex items-center justify-center">
              <div className="h-[8rem] w-[12rem] sm:h-[10rem] sm:w-[16rem] transition ease-in-out duration-500 drop-shadow-2xl group-hover/tile:drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] group-hover/tile:-translate-y-2">
                {/* required as next/image will force absolute positioning for fill, which causes the image to flicker on IOS */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="rounded-sm overflow-hidden">
                  <ImageLoader
                    src={project.imagePath}
                    className="w-full h-full object-cover"
                    alt={`Image of the ${project.title} project`}
                    useNext={false}
                  />
                </div>
              </div>
            </div>
            <div className="w-full p-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <div className="flex flex-1 justify-center sm:justify-normal items-center overflow-hidden">
                {project.youtubeUrl && (
                  <div className="pr-2 hidden sm:block">
                    <FaYoutube color="red" />
                  </div>
                )}
                <p className="whitespace-nowrap inline overflow-ellipsis overflow-hidden">
                  {project.title}
                </p>
              </div>
              <div className="flex flex-row gap-1 h-6">
                {project.youtubeUrl && (
                  <div className="flex flex-col justify-center sm:pr-2 sm:hidden">
                    <FaYoutube color="red" />
                  </div>
                )}
                <div className="grow sm:grow-0" />
                {project.technologiesUsed.slice(0, 3).map((tech) => (
                  <div className="h-4 w-4" key={tech}>
                    <TechLogo height={16} width={16} tech={tech} />
                  </div>
                ))}
                {project.technologiesUsed.length > 3 && (
                  <p>+{project.technologiesUsed.length - 3}</p>
                )}
              </div>
            </div>
          </ColourFollowCursorBg>
        </div>
      </Link>
    </FadeInSection>
  );
};

export default ProjectTile;
