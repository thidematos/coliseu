import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import NavDummy from "../../ui/NavDummy";
import SectionSubtitle from "../../ui/SectionSubtitle";
import SectionTitle from "../../ui/SectionTitle";

function Hero() {
  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);

  return (
    <section
      className={`flex h-dvh flex-col items-center justify-start gap-10 md:h-auto lg:h-dvh lg:gap-0 xl:justify-center`}
    >
      <NavDummy />
      {isBiggerThanMobile ? (
        <div className="md:mx-[8%] md:grid md:grid-cols-7 md:gap-10 md:pb-20 md:pt-10 lg:grid-cols-2 lg:py-10 xl:mx-[15%] xl:py-0">
          <div className="md:col-span-3 md:flex md:flex-col md:items-center md:justify-center md:gap-10 lg:col-span-1">
            <Impact />
            <Button href={"#apresentacao"}>Saiba mais</Button>
          </div>
          <img
            src="/hero.jpg"
            className="md:col-span-4 md:rounded-sm md:shadow-xl lg:col-span-1"
          />
        </div>
      ) : (
        <>
          <Impact />
          <img src="/hero.jpg" />
          <Button href={"#apresentacao"}>Saiba mais</Button>
        </>
      )}
    </section>
  );
}

function Impact() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 font-garamond">
      <SectionSubtitle uppercase={true}>Versátil</SectionSubtitle>
      <SectionSubtitle uppercase={true}>Contemporâneo</SectionSubtitle>
      <SectionTitle textSize="text-2xl md:text-xl" useWhiteContrast={true}>
        ESQUADRIAS & VIDROS
      </SectionTitle>
    </div>
  );
}

export default Hero;
