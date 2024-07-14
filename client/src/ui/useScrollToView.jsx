import { useDispatch, useSelector } from "react-redux";
import { toggleHamb } from "./uiSlice";

export function useScrollToView(selector) {
  const navHeight = useSelector((store) => store.ui.navBarHeight);
  const dispatch = useDispatch();

  function handler() {
    const element = document.querySelector(selector);

    if (!element) return;

    const y =
      window.scrollY +
      element.getBoundingClientRect().top -
      parseInt(navHeight);

    window.scroll({
      top: y,
      left: 0,
      behavior: "smooth",
    });

    dispatch(toggleHamb(false));
  }

  return handler;
}
