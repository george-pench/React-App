import { createBrowserRouter, Navigate } from "react-router-dom";
import ROUTES from "../constants/routePaths";
import Layout from "./layout";
import HomePage from "./home";
import ProductsPage from "./products";
import AboutPage from "./about";
import ErrorPage from "./errorPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.PRODUCTS, element: <ProductsPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);

export default router;
