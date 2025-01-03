import { useState } from "react";
import Paragraph from "../../ui/Paragraph";
import SectionContainer from "../../ui/SectionContainer";
import SectionSubtitle from "../../ui/SectionSubtitle";
import SectionTitle from "../../ui/SectionTitle";
import TitleContainer from "../../ui/TitleContainer";
import InterativeImg from "../../ui/InterativeImg";
import { useSelector } from "react-redux";

const marbles = [
  {
    name: "Ágata Blue",
    src: "/agata-blue.jpg",
  },
  {
    name: "Granito Marrom Tabaco",
    src: "/granito-marrom-tabaco.jpg",
  },
  {
    name: "Granito Kilimanjaro",
    src: "/preto-vegas-kilimanjaro.jpg",
  },
  {
    name: "Mármore Bege Bahia",
    src: "/bege-bahia.jpg",
  },
  {
    name: "Quartzito Bronzzo",
    src: "/quartzito-bronzzo.jpg",
  },
  {
    name: "Quartzito Dakar",
    src: "/quartzito-dakar.jpg",
  },
  {
    name: "Verde Guatemala",
    src: "/verde-guatemala.jpg",
  },
  {
    name: "Azul Macaúbas",
    src: "/azul-macaubas.jpg",
  },
  {
    name: "Avatar",
    src: "/avatar.jpg",
  },
  {
    name: "Branco Itaúnas",
    src: "/branco-itaunas.jpg",
  },
  {
    name: "Copacabana Polido",
    src: "/copacabana-polido.jpg",
  },
  {
    name: "Dolomitico Rafaello",
    src: "/dolomitico-rafaello.jpg",
  },
  {
    name: "Mármore Branco",
    src: "/marmore-branco.jpg",
  },
  {
    name: "Quartzito Avohai (Taj)",
    src: "quartzito-avohai.jpg",
  },

  {
    name: "Vermelho Acrópolis",
    src: "vermelho-acropolis.jpg",
  },
  {
    name: "Travertino",
    src: "travertino.jpg",
  },
  {
    name: "Preto São Gabriel",
    src: "sao-gabriel.jpg",
  },
  {
    name: "Quartzo Branco",
    src: "quartzo-branco.jpg",
  },
  {
    name: "Quartzo Bege",
    src: "quartzo-bege.jpg",
  },
  {
    name: "Azul Imperial",
    src: "quartzito-azul-imperial.jpg",
  },
].map((marble, ind) => {
  return {
    ...marble,
    id: ind,
  };
});

function Marbles() {
  const { isBiggerThanMobile, isLarge, isExtraLarge } = useSelector(
    (store) => store.ui.verifyMobile,
  );

  const firstParagraphContent =
    "O mármore é formado a partir do calcário, uma rocha composta por minerais de calcita. Ao longo de milhões de anos, o calcário é submetido a altas temperaturas e pressões, o que provoca transformações em sua estrutura. Essas mudanças levam à recristalização dos mineiras de calcita, resultando no mármore, uma rocha metamórfica com textura cristalina e brilho característico.";

  const secondParagraphContent =
    "Os mármores oferecem uma combinação perfeita entre elegância, estética e durabilidade. A ampla variedade de cores, veios e padrões permite que os mármores se adequem a todo tipo de espaço, valorizando as características únicas de cada projeto. Além de versáteis, os mármores são altamente duráveis e de fácil manutenção.";

  return (
    <SectionContainer selector={"marmores"} useWhite usePadding={false}>
      {isBiggerThanMobile ? (
        <div className="md:grid md:grid-cols-5 md:items-center md:gap-10 md:px-[10%]">
          <div className="md:col-span-2 md:space-y-10 lg:space-y-6">
            <TitleContainer>
              <SectionSubtitle textSize="text-2xl md:text-xl">
                O mármore e a sua
              </SectionSubtitle>
              <SectionTitle textSize="text-3xl md:text-2xl" useWhiteContrast>
                Beleza inspiradora.
              </SectionTitle>
            </TitleContainer>
            <PaddingParagraph>{firstParagraphContent}</PaddingParagraph>
            {isLarge && (
              <PaddingParagraph colSpan="md:col-span-5">
                {secondParagraphContent}
              </PaddingParagraph>
            )}
          </div>
          <div className="md:order-first md:col-span-3 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-5 lg:place-self-center">
            <MarblesTable />
            {isExtraLarge && <DownloadCatalogo />}
          </div>

          {!isLarge && (
            <PaddingParagraph colSpan="md:col-span-5">
              {secondParagraphContent}
            </PaddingParagraph>
          )}
          {!isExtraLarge && <DownloadCatalogo />}
        </div>
      ) : (
        <>
          <TitleContainer>
            <SectionSubtitle textSize="text-2xl md:text-xl">
              O mármore e a sua
            </SectionSubtitle>
            <SectionTitle textSize="text-3xl md:text-2xl" useWhiteContrast>
              Beleza inspiradora.
            </SectionTitle>
          </TitleContainer>
          <PaddingParagraph>{firstParagraphContent}</PaddingParagraph>
          <MarblesTable />
          <PaddingParagraph>{secondParagraphContent}</PaddingParagraph>
          <DownloadCatalogo />
        </>
      )}
    </SectionContainer>
  );
}

function PaddingParagraph({ children, colSpan = "" }) {
  return (
    <div className={`px-8 md:px-0 md:text-sm ${colSpan}`}>
      <Paragraph>{children}</Paragraph>
    </div>
  );
}

function MarblesTable() {
  return (
    <div className="flex h-[600px] w-full flex-col items-center justify-start bg-creme px-3 py-5 md:h-[450px] lg:h-[400px] lg:w-[65%]">
      <TitleContainer>
        <SectionSubtitle textSize="text-lg md:text-base xl:text-lg">
          Transforme seus projetos em verdadeiras
        </SectionSubtitle>
        <SectionTitle textSize="text-2xl md:text-xl xl:text-2xl">
          OBRAS DE ARTE
        </SectionTitle>
      </TitleContainer>
      <div className="mt-6 grid grid-cols-2 gap-2 overflow-y-scroll px-1">
        {marbles.map((marble) => (
          <MarbleTile marble={marble} key={marble.id} />
        ))}
      </div>
    </div>
  );
}

function MarbleTile({ marble }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative col-span-1 border-4 border-stone-50 shadow"
    >
      <InterativeImg src={marble.src} name={marble.name} />

      <p
        className={`${isHovered ? "scale-x-100" : "scale-x-0"} absolute left-1 top-2 origin-left bg-gray-50 p-1 font-garamond tracking-wider shadow-xl drop-shadow-sm duration-300 ease-in-out`}
      >
        {marble.name}
      </p>
    </div>
  );
}

function DownloadCatalogo() {
  return (
    <a
      href="/catalogo-coliseu.pdf"
      target="_blank"
      className="w-[70%] text-center font-garamond text-lg uppercase text-specialRed underline underline-offset-2 md:col-span-5 md:w-full lg:text-base xl:text-lg"
    >
      <p>Consulte nosso catálogo de lâminas</p>
    </a>
  );
}

export default Marbles;
