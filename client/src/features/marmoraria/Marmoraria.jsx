import Hero from "./Hero";
import About from "./About";
import History from "./History";
import Marbles from "./Marbles";
import Services from "./Services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changePageTheme } from "../../ui/uiSlice";

function Marmoraria() {
  const dispatch = useDispatch();
  const { isMarmoraria } = useSelector((store) => store.ui);

  useEffect(() => {
    if (isMarmoraria) return;

    document.title = "O Coliseu - Marmoraria";
    dispatch(changePageTheme(true));

    return () => (document.title = "O Coliseu");
  }, [dispatch, isMarmoraria]);

  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <History />
      <Marbles />
      <Services />
    </main>
  );
}

export default Marmoraria;
