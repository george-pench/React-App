import riotGamesLogo from "images/riotGames.svg";
import epicGamesLogo from "images/epicGamesLogo.svg";
import rockstarGamesLogo from "images/rockstarGamesLogo.svg";
import styles from "./Footer.m.scss";

export default function TheFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.textContainer}>
          <p className={styles.contact}>firstName.lastName@ventionteams.com</p>
          <p className={`${styles.event} ${styles.underlined}`}>Students Labs Vention 2023</p>
        </div>
        <div className={styles.logoContainer}>
          <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer">
            <img src={rockstarGamesLogo} alt="Rockstar Games" />
          </a>
          <a href="https://store.epicgames.com" target="_blank" rel="noopener noreferrer">
            <img src={epicGamesLogo} alt="Epic games" />
          </a>
          <a href="https://www.riotgames.com" target="_blank" rel="noopener noreferrer">
            <img src={riotGamesLogo} alt="Riot games" />
          </a>
        </div>
      </div>
    </footer>
  );
}
