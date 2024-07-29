import {
  faArrowRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavbar } from "./useNavbar";
import { useScrollToView } from "./useScrollToView";
import { Link } from "react-router-dom";

const pages = [
  { label: "Apresentação", to: "#apresentacao" },
  { label: "História", to: "#historia" },
  { label: "Mármores", to: "#marmores" },
  { label: "Projetos", to: "#projetos" },
  { label: "Contato", to: "#contato" },
];

function Navbar() {
  const { isMobile } = useSelector((store) => store.ui.verifyMobile);

  return (
    <>
      {isMobile ? (
        <HambMenu />
      ) : (
        <nav className="lg:col-span-6 lg:flex lg:flex-row lg:justify-center xl:col-span-8 xl:items-center">
          <NavLinks />
        </nav>
      )}
    </>
  );
}

function HambMenu() {
  const hambRef = useRef(null);
  const [isOpenHamb, setIsOpenHamb] = useNavbar(hambRef);
  const { isMarmoraria } = useSelector((store) => store.ui);

  const { isTablet } = useSelector((store) => store.ui.verifyMobile);

  const { innerWidth } = useSelector((store) => store.ui.verifyMobile);

  const hambWidth = `${innerWidth / (isTablet ? 2.5 : 1.5)}px`;
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
          className="text-3xl text-stone-700 drop-shadow md:text-4xl"
        />
      </button>
    </>
  );
}

function NavLinks() {
  const { isMarmoraria } = useSelector((store) => store.ui);
  return (
    <ul className="flex h-full flex-col items-center justify-around text-lg lg:relative lg:w-full lg:flex-row lg:flex-wrap lg:items-baseline lg:justify-center lg:gap-x-5 lg:text-xs xl:gap-x-8">
      <ThemeLink />
      {pages.map((page) => {
        if (
          (!isMarmoraria && page.to === "#historia") ||
          page.to === "#marmores"
        )
          return;
        return <NavButton page={page} key={page.to} />;
      })}
    </ul>
  );
}

function ThemeLink() {
  const { isMarmoraria } = useSelector((store) => store.ui);

  return (
    <Link
      to={`${isMarmoraria ? "/serralheria" : "/"}`}
      className="lg:flex--col relative flex w-full flex-col items-center justify-center gap-2 pb-2 lg:order-last lg:w-auto xl:flex-col"
      onClick={() =>
        scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <p className="font-garamond text-xs uppercase tracking-wide drop-shadow lg:hidden">
        Ir para
      </p>
      <div className="flex flex-row items-center justify-center gap-1">
        <h1 className="text-nowrap font-bodoni text-xl font-bold uppercase tracking-wider text-specialRed drop-shadow lg:text-base xl:text-sm">
          O Coliseu
        </h1>
        <h2 className="scale-105 bg-stone-50 px-2 py-1 font-bodoni text-sm tracking-wide text-stone-800 shadow-lg xl:text-xs">
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
      className={`py-4 uppercase underline decoration-stone-400 underline-offset-4 duration-200 hover:text-red-700 lg:no-underline`}
      to={page.to}
      onClick={handler}
    >
      {page.label}
    </button>
  );
}
export default Navbar;
