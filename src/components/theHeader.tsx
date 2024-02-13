import { NavLink } from "react-router-dom";
import styles from "./theHeader.m.scss";
import ROUTES from "../constants/routePaths";

export default function TheHeader() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? styles.navLinkActive : styles.navLink);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Games Store</h1>
      <nav>
        <NavLink to={ROUTES.HOME} className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className={getNavLinkClass}>
          Products
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={getNavLinkClass}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
