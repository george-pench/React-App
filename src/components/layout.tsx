// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import TheHeader from "./theHeader";
import TheFooter from "./theFooter";

export default function Layout() {
  return (
    <div className="layout-container">
      <TheHeader />
      <main className="main-content">
        <Outlet /> {}
      </main>
      <TheFooter />
    </div>
  );
}
