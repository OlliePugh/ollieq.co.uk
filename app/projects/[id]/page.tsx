import projects from "@/app/projects";
import { Project as ProjectPage } from "@/app/types";
import { NextPage, NextPageContext } from "next";

// TODO this can be improved with generateStaticProps

const ProjectPage: NextPage<{
  project: ProjectPage;
  params: { id: string };
}> = ({ params }) => {
  const { id } = params;
  if (id == null || Array.isArray(id) || !(id in projects)) {
    throw new Error("404");
  }

  const project = projects[id];

  return (
    <div className="flex h-24 items-center">
      <h1 className="basis-2/3 font-bold text-center text-3xl">
        {project.title.toUpperCase()}
      </h1>
      <div className="basis-1/3">img</div>
    </div>
  );
};

export default ProjectPage;
