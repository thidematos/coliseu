import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColiseuTitle from "./../../ui/ColiseuTitle";
import Logo from "./../../ui/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./adminSlice";
import Sidebar from "./Sidebar";

function AdminHeader({ useControls }) {
  const dispatch = useDispatch();
  const { isBiggerThanMobile } = useSelector((store) => store.ui.verifyMobile);

  return (
    <div
      className={`mb-8 flex flex-row items-center ${useControls ? "justify-between" : "justify-evenly"} px-8 py-4 md:justify-center md:gap-10 md:py-10 lg:pb-0 lg:pt-10`}
    >
      <Logo width={"w-[25%] md:w-[15%] lg:w-[20%]"} />
      <ColiseuTitle
        useCNPJ
        titleSize="text-xl md:text-2xl lg:text-xl"
        cnpjSize="text-xs text-stone-600 drop-shadow-sm md:text-sm lg:text-xs"
      />
      {!isBiggerThanMobile && useControls && (
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl drop-shadow"
          onClick={() => dispatch(toggleSidebar(true))}
          id="hamb"
        />
      )}
    </div>
  );
}

export default AdminHeader;
