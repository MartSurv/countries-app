import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Layout } from "../templates/Layout";
import { Country } from "../pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/country/:code", element: <Country /> },
    ],
  },
]);

export default router;
