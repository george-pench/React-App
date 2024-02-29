import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./navbarItem.m.scss";

interface Props {
  route: string;
  children: ReactNode;
}

export default function NavBarItem({ route, children }: Props) {
  return (
    <li>
      <NavLink to={route} className={({ isActive }) => (isActive ? styles.active : "")}>
        {children}
      </NavLink>
    </li>
  );
}
