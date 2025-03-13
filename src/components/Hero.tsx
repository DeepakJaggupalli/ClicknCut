
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Video } from "lucide-react";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showShutter, setShowShutter] = useState(true);

  useEffect(() => {
    // Show shutter animation first, then reveal content
    const timer = setTimeout(() => {
      setShowShutter(false);
      setTimeout(() => setIsLoaded(true), 300);
    }, 800); // Reduced timing for faster initial load
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[50vh] md:min-h-[70vh] lg:h-[90vh] flex items-center overflow-hidden">
      {/* Enhanced Camera shutter animation - optimized for performance */}
      <AnimatePresence>
        {showShutter && (
          <motion.div 
            className="absolute inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              height: 0,
              opacity: 0,
              transition: { 
                height: { delay: 0.2, duration: 0.2 },
                opacity: { duration: 0.2 } 
              }
            }}
          >
            <motion.div
              className="w-16 h-16 md:w-32 md:h-32 border-t-4 border-r-4 border-b-4 border-l-4 border-primary rounded-full"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ 
                scale: [1, 3, 0.2],
                opacity: [1, 0.8, 0],
                rotateZ: [0, 45, 90]
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10" />
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="https://static.videezy.com/system/resources/previews/000/005/102/original/Typing_dark.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-8 md:pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1 text-sm font-medium mb-5">
              Professional Equipment for Creators
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Rent Premium Camera Gear for Your{" "}
            <span className="text-primary">Creative Vision</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-foreground/80 mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Access high-end cameras, lenses, and accessories without the high investment. 
            Professional editing services also available.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base">
              <Link to="/products">
                <Camera className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Browse Equipment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-sm sm:text-base">
              <Link to="/products?category=editing">
                <Video className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Editing Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-10" />
    </div>
  );
};

export default Hero;
