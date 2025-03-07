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
};

export type Category = "camera" | "lens" | "accessory" | "editing" | "lighting" | "drone" | "all";

export type OrderItem = {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  rentalDays?: number;
  price: number;
  orderDate: string;
  returnDate?: string;
  returned: boolean;
};

export type Order = {
  id: string;
  customerId: string;
  items: OrderItem[];
  totalAmount: number;
  orderDate: string;
  status: "completed" | "pending" | "returned";
};
