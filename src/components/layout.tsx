/*
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SearchField from "./Search/search2";
import Category from "./Category/category";
// import GameStoreContainer from "./Game/gameStoreContainer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <SearchField />
        <Category />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
*/
import GameContent from "./GameContent/gameContent";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <GameContent />
      <Footer />
    </>
  );
}
