import { Swiper, SwiperSlide } from "swiper/react";
import InterativeImg from "./InterativeImg";
import { Autoplay, Pagination } from "swiper/modules";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, renderEdition = false }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${renderEdition ? "cursor-pointer" : ""} flex w-[90%] flex-col items-center justify-center gap-4 border border-gray-100 bg-stone-100 px-4 py-4 shadow-xl md:col-span-2 md:w-[250px]`}
      onClick={() => {
        if (!renderEdition) return;
        navigate(`/admin/overview/${project._id}`);
      }}
    >
      {renderEdition && (
        <p className="font-garamond text-base text-specialRed underline underline-offset-2 drop-shadow-sm md:text-sm">
          Clique para editar ou excluir a postagem
        </p>
      )}
      <Swiper
        pagination={true}
        spaceBetween={20}
        modules={[Pagination]}
        className="w-full"
      >
        {project.photos.map((img) => (
          <SwiperSlide
            key={img}
            className={`rounded-lg border bg-stone-100 shadow-xl ${project.isMarmoraria ? "border-specialRed" : "border-sky-700"}`}
          >
            <InterativeImg
              src={`/${img}`}
              className="row-span-2 h-full w-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`flex w-full flex-col items-center justify-center gap-2`}>
        <p
          className={`text-center font-garamond text-lg font-bold uppercase ${project.isMarmoraria ? "text-specialRed" : "text-sky-700"} drop-shadow-sm md:text-base lg:text-sm`}
        >
          {project.material}
        </p>
        <p
          className={`text-center font-garamond text-xl drop-shadow-sm md:text-lg lg:text-base`}
        >
          {project.title}
        </p>
      </div>
      <div>
        <p className="font-garamond text-stone-500 drop-shadow md:text-sm lg:text-xs">
          Publicado em {format(project.createdAt, "dd/MM/yyyy")}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
