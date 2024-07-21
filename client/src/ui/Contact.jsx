import SectionContainer from "./../ui/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";

function Contact() {
  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);

  return (
    <SectionContainer
      selector={"contato"}
      useWhite={true}
      usePadding={!isBiggerThanMobile}
    >
      {isBiggerThanMobile ? (
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-10 md:px-[5%]">
          <div className="space-y-6 md:col-span-1">
            <Heading />
            <div className="flex flex-col items-start justify-center gap-8">
              <Anchor
                label={"Endereço"}
                href={"https://goo.gl/maps/iec2MGTLKrw71iRNA"}
              >
                <address>
                  Av. Emilio Granato, nº 6274 - Enseada, São Sebastião, São
                  Paulo
                </address>
              </Anchor>
              <Anchor label={"Telefone"} href="tel:012991592479">
                <p>(12) 99159-2479</p>
              </Anchor>
              <Anchor
                label={"Email"}
                href="mailto:marmorariaocoliseu@hotmail.com"
              >
                <p>marmorariaocoliseu@hotmail.com</p>
              </Anchor>
              <Social />
            </div>
          </div>
          <GoogleMaps />
        </div>
      ) : (
        <>
          <Heading />
          <div className="flex flex-col items-start justify-center gap-8">
            <Anchor
              label={"Endereço"}
              href={"https://goo.gl/maps/iec2MGTLKrw71iRNA"}
            >
              <address>
                Av. Emilio Granato, nº 6274 - Enseada, São Sebastião, São Paulo
              </address>
            </Anchor>
            <Anchor label={"Telefone"} href="tel:012991592479">
              <p>(12) 99159-2479</p>
            </Anchor>
            <Anchor
              label={"Email"}
              href="mailto:marmorariaocoliseu@hotmail.com"
            >
              <p>marmorariaocoliseu@hotmail.com</p>
            </Anchor>
            <Social />
            <GoogleMaps />
          </div>
        </>
      )}
    </SectionContainer>
  );
}

function GoogleMaps() {
  const position = {
    lat: -23.719429897253832,
    lng: -45.42491119999999,
  };

  return (
    <div className="h-96 w-full md:col-span-1 md:h-[26rem]">
      <APIProvider apiKey="AIzaSyAxnC7LpVP2B00wC6eJpUIB16RzKeinV_4">
        <Map defaultZoom={18} defaultCenter={position} mapId={"thigas"}>
          <AdvancedMarker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <h3 className="border-b border-specialRed px-8 pb-6 font-garamond text-3xl drop-shadow lg:text-2xl">
        Entre em contato
      </h3>
      <p className="text-sm drop-shadow lg:text-xs">
        Clique e acesse diretamente nossos contatos
      </p>
    </div>
  );
}

function Social() {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <p className="font-bodoni text-lg font-bold tracking-wider drop-shadow lg:text-base">
        Social
      </p>
      <div className="flex flex-row items-center justify-start gap-4">
        <a href="https://wa.me/5512991592479" target="_blank">
          <img
            src="/wpp.png"
            className="size-[35px] drop-shadow lg:size-[25px]"
          />
        </a>
        <a href="https://www.instagram.com/marmorariaocoliseu/" target="_blank">
          <img
            src="/instagram.png"
            className="size-[35px] drop-shadow lg:size-[25px]"
          />
        </a>

        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-lg text-blue-400 lg:text-xs"
        />
      </div>
    </div>
  );
}

function Anchor({ children, label, href }) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <p className="font-bodoni text-lg font-bold tracking-wider drop-shadow lg:text-base">
        {label}
      </p>
      <a
        className="flex flex-row items-center justify-center gap-2 bg-creme p-3 text-sm lg:text-xs"
        href={href}
        target="_blank"
      >
        {children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-lg text-blue-400 lg:text-xs"
        />
      </a>
    </div>
  );
}

export default Contact;
