import logo from "../../assets/games/gta.jpg";
import styles from "./game.m.scss";
import { GameCardProps } from "../../models/gameCard";

function GameCard({ game }: GameCardProps): JSX.Element {
  // const { name, price, imageUrl, productType } = game; use this when we want to use productType to filter games by type for next tickets
  const { name, price, imageUrl } = game;
  const defaultImage = logo;

  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.gameCard}>
            <img src={imageUrl || defaultImage} alt={`Cover for ${name}`} className={styles.gameCover} />
            <div className={styles.gameInfo}>
              <h3 className={styles.gameTitle}>{name}</h3>
              <p className={styles.gamePrice}>{price || "29.99$"}</p>
              <div>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.flipCardBack}>
          <p className={styles.gameDescription}>Default description if none is provided.</p>
          <div className={styles.ageRating}>3+</div>
          <button type="button" className={styles.addToCartButton}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
