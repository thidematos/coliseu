import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

import { useEffect } from "react";
import Loader from "../../ui/Loader";
import { authUser } from "../../services/authServices";

function AdminLayout() {
  useEffect(() => {
    document.title = "O Coliseu - Administrador";

    return () => (document.title = "O Coliseu");
  }, []);

  const { state } = useNavigation();
  const user = useLoaderData();

  console.log(state);

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
  await authUser();

  return null;
}

export default AdminLayout;
