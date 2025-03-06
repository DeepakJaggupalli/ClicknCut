
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { Category } from "@/types";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { Search, Camera, DollarSign, SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Products: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Price filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(6000);
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  useEffect(() => {
    // Check if category is specified in URL query parameter
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam && ["camera", "lens", "accessory", "editing", "all", "lighting", "drone"].includes(categoryParam)) {
      setActiveCategory(categoryParam as Category);
    }
    
    // Set min and max price based on products
    const prices = products.map(p => p.price);
    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));
    setPriceRange([Math.min(...prices), Math.max(...prices)]);
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
    
    // Price filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm, priceRange]);

  return (
    <>
      <Helmet>
        <title>Shop Equipment - Click N Cut</title>
        <meta 
          name="description" 
          content="Browse and rent premium photography and videography equipment. Cameras, lenses, accessories, and editing software available." 
        />
      </Helmet>

      <div className="mt-16 pt-16">
        {/* Header with cinematic background */}
        <div className="bg-secondary py-10 md:py-16 border-b border-border relative overflow-hidden">
          {/* Cinematic video background */}
          <div className="absolute inset-0 z-0 opacity-30">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://static.videezy.com/system/resources/previews/000/046/370/original/200807_14_Cameras.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-secondary/70 to-secondary"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
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
            
            {/* Search and filter container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full md:w-[400px]"
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
              
              {/* Price Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="bg-background">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4">
                    <div className="space-y-4">
                      <h4 className="font-medium">Price Range</h4>
                      <Slider
                        defaultValue={[minPrice, maxPrice]}
                        value={[priceRange[0], priceRange[1]]}
                        max={6000}
                        step={100}
                        minStepsBetweenThumbs={1}
                        onValueChange={handlePriceChange}
                        className="mt-6"
                      />
                      <div className="flex items-center justify-between">
                        <div className="bg-background border border-input rounded p-2">
                          ₹{priceRange[0]}
                        </div>
                        <div className="bg-background border border-input rounded p-2">
                          ₹{priceRange[1]}
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </motion.div>
            </div>
            
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
