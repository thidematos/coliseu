import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Projects({ isMarmoraria = true }) {
  const projects = useLoaderData();

  const marmorariaProjects = projects.filter(
    (project) => project.isMarmoraria === isMarmoraria,
  );

  return (
    <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-6 overflow-x-scroll px-8 pb-10">
      {marmorariaProjects.map((project) => (
        <ProjectCard key={project.createdAt} project={project} />
      ))}
    </div>
  );
}

export default Projects;
