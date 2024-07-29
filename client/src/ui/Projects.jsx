import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

function Projects({ isMarmoraria = true }) {
  const projects = useLoaderData();

  const projectsTest = [
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
    {
      createdAt: "2024-07-19T23:24:34.219Z",
      isMarmoraria: true,
      material: "Granito Branco Pitaya",
      photos: ["photo-1721431474199-0.jpg"],
      title: "Bancada e kit pia",
      user: "669a949e11269717a4d8c0d8",
      __v: 0,
      _id: "669af5b2eb25d4a4d9a3c714",
    },
  ];

  console.log(projects);

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
