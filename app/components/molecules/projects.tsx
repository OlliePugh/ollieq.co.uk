"use client";
import { useEffect, useState } from "react";
import FadedOverlay from "../atoms/faded-overlay";
import IntroSection from "../atoms/intro-section";
import ProjectTile from "./project-tile";
import { HiChevronDoubleDown } from "react-icons/hi2";
import projects from "@/app/projects";

const Projects = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [removeFade, setRemoveFade] = useState<boolean>(false);

  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => {
        setRemoveFade(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [expanded]);

  return (
    <IntroSection>
      <div
        className={`py-8 px-8 md:px-0 relative transition-[max-height] duration-1000 ${
          !expanded ? "max-h-[36rem] sm:max-h-[50rem]" : "max-h-full"
        } overflow-hidden`}
      >
        <h1 className="text-center font-bold text-2xl">Projects</h1>
        <div className="flex flex-wrap justify-center pt-8 gap-6">
          {Object.entries(projects).map(([id, project]) => (
            <ProjectTile project={project} key={id} />
          ))}
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 ${
            removeFade ? "hidden" : "block"
          }
          transition-opacity duration-1000 ${
            expanded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className={`absolute left-0 right-0 bottom-4 `}>
            <div
              className="flex justify-center"
              onClick={() => setExpanded(true)}
            >
              <div className="transition-transform hover:scale-110 cursor-pointer px-2">
                <p className="font-semibold">View More</p>
                <HiChevronDoubleDown className={"mx-auto stroke-1 h-4 w-4"} />
              </div>
            </div>
          </div>

          <FadedOverlay
            enabled={!expanded}
            className={"h-[9rem] sm:h-64 transition-opacity duration-1000"}
          />
        </div>
      </div>
    </IntroSection>
  );
};

export default Projects;
