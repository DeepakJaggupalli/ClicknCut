
import React from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

const FeaturedProducts: React.FC = () => {
  // Get the first 4 products for the featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-2 md:mb-3"
          >
            Featured Equipment
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
          >
            Our Most Popular Gear
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            Discover our most sought-after cameras, lenses, and accessories. 
            Professional quality equipment for your creative projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
