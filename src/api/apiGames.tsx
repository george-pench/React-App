import apiUrl from "../constants/apiUrl";

export default async function SearchGames(searchText: string) {
  // use env REACT_APP_API_BASE_URL to get the base URL for the API for deployment
  const response = await fetch(`${apiUrl}/search?term=${encodeURIComponent(searchText)}&limit=10&offset=0`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}
