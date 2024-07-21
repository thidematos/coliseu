import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Marmoraria from "./features/marmoraria/Marmoraria";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store";
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

const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    ),
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
  },
  {
    path: "/admin",
    element: <AdminLogin />,
    action: loginAction,
  },
  {
    element: (
      <Provider store={store}>
        <AdminLayout />
      </Provider>
    ),
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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
