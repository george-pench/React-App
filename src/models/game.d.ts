export interface Game {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  rating: number;
  productType: "PC" | "Playstation" | "Xbox";
}
