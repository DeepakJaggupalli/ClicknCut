
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ProductCardProps = {
  product: Product;
  index: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 1);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/products/${product.id}`} className="block h-full">
        <div className="relative bg-card rounded-lg overflow-hidden border border-border h-full transition-all duration-300 hover:border-primary/50 hover:shadow-md group-hover:translate-y-[-5px]">
          <div className="aspect-[4/3] overflow-hidden bg-black">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-black/60 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-white">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>
            
            {/* Price badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                ₹{product.price}/day
              </span>
            </div>
            
            {/* Quick actions overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-300">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full h-10 w-10 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full h-10 w-10 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                asChild
              >
                <Link to={`/products/${product.id}`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-medium text-lg mb-1 transition-colors group-hover:text-primary">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {product.description}
            </p>
            
            {/* Availability indicator */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium">
                <span className={`inline-block h-2 w-2 rounded-full mr-1 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-primary text-primary hover:bg-primary hover:text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-3 w-3 mr-1" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
