import { useSelector } from "react-redux";
import Paragraph from "../../ui/Paragraph";
import SectionContainer from "../../ui/SectionContainer";
import SectionSubtitle from "../../ui/SectionSubtitle";
import InterativeImg from "./../../ui/InterativeImg";

function About() {
  const { isBiggerThanMobile, isLarge } = useSelector(
    (store) => store.ui.verifyMobile,
  );

  return (
    <SectionContainer
      selector={"apresentacao"}
      useWhite={true}
      usePadding={false}
    >
      {isBiggerThanMobile ? (
        <div className="md:grid md:grid-cols-7 md:gap-10 md:px-[10%] xl:grid-cols-2 xl:gap-24 xl:px-[15%]">
          <div className="md:col-span-3 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 xl:col-span-1 xl:px-8">
            {isLarge && <Title />}
            <Paragraph>
              O Coliseu, combinando a tradição e excelência que nos define, está
              pronto para fornecer soluções personalizadas e de alta qualidade
              para as suas necessidades em esquadrias. Nossa equipe
              especializada, com expertise tanto em serralheria quanto em
              vidraçaria, oferece uma ampla gama de opções para portas, janelas,
              fachadas e estruturas metálicas, cuidadosamente projetadas para
              atender aos mais altos padrões estéticos e funcionais.
            </Paragraph>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:col-span-4 md:gap-10 xl:col-span-1">
            {!isLarge && <Title />}
            <div className="space-y-4">
              <InterativeImg src={"/esq-features.jpg"} className="shadow-lg" />
              <p className="text-center font-bodoni italic drop-shadow">
                Transformamos ideias em realidade
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Title />
          <div className="px-8">
            <Paragraph>
              O Coliseu, combinando a tradição e excelência que nos define, está
              pronto para fornecer soluções personalizadas e de alta qualidade
              para as suas necessidades em esquadrias. Nossa equipe
              especializada, com expertise tanto em serralheria quanto em
              vidraçaria, oferece uma ampla gama de opções para portas, janelas,
              fachadas e estruturas metálicas, cuidadosamente projetadas para
              atender aos mais altos padrões estéticos e funcionais.
            </Paragraph>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <InterativeImg src={"/esq-features.jpg"} className="shadow-lg" />
            <p className="font-bodoni italic drop-shadow">
              Transformamos ideias em realidade
            </p>
          </div>
        </>
      )}
    </SectionContainer>
  );
}

function Title() {
  return (
    <div className="space-y-3">
      <SectionSubtitle textSize="text-xl md:text-lg">
        A segurança de uma
      </SectionSubtitle>
      <h3 className="bg-serralheria p-3 font-bodoni text-2xl font-bold text-sky-700 shadow-xl md:text-xl">
        MARCA RENOMADA
      </h3>
    </div>
  );
}

export default About;
