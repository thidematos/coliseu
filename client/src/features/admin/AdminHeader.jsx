import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColiseuTitle from "./../../ui/ColiseuTitle";
import Logo from "./../../ui/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./adminSlice";

function AdminHeader({ useControls }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`mb-8 flex flex-row items-center ${useControls ? "justify-between" : "justify-evenly"} px-8 py-4`}
    >
      <Logo width={"w-[25%]"} />
      <ColiseuTitle
        useCNPJ
        titleSize="text-xl"
        cnpjSize="text-xs text-stone-600 drop-shadow-sm"
      />
      {useControls && (
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
