// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Outlet /> {}
      </main>
      <Footer />
    </div>
  );
}
