import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./uiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal() {
  const { content } = useSelector((store) => store.ui.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.height = "100dvh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style = "";
    };
  }, []);

  function handler() {
    dispatch(closeModal());
  }

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[9998] h-full w-dvw bg-gray-900/80"
        onClick={handler}
      ></div>
      <div className="center showModal fixed z-[9999] w-[85%] rounded-lg border-2 border-specialRed md:w-[60%] lg:w-[40%] xl:w-[30%]">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-3 top-3 text-4xl text-stone-300 lg:text-2xl"
          onClick={handler}
        />
        <img src={content.src} className="rounded-lg" />
        {content.name && (
          <p className="centerX absolute bottom-0 w-full rounded-b-lg bg-stone-50/70 px-4 py-2 text-center font-garamond text-3xl text-specialRed drop-shadow">
            {content.name}
          </p>
        )}
      </div>
    </>
  );
}

export default Modal;
