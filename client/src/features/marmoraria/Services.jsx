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

function Services() {
  return (
    <SectionContainer selector={"projetos"} usePadding={false}>
      <TitleContainer>
        <SectionSubtitle textSize="text-2xl">Nossos trabalhos:</SectionSubtitle>
        <SectionTitle>Beleza Lapidada.</SectionTitle>
      </TitleContainer>
      <div className="px-8">
        <Paragraph>
          Na Marmoraria O Coliseu, oferecemos uma ampla variedade de opções em
          pedras naturais, desde mármores elegantes e sofisticados até granitos
          exóticos e quartzitos de beleza singular. Cada peça é cuidadosamente
          selecionada para garantir a mais alta qualidade e estética
          impressionante em cada projeto.
        </Paragraph>
      </div>

      <SwiperOverflow />

      <ParagraphTile />

      <p className="font-garamond font-bold uppercase text-specialRed drop-shadow-sm">
        confira os nossos projetos:
      </p>

      <Projects />
    </SectionContainer>
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
    <p className="mx-8 bg-stone-50 p-4 text-center shadow-xl drop-shadow-sm">
      Exploramos as veias e os padrões únicos da pedra, trazendo à tona formas{" "}
      <strong className="font-garamond text-specialRed">DELICADAS</strong> ou{" "}
      <strong className="font-garamond text-specialRed">IMPONENTES</strong>
    </p>
  );
}

export default Services;
