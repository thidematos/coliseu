import { useSelector } from "react-redux";
import { useScrollToView } from "./useScrollToView";

function Button({ children, href }) {
  const handler = useScrollToView(href);
  const { isMarmoraria } = useSelector((store) => store.ui);

  return (
    <button
      onClick={handler}
      className={`rounded-sm ${isMarmoraria ? "bg-gray-50 text-specialRed" : "bg-cyan-600 text-stone-50"} p-4 text-xl uppercase shadow-xl md:text-lg lg:text-base`}
    >
      {children}
    </button>
  );
}

export default Button;
