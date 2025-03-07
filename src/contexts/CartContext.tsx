import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  rentalDays?: number;
};

type Order = {
  id: string;
  customerId: string;
  items: {
    id: string;
    productId: string;
    productName: string;
    productImage: string;
    quantity: number;
    rentalDays: number;
    price: number;
    orderDate: string;
    returned: boolean;
  }[];
  totalAmount: number;
  orderDate: string;
  status: string;
};

type CartContextType = {
  items: CartItem[];
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, rentalDays: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateRentalDays: (productId: string, days: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getCartTotal: () => number;
  getItemCount: () => number;
  checkout: () => Order;
  orders: Order[];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number, rentalDays: number) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(item => item.id === product.id);

      if (existingItemIndex >= 0) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += quantity;
        updatedItems[existingItemIndex].rentalDays = rentalDays;
        toast({
          title: "Cart updated",
          description: `${product.name} quantity updated in cart`,
          variant: "default",
        });
        return updatedItems;
      } else {
        toast({
          title: "Added to cart",
          description: `${product.name} added to cart`,
          variant: "default",
        });
        return [...currentItems, { 
          id: product.id, 
          name: product.name, 
          price: product.price,
          image: product.image,
          quantity,
          rentalDays
        }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(currentItems => {
      const itemToRemove = currentItems.find(item => item.id === productId);
      const filteredItems = currentItems.filter(item => item.id !== productId);
      
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.name} removed from cart`,
          variant: "default",
        });
      }
      
      return filteredItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const updateRentalDays = (productId: string, days: number) => {
    if (days <= 0) return;
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === productId
          ? { ...item, rentalDays: days }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      variant: "default",
    });
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const getCartTotal = () => {
    return getTotalPrice();
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const checkout = () => {
    const newOrder: Order = {
      id: `order${Date.now()}`,
      customerId: "user1",
      items: cart.map((item) => ({
        id: `item${Date.now()}-${item.id}`,
        productId: item.id,
        productName: item.name,
        productImage: item.image,
        quantity: item.quantity,
        rentalDays: item.rentalDays || 0,
        price: item.price,
        orderDate: new Date().toISOString().split('T')[0],
        returnDate: undefined,
        returned: false
      })),
      totalAmount: getCartTotal(),
      orderDate: new Date().toISOString().split('T')[0],
      status: "completed"
    };

    setOrders([...orders, newOrder]);
    clearCart();
    return newOrder;
  };

  const value = {
    items,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateRentalDays,
    clearCart,
    getTotalPrice,
    getCartTotal,
    getItemCount,
    checkout,
    orders,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
