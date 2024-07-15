import SectionContainer from "./../ui/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";

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
        <Map />
      </div>
    </SectionContainer>
  );
}

function Map() {
  const position = [-23.719429897253832, -45.42491119999999];

  var greenIcon = L.icon({
    iconUrl: "/logo.png",

    iconSize: [80, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [52, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-10, -25], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <div className="h-96 w-full">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={true}
        className="h-full"
      >
        <Marker position={position} icon={greenIcon}>
          <Popup>
            <p className="font-bodoni font-bold uppercase text-specialRed">
              o coliseu
            </p>
          </Popup>
        </Marker>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <OpenGoogleMaps />
      </MapContainer>
    </div>
  );
}

function OpenGoogleMaps() {
  useMapEvents({
    click: () => {
      const anchor = document.createElement("a");

      anchor.setAttribute("href", "https://goo.gl/maps/iec2MGTLKrw71iRNA");
      anchor.setAttribute("target", "_blank");

      anchor.click();
    },
  });

  return null;
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
