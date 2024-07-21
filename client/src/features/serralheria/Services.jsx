import { EffectCards, Pagination } from "swiper/modules";
import Paragraph from "../../ui/Paragraph";
import SectionContainer from "../../ui/SectionContainer";
import SectionSubtitle from "../../ui/SectionSubtitle";
import SectionTitle from "../../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import InterativeImg from "../../ui/InterativeImg";
import Projects from "../../ui/Projects";
import ColiseuTitle from "../../ui/ColiseuTitle";
import { useSelector } from "react-redux";

function Services() {
  const { isBiggerThanMobile, isLarge } = useSelector(
    (store) => store.ui.verifyMobile,
  );

  return (
    <SectionContainer selector={"projetos"} useWhite={false} usePadding={false}>
      {isBiggerThanMobile ? (
        <div className="md:grid md:grid-cols-7 md:items-center md:gap-10 md:pl-[5%]">
          <div className="md:col-span-3 md:flex md:flex-col md:items-center md:justify-center md:space-y-10">
            <div className="space-y-2">
              <SectionSubtitle textSize="text-xl">Esquadrias</SectionSubtitle>
              <SectionTitle
                fontFamily="font-bodoni"
                textSize="text-xl text-wide "
                useWhiteContrast={true}
              >
                ELEGÂNCIA & QUALIDADE
              </SectionTitle>
            </div>
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10">
              <Paragraph>
                Trabalhamos com o uso de alumínio - linha{" "}
                <span className="font-bodoni font-bold text-sky-700 drop-shadow-sm">
                  GOLD
                </span>{" "}
                e{" "}
                <span className="font-bodoni font-bold text-sky-700 drop-shadow-sm">
                  SUPREMA
                </span>{" "}
                , um material versátil, durável e de baixa manutenção, combinado
                com vidros de qualidade, que proporcionam transparência,
                iluminação natural e isolamento térmico eficiente.
              </Paragraph>
              {isLarge && <SerralheriaLogo />}
            </div>
          </div>
          <div className="md:col-span-4 md:flex md:flex-col md:items-center md:justify-center md:space-y-5">
            <SwiperOverflow />
            {!isLarge && <SerralheriaLogo />}
          </div>

          <div className="md:col-span-7 md:flex md:flex-col md:items-center md:justify-center lg:mt-10">
            <p className="text-center font-garamond font-bold uppercase tracking-wider drop-shadow">
              Confira nossos projetos:
            </p>
            <Projects isMarmoraria={false} />
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <SectionSubtitle textSize="text-xl">Esquadrias</SectionSubtitle>
            <SectionTitle
              fontFamily="font-bodoni"
              textSize="text-xl text-wide"
              useWhiteContrast={true}
            >
              ELEGÂNCIA & QUALIDADE
            </SectionTitle>
          </div>
          <div className="px-10">
            <Paragraph>
              Trabalhamos com o uso de alumínio - linha{" "}
              <span className="font-bodoni font-bold text-sky-700 drop-shadow-sm">
                GOLD
              </span>{" "}
              e{" "}
              <span className="font-bodoni font-bold text-sky-700 drop-shadow-sm">
                SUPREMA
              </span>{" "}
              , um material versátil, durável e de baixa manutenção, combinado
              com vidros de qualidade, que proporcionam transparência,
              iluminação natural e isolamento térmico eficiente.
            </Paragraph>
          </div>
          <SwiperOverflow />
          <SerralheriaLogo />
          <p className="font-garamond font-bold uppercase tracking-wider drop-shadow">
            Confira nossos projetos:
          </p>
          <Projects isMarmoraria={false} />
        </>
      )}
    </SectionContainer>
  );
}

function SerralheriaLogo() {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <p className="font-garamond text-xl font-bold tracking-wide drop-shadow">
        Serralheria
      </p>
      <ColiseuTitle />
    </div>
  );
}

function SwiperOverflow() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        effect={"cards"}
        pagination={true}
        modules={[EffectCards, Pagination]}
        loop={true}
        className="h-full w-[70%]"
      >
        <SwiperSlide>
          <InterativeImg
            src={"/esq-1.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/esq-2.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/esq-3.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/esq-4.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/esq-5.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/esq-6.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/esq-7.jpg"}
            className="rounded-lg border border-gray-400 shadow"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Services;
