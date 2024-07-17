import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePageTheme } from "../../ui/uiSlice";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";

function Serralheria() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "O Coliseu - Serralheria";
    dispatch(changePageTheme(false));

    return () => (document.title = "O Coliseu");
  }, [dispatch]);

  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Services />
    </main>
  );
}

export default Serralheria;
