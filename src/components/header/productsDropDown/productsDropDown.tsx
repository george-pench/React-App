import { useNavigate } from "react-router-dom";

import classNames from "classnames";
import { AuthData } from "@/types";
import PATHS from "@/utils/paths";

import styles from "./productsDropDown.m.scss";

interface ProductsDropDownProps {
  isProductsDropdownVisible: boolean;
  authData: AuthData;
}

export default function ProductsDropDown({ isProductsDropdownVisible, authData }: ProductsDropDownProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <ul
      className={classNames(
        styles.productsDropDownContainer,
        isProductsDropdownVisible && styles.showDropDown,
        authData?.username && styles.loggedIn,
      )}
    >
      {[
        { path: PATHS.PC, text: "PC" },
        { path: PATHS.PS5, text: "Playstation 5" },
        { path: PATHS.XBOX, text: "XBox One" },
      ].map((button) => (
        <button key={button.text} type="button" className={styles.linkItem} onClick={() => handleNavigation(button.path)}>
          {button.text}
        </button>
      ))}
    </ul>
  );
}
