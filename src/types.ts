
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "camera" | "lens" | "accessory" | "editing";
  image: string;
  rentalAvailable: boolean;
  features: string[];
  stock: number;
};

export type Category = "camera" | "lens" | "accessory" | "editing" | "all";
