import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { createLocationMap } from "../../utils/createLocationMap";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { logout, toggleAsyncHandlerState, toggleSidebar } from "./adminSlice";
import { useEffect } from "react";
import { logoutHandler } from "../../services/authServices";

function Sidebar() {
  const location = useLocation();
  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);
  const { isActiveSidebar } = useSelector((store) => store.admin);

  const { projectId } = useParams();

  const dispatch = useDispatch();

  const map = createLocationMap(location);

  useEffect(() => {
    if (isBiggerThanMobile) return;

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
  }, [dispatch, isActiveSidebar, isBiggerThanMobile]);

  const mobileStyle = `${isActiveSidebar ? "visible scale-x-[100%] opacity-100" : "collapse scale-x-0 opacity-0"} fixed right-0 z-20 flex h-full w-[60%] origin-right flex-col items-center justify-start gap-4 bg-orange-100 p-8 duration-500`;

  const biggerThanMobileStyle = `md:fixed md:flex md:flex-col md:justify-start md:items-center md:gap-10 md:pt-28 `;

  return (
    <nav
      className={isBiggerThanMobile ? biggerThanMobileStyle : mobileStyle}
      id="nav"
    >
      <>
        {!isBiggerThanMobile && (
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="centerY absolute left-[-10%] z-30 rounded-l-md border border-gray-100 bg-creme px-2 py-4 text-2xl text-specialRed shadow-lg"
            onClick={() => dispatch(toggleSidebar(false))}
          />
        )}

        <User />
        {location.pathname === `/admin/overview/${projectId}` && (
          <NavButton
            to={"/admin/overview"}
            action={() => dispatch(toggleSidebar(false))}
          >
            Visão geral
          </NavButton>
        )}

        <NavButton to={map.to} action={() => dispatch(toggleSidebar(false))}>
          {map.string}
        </NavButton>
        <NavButton isLogout>Sair</NavButton>
      </>
    </nav>
  );
}

function NavButton({ children, to, action = null, isLogout = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLogout)
    return (
      <button
        className="w-full bg-stone-50 py-2 text-center font-garamond font-bold uppercase text-specialRed shadow-md drop-shadow md:w-[75%] lg:w-[60%] lg:text-sm"
        onClick={async () => {
          dispatch(toggleAsyncHandlerState(true));

          await logoutHandler();

          dispatch(logout());

          navigate("/admin");
        }}
      >
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      onClick={() => (action ? action() : null)}
      className="w-full bg-stone-50 py-2 text-center font-garamond font-bold uppercase text-specialRed shadow-md drop-shadow md:w-[75%] lg:w-[60%] lg:text-sm"
    >
      {children}
    </Link>
  );
}

export default Sidebar;
