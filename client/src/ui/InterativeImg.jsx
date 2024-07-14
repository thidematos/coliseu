import { useDispatch } from "react-redux";
import { openModal } from "./uiSlice";

function InterativeImg({ src, className = "", name = "" }) {
  const dispatch = useDispatch();

  return (
    <img
      src={src}
      className={`${className}`}
      loading="lazy"
      onClick={() => dispatch(openModal({ src: src, name }))}
    />
  );
}

export default InterativeImg;
