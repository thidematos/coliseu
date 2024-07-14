import { useState } from "react";
import Paragraph from "../../ui/Paragraph";
import SectionContainer from "../../ui/SectionContainer";
import SectionTitle from "../../ui/SectionTitle";
import InterativeImg from "../../ui/InterativeImg";

function History() {
  return (
    <SectionContainer selector={"historia"}>
      <SectionTitle textSize="text-3xl">Nossa história.</SectionTitle>
      <Paragraph>
        A Marmoraria o Coliseu (D.E. Salviano Mármores ME.) foi idealizada por
        Meire e Daniel Salviano (Du), um profissional com mais de 35 anos de
        experiência no ramo. Desde a sua inauguração em São Sebastião, em 2004,
        nosso objetivo tem sido alcançar um padrão de qualidade excepcional,
        capaz de superar as expectativas dos nossos clientes.
      </Paragraph>
      <ColiseuPiccture />
      <Tabs />
    </SectionContainer>
  );
}

function ColiseuPiccture() {
  return (
    <div className="space-y-3">
      <InterativeImg
        src={"/coliseu.jpg"}
        className="rounded border border-specialRed shadow-lg"
      />
      <div className="flex flex-col items-center justify-center">
        <p className="font-bodoni text-lg font-bold uppercase text-specialRed">
          O Coliseu
        </p>
        <address className="not-italic">São Sebastião, SP</address>
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
    <div className="rounded-b-md rounded-t-md border border-specialRed shadow-xl">
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
      <div className="flex min-h-[350px] flex-col items-center justify-center gap-4 rounded-b-md bg-stone-50 px-4">
        <Paragraph textPosition="text-justify">
          {tabs[activeTab].content}
        </Paragraph>
      </div>
    </div>
  );
}

function TabButton({ tab, active, setter }) {
  return (
    <button
      className={`col-span-1 font-garamond text-xl ${active ? "scale-105 bg-specialRed text-stone-50 shadow-md" : "text-stone-700"} p-2 drop-shadow-sm duration-150`}
      onClick={() => setter(tab.id)}
    >
      {tab.title}
    </button>
  );
}

export default History;
