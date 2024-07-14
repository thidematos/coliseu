import { useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import NavDummy from "../../ui/NavDummy";
import SectionSubtitle from "../../ui/SectionSubtitle";

function Hero({ ref }) {
  return (
    <section
      className="flex h-[100dvh] flex-col items-center justify-start gap-10"
      ref={ref}
    >
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
      <SectionSubtitle uppercase={true}>tradição,</SectionSubtitle>
      <SectionSubtitle uppercase={true}>qualidade,</SectionSubtitle>
      <SectionTitle>Perfeição Atemporal.</SectionTitle>
    </div>
  );
}

export default Hero;
