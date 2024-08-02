import { useLoaderData } from "react-router-dom";
import { getAllProjects } from "../../services/projectService";
import ProjectCard from "../../ui/ProjectCard";

function Projects() {
  const projects = useLoaderData();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 lg:w-[90%]">
      <h4 className="font-garamond text-xl uppercase drop-shadow lg:text-lg">
        Visão geral
      </h4>
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap lg:gap-10">
        {projects.map((project) => (
          <ProjectCard
            renderEdition={true}
            project={project}
            key={project.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const projects = await getAllProjects();

  return projects;
}

export default Projects;
