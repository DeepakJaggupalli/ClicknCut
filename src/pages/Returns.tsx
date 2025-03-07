
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { getUserOrders } from "@/lib/data";
import { OrderItem, Order } from "@/types";
import { 
  Box, 
  PackageOpen, 
  ArrowLeft, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Returns: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>(user ? getUserOrders(user.id) : []);
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<OrderItem[]>([]);
  const [returnReason, setReturnReason] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const handleOrderClick = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const handleItemSelect = (item: OrderItem) => {
    const isSelected = selectedItems.some(i => i.id === item.id);
    
    if (isSelected) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmitReturn = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to return",
        variant: "destructive",
      });
      return;
    }

    if (returnReason.trim() === "") {
      toast({
        title: "Reason required",
        description: "Please provide a reason for your return",
        variant: "destructive",
      });
      return;
    }

    // Simulating return process
    toast({
      title: "Return requested",
      description: `${selectedItems.length} item(s) return requested successfully. Our team will contact you shortly.`,
    });

    // Reset the form
    setSelectedItems([]);
    setReturnReason("");
    setStep(1);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>
              Please login to view your previous orders and process returns.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="/login">Login</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const activeOrders = orders.filter(order => order.status === "completed");
  const returnedOrders = orders.filter(order => order.status === "returned");

  return (
    <>
      <Helmet>
        <title>Returns &amp; Exchange - Click N Cut</title>
        <meta name="description" content="Return or exchange your rented equipment. Easy and hassle-free process." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Returns &amp; Exchange</h1>
            <p className="text-muted-foreground mb-8">
              Manage your equipment returns and exchanges. Our hassle-free process makes returning quick and simple.
            </p>

            {step === 1 ? (
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="active">Active Orders</TabsTrigger>
                  <TabsTrigger value="returned">Return History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  {activeOrders.length === 0 ? (
                    <div className="text-center py-12 bg-muted/30 rounded-lg">
                      <PackageOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Active Orders</h3>
                      <p className="text-muted-foreground mb-4">You don't have any active orders available for return.</p>
                      <Button asChild variant="outline">
                        <Link to="/products">Browse Products</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {activeOrders.map(order => (
                        <Card key={order.id} className="overflow-hidden">
                          <div 
                            className="p-4 border-b border-border flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors"
                            onClick={() => handleOrderClick(order.id)}
                          >
                            <div>
                              <p className="font-medium">Order #{order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                Ordered on {order.orderDate} • {order.items.length} items
                              </p>
                            </div>
                            <ChevronRight className={`w-5 h-5 transition-transform ${expandedOrderId === order.id ? 'rotate-90' : ''}`} />
                          </div>
                          
                          {expandedOrderId === order.id && (
                            <div className="p-4">
                              <p className="font-medium mb-3">Select items to return:</p>
                              <div className="space-y-3">
                                {order.items.map(item => (
                                  <div 
                                    key={item.id} 
                                    className={`p-3 border rounded-md flex items-center gap-4 cursor-pointer transition-colors ${
                                      selectedItems.some(i => i.id === item.id) 
                                        ? 'border-primary bg-primary/5' 
                                        : 'border-border hover:border-muted-foreground'
                                    }`}
                                    onClick={() => handleItemSelect(item)}
                                  >
                                    <div className="w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                                      <img 
                                        src={item.productImage} 
                                        alt={item.productName} 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-grow">
                                      <p className="font-medium">{item.productName}</p>
                                      <div className="flex text-sm text-muted-foreground gap-3">
                                        <span>Qty: {item.quantity}</span>
                                        {item.rentalDays && <span>• {item.rentalDays} days</span>}
                                      </div>
                                    </div>
                                    <div className="h-5 w-5 rounded-full border flex-shrink-0 flex items-center justify-center">
                                      {selectedItems.some(i => i.id === item.id) && (
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="mt-4 text-right">
                                <Button 
                                  onClick={() => {
                                    if (selectedItems.length > 0) setStep(2);
                                    else {
                                      toast({
                                        title: "No items selected",
                                        description: "Please select at least one item to return",
                                        variant: "destructive",
                                      });
                                    }
                                  }}
                                  disabled={selectedItems.length === 0}
                                >
                                  Continue with Selected Items
                                </Button>
                              </div>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="returned">
                  {returnedOrders.length === 0 ? (
                    <div className="text-center py-12 bg-muted/30 rounded-lg">
                      <Box className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Return History</h3>
                      <p className="text-muted-foreground">You haven't processed any returns yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {returnedOrders.map(order => (
                        <Card key={order.id}>
                          <CardHeader>
                            <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                            <CardDescription>
                              Returned on {order.items[0].returnDate} • {order.items.length} items
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {order.items.map(item => (
                                <div key={item.id} className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-muted rounded-md overflow-hidden">
                                    <img 
                                      src={item.productImage} 
                                      alt={item.productName} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <p className="font-medium">{item.productName}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Qty: {item.quantity}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setStep(1)}
                      className="mr-2"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <CardTitle>Complete Your Return</CardTitle>
                  </div>
                  <CardDescription>
                    Please provide additional information to process your return request.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-medium mb-2">Selected Items ({selectedItems.length})</p>
                    <div className="space-y-2 mb-6">
                      {selectedItems.map(item => (
                        <div key={item.id} className="flex items-center p-2 bg-muted/30 rounded-md">
                          <div className="w-10 h-10 rounded overflow-hidden mr-3">
                            <img 
                              src={item.productImage}
                              alt={item.productName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-medium">{item.productName}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleItemSelect(item)}
                            className="h-7 w-7"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Reason for Return
                      </label>
                      <textarea 
                        value={returnReason}
                        onChange={(e) => setReturnReason(e.target.value)}
                        className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        rows={4}
                        placeholder="Please explain why you're returning these items..."
                      />
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-md mb-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                        <p className="font-medium">Return Instructions</p>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Our team will contact you within 24 hours to arrange pickup.</li>
                        <li>Please keep all original packaging if possible.</li>
                        <li>Include all accessories that came with the equipment.</li>
                        <li>Refunds are processed within 3-5 business days after inspection.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={handleSubmitReturn}>
                    Submit Return Request
                  </Button>
                </CardFooter>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Returns;
