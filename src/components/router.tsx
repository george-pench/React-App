import { createBrowserRouter, Navigate } from "react-router-dom";
import ROUTES from "../constants/routePaths";
import Layout from "./layout";
import ProductsPage from "./products";
import AboutPage from "./about";
import ErrorPage from "./Error/errorPage";
import SignIn from "./Sign/signIn";
import SignUp from "./Sign/signUp";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: `${ROUTES.PRODUCTS}/:category`, element: <ProductsPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.SIGNIN, element: <SignIn /> },
      { path: ROUTES.SIGNUP, element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);

export default router;
