import { useDispatch, useSelector } from "react-redux";
import ColiseuTitle from "./ColiseuTitle";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { verifyNavHeight } from "./uiSlice";

function Header() {
  const { isMobile } = useSelector((store) => store.ui.verifyMobile);

  const dispatch = useDispatch();

  const headerRef = useRef(null);

  useEffect(() => {
    const rect = getComputedStyle(headerRef.current);

    dispatch(verifyNavHeight(`${parseInt(rect.height)}px`));
  }, [dispatch]);

  return (
    <header
      ref={headerRef}
      className="fixed z-10 flex w-full flex-row items-center justify-around bg-orange-50/90 py-6"
    >
      <Logo width={"w-[25%]"} />
      <ColiseuTitle useCNPJ />
      {isMobile && <Navbar />}
      <div className="centerX absolute bottom-0 w-[60%] border-b border-gray-400"></div>
    </header>
  );
}

export default Header;
