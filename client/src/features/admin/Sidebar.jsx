import { Link, useLocation } from "react-router-dom";
import { createLocationMap } from "../../utils/createLocationMap";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { toggleSidebar } from "./adminSlice";
import { useEffect } from "react";

function Sidebar() {
  const location = useLocation();
  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);
  const { isActiveSidebar } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const map = createLocationMap(location);

  useEffect(() => {
    function handler(e) {
      if (
        isActiveSidebar &&
        !e.target.closest("#nav") &&
        !e.target.closest("#hamb")
      ) {
        dispatch(toggleSidebar(false));
      }
    }

    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, [dispatch, isActiveSidebar]);

  return (
    <nav
      className={`${isActiveSidebar ? "visible scale-x-[100%] opacity-100" : "collapse scale-x-0 opacity-0"} fixed right-0 z-20 flex h-full w-[60%] origin-right flex-col items-center justify-start gap-4 bg-orange-200 p-8 duration-500`}
      id="nav"
    >
      <>
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="centerY absolute left-[-10%] z-30 rounded-l-md border border-gray-100 bg-creme px-2 py-4 text-2xl text-specialRed shadow-lg"
          onClick={() => dispatch(toggleSidebar(false))}
        />
        <User />
        <NavButton to={map.to} action={() => dispatch(toggleSidebar(false))}>
          {map.string}
        </NavButton>
        <NavButton>Sair</NavButton>
      </>
    </nav>
  );
}

function NavButton({ children, to, action = null }) {
  return (
    <Link
      to={to}
      onClick={() => (action ? action() : null)}
      className="w-full bg-stone-50 py-2 text-center font-garamond font-bold uppercase text-specialRed shadow-md drop-shadow"
    >
      {children}
    </Link>
  );
}

export default Sidebar;
