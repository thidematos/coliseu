import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

import { useEffect } from "react";
import Loader from "../../ui/Loader";
import { authUser } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticatedUser,
  isAsyncHandlerLoadingSelector,
  isOpenModalSelector,
} from "./adminSlice";
import ModalAdmin from "./ModalAdmin";

function AdminLayout() {
  const { state } = useNavigation();
  const user = useLoaderData();
  const dispatch = useDispatch();
  const isOpenModal = useSelector(isOpenModalSelector);
  const isAsyncLoading = useSelector(isAsyncHandlerLoadingSelector);

  useEffect(() => {
    document.title = "O Coliseu - Administrador";

    return () => (document.title = "O Coliseu");
  }, []);

  useEffect(() => {
    dispatch(authenticatedUser(user));
  }, [dispatch, user]);

  const isLoading = state === "loading";

  return (
    <main
      className={`relative min-h-[100dvh] w-[100dvw] bg-orange-50 font-montserrat text-stone-700`}
    >
      {isLoading || (isAsyncLoading && <Loader />)}

      <Outlet />

      {isOpenModal && <ModalAdmin />}
    </main>
  );
}

export async function loader() {
  const user = await authUser();

  return user;
}

export default AdminLayout;
