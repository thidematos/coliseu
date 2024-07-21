import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

function Projects({ isMarmoraria = true }) {
  const projects = useLoaderData();

  const filteredProjects = projects.filter(
    (project) => project.isMarmoraria === isMarmoraria,
  );

  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);

  const mobileStyles =
    "flex w-full flex-row flex-nowrap items-center justify-start gap-6 overflow-x-scroll px-8 pb-10";

  const notMobileStyle =
    "md:grid md:grid-flow-col md:w-[90vw] md:px-10 md:overflow-x-scroll md:py-10 md:gap-6 md:justify-center lg:py-8";

  return (
    <div className={isBiggerThanMobile ? notMobileStyle : mobileStyles}>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.createdAt} project={project} />
      ))}
    </div>
  );
}

export default Projects;
