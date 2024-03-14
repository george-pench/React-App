import { Filters, Game } from "@/types";

export default function filterGames(gamesMockData: Game[], { category, searchText, genre, minAge }: Filters) {
  let matchingProducts = gamesMockData.filter((game) => game.platforms.includes(category as string));

  if (searchText) {
    matchingProducts = matchingProducts.filter((game) => game.name.toLowerCase().includes(searchText as string));
  }

  if (genre !== "all") {
    matchingProducts = matchingProducts.filter((game) => game.genre?.toLowerCase() === genre);
  }

  if (minAge !== "all") {
    matchingProducts = matchingProducts.filter((game) => game.minAge >= Number(minAge));
  }

  return matchingProducts;
}
