"use client";
import { useState, useEffect } from "react";
// import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ChevronLeft,
  Star,
  Share,
  BookOpen,
  User,
  Calendar,
  BookMarked,
  ShoppingCart,
} from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
// import { toast } from '@/components/ui/use-toast';
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { toast } from "sonner";

// Sample books data - this would typically come from an API
const allBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    originalPrice: 19.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    condition: "Very Good" as const,
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    publisher: "Scribner",
    publicationYear: "1925",
    isbn: "9780743273565",
    pages: 180,
    language: "English",
    genre: ["Fiction", "Classic"],
    tags: ["American Literature", "1920s", "Jazz Age"],
    rating: 4.5,
    reviews: [
      {
        id: "1",
        user: "Alice",
        rating: 5,
        comment: "A masterpiece of American literature!",
        date: "2023-01-15",
      },
      {
        id: "2",
        user: "Bob",
        rating: 4,
        comment: "Beautiful prose but the characters are frustrating.",
        date: "2023-02-20",
      },
    ],
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.99,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688",
    condition: "Like New" as const,
    isFeatured: true,
    description:
      "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
    publisher: "HarperCollins",
    publicationYear: "1960",
    isbn: "9780061120084",
    pages: 336,
    language: "English",
    genre: ["Fiction", "Coming-of-age", "Legal drama"],
    tags: ["Southern Gothic", "Civil Rights", "Alabama"],
    rating: 4.8,
    reviews: [
      {
        id: "1",
        user: "Carol",
        rating: 5,
        comment: "A must-read for everyone. Powerful and moving.",
        date: "2023-03-10",
      },
      {
        id: "2",
        user: "David",
        rating: 5,
        comment: "Life-changing book that tackles important issues.",
        date: "2023-04-05",
      },
    ],
  },
  // ... adding data for the rest of the books
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    price: 8.99,
    originalPrice: 14.99,
    coverImage:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=687",
    condition: "Good" as const,
    description:
      "1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.",
    publisher: "Penguin Books",
    publicationYear: "1949",
    isbn: "9780451524935",
    pages: 328,
    language: "English",
    genre: ["Fiction", "Dystopian", "Political"],
    tags: ["Totalitarianism", "Surveillance", "Big Brother"],
    rating: 4.7,
    reviews: [
      {
        id: "1",
        user: "Emma",
        rating: 5,
        comment: "Eerily prescient. Even more relevant today.",
        date: "2023-05-12",
      },
      {
        id: "2",
        user: "Frank",
        rating: 4,
        comment: "Dark and disturbing, but essential reading.",
        date: "2023-05-30",
      },
    ],
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 7.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    condition: "Acceptable" as const,
    description:
      "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The story charts the emotional development of protagonist Elizabeth Bennet, who learns the error of making hasty judgments.",
    publisher: "Penguin Classics",
    publicationYear: "1813",
    isbn: "9780141439518",
    pages: 432,
    language: "English",
    genre: ["Fiction", "Romance", "Classic"],
    tags: ["Regency Era", "Social Commentary", "Marriage"],
    rating: 4.6,
    reviews: [
      {
        id: "1",
        user: "Grace",
        rating: 5,
        comment: "Austen's wit and wisdom shine in this classic.",
        date: "2023-06-14",
      },
      {
        id: "2",
        user: "Henry",
        rating: 4,
        comment: "Entertaining and insightful social commentary.",
        date: "2023-07-01",
      },
    ],
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 9.99,
    originalPrice: 15.99,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688",
    condition: "Good" as const,
    description:
      "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It is a classic coming-of-age story: an exploration of a teenage protagonist's alienation from society.",
    publisher: "Little, Brown and Company",
    publicationYear: "1951",
    isbn: "9780316769488",
    pages: 277,
    language: "English",
    genre: ["Fiction", "Coming-of-age"],
    tags: ["Adolescence", "Alienation", "Identity"],
    rating: 4.2,
    reviews: [
      {
        id: "1",
        user: "Irene",
        rating: 5,
        comment: "Captures teenage angst perfectly.",
        date: "2023-07-22",
      },
      {
        id: "2",
        user: "Jack",
        rating: 3,
        comment: "Holden can be grating, but the writing is excellent.",
        date: "2023-08-05",
      },
    ],
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 14.99,
    coverImage:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=687",
    condition: "New" as const,
    isNew: true,
    description:
      "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
    publisher: "Houghton Mifflin Harcourt",
    publicationYear: "1937",
    isbn: "9780547928227",
    pages: 310,
    language: "English",
    genre: ["Fiction", "Fantasy", "Adventure"],
    tags: ["Middle-earth", "Dragons", "Quest"],
    rating: 4.9,
    reviews: [
      {
        id: "1",
        user: "Karen",
        rating: 5,
        comment: "Perfect gateway to fantasy literature.",
        date: "2023-08-17",
      },
      {
        id: "2",
        user: "Larry",
        rating: 5,
        comment: "Timeless classic that never gets old.",
        date: "2023-09-03",
      },
    ],
  },
];

