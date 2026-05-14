
export type RecordFormat = "Vinyl" | "CD" | "Cassette"

export type RecordCondition = "Mint" | "Near Mint" | "Very Good Plus" | "Very Good" | "Good";

export type RecordProduct = {
  id: number;
  title: string;
  artist: string;
  price: number;
  genre: string;
  format: RecordFormat;
  condition: RecordCondition;
  imageUrl: string;
  inStock: boolean;
  isNewArrival: boolean;
  isFeatured: boolean;
  description: string;
};