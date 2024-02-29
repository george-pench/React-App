import axios from "axios";
import api from "../constants/baseApi";

export default async function SearchGames(searchText: string, limit: string = "10", offset: string = "0", endpoint: string = "games") {
  const query = new URLSearchParams({
    term: searchText,
    limit,
    offset,
  }).toString();

  try {
    const response = await api.get(`/${endpoint}/search?${query}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch data: ${error.response?.statusText}`);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}
