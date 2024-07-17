import Button from "../../ui/Button";
import NavDummy from "../../ui/NavDummy";
import SectionSubtitle from "../../ui/SectionSubtitle";
import SectionTitle from "../../ui/SectionTitle";

function Hero() {
  return (
    <section className="flex h-[100dvh] flex-col items-center justify-start gap-10">
      <NavDummy />
      <Impact />
      <img src="/hero.jpg" />
      <Button href={"#apresentacao"}>Saiba mais</Button>
    </section>
  );
}

function Impact() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 font-garamond">
      <SectionSubtitle uppercase={true}>Versátil</SectionSubtitle>
      <SectionSubtitle uppercase={true}>Contemporâneo</SectionSubtitle>
      <SectionTitle textSize="text-2xl" useWhiteContrast={true}>
        ESQUADRIAS & VIDROS
      </SectionTitle>
    </div>
  );
}

export default Hero;
