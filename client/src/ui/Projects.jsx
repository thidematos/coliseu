import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { useState } from "react";

function Projects({ isMarmoraria = true }) {
  const projects = useLoaderData();

  const filteredProjects = projects.filter(
    (project) => project.isMarmoraria === isMarmoraria,
  );

  const { isLarge } = useSelector((store) => store.ui.verifyMobile);

  const [numShowMore, setNumShowMore] = useState(() => (isLarge ? 2 : 1));

  const showProjects = filteredProjects.filter((_, ind) => ind <= numShowMore);

  function updateShowwedProjects() {
    setNumShowMore((state) => state + 2);
  }

  console.log(isLarge);

  console.log(filteredProjects);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <div className="flex w-full flex-col items-center justify-center gap-8 gap-y-10 md:flex-row md:flex-wrap md:gap-x-16">
        {showProjects.map((project) => (
          <ProjectCard key={project.createdAt} project={project} />
        ))}
      </div>
      {numShowMore < filteredProjects.length - 1 && (
        <button
          onClick={updateShowwedProjects}
          className="font-garamond uppercase text-sky-600 underline underline-offset-2"
        >
          Mostrar mais projetos
        </button>
      )}
    </div>
  );
}

export default Projects;
