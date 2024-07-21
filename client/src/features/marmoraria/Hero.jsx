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
      className={`flex ${isTablet ? "h-auto pb-20 pt-10" : "h-dvh"} flex-col items-center justify-start gap-10 xl:justify-center xl:gap-0`}
    >
      <NavDummy />
      {isBiggerThanMobile ? (
        <div className="md:mx-[10%] md:grid md:grid-cols-5 md:gap-6 lg:grid-cols-6 xl:mx-[15%]">
          <div className="order-2 flex w-full flex-col items-center justify-center gap-6 md:col-span-2 lg:col-span-3 xl:gap-10">
            <Impact />
            <Button href={"#apresentacao"}>Saiba mais</Button>
          </div>

          <img
            src="/hero.jpg"
            className="col-span-3 shadow-xl md:rounded-sm lg:col-span-3"
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
      <SectionSubtitle uppercase={true}>tradição,</SectionSubtitle>
      <SectionSubtitle uppercase={true}>qualidade,</SectionSubtitle>
      <SectionTitle>Perfeição Atemporal.</SectionTitle>
    </div>
  );
}

export default Hero;
