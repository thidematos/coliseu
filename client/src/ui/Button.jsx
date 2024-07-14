import { useScrollToView } from "./useScrollToView";

function Button({ children, href }) {
  const handler = useScrollToView(href);
  return (
    <button
      onClick={handler}
      className="border border-gray-200 bg-gray-50 p-4 text-xl uppercase text-specialRed shadow-xl"
    >
      {children}
    </button>
  );
}

export default Button;
