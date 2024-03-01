import { useState } from "react";
import useGames from "@/hooks/useGames";
import styles from "./search.m.scss";
import SearchInputSpinner from "../../elements/SearchInputSpinner/searchInputSpinner";
import GameDropDownList from "../GameDropDownList/gameDropDownList";

function GameSearch() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGames({ name: search });
  const [isFocus, setFocus] = useState(false);

  const handleChange = (searchParameter: string) => setSearch(searchParameter);
  const handleFocus = (isFocused: boolean) => setFocus(isFocused);

  return (
    <div className={styles.gameSearch}>
      <SearchInputSpinner onChange={handleChange} onFocus={handleFocus} isLoading={isLoading} />
      {isFocus && <GameDropDownList games={data} />}
    </div>
  );
}

export default GameSearch;
