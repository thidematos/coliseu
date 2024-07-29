import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

import { useEffect } from "react";
import Loader from "../../ui/Loader";
import { authUser } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { authenticatedUser } from "./adminSlice";

function AdminLayout() {
  const { state } = useNavigation();
  const user = useLoaderData();
  const dispatch = useDispatch();

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
      className={`relative min-h-[100dvh] w-[100dvw] bg-creme font-montserrat text-stone-700`}
    >
      {isLoading && <Loader />}

      <Outlet />
    </main>
  );
}

export async function loader() {
  const user = await authUser();

  return user;
}

export default AdminLayout;
