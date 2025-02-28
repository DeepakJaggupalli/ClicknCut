
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { Category } from "@/types";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Check if category is specified in URL query parameter
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam && ["camera", "lens", "accessory", "editing", "all"].includes(categoryParam)) {
      setActiveCategory(categoryParam as Category);
    }
  }, [location.search]);

  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    // Category filter
    if (activeCategory !== "all") {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Search filter
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(lowercaseSearch) || 
          product.description.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Shop Equipment - CameraCartopia</title>
        <meta 
          name="description" 
          content="Browse and rent premium photography and videography equipment. Cameras, lenses, accessories, and editing software available." 
        />
      </Helmet>

      <div className="mt-16 pt-16">
        {/* Header */}
        <div className="bg-secondary py-10 md:py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
            >
              Premium Equipment Collection
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-8"
            >
              Browse our curated selection of professional cameras, lenses, accessories, 
              and editing software for all your creative needs.
            </motion.p>
            
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md mx-auto relative mb-8"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </motion.div>
            
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CategoryFilter 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory} 
              />
            </motion.div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="container mx-auto px-4 py-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
