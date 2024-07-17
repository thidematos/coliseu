import Paragraph from "../../ui/Paragraph";
import SectionContainer from "../../ui/SectionContainer";
import SectionSubtitle from "../../ui/SectionSubtitle";
import InterativeImg from "./../../ui/InterativeImg";

function About() {
  return (
    <SectionContainer
      selector={"apresentacao"}
      useWhite={true}
      usePadding={false}
    >
      <Title />
      <div className="px-8">
        <Paragraph>
          O Coliseu, combinando a tradição e excelência que nos define, está
          pronto para fornecer soluções personalizadas e de alta qualidade para
          as suas necessidades em esquadrias. Nossa equipe especializada, com
          expertise tanto em serralheria quanto em vidraçaria, oferece uma ampla
          gama de opções para portas, janelas, fachadas e estruturas metálicas,
          cuidadosamente projetadas para atender aos mais altos padrões
          estéticos e funcionais.
        </Paragraph>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <InterativeImg src={"/esq-features.jpg"} className="shadow-lg" />
        <p className="font-bodoni italic drop-shadow">
          Transformamos ideias em realidade
        </p>
      </div>
    </SectionContainer>
  );
}

function Title() {
  return (
    <div className="space-y-3">
      <SectionSubtitle textSize="text-xl">A segurança de uma</SectionSubtitle>
      <h3 className="bg-serralheria p-3 font-bodoni text-2xl font-bold text-sky-700 shadow-xl">
        MARCA RENOMADA
      </h3>
    </div>
  );
}

export default About;