const BookDetails = () => {
  const params = useParams();
  const bookId = params.id;
  console.log(bookId);
  const [book, setBook] = useState<(typeof allBooks)[0] | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedTab, setSelectedTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [relatedBooks, setRelatedBooks] = useState<typeof allBooks>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundBook = allBooks.find((b) => b.id === bookId);
    setBook(foundBook || null);

    // Set related books (in a real app, this would use more sophisticated logic)
    if (foundBook) {
      setRelatedBooks(
        allBooks
          .filter(
            (b) =>
              b.id !== foundBook.id &&
              (b.genre?.some((g) => foundBook.genre?.includes(g)) ||
                b.author === foundBook.author),
          )
          .slice(0, 3),
      );
    }
  }, [bookId]);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // toast({
    //   title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
    //   description: isWishlisted ? "The book has been removed from your wishlist" : "The book has been added to your wishlist",
    // });
  };

  const addToCart = () => {
    toast(`${book?.title} (${quantity}) has been added to your cart`);
  };

  const shareBook = () => {
    // In a real app, this would open a share dialog
    navigator.clipboard.writeText(window.location.href);
    // toast({
    //   title: "Link copied",
    //   description: "Book link has been copied to clipboard",
    // });
  };

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#333333] mb-4">
          Book Not Found
        </h1>
        <p className="mb-8 text-gray-500">
          The book you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Button asChild>
          <Link href="/books">
            <ChevronLeft className="mr-2" />
            Back to Books
          </Link>
        </Button>
      </div>
    );
  }

  const discount = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="outline" asChild size="sm">
          <Link href="/books" className="flex items-center">
            <ChevronLeft className="mr-1 h-4 w-4" /> Back to Books
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Book Cover */}
        <div className="flex flex-col">
          <div className="relative aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              width={100}
              height={100}
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-4 right-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100 rounded-full"
                onClick={toggleWishlist}
              >
                <Heart
                  className={`h-5 w-5 ${isWishlisted ? "fill-[#800020] text-[#800020]" : "text-gray-500"}`}
                />
              </Button>
            </div>

            {discount > 0 && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#800020] text-white">
                  {discount}% OFF
                </Badge>
              </div>
            )}

            {book.isNew && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#D4AF37] text-[#333333]">
                  New Arrival
                </Badge>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <Badge
              className={`
              ${book.condition === "New" ? "bg-green-600" : ""}
              ${book.condition === "Like New" ? "bg-green-500" : ""}
              ${book.condition === "Very Good" ? "bg-blue-500" : ""}
              ${book.condition === "Good" ? "bg-yellow-500" : ""}
              ${book.condition === "Acceptable" ? "bg-orange-500" : ""}
              text-white
            `}
            >
              {book.condition}
            </Badge>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500"
              onClick={shareBook}
            >
              <Share className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>

        {/* Book Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-[#333333] mb-2">
            {book.title}
          </h1>
          <p className="text-gray-500 mb-4">
            by{" "}
            <span className="font-semibold hover:text-[#800020] cursor-pointer">
              {book.author}
            </span>
          </p>

          <div className="flex items-center mb-6">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(book.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-gray-500">
              {book.rating} ({book.reviews?.length || 0} reviews)
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-end">
              <p className="text-3xl font-bold text-[#800020]">
                ${book.price.toFixed(2)}
              </p>
              {book.originalPrice && (
                <p className="ml-2 text-lg text-gray-500 line-through">
                  ${book.originalPrice.toFixed(2)}
                </p>
              )}
            </div>

            {discount > 0 && book.originalPrice && (
              <p className="text-sm text-green-600 mt-1">
                You save: ${(book.originalPrice - book.price).toFixed(2)} (
                {discount}%)
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4 my-6">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-r-none px-3"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-l-none px-3"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>

            <Button
              className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white"
              onClick={addToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Pages</p>
                <p>{book.pages}</p>
              </div>
            </div>

            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Publisher</p>
                <p>{book.publisher}</p>
              </div>
            </div>

            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p>{book.publicationYear}</p>
              </div>
            </div>

            <div className="flex items-center">
              <BookMarked className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">ISBN</p>
                <p>{book.isbn}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seller Info - would typically be in the 3rd column on large screens */}
        <div className="lg:col-span-1 col-span-full md:col-start-1 lg:col-start-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Seller Information</h3>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">BookSwap Store</p>
                  <p className="text-sm text-gray-500">Member since 2022</p>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span>Rating</span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  4.9 (120 reviews)
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Response Time</span>
                <span>Usually within 24 hours</span>
              </div>
              <Separator className="my-4" />
              <Button className="w-full bg-[#800020] hover:bg-[#800020]/90">
                Contact Seller
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Book Details Tabs */}
      <Tabs
        defaultValue="description"
        className="mb-12"
        onValueChange={setSelectedTab}
      >
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">
            Reviews ({book.reviews?.length || 0})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <div className="prose max-w-none">
            <p className="text-gray-700">{book.description}</p>
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Publisher</span>
              <span>{book.publisher}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">
                Publication Year
              </span>
              <span>{book.publicationYear}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">ISBN</span>
              <span>{book.isbn}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Pages</span>
              <span>{book.pages}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Language</span>
              <span>{book.language}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Condition</span>
              <span>{book.condition}</span>
            </div>
            {book.genre && (
              <div className="flex justify-between col-span-full">
                <span className="font-medium text-gray-700">Genre</span>
                <div className="flex flex-wrap justify-end gap-1">
                  {book.genre.map((g, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-100">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {book.tags && (
              <div className="flex justify-between items-start col-span-full">
                <span className="font-medium text-gray-700">Tags</span>
                <div className="flex flex-wrap justify-end gap-1">
                  {book.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          {book.reviews && book.reviews.length > 0 ? (
            <div className="space-y-6">
              {book.reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                There are no reviews for this book yet.
              </p>
              <Button className="mt-4">Write a Review</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
      Related Books
      {relatedBooks.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {relatedBooks.map((relatedBook) => (
              <Link href={`/books/${relatedBook.id}`} key={relatedBook.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="aspect-[2/3] overflow-hidden">
                    <Image
                      src={relatedBook.coverImage}
                      alt={relatedBook.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-[#333333] line-clamp-1">
                      {relatedBook.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      by {relatedBook.author}
                    </p>
                    <p className="font-bold text-[#800020]">
                      ${relatedBook.price.toFixed(2)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
