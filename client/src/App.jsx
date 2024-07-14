import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Marmoraria from "./features/marmoraria/Marmoraria";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store";

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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
