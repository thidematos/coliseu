import Hero from "./Hero";
import About from "./About";
import History from "./History";
import Marbles from "./Marbles";
import Services from "./Services";

function Marmoraria() {
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
