import SectionContainer from "./../ui/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function Contact() {
  return (
    <SectionContainer selector={"contato"} useWhite={true}>
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
        <Anchor label={"Email"} href="mailto:marmorariaocoliseu@hotmail.com">
          <p>marmorariaocoliseu@hotmail.com</p>
        </Anchor>
        <Social />
        <GoogleMaps />
      </div>
    </SectionContainer>
  );
}

function GoogleMaps() {
  const position = {
    lat: -23.719429897253832,
    lng: -45.42491119999999,
  };

  return (
    <div className="h-96 w-full">
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
      <h3 className="border-b border-specialRed px-8 pb-6 font-garamond text-3xl drop-shadow">
        Entre em contato
      </h3>
      <p className="text-sm drop-shadow">
        Clique e acesse diretamente nossos contatos
      </p>
    </div>
  );
}

function Social() {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <p className="font-bodoni text-lg font-bold tracking-wider drop-shadow">
        Social
      </p>
      <div className="flex flex-row items-center justify-start gap-4">
        <a href="https://wa.me/5512991592479" target="_blank">
          <img src="/wpp.png" className="size-[35px] drop-shadow" />
        </a>
        <a href="https://www.instagram.com/marmorariaocoliseu/" target="_blank">
          <img src="/instagram.png" className="size-[35px] drop-shadow" />
        </a>

        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-lg text-blue-400"
        />
      </div>
    </div>
  );
}

function Anchor({ children, label, href }) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <p className="font-bodoni text-lg font-bold tracking-wider drop-shadow">
        {label}
      </p>
      <a
        className="flex flex-row items-center justify-center gap-2 bg-creme p-3 text-sm"
        href={href}
        target="_blank"
      >
        {children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-lg text-blue-400"
        />
      </a>
    </div>
  );
}

export default Contact;
