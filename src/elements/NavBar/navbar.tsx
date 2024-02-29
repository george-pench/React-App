import { ReactNode } from "react";
import styles from "./navbar.m.scss";

interface Props {
  children: ReactNode;
}

export default function NavBar({ children }: Props) {
  return <ul className={styles.navBarList}>{children}</ul>;
}
