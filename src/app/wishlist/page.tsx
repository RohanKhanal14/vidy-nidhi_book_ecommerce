'use client'
import React, { useState } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BookCard from '@/components/BookCard';

// Sample wishlist data
const wishlistItems = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    originalPrice: 19.99,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387',
    condition: 'Very Good' as const,
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 10.99,
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688',
    condition: 'Like New' as const,
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    price: 8.99,
    originalPrice: 14.99,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=687',
    condition: 'Good' as const,
  },
];

const Wishlist = () => {
  const [items, setItems] = useState(wishlistItems);

  const removeFromWishlist = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearWishlist = () => {
    setItems([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#333333]">My Wishlist</h1>
          <p className="text-gray-500 mt-1">Books you&apos;ve saved for later</p>
        </div>
        
        {items.length > 0 && (
          <Button 
            variant="outline" 
            onClick={clearWishlist}
            className="flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {items.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-[#333333] mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start browsing and add some books to your wishlist.</p>
            <Button className="bg-[#800020] hover:bg-[#800020]/90">
              Browse Books
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <button 
                className="absolute top-3 right-3 z-10 bg-white p-1.5 rounded-full shadow-sm"
                onClick={() => removeFromWishlist(item.id)}
              >
                <Heart className="h-5 w-5 text-[#800020] fill-[#800020]" />
              </button>
              <BookCard 
                id={item.id}
                title={item.title}
                author={item.author}
                price={item.price}
                originalPrice={item.originalPrice}
                coverImage={item.coverImage}
                condition={item.condition}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;