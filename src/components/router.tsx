import { createBrowserRouter } from "react-router-dom";
import ROUTES from "../constants/routePaths";
import Layout from "./layout";
import Home from "./pages/Home/Home";
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
      { index: true, element: <Home /> },
      { path: ROUTES.PRODUCTS_BY_PLATFORM, element: <ProductsPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.SIGNIN, element: <SignIn /> },
      { path: ROUTES.SIGNUP, element: <SignUp /> },
    ],
  },
]);

export default router;
