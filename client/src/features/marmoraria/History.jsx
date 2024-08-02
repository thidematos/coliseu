import { useState } from "react";
import Paragraph from "../../ui/Paragraph";
import SectionContainer from "../../ui/SectionContainer";
import SectionTitle from "../../ui/SectionTitle";
import InterativeImg from "../../ui/InterativeImg";
import { useSelector } from "react-redux";

function History() {
  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);

  const paragraphContent =
    "A Marmoraria o Coliseu (D.E. Salviano Mármores ME.) foi idealizada por Meire e Daniel Salviano (Du), um profissional com mais de 35 anos de experiência no ramo. Desde a sua inauguração em São Sebastião, em 2004, nosso objetivo tem sido alcançar um padrão de qualidade excepcional, capaz de superar as expectativas dos nossos clientes.";

  const secondParagraphContent =
    'Seguimos a filosofia de que "Criatividade e cuidado em todo o processo de trabalho garantem a perfeição desejada". Deixe o requinte e a beleza do mármore e granito completar a sua obra.';

  return (
    <SectionContainer selector={"historia"}>
      {isBiggerThanMobile ? (
        <div className="grid grid-cols-6 items-center gap-24">
          <div className="md:col-span-3 md:flex md:flex-col md:items-center md:justify-center md:gap-10 lg:gap-10">
            <SectionTitle textSize="text-3xl">Nossa história.</SectionTitle>
            <div className="md:space-y-4">
              <Paragraph textPosition="text-justify">
                {paragraphContent}
              </Paragraph>
              <Paragraph textPosition="text-justify md:hidden">
                {secondParagraphContent}
              </Paragraph>
            </div>
          </div>
          <ColiseuPiccture />
        </div>
      ) : (
        <>
          <SectionTitle textSize="text-3xl md:text3xl">
            Nossa história.
          </SectionTitle>
          <div className="space-y-4">
            <Paragraph>{paragraphContent}</Paragraph>
            <Paragraph textPosition="text-justify">
              {secondParagraphContent}
            </Paragraph>
          </div>
          <ColiseuPiccture />
        </>
      )}

      <Tabs />
    </SectionContainer>
  );
}

function ColiseuPiccture() {
  return (
    <div className="space-y-3 md:col-span-3 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <InterativeImg
        src={"/coliseu.jpg"}
        className="rounded border border-specialRed shadow-lg lg:w-[80%]"
      />
      <div className="flex flex-col items-center justify-center">
        <p className="font-bodoni text-lg font-bold uppercase text-specialRed md:text-base lg:text-sm xl:text-base">
          O Coliseu
        </p>
        <address className="not-italic md:text-sm lg:text-xs xl:text-sm">
          São Sebastião, SP
        </address>
      </div>
    </div>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Experência",

      content:
        "Nosso diferencial está na mão-de-obra altamente qualificada e dedicada, composta por uma equipe experiente de profissionais do ramo. Cada membro da nossa equipe possui um profundo conhecimento das melhores práticas e técnicas de trabalho em mármore, granito e outras pedras naturais, garantindo acabamentos perfeitos e durabilidade excepcional em cada projeto.",
    },
    {
      title: "Satisfação",

      content:
        "Valorizamos a satisfação dos nossos cleintes acima de tudo. Por isso, buscamos entender suas necessidades e desejos individuais, oferecendo um atendimento personalizado desde o primeiro contato, até a conclusão do projeto. Trabalhamos de forma colaborativa, ouvindo atentamente suas ideias e proporcionando orientação especializada para transformá-las em realidade.",
    },
  ].map((tab, ind) => {
    return {
      ...tab,
      id: ind,
    };
  });

  return (
    <div className="rounded-b-md rounded-t-md border border-specialRed shadow-xl md:w-[80%] lg:w-[65%]">
      <div className="grid w-full grid-cols-2 rounded-t-md border border-b bg-stone-100 p-3">
        {tabs.map((tab, ind) => (
          <TabButton
            setter={setActiveTab}
            tab={tab}
            active={ind === activeTab}
            key={tab.id}
          />
        ))}
      </div>
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-b-md bg-stone-50 px-4 md:min-h-[200px] md:px-8 lg:min-h-[150px] xl:min-h-[200px]">
        <Paragraph textPosition="text-justify text-sm">
          {tabs[activeTab].content}
        </Paragraph>
      </div>
    </div>
  );
}

function TabButton({ tab, active, setter }) {
  return (
    <button
      className={`col-span-1 font-garamond text-xl ${active ? "scale-105 bg-specialRed text-stone-50 shadow-md" : "text-stone-700"} p-2 drop-shadow-sm duration-150 md:text-lg lg:text-base xl:text-lg`}
      onClick={() => setter(tab.id)}
    >
      {tab.title}
    </button>
  );
}

export default History;
