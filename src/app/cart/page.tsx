'use client'
import React, { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  condition: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    condition: "Very Good",
    quantity: 1,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.99,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688",
    condition: "Like New",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 35 ? 0 : 4.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#333333] mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-[#333333] mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven&apos;t added any books to your cart yet.
            </p>
            <Link href="/browse">
              <Button className="bg-[#800020] hover:bg-[#800020]/90">
                Browse Books
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Cart Items ({cartItems.length})
                </h2>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row py-6 border-b border-gray-200"
                  >
                    <div className="sm:w-24 h-36 mb-4 sm:mb-0 flex-shrink-0">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-md"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="flex-1 sm:ml-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-[#333333]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            by {item.author}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Condition: {item.condition}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-[#800020]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full border"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full border"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          className="text-gray-400 hover:text-red-500"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-[#800020]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Apply</Button>
                </div>

                <Button className="w-full bg-[#800020] hover:bg-[#800020]/90 py-2 h-12">
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-xs text-center text-gray-500">
                  <p>Free shipping on orders over $35</p>
                  <p className="mt-1">Estimated delivery: 2-4 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
