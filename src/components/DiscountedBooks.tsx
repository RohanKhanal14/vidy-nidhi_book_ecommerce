import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import BookCard from './BookCard';

// Sample discounted books data
const discountedBooks = [
  {
    id: '10',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 7.99,
    originalPrice: 14.99,
    coverImage: 'https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY445_SX342_.jpg',
    condition: 'Very Good' as const
  },
  {
    id: '11',
    title: 'Dune',
    author: 'Frank Herbert',
    price: 8.99,
    originalPrice: 17.99,
    coverImage: 'https://m.media-amazon.com/images/I/91-Dqdv5TqL._AC_UF1000,1000_QL80_.jpg',
    condition: 'Good' as const
  },
  {
    id: '12',
    title: 'Educated',
    author: 'Tara Westover',
    price: 10.99,
    originalPrice: 18.99,
    coverImage: 'https://m.media-amazon.com/images/I/81NwOj14S6L._AC_UF1000,1000_QL80_.jpg',
    condition: 'Like New' as const
  },
  {
    id: '13',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 12.99,
    originalPrice: 24.99,
    coverImage: 'https://m.media-amazon.com/images/I/71drKU2mB+L._AC_UF1000,1000_QL80_.jpg',
    condition: 'New' as const
  }
];

const DiscountedBooks = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-bookswap-cream to-white">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-bookswap-charcoal mb-2">Hot Deals & Discounts</h2>
            <p className="text-gray-600">Limited time offers on these popular titles</p>
          </div>
          <Button
            variant="link"
            className="text-bookswap-burgundy hover:text-bookswap-burgundy/80 p-0 flex items-center"
          >
            View All Deals <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {discountedBooks.map(book => (
            <BookCard
              key={book.id}
              {...book}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountedBooks;