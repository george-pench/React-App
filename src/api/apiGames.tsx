import apiUrl from "../constants/apiUrl";

export default async function SearchGames(searchText: string) {
  const response = await fetch(`${apiUrl}/search?term=${encodeURIComponent(searchText)}&limit=10&offset=0`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}
