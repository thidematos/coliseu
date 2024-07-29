import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamb } from "./uiSlice";

function useNavbar(hambRef) {
  const { isOpenHamb } = useSelector((store) => store.ui);
  const dispatch = useDispatch();

  const setIsOpenHamb = useCallback(
    (state) => {
      dispatch(toggleHamb(state));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isOpenHamb) return;

    function handler(e) {
      if (
        isOpenHamb &&
        !e.target.closest("#nav") &&
        e.target.closest("#hamb") !== hambRef.current
      ) {
        setIsOpenHamb(false);
      }
    }

    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, [isOpenHamb, hambRef, setIsOpenHamb]);

  return [isOpenHamb, setIsOpenHamb];
}

export { useNavbar };
