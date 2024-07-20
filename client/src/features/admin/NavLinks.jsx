import { Link, useLocation } from "react-router-dom";
import { createLocationMap } from "../../utils/createLocationMap";

function NavLinks() {
  const location = useLocation();

  const map = createLocationMap(location);

  return (
    <div className="col-span-3 flex flex-col items-center justify-center gap-4">
      <NavButton to={map.to}>{map.string}</NavButton>
      <NavButton>Sair</NavButton>
    </div>
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

export default NavLinks;
