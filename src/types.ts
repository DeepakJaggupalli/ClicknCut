
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "camera" | "lens" | "accessory" | "editing" | "lighting" | "drone";
  image: string;
  rentalAvailable: boolean;
  features: string[];
  stock: number;
  brand: string;
  specifications: Record<string, string | number>;
};

export type Category = "camera" | "lens" | "accessory" | "editing" | "lighting" | "drone" | "all";

export type FilterOptions = {
  category?: Category;
  priceRange?: [number, number];
  brand?: string;
  search?: string;
  rentalDuration?: number;
};
