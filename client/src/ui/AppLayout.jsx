import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Contact from "./Contact";

function AppLayout() {
  const { isOpenModal } = useSelector((store) => store.ui.modal);
  const { isMarmoraria } = useSelector((store) => store.ui);

  return (
    <div
      className={`min-h-[100dvh] w-full ${isMarmoraria ? "bg-orange-50" : "bg-serralheria"} font-montserrat text-stone-700`}
    >
      <Header />
      <Outlet />
      <Contact />
      {isOpenModal && <Modal />}
    </div>
  );
}

export default AppLayout;
