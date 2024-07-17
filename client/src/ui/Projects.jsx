import { useState } from "react";
import InterativeImg from "./InterativeImg";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

function Projects() {
  const projects = [
    {
      imgs: [
        "photo-1699741264879.jpeg",
        "photo-1699741447140.jpeg",
        "photo-1718303419765.jpeg",
      ],
      title: "Bancada",
      material: "granito preto escovado",
      user: "654cb37d8818eb56d8897423",
      createdAt: "2023-11-11T22:21:04.892+00:00",
    },
    {
      imgs: ["photo-1699741447140.jpeg"],
      title: "Bancada e kit pia",
      material: "Granito Branco Pitaya",
      user: "654cb37d8818eb56d8897423",
      createdAt: "2023-11-12T14:05:31.492+00:00",
    },
    {
      imgs: ["photo-1718303419765.jpeg"],
      title: "Portão",
      material: "Alumínio preto",
      user: "654cb37d8818eb56d8897423",
      createdAt: "2024-06-13T18:32:00.925+00:00",
    },
    {
      imgs: ["photo-1718303702212.jpeg"],
      title: "Pergolado policarbonato",
      material: "Alumínio preto",
      user: "65516c51c6f7a1788970d874",
      createdAt: "2024-06-13T18:35:02.215+00:00",
    },
  ];

  return (
    <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-6 overflow-x-scroll px-8 pb-10">
      {projects.map((project) => (
        <ProjectCard key={project.createdAt} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const { isMarmoraria } = useSelector((store) => store.ui);

  return (
    <div className="flex w-[90%] flex-shrink-0 flex-col items-center justify-center gap-4 border border-gray-100 bg-stone-100 px-4 pb-8 pt-4 shadow-xl">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {project.imgs.map((img) => (
          <SwiperSlide
            key={img}
            className={`rounded-lg border bg-stone-100 shadow-xl ${isMarmoraria ? "border-specialRed" : "border-sky-700"}`}
          >
            <InterativeImg
              src={`/${img}`}
              className="row-span-2 h-full w-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p
        className={`text-center font-garamond text-lg font-bold uppercase ${isMarmoraria ? "text-specialRed" : "text-sky-700"} drop-shadow-sm`}
      >
        {project.material}
      </p>
      <p className="text-center font-garamond text-xl drop-shadow-sm">
        {project.title}
      </p>
    </div>
  );
}

export default Projects;
