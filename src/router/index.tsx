import { createBrowserRouter, Navigate } from "react-router-dom";

import { Country } from "@pages/Country";
import { Home } from "@pages/Home";
import { Layout } from "@templates/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/country/:code", element: <Country /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default router;
