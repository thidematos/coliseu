import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Marmoraria from "./features/marmoraria/Marmoraria";
import AppLayout from "./ui/AppLayout";
import { Provider, useDispatch } from "react-redux";
import Serralheria from "./features/serralheria/Serralheria";
import AdminLogin, { action as loginAction } from "./features/admin/AdminLogin";
import AdminLayout, {
  loader as authLoader,
} from "./features/admin/AdminLayout";
import AdminDashboard from "./features/admin/AdminDashboard";
import AdminProjects, {
  loader as projectsLoader,
} from "./features/admin/AdminProjects";
import NovoProjeto, {
  action as newProjectAction,
} from "./features/admin/NovoProjeto";
import { useEffect } from "react";
import { resize } from "./ui/uiSlice";
import EditProject, {
  loader as editProjectLoader,
  action as editProjectAction,
} from "./features/admin/EditProject";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Marmoraria />,
        loader: projectsLoader,
      },
      {
        path: "/serralheria",
        element: <Serralheria />,
        loader: projectsLoader,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
    action: loginAction,
    errorElement: <Error />,
  },
  {
    element: <AdminLayout />,
    loader: authLoader,
    errorElement: <Navigate to={"/admin"} />,
    children: [
      {
        path: "/admin/overview",
        element: <AdminDashboard />,

        children: [
          {
            index: true,
            element: <AdminProjects />,
            loader: projectsLoader,
          },
          {
            path: "novo-projeto",
            element: <NovoProjeto />,
            action: newProjectAction,
          },
          {
            path: ":projectId",
            element: <EditProject />,
            loader: editProjectLoader,
            action: editProjectAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(resize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
