
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4">
      <motion.div 
        className="text-center max-w-md w-full p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
            <span className="text-5xl font-bold text-primary">404</span>
          </div>
        </motion.div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <Button asChild className="w-full" size="lg">
          <Link to="/" className="flex items-center justify-center">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
