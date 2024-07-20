import { useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import NavDummy from "../../ui/NavDummy";
import SectionSubtitle from "../../ui/SectionSubtitle";

function Hero() {
  const { isTablet, isBiggerThanMobile } = useSelector(
    (store) => store.ui.verifyMobile,
  );

  return (
    <section
      className={`flex ${isTablet ? "h-auto py-10" : "h-dvh"} flex-col items-center justify-start gap-10`}
    >
      <NavDummy />
      {isBiggerThanMobile ? (
        <div className="mx-[10%] grid grid-cols-5 gap-6">
          <Impact />
          <img src="/hero.jpg" className="col-span-3" />
        </div>
      ) : (
        <>
          <Impact />
          <img src="/hero.jpg" />
        </>
      )}

      <Button href={"#apresentacao"}>Saiba mais</Button>
    </section>
  );
}

function Impact() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 font-garamond md:col-span-2">
      <SectionSubtitle uppercase={true}>tradição,</SectionSubtitle>
      <SectionSubtitle uppercase={true}>qualidade,</SectionSubtitle>
      <SectionTitle>Perfeição Atemporal.</SectionTitle>
    </div>
  );
}

export default Hero;
