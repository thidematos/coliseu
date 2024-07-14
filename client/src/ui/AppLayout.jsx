import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Modal from "./Modal";

function AppLayout() {
  const { isOpenModal } = useSelector((store) => store.ui.modal);

  console.log(isOpenModal);

  return (
    <div className="min-h-[100dvh] w-full bg-orange-50 font-montserrat text-stone-700">
      <Header />
      <Outlet />
      <Footer />
      {isOpenModal && <Modal />}
    </div>
  );
}

export default AppLayout;
