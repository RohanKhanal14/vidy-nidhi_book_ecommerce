"use client";
import React, { useState } from "react";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Eye,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// import { useNavigate } from 'react-router-dom';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useToast } from '@/hooks/use-toast';

// Mock data for orders
const mockOrders = [
  {
    id: "ORD-12345",
    date: "2023-04-10",
    total: 34.99,
    status: "delivered",
    items: [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        price: 12.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "The Great Gatsby",
        price: 10.99,
        quantity: 2,
        image:
          "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=688&auto=format&fit=crop",
      },
    ],
    address: "123 Book Lane, Reading, CA 12345",
    tracking: "TRK-789012",
  },
  {
    id: "ORD-23456",
    date: "2023-03-25",
    total: 22.99,
    status: "processing",
    items: [
      {
        id: 3,
        title: "Pride and Prejudice",
        price: 11.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=687&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "1984",
        price: 10.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=687&auto=format&fit=crop",
      },
    ],
    address: "123 Book Lane, Reading, CA 12345",
    tracking: null,
  },
  {
    id: "ORD-34567",
    date: "2023-02-15",
    total: 45.98,
    status: "delivered",
    items: [
      {
        id: 5,
        title: "Brave New World",
        price: 15.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=735&auto=format&fit=crop",
      },
      {
        id: 6,
        title: "The Catcher in the Rye",
        price: 9.99,
        quantity: 3,
        image:
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1212&auto=format&fit=crop",
      },
    ],
    address: "123 Book Lane, Reading, CA 12345",
    tracking: "TRK-345678",
  },
  {
    id: "ORD-45678",
    date: "2023-01-05",
    total: 18.99,
    status: "cancelled",
    items: [
      {
        id: 7,
        title: "Lord of the Flies",
        price: 18.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1495640388908-05fa85273b99?q=80&w=687&auto=format&fit=crop",
      },
    ],
    address: "123 Book Lane, Reading, CA 12345",
    tracking: null,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "shipped":
      return "bg-purple-100 text-purple-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const MyOrders = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const router = useRouter();
  //   const { toast } = useToast();

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const viewOrderDetails = (orderId: string) => {
    // In a real app, this would navigate to a detailed order page
    // toast({
    //   title: "Order Details",
    //   description: `Viewing details for order ${orderId}`,
    // });
  };

  const downloadInvoice = (orderId: string) => {
    // In a real app, this would download the invoice
    // toast({
    //   title: "Invoice Downloaded",
    //   description: `Invoice for order ${orderId} has been downloaded`,
    // });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">My Orders</h1>
        <Link href="/books">
          <Button variant="outline" className="flex items-center">
            Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {mockOrders.map((order) => (
            <Card key={order.id} className="relative mb-4">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <CardDescription>
                      Ordered on {new Date(order.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <Badge
                      className={`${getStatusColor(order.status)} capitalize`}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <p className="text-sm font-medium">
                      Total: ${order.total.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.items.length} item(s)
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-2 sm:mt-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => viewOrderDetails(order.id)}
                    >
                      <Eye className="h-4 w-4 mr-1" /> Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => downloadInvoice(order.id)}
                    >
                      <FileText className="h-4 w-4 mr-1" /> Invoice
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleOrderDetails(order.id)}
                    >
                      {expandedOrder === order.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {expandedOrder === order.id && (
                  <div className="mt-4 border-t pt-4">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Total</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {order.items.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell>
                                <div className="flex items-center">
                                  <div className="w-12 h-16 mr-3 bg-gray-100 rounded overflow-hidden">
                                    <Image
                                      width={100}
                                      height={100}
                                      src={item.image}
                                      alt={item.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span className="font-medium">
                                    {item.title}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>${item.price.toFixed(2)}</TableCell>
                              <TableCell>{item.quantity}</TableCell>
                              <TableCell>
                                ${(item.price * item.quantity).toFixed(2)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="font-medium mb-2">Shipping Address</h4>
                        <p className="text-sm text-gray-600">{order.address}</p>
                      </div>
                      {order.tracking && (
                        <div>
                          <h4 className="font-medium mb-2">Tracking Number</h4>
                          <div className="flex items-center">
                            <Package className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm text-gray-600">
                              {order.tracking}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="processing" className="space-y-6">
          {mockOrders
            .filter((order) => order.status === "processing")
            .map((order) => (
              <Card key={order.id} className="relative mb-4">
                {/* Show the same card structure as in "all" tab */}
                <CardHeader className="pb-2">
                  {/* ... Same header structure */}
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <CardDescription>
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge
                        className={`${getStatusColor(order.status)} capitalize`}
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* ... Same content structure */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                      <p className="text-sm font-medium">
                        Total: ${order.total.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {order.items.length} item(s)
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => viewOrderDetails(order.id)}
                      >
                        <Eye className="h-4 w-4 mr-1" /> Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadInvoice(order.id)}
                      >
                        <FileText className="h-4 w-4 mr-1" /> Invoice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="shipped" className="space-y-6">
          <div className="text-center py-8">
            <Package className="h-16 w-16 mx-auto text-gray-300" />
            <h3 className="mt-4 text-xl font-medium text-gray-600">
              No orders in transit
            </h3>
            <p className="mt-1 text-gray-500">
              You don&apos;t have any books currently being shipped
            </p>
          </div>
        </TabsContent>

        <TabsContent value="delivered" className="space-y-6">
          {mockOrders
            .filter((order) => order.status === "delivered")
            .map((order) => (
              <Card key={order.id} className="relative mb-4">
                {/* Same card structure */}
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <CardDescription>
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge
                        className={`${getStatusColor(order.status)} capitalize`}
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                      <p className="text-sm font-medium">
                        Total: ${order.total.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {order.items.length} item(s)
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => viewOrderDetails(order.id)}
                      >
                        <Eye className="h-4 w-4 mr-1" /> Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadInvoice(order.id)}
                      >
                        <FileText className="h-4 w-4 mr-1" /> Invoice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-6">
          {mockOrders
            .filter((order) => order.status === "cancelled")
            .map((order) => (
              <Card key={order.id} className="relative mb-4">
                {/* Same card structure */}
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <CardDescription>
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge
                        className={`${getStatusColor(order.status)} capitalize`}
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                      <p className="text-sm font-medium">
                        Total: ${order.total.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {order.items.length} item(s)
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => viewOrderDetails(order.id)}
                      >
                        <Eye className="h-4 w-4 mr-1" /> Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyOrders;
