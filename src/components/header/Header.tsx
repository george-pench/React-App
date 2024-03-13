import logoutIcon from "images/icons/logout.png";
import userIcon from "images/icons/user.png";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { getUserProfile } from "@/api/apiUser";
import { onLogout } from "@/api/apiAuth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuthState } from "@/redux/authSlice";
import { AuthData, UserMockData } from "@/types";
import classNames from "classnames";
import PATHS from "@/utils/paths";
import SignInModal from "@/components/account/signInModal";
import SignUpModal from "@/components/account/signUpModal";

import ProductsDropDown from "./productsDropDown/productsDropDown";

import styles from "./Header.m.scss";

export default function Header() {
  const dispatch = useAppDispatch();
  const dispatchSetAuthState = (data: AuthData) => {
    dispatch(setAuthState(data));
  };
  const authData = useAppSelector((state) => state.authReduxState);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSession, setIsSession] = useState(true);

  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authData.username && isSession) {
      getUserProfile().then((userData: UserMockData) => dispatchSetAuthState({ username: userData.username, isAdmin: userData.isAdmin }));
      setIsSession(false);
    }

    if (authData?.username) {
      setIsSignInOpen(false);
      setIsSignUpOpen(false);
    }
  }, [authData]);

  const handleProductsHover = () => {
    setIsProductsDropdownVisible(true);
  };

  const handleProductsLeave = () => {
    setIsProductsDropdownVisible(false);
  };

  const handleProductClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  const handleSignInClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isSignUpOpen) {
      setIsSignUpOpen(false);
    }
    setIsSignInOpen(true);
  };

  const handleSignUpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isSignInOpen) {
      setIsSignInOpen(false);
    }
    setIsSignUpOpen(true);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <h1 className={styles.storeName}>Games Store</h1>
        <nav>
          <ul className={styles.navbarLinkItems}>
            <NavLink className={({ isActive }) => classNames(styles.linkItem, isActive && styles.active)} to={PATHS.HOME}>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames(styles.linkItem, isActive && styles.active)}
              to={PATHS.PRODUCTS}
              onClick={(event) => handleProductClick(event)}
              onMouseEnter={handleProductsHover}
              onMouseLeave={handleProductsLeave}
            >
              Products
              <ProductsDropDown isProductsDropdownVisible={isProductsDropdownVisible} authData={authData} />
            </NavLink>

            <NavLink className={({ isActive }) => classNames(styles.linkItem, isActive && styles.active)} to={PATHS.ABOUT}>
              About
            </NavLink>
            {!authData?.username && (
              <NavLink
                onClick={(event) => handleSignInClick(event)}
                className={({ isActive }) => classNames(styles.linkItem, isActive && styles.active)}
                to={PATHS.SIGN_IN}
              >
                Sign In
              </NavLink>
            )}
            {!authData?.username && (
              <NavLink
                onClick={(event) => handleSignUpClick(event)}
                className={({ isActive }) => classNames(styles.linkItem, isActive && styles.active)}
                to={PATHS.SIGN_UP}
              >
                Sign Up
              </NavLink>
            )}
            {authData?.username && (
              <NavLink className={({ isActive }) => classNames(styles.linkItem, isActive && styles.active)} to={PATHS.PROFILE}>
                <img className={styles.icon} src={userIcon} alt="user-icon" />
                {authData?.username}
              </NavLink>
            )}
            {authData?.username && (
              <NavLink
                onClick={(event) => onLogout(event, dispatchSetAuthState, navigate)}
                className={classNames(styles.linkItem, styles.onlyIcon)}
                to="#"
              >
                <img className={styles.icon} src={logoutIcon} alt="logout-icon" />
              </NavLink>
            )}
          </ul>
        </nav>
      </header>
      <SignInModal isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} authData={authData} />
      <SignUpModal isSignUpOpen={isSignUpOpen} setIsSignUpOpen={setIsSignUpOpen} />
    </>
  );
}
