import { useSelector } from "react-redux";

function NavDummy() {
  const { navBarHeight } = useSelector((store) => store.ui);

  return <div style={{ minHeight: navBarHeight }} className="w-full"></div>;
}

export default NavDummy;
