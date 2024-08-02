import { Link, useLocation, useRouteError } from "react-router-dom";
import ColiseuTitle from "./ColiseuTitle";
import Logo from "./Logo";

function Error() {
  const error = useRouteError();
  console.log(error);

  const location = useLocation();

  console.log(location);

  const errorMessage =
    error.statusText === "Not Found"
      ? `Não achamos o caminho ${location.pathname} nesse servidor.`
      : error.data || error.message;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-start gap-16 bg-creme py-16">
      <div className="flex flex-row items-center justify-center gap-6">
        <Logo width={"w-[30%]"} />
        <ColiseuTitle useCNPJ={true} />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="w-[80%] text-center font-garamond text-2xl uppercase text-specialRed drop-shadow">
          Nem todos os caminhos levam ao Coliseu...{" "}
        </h2>
        <p className="text-center font-montserrat text-sm text-stone-700 drop-shadow-sm">
          {errorMessage}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h3 className="w-[80%] text-center font-garamond text-base uppercase text-specialRed drop-shadow">
          Aproveite para admirar um de nossos projetos:
        </h3>
        <img src="/gallery.jpg" className="md:w-[50%] md:shadow-xl" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-montserrat text-stone-700">Retornar ao</p>
        <Link
          className="bg-stone-50 px-6 py-4 font-bodoni text-3xl font-bold uppercase text-specialRed shadow-xl"
          to={"/"}
        >
          O Coliseu
        </Link>
      </div>
    </div>
  );
}

export default Error;
