'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, Filter, Grid3X3, ListFilter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import BookCard from '@/components/BookCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Sample book data
const allBooks = [
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
    isFeatured: true,
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
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 7.99,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387',
    condition: 'Acceptable' as const,
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 9.99,
    originalPrice: 15.99,
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688',
    condition: 'Good' as const,
  },
  {
    id: '6',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 14.99,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=687',
    condition: 'New' as const,
    isNew: true,
  },
];

const categories = [
  'All',
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Fantasy',
  'Biography',
  'History',
  'Self-Help',
  'Mystery & Thriller'
];

const Books = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  
  // Filter books based on search term and category
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' ? true : false; // In a real app, you'd match against book.category
    
    return matchesSearch && matchesCategory;
  });

  return (
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-bookswap-charcoal mb-2">All Books</h1>
      <p className="text-gray-500 mb-8">Browse our collection of new and used books {router.query.id}</p>
      
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search books by title, author..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button 
              variant={viewType === 'grid' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-none"
              onClick={() => setViewType('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewType === 'list' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-none"
              onClick={() => setViewType('list')}
            >
              <ListFilter className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative group">
            <Button variant="outline" size="sm" className="flex items-center">
              Sort by
              <ChevronDown className="ml-2 h-3.5 w-3.5" />
            </Button>
            <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
              <div className="py-1" role="menu">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Newest Arrivals</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Price: Low to High</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Price: High to Low</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Alphabetical (A-Z)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6 overflow-x-auto pb-2">
        <ScrollArea className="w-full">
          <div className="flex space-x-2 min-w-max">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                className="whitespace-nowrap"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      {filteredBooks.length > 0 ? (
        <div className={viewType === 'grid' ? 
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" : 
          "space-y-4"
        }>
          {filteredBooks.map((book) => (
            viewType === 'grid' ? (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                originalPrice={book.originalPrice}
                coverImage={book.coverImage}
                condition={book.condition}
                isNew={book.isNew}
                isFeatured={book.isFeatured}
              />
            ) : (
              <BookListItem
                key={book.id}
                book={book}
              />
            )
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <div className="mx-auto max-w-sm">
            <h2 className="text-xl font-semibold text-bookswap-charcoal mb-2">No books found</h2>
            <p className="text-gray-500 mb-6">
              We couldn&apos;t find any books matching your search criteria.
              Try adjusting your search or browse our categories.
            </p>
            <Button onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>
              Reset Filters
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

// BookListItem component for list view
interface BookListItemProps {
  book: {
    id: string;
    title: string;
    author: string;
    price: number;
    originalPrice?: number;
    coverImage: string;
    condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Acceptable';
    isNew?: boolean;
    isFeatured?: boolean;
  };
}

const BookListItem = ({ book }: BookListItemProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card className="flex overflow-hidden hover:shadow-md transition-shadow">
      <div className="w-24 sm:w-32 flex-shrink-0">
        <Image 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-bold text-bookswap-charcoal">{book.title}</h3>
        <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
        <div className="flex items-center mb-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            book.condition === 'New' ? 'bg-green-600 text-white' : 
            book.condition === 'Like New' ? 'bg-green-500 text-white' : 
            book.condition === 'Very Good' ? 'bg-blue-500 text-white' : 
            book.condition === 'Good' ? 'bg-yellow-500 text-white' :
            'bg-orange-500 text-white'
          }`}>
            {book.condition}
          </span>
          {book.isNew && (
            <span className="ml-2 text-xs bg-bookswap-gold px-2 py-0.5 rounded-full text-bookswap-charcoal">
              New Arrival
            </span>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-lg text-bookswap-burgundy">${book.price.toFixed(2)}</p>
            {book.originalPrice && (
              <p className="text-xs text-gray-500 line-through">${book.originalPrice.toFixed(2)}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleWishlist}
              className={isWishlisted ? 'text-bookswap-burgundy' : 'text-gray-400'}
            >
              Save
            </Button>
            <Button size="sm" className="bg-bookswap-brown hover:bg-bookswap-brown/90 text-white">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Books;