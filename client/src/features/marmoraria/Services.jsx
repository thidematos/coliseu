import SectionContainer from "../../ui/SectionContainer";
import SectionSubtitle from "../../ui/SectionSubtitle";
import SectionTitle from "../../ui/SectionTitle";
import TitleContainer from "../../ui/TitleContainer";

function Services() {
  return (
    <SectionContainer selector={"servicos"} usePadding={false}>
      <TitleContainer>
        <SectionSubtitle textSize="text-2xl">Nossos trabalhos:</SectionSubtitle>
        <SectionTitle>Beleza Lapidada.</SectionTitle>
      </TitleContainer>
    </SectionContainer>
  );
}

export default Services;
