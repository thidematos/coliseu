import SectionContainer from "../../ui/SectionContainer";
import SectionSubtitle from "../../ui/SectionSubtitle";
import SectionTitle from "../../ui/SectionTitle";
import TitleContainer from "../../ui/TitleContainer";
import Paragraph from "./../../ui/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import InterativeImg from "../../ui/InterativeImg";
import "swiper/css/effect-cards";
import Projects from "./../../ui/Projects";
import { useSelector } from "react-redux";

function Services() {
  const { isBiggerThanMobile, isExtraLarge } = useSelector(
    (store) => store.ui.verifyMobile,
  );
  const paragraphContent =
    "Na Marmoraria O Coliseu, oferecemos uma ampla variedade de opções em pedras naturais, desde mármores elegantes e sofisticados até granitos exóticos e quartzitos de beleza singular. Cada peça é cuidadosamente selecionada para garantir a mais alta qualidade e estética impressionante em cada projeto.";

  return (
    <SectionContainer selector={"projetos"} usePadding={false}>
      {isBiggerThanMobile ? (
        <div className="md:grid md:w-full md:grid-cols-5 md:items-center md:pl-[5%] lg:px-[10%] xl:gap-y-20 2xl:grid-cols-6">
          <div className="px-8 md:col-span-2 md:space-y-10 md:px-0 xl:flex xl:w-full xl:flex-col xl:items-center xl:justify-center 2xl:col-span-3 2xl:px-8">
            <TitleContainer>
              <SectionSubtitle textSize="text-2xl md:text-xl ">
                Nossos trabalhos:
              </SectionSubtitle>
              <SectionTitle textSize="text-3xl md:text-2xl">
                Beleza Lapidada.
              </SectionTitle>
            </TitleContainer>
            <Paragraph>{paragraphContent}</Paragraph>
            {isExtraLarge && <ParagraphTile />}
          </div>
          <SwiperOverflow />
          {!isExtraLarge && <ParagraphTile />}

          <div className="col-span-6 flex w-full flex-col items-center justify-center md:gap-10">
            <p className="font-garamond font-bold uppercase text-specialRed drop-shadow-sm">
              confira os nossos projetos:
            </p>
            <Projects />
          </div>
        </div>
      ) : (
        <>
          <TitleContainer>
            <SectionSubtitle textSize="text-2xl">
              Nossos trabalhos:
            </SectionSubtitle>
            <SectionTitle>Beleza Lapidada.</SectionTitle>
          </TitleContainer>
          <div className="px-8">
            <Paragraph>{paragraphContent}</Paragraph>
          </div>

          <SwiperOverflow />

          <ParagraphTile />

          <p className="font-garamond font-bold uppercase text-specialRed drop-shadow-sm">
            confira os nossos projetos:
          </p>

          <Projects />
        </>
      )}
    </SectionContainer>
  );
}

function SwiperOverflow() {
  return (
    <div className="w-full overflow-hidden md:col-span-3 2xl:col-span-3">
      <Swiper
        effect={"cards"}
        pagination={true}
        modules={[EffectCards, Pagination]}
        loop={true}
        className="h-full w-[70%] lg:w-[60%] 3xl:w-[40%]"
      >
        <SwiperSlide>
          <InterativeImg
            src={"/gallery.jpg"}
            className="rounded-lg border border-specialRed shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/gallery1.jpg"}
            className="rounded-lg border border-specialRed shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/gallery-02.jpeg"}
            className="rounded-lg border border-specialRed shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/gallery-04.jpeg"}
            className="rounded-lg border border-specialRed shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/gallery6.jpg"}
            className="rounded-lg border border-specialRed shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterativeImg
            src={"/gallery23.jpg"}
            className="rounded-lg border border-specialRed shadow"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function ParagraphTile() {
  return (
    <p className="mx-8 bg-stone-50 p-4 text-center shadow-xl drop-shadow-sm md:col-span-5 md:my-10 md:w-[65%] md:place-self-center lg:w-[50%] lg:text-sm xl:w-full">
      Exploramos as veias e os padrões únicos da pedra, trazendo à tona formas{" "}
      <strong className="font-garamond text-specialRed">DELICADAS</strong> ou{" "}
      <strong className="font-garamond text-specialRed">IMPONENTES</strong>
    </p>
  );
}

export default Services;
