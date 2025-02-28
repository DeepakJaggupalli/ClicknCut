
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getProductById, products } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  CheckCircle2,
  Clock,
  ArrowLeft
} from "lucide-react";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [quantity, setQuantity] = useState(1);
  const [rentalDays, setRentalDays] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    if (!product) {
      // Product not found, redirect to products page
      navigate("/products");
      toast({
        title: "Product not found",
        description: "The requested product could not be found.",
        variant: "destructive",
      });
      return;
    }

    // Find related products (same category, but not this product)
    const related = products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
    setRelatedProducts(related);
  }, [product, navigate, toast]);

  const incrementQuantity = () => {
    if (quantity < product?.stock!) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const incrementRentalDays = () => {
    setRentalDays(prevDays => prevDays + 1);
  };

  const decrementRentalDays = () => {
    if (rentalDays > 1) {
      setRentalDays(prevDays => prevDays - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, rentalDays);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return null; // Will redirect in useEffect
  }

  const totalPrice = product.price * quantity * rentalDays;

  return (
    <>
      <Helmet>
        <title>{product.name} - CameraCartopia</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="mt-16 pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => navigate("/products")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-black rounded-lg border border-border"
            >
              <div
                className={`cursor-pointer transition-transform duration-500 ${
                  isImageZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsImageZoomed(!isImageZoomed)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>

              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                  ${product.price}/day
                </span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-3">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Stock */}
              <div className="flex items-center mb-6">
                <div
                  className={`h-3 w-3 rounded-full mr-2 ${
                    product.stock > 5
                      ? "bg-green-500"
                      : product.stock > 0
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                />
                <span>
                  {product.stock > 5
                    ? "In Stock"
                    : product.stock > 0
                    ? `Low Stock (${product.stock} left)`
                    : "Out of Stock"}
                </span>
              </div>

              {/* Quantity and Rental Days */}
              <div className="space-y-4 mb-6">
                {/* Quantity Selector */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantity</label>
                  <div className="flex items-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Rental Days Selector */}
                {product.rentalAvailable && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Rental Days</label>
                    <div className="flex items-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={decrementRentalDays}
                        disabled={rentalDays <= 1}
                        className="h-10 w-10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">{rentalDays}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={incrementRentalDays}
                        className="h-10 w-10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Calculation */}
              <div className="bg-secondary p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span>Base price:</span>
                  <span>${product.price.toFixed(2)}/day</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Quantity:</span>
                  <span>x{quantity}</span>
                </div>
                {product.rentalAvailable && (
                  <div className="flex justify-between mb-2">
                    <span>Rental period:</span>
                    <span>{rentalDays} days</span>
                  </div>
                )}
                <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
                  <span>Total price:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={product.stock <= 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              {/* Delivery Estimate */}
              <div className="mt-6 flex items-center text-muted-foreground">
                <Clock className="h-5 w-5 mr-2" />
                <span>Expected delivery: 1-3 business days</span>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
