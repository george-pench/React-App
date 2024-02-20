import { NavLink } from "react-router-dom";
import styles from "./Header.m.scss";
import ROUTES from "../../constants/routePaths";

export default function Header() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? styles.navLinkActive : styles.navLink);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Games Store</h1>
      <nav>
        <NavLink to={ROUTES.HOME} className={getNavLinkClass}>
          Home
        </NavLink>
        <div className={styles.dropdown}>
          <button type="button" className={styles.dropbtn}>
            Products
          </button>
          <div className={styles.dropdownContent}>
            <NavLink to={`${ROUTES.PRODUCTS}/pc`}>PC</NavLink>
            <NavLink to={`${ROUTES.PRODUCTS}/playstation`}>Playstation 5</NavLink>
            <NavLink to={`${ROUTES.PRODUCTS}/xbox`}>XBox One</NavLink>
          </div>
        </div>
        <NavLink to={ROUTES.ABOUT} className={getNavLinkClass}>
          About
        </NavLink>
        <NavLink to={ROUTES.SIGNIN} className={getNavLinkClass}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.SIGNUP} className={getNavLinkClass}>
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}
