import { Game } from "./game";

export interface ResultsDropdownProps {
  searchResults: Game[];
  onResultClick: (game: Game) => void;
}
