import FadeInSection from "../atoms/fade-in-section";

const ProjectTile = ({ project }: { project: Project }) => {
  return (
    <FadeInSection>
      <div className="w-[16rem] h-[20rem] sm:w-[24rem] sm:h-[28rem]">
        <div className="group/tile h-full w-full bg-slate-100 rounded-sm drop-shadow-md flex flex-col cursor-pointer">
          <div className="bg-red grow flex items-center justify-center">
            <div className="rounded-sm overflow-hidden h-[8rem] w-[12rem] sm:h-[10rem] sm:w-[16rem] transition ease-in-out duration-500 drop-shadow-2xl group-hover/tile:drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] group-hover/tile:-translate-y-2">
              {/* required as next/image will force absolute positioning for fill, which causes the image to flicker on IOS */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imagePath}
                className="w-full h-full object-cover"
                alt={`Image of the ${project.title} project`}
              />
            </div>
          </div>
          <div className="w-full p-4 flex justify-between gap-4">
            <p className="whitespace-nowrap overflow-ellipsis overflow-hidden">
              {project.title}
            </p>
            <div>Icon</div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ProjectTile;
