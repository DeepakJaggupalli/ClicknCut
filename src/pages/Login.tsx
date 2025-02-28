
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login: React.FC = () => {
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  // Signup state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signupError, setSignupError] = useState("");
  
  const { login, signup } = useAuth();
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
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signupName || !signupEmail || !signupPassword || !confirmPassword) {
      setSignupError("Please fill in all fields");
      return;
    }
    
    if (signupPassword !== confirmPassword) {
      setSignupError("Passwords do not match");
      return;
    }
    
    if (signupPassword.length < 6) {
      setSignupError("Password must be at least 6 characters long");
      return;
    }
    
    setSignupError("");
    setIsSigningUp(true);
    
    try {
      const success = await signup(signupName, signupEmail, signupPassword);
      
      if (success) {
        navigate("/");
      }
    } catch (err) {
      setSignupError("An error occurred during registration");
      toast({
        title: "Registration error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Click N Cut</title>
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
                  Click<span className="text-primary">N</span> Cut
                </span>
              </Link>
            </div>
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
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
              </TabsContent>
              
              <TabsContent value="signup">
                <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                  <h1 className="text-2xl font-bold mb-6">Create an account</h1>
                  
                  {signupError && (
                    <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-md p-3 mb-6">
                      {signupError}
                    </div>
                  )}
                  
                  <form onSubmit={handleSignup}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="signupEmail" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <Input
                          id="signupEmail"
                          type="email"
                          placeholder="Enter your email"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="signupPassword" className="block text-sm font-medium mb-1">
                          Password
                        </label>
                        <Input
                          id="signupPassword"
                          type="password"
                          placeholder="Create a password"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                          Confirm Password
                        </label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90" 
                        disabled={isSigningUp}
                      >
                        {isSigningUp ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Creating account...
                          </>
                        ) : (
                          "Sign Up"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
