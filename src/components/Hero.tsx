
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Video } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10" />
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://static.videezy.com/system/resources/previews/000/005/102/original/Typing_dark.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1 text-sm font-medium mb-5">
              Professional Equipment for Creators
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Rent Premium Camera Gear for Your{" "}
            <span className="text-primary">Creative Vision</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Access high-end cameras, lenses, and accessories without the high investment. 
            Professional editing services also available.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/products">
                <Camera className="mr-2 h-5 w-5" />
                Browse Equipment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
              <Link to="/products?category=editing">
                <Video className="mr-2 h-5 w-5" />
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
