export interface AuthData {
  username?: string;
  isAdmin?: boolean;
}

export interface UserMockData {
  id?: number;
  username?: string;
  address?: string;
  phone?: string;
  description?: string;
  password?: string | null;
  profileImg?: string;
  balance?: number;
  isAdmin?: boolean;
}

export interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  platforms: string[];
  minAge: number;
  addDate: Date;
  description: string;
  genre?: string;
  amount?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  minAge: string;
  pc: boolean;
  ps5: boolean;
  xbox: boolean;
}

export interface Filters {
  category: string;
  searchText: string;
  sortCriteria: string;
  sortType: string;
  genre: string;
  minAge: string;
}
