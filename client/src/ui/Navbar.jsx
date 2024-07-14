import {
  faArrowRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavbar } from "./useNavbar";
import { useScrollToView } from "./useScrollToView";

const pages = [
  { label: "Apresentação", to: "#apresentacao" },
  { label: "História", to: "#historia" },

  { label: "Projetos", to: "/projetos" },
  { label: "Mármores", to: "#marmores" },
  { label: "Serviços", to: "#servicos" },
  { label: "Contato", to: "#contato" },
];

function Navbar() {
  const { isMobile } = useSelector((store) => store.ui.verifyMobile);

  return <>{isMobile && <HambMenu />}</>;
}

function HambMenu() {
  const hambRef = useRef(null);
  const [isOpenHamb, setIsOpenHamb] = useNavbar(hambRef);

  const { innerWidth } = useSelector((store) => store.ui.verifyMobile);

  const hambWidth = `${innerWidth / 1.5}px`;
  return (
    <>
      <nav
        style={{ width: isOpenHamb ? hambWidth : 0, height: "100dvh" }}
        className={`${isOpenHamb ? "visible opacity-100" : "collapse opacity-0"} fixed right-0 top-0 z-20 rounded-bl-lg border-b border-l border-gray-300 bg-orange-100 py-6 shadow-xl duration-500`}
        id="nav"
      >
        <FontAwesomeIcon
          icon={faArrowRightToBracket}
          className="centerY absolute left-[-5%] rounded-r-lg bg-stone-50 px-3 py-6 text-3xl text-red-800 shadow-lg"
          onClick={() => setIsOpenHamb(false)}
        />
        <ul className="flex h-full flex-col items-center justify-around text-lg">
          {pages.map((page) => (
            <NavButton page={page} key={page.to} />
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setIsOpenHamb(true)}
        disabled={isOpenHamb}
        className={`${isOpenHamb ? "invisible opacity-0" : "visible opacity-100"}`}
        ref={hambRef}
        id="hamb"
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl text-stone-700 drop-shadow"
        />
      </button>
    </>
  );
}

function NavButton({ page }) {
  const handler = useScrollToView(page.to);

  return (
    <button
      className={`uppercase underline decoration-stone-400 underline-offset-4 duration-200 hover:text-red-700`}
      to={page.to}
      onClick={handler}
    >
      {page.label}
    </button>
  );
}
export default Navbar;
