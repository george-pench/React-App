import { useState, useEffect } from "react";
import SearchGames from "@/api/apiGames";
import Search from "../Search/search";
import ResultsDropdown from "../Result/resultDropdown";
import NewGames from "./newGames";
import Categories from "../Category/categories";
import { Game } from "../../models/game";

function GameStoreContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentClicks, setRecentClicks] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() === "") {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const data = await SearchGames(searchTerm);
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (searchText: string) => {
    setSearchTerm(searchText);
  };

  const handleResultClick = (game: Game) => {
    alert(`Got product: ${game.name}`);
    setRecentClicks((prevClicks) => {
      const updatedClicks = [...prevClicks, game].slice(-3);
      return updatedClicks;
    });
  };

  return (
    <div>
      <Search onSearch={handleSearch} isLoading={isLoading} />
      {!isLoading && searchResults.length > 0 && <ResultsDropdown searchResults={searchResults} onResultClick={handleResultClick} />}
      <div className="categories-background">
        <div className="categories-header">
          <h2>Categories</h2>
        </div>
        <Categories />
      </div>
      <div className="newGames-background">
        <div className="newGames-header">
          <h2>New games</h2>
        </div>
        <NewGames recentGames={recentClicks} />
      </div>
    </div>
  );
}

export default GameStoreContainer;
