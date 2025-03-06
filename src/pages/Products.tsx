import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products, getAvailableBrands, filterProducts } from "@/lib/data";
import { Category, FilterOptions } from "@/types";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Camera, 
  DollarSign, 
  SlidersHorizontal, 
  Clock, 
  Tag, 
  Filter, 
  Check,
  RotateCcw,
  RotateCw,
  ChevronDown
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const Products: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 2000]);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [rentalDuration, setRentalDuration] = useState<number>(1);
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  
  const [animateHeader, setAnimateHeader] = useState(false);
  const [animateFilters, setAnimateFilters] = useState(false);
  const [animateProducts, setAnimateProducts] = useState(false);
  const [showCameraAnimation, setShowCameraAnimation] = useState(false);
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const resetFilters = () => {
    setActiveCategory("all");
    setSearchTerm("");
    setPriceRange([minPrice, maxPrice]);
    setSelectedBrand("");
    setRentalDuration(1);
  };

  const playCameraAnimation = () => {
    setShowCameraAnimation(true);
    setTimeout(() => {
      setShowCameraAnimation(false);
    }, 2500);
  };

  useEffect(() => {
    playCameraAnimation();
    
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam && ["camera", "lens", "accessory", "editing", "all", "lighting", "drone"].includes(categoryParam)) {
      setActiveCategory(categoryParam as Category);
    }
    
    const brands = getAvailableBrands();
    setAvailableBrands(brands);
    
    const prices = products.map(p => p.price);
    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));
    setPriceRange([Math.min(...prices), Math.max(...prices)]);
  }, [location.search]);

  useEffect(() => {
    const options: FilterOptions = {
      category: activeCategory !== "all" ? activeCategory : undefined,
      search: searchTerm || undefined,
      priceRange: priceRange,
      brand: selectedBrand || undefined
    };
    
    const result = filterProducts(options);
    setFilteredProducts(result);
    
    let count = 0;
    if (activeCategory !== "all") count++;
    if (searchTerm) count++;
    if (priceRange[0] > minPrice || priceRange[1] < maxPrice) count++;
    if (selectedBrand) count++;
    if (rentalDuration > 1) count++;
    setFilterCount(count);
    
    setAnimateProducts(true);
    setTimeout(() => {
      setAnimateProducts(false);
    }, 300);
  }, [activeCategory, searchTerm, priceRange, selectedBrand, rentalDuration, minPrice, maxPrice]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateHeader(true);
      setTimeout(() => {
        setAnimateFilters(true);
        setTimeout(() => {
          setAnimateProducts(true);
        }, 200);
      }, 200);
    }, 100);
  }, []);

  const cameraFloatVariants = {
    animate: {
      y: [0, -15, 0],
      rotateZ: [0, -3, 0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const cameraAnimationVariants = {
    initial: { 
      scale: 0.5, 
      opacity: 0,
      rotateY: 0,
      z: -100
    },
    animate: { 
      scale: [0.5, 1.2, 1],
      opacity: [0, 1, 1], 
      rotateY: [0, 360, 720],
      z: [0, 50, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut"
      }
    },
    exit: { 
      scale: [1, 1.2, 0],
      opacity: [1, 1, 0],
      rotateY: [0, 180, 360],
      z: [0, 100, 200],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const productContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Shop Equipment - Click <span className="text-[#ea384c]">N</span> Cut</title>
        <meta 
          name="description" 
          content="Browse and rent premium photography and videography equipment. Cameras, lenses, accessories, and editing software available." 
        />
      </Helmet>

      <AnimatePresence>
        {showCameraAnimation && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative"
              variants={cameraAnimationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="w-64 h-48 bg-gray-900 rounded-lg relative overflow-hidden">
                <motion.div className="absolute inset-0">
                  <motion.div className="absolute top-0 right-0 w-16 h-10 bg-gray-800 rounded-bl-lg" />
                  <motion.div className="absolute top-4 left-4 w-16 h-16 bg-black rounded-full border-4 border-gray-800" >
                    <motion.div 
                      className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black"
                      animate={{ 
                        background: [
                          "linear-gradient(to bottom right, #4a4a4a, #000000)",
                          "linear-gradient(to bottom right, #353535, #000000)",
                          "linear-gradient(to bottom right, #4a4a4a, #000000)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div 
                        className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-600 to-gray-900"
                        animate={{ 
                          scale: [1, 0.95, 1],
                          opacity: [0.9, 1, 0.9]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div className="absolute inset-2 rounded-full bg-black">
                          <motion.div 
                            className="absolute inset-1 rounded-full bg-blue-900/30"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-red-600" 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div className="absolute bottom-8 right-8 w-10 h-6 bg-gray-700 rounded" />
                  <motion.div className="absolute bottom-8 left-8 w-10 h-3 bg-gray-600 rounded" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-[-40px] w-full text-center text-white text-2xl font-bold"
                animate={{ y: [10, 0], opacity: [0, 1] }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Click<span className="text-[#ea384c]">N</span>Cut
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16 pt-16">
        <div className="bg-secondary py-10 md:py-16 border-b border-border relative overflow-hidden">
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
          
          <motion.div 
            variants={cameraFloatVariants}
            animate="animate"
            className="absolute z-10 opacity-20 top-10 right-10 hidden md:block"
          >
            <Camera size={120} className="text-primary" />
          </motion.div>
          
          <motion.div 
            variants={cameraFloatVariants}
            animate="animate"
            className="absolute z-10 opacity-10 bottom-20 left-10 hidden md:block"
            style={{ animationDelay: "2s" }}
          >
            <Camera size={80} className="text-white" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
            >
              Premium Equipment Collection
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-8"
            >
              Browse our curated selection of professional cameras, lenses, accessories, 
              and editing software for all your creative needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
                
                {searchTerm === "" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-0.5 bg-primary"
                  />
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Popover open={filtersExpanded} onOpenChange={setFiltersExpanded}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="bg-background relative overflow-hidden group">
                      <motion.div 
                        className="absolute inset-0 bg-primary/10 transform origin-left" 
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <SlidersHorizontal className="h-4 w-4 mr-2 group-hover:text-primary transition-colors duration-300" />
                      <span>Filters</span>
                      {filterCount > 0 && (
                        <span className="ml-2 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                          {filterCount}
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-0 overflow-hidden">
                    <div className="bg-primary text-white p-3 font-medium flex justify-between items-center">
                      <span>Advanced Filters</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-7 px-2 text-white hover:text-white hover:bg-white/20"
                        onClick={resetFilters}
                      >
                        <RotateCcw className="h-3 w-3 mr-1" />
                        Reset
                      </Button>
                    </div>
                    
                    <div className="p-4 max-h-[400px] overflow-y-auto">
                      <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="price" className="border-b">
                          <AccordionTrigger className="py-3">
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2" />
                              <span>Price Range</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-2">
                              <Slider
                                defaultValue={[minPrice, maxPrice]}
                                value={[priceRange[0], priceRange[1]]}
                                max={2000}
                                min={1000}
                                step={100}
                                minStepsBetweenThumbs={1}
                                onValueChange={handlePriceChange}
                              />
                              <div className="flex justify-between items-center">
                                <div className="bg-background border border-input rounded p-2">
                                  ₹{priceRange[0]}
                                </div>
                                <div className="bg-background border border-input rounded p-2">
                                  ₹{priceRange[1]}
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="brand" className="border-b">
                          <AccordionTrigger className="py-3">
                            <div className="flex items-center">
                              <Tag className="h-4 w-4 mr-2" />
                              <span>Brand</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-2">
                              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a brand" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="">All Brands</SelectItem>
                                  {availableBrands.map(brand => (
                                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="duration" className="border-b">
                          <AccordionTrigger className="py-3">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>Rental Duration</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-2">
                              <div className="flex items-center justify-between">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  disabled={rentalDuration <= 1}
                                  onClick={() => setRentalDuration(d => Math.max(1, d - 1))}
                                >
                                  -
                                </Button>
                                <span className="font-medium">{rentalDuration} day{rentalDuration > 1 ? 's' : ''}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setRentalDuration(d => d + 1)}
                                >
                                  +
                                </Button>
                              </div>
                              <Slider
                                value={[rentalDuration]}
                                min={1}
                                max={30}
                                step={1}
                                onValueChange={(v) => setRentalDuration(v[0])}
                              />
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="availability" className="border-none">
                          <AccordionTrigger className="py-3">
                            <div className="flex items-center">
                              <Filter className="h-4 w-4 mr-2" />
                              <span>Availability</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="in-stock" />
                                <label
                                  htmlFor="in-stock"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  In Stock Only
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="rental-available" />
                                <label
                                  htmlFor="rental-available"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Rental Available
                                </label>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
                      <div className="pt-4 flex justify-end">
                        <Button 
                          className="bg-primary text-white hover:bg-primary/90"
                          onClick={() => setFiltersExpanded(false)}
                        >
                          Apply Filters
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <CategoryFilter 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory} 
              />
            </motion.div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeCategory}-${searchTerm}-${priceRange[0]}-${priceRange[1]}-${selectedBrand}`}
            className="container mx-auto px-4 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProducts.length === 0 ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3 
                  className="text-xl font-medium mb-2"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  No products found
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Try adjusting your search or filters to find what you're looking for.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6"
                >
                  <Button onClick={resetFilters} className="bg-primary text-white">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset Filters
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <>
                <motion.div
                  className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                  </p>
                  
                  {filterCount > 0 && (
                    <Button variant="outline" size="sm" onClick={resetFilters}>
                      <RotateCcw className="mr-2 h-3 w-3" />
                      Reset Filters
                    </Button>
                  )}
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  variants={productContainerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </motion.div>
                
                <motion.div
                  className="mt-12 p-6 bg-black/5 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <RotateCw className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-lg font-medium">360° Product Previews</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Hover over any product and click the 3D rotation icon to see products from all angles.
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;
