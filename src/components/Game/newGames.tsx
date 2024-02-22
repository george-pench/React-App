import GameCard from "./gameCard";
import { NewGamesProps } from "../../models/newGames";
import styles from "./game.m.scss";

function NewGames({ recentGames }: NewGamesProps) {
  return (
    <div className={styles.gameContainer}>
      {recentGames.length === 0 ? (
        <p>No new games to display.</p>
      ) : (
        <>
          {recentGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </>
      )}
    </div>
  );
}

export default NewGames;
