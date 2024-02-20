import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import GameStoreContainer from "./Search/gameStoreContainer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <GameStoreContainer />
        <Outlet /> {}
      </main>
      <Footer />
    </div>
  );
}
