import {
  faArrowRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavbar } from "./useNavbar";
import { useScrollToView } from "./useScrollToView";
import { Link } from "react-router-dom";
import { changePageTheme } from "./uiSlice";
import Logo from "./Logo";
import ColiseuTitle from "./ColiseuTitle";

const pages = [
  { label: "Apresentação", to: "#apresentacao" },
  { label: "História", to: "#historia" },
  { label: "Mármores", to: "#marmores" },
  { label: "Projetos", to: "#projetos" },
  { label: "Contato", to: "#contato" },
];

function Navbar() {
  const { isMobile } = useSelector((store) => store.ui.verifyMobile);

  return <>{isMobile && <HambMenu />}</>;
}

function HambMenu() {
  const hambRef = useRef(null);
  const [isOpenHamb, setIsOpenHamb] = useNavbar(hambRef);
  const { isMarmoraria } = useSelector((store) => store.ui);

  const { innerWidth } = useSelector((store) => store.ui.verifyMobile);

  const hambWidth = `${innerWidth / 1.5}px`;
  return (
    <>
      <nav
        style={{ width: isOpenHamb ? hambWidth : 0, height: "100dvh" }}
        className={`${isOpenHamb ? "visible opacity-100" : "collapse opacity-0"} fixed right-0 top-0 z-20 rounded-bl-lg border-b border-l border-gray-300 ${isMarmoraria ? "bg-orange-100" : "bg-slate-300"} py-6 shadow-xl duration-500`}
        id="nav"
      >
        <FontAwesomeIcon
          icon={faArrowRightToBracket}
          className="centerY absolute left-[-5%] rounded-r-lg bg-stone-50 px-3 py-6 text-3xl text-specialRed shadow-lg"
          onClick={() => setIsOpenHamb(false)}
        />
        <NavLinks />
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

function NavLinks() {
  return (
    <ul className="flex h-full flex-col items-center justify-around text-lg">
      <ThemeLink />
      {pages.map((page) => (
        <NavButton page={page} key={page.to} />
      ))}
    </ul>
  );
}

function ThemeLink() {
  const { isMarmoraria } = useSelector((store) => store.ui);

  return (
    <Link
      to={`${isMarmoraria ? "/serralheria" : "/"}`}
      className="relative flex w-full flex-col items-center justify-center gap-2 pb-2"
      onClick={() =>
        scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <p className="font-garamond text-xs uppercase tracking-wide drop-shadow">
        Ir para
      </p>
      <div className="flex flex-row items-center justify-center gap-1">
        <h1 className="text-nowrap font-bodoni text-xl font-bold uppercase tracking-wider text-specialRed drop-shadow">
          O Coliseu
        </h1>
        <h2 className="scale-105 bg-stone-50 px-2 py-1 font-bodoni text-sm tracking-wide text-stone-800 shadow-lg">
          {isMarmoraria ? "Serralheria" : "Marmoraria"}
        </h2>
      </div>
    </Link>
  );
}

function NavButton({ page }) {
  const handler = useScrollToView(page.to);

  return (
    <button
      className={`py-4 uppercase underline decoration-stone-400 underline-offset-4 duration-200 hover:text-red-700`}
      to={page.to}
      onClick={handler}
    >
      {page.label}
    </button>
  );
}
export default Navbar;
