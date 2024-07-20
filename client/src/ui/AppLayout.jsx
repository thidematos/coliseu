import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Contact from "./Contact";
import Loader from "./Loader";

function AppLayout() {
  const { isOpenModal } = useSelector((store) => store.ui.modal);
  const { isMarmoraria } = useSelector((store) => store.ui);

  const { state } = useNavigation();

  const isLoading = state === "loading";

  console.log(state);

  return (
    <div
      className={`min-h-[100dvh] w-full ${isMarmoraria ? "bg-orange-50" : "bg-serralheria"} font-montserrat text-stone-700`}
    >
      {isLoading && <Loader />}

      <Header />
      <Outlet />
      <Contact />
      {isOpenModal && <Modal />}
    </div>
  );
}

export default AppLayout;
