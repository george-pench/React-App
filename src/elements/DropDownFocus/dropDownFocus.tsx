import { ReactNode } from "react";
import styles from "./dropDownFocus.m.scss";

interface Props {
  children: ReactNode;
  onSelected: (selected: boolean) => void;
}

export default function DropDownFocus({ children, onSelected }: Props) {
  return (
    <div
      onFocus={() => onSelected(true)}
      onBlur={() => onSelected(false)}
      onMouseOver={() => onSelected(true)}
      onMouseOut={() => onSelected(false)}
      className={styles.dropDownFocus}
    >
      {children}
    </div>
  );
}
