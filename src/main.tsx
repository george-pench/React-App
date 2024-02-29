import "./styles/main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./components/router";

const rootElement = document.getElementById("app");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
