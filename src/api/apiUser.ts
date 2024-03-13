import apiEndpoints from "@/api.endpoints";
import { UserMockData } from "@/types";

import { get, update } from "./requests";

export async function getUserProfile() {
  const userData = await get(apiEndpoints.getProfile);
  return userData;
}

export async function updateUserBalance({ balance }: UserMockData) {
  await update(apiEndpoints.updateBalance, { balance });
}
