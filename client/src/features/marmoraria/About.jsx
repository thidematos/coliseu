import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Paragraph from "../../ui/Paragraph";
import SectionSubtitle from "./../../ui/SectionSubtitle";
import SectionTitle from "./../../ui/SectionTitle";
import InterativeImg from "../../ui/InterativeImg";
import SectionContainer from "./../../ui/SectionContainer";
import TitleContainer from "./../../ui/TitleContainer";
import { useSelector } from "react-redux";

function About() {
  const { isBiggerThanMobile, isLarge } = useSelector(
    (store) => store.ui.verifyMobile,
  );

  return (
    <SectionContainer selector={"apresentacao"} useWhite={true}>
      {isBiggerThanMobile ? (
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-10 xl:gap-24">
          <div className="md:col-span-1 md:space-y-10">
            <Title />
            <Paragraphs useSecond={isLarge ? true : false} />
          </div>
          <AboutSwiper />
          <Paragraph textPosition="md:col-span-2 lg:hidden">
            Seja para projetos residencias ou comerciais, conte com a Marmoraria
            O Coliseu para oferecer soluções personalizadas e de alta qualidade
            em pedras naturais e lâminas. Estamos aqui para transformar suas
            ideias em realidade, de acordo com a tradição, requintes de
            modernidade, qualidade e perfeição atemporal
          </Paragraph>
        </div>
      ) : (
        <>
          <Title />
          <Paragraphs />
          <AboutSwiper />
        </>
      )}
    </SectionContainer>
  );
}

function AboutSwiper() {
  return (
    <Swiper
      className="w-full rounded-lg px-8 shadow-xl md:col-span-1"
      pagination={true}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <InterativeImg src={"/about-1.jpg"} className="scale-105" />
      </SwiperSlide>
      <SwiperSlide>
        <InterativeImg src={"/about-2.jpg"} />
      </SwiperSlide>
      <SwiperSlide>
        <InterativeImg src={"/about-3.jpg"} />
      </SwiperSlide>
    </Swiper>
  );
}

function Title() {
  return (
    <TitleContainer>
      <SectionSubtitle textSize="text-2xl md:text-xl ">
        Lapidamos sonhos,
      </SectionSubtitle>
      <SectionTitle useWhiteContrast={true} textSize="text-3xl md:text-2xl ">
        Damos vida a projetos.
      </SectionTitle>
    </TitleContainer>
  );
}

function Paragraphs({ useSecond = true }) {
  return (
    <article className="space-y-4 md:text-sm lg:space-y-8">
      <Paragraph>
        Na Marmoraria O Coliseu, entendemos a importância de cada projeto e nos
        dedicamos a criar resultados que sejam duradouros e impressionantes.
        Valorizamos a satisfação do cliente e buscamos superar suas expectativas
        em todos os aspectos do nosso trabalho.
      </Paragraph>
      {useSecond && (
        <Paragraph>
          Seja para projetos residencias ou comerciais, conte com a Marmoraria O
          Coliseu para oferecer soluções personalizadas e de alta qualidade em
          pedras naturais e lâminas. Estamos aqui para transformar suas ideias
          em realidade, de acordo com a tradição, requintes de modernidade,
          qualidade e perfeição atemporal
        </Paragraph>
      )}
    </article>
  );
}
export default About;
