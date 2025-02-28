
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    try {
      const success = await login(email, password);
      
      if (success) {
        navigate("/");
      } else {
        setError("Invalid credentials. Try user@example.com / password");
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      setError("An error occurred during login");
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - CameraCartopia</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center justify-center">
                <Camera className="h-10 w-10 text-primary" />
                <span className="ml-2 text-2xl font-bold tracking-tight">
                  Camera<span className="text-primary">Cartopia</span>
                </span>
              </Link>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h1 className="text-2xl font-bold mb-6">Log in to your account</h1>
              
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-md p-3 mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <a href="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      "Log In"
                    )}
                  </Button>

                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    <p>
                      Demo credentials: <br />
                      Email: user@example.com <br />
                      Password: password
                    </p>
                  </div>
                </div>
              </form>
            </div>
            
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button className="text-primary hover:underline">
                Sign up
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
