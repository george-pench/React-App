import apiEndpoints from "@/api.endpoints";

import { Game } from "@/types";
import { get } from "./requests";

interface GetProductsParams {
  urlParams: string;
}

export async function getProducts({ urlParams }: GetProductsParams): Promise<Game[]> {
  const data = await get(`${apiEndpoints.getProducts}?${urlParams}`);
  return data as Game[];
}

export function getProduct() {
  return "";
}
