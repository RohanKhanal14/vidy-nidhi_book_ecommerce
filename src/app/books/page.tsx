"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Filter, Grid3X3, ListFilter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BookCard from "@/components/BookCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";


// Sample book data
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
    category: "Fiction",
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
    category: "Fiction",
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    price: 8.99,
    originalPrice: 14.99,
    coverImage:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=687",
    condition: "Good" as const,
    category: "Science Fiction",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 7.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    condition: "Acceptable" as const,
    category: "Fiction",
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
    category: "Fiction",
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
    category: "Fantasy",
  },
  {
    id: "7",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 15.99,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    condition: "Very Good" as const,
    category: "Non-Fiction",
  },
  {
    id: "8",
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.99,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688",
    condition: "Like New" as const,
    category: "Biography",
  },
  {
    id: "9",
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.99,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688",
    condition: "Like New" as const,
    category: "Biography",
  },
  {
    id: "10",
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.99,
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=688",
    condition: "Like New" as const,
    category: "Biography",
  },
];

const categories = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Fantasy",
  "Biography",
  "History",
  "Self-Help",
  "Mystery & Thriller",
  "Science",
];


type SortOption = "newest" | "price_low" | "price_high" | "alphabetical";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterCondition, setFilterCondition] = useState<string | null>(null);

  // Filter books based on search term and category
  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ? true : book.category === activeCategory;

    const matchesCondition = !filterCondition
      ? true
      : book.condition === filterCondition;

    return matchesSearch && matchesCategory && matchesCondition;
  });

  // Sort books based on selected option
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOption) {
      case "newest":
        // For demo purposes, just return in the same order
        return 0;
      case "price_low":
        return a.price - b.price;
      case "price_high":
        return b.price - a.price;
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setShowSortDropdown(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#333333] mb-2">All Books</h1>
      <p className="text-gray-500 mb-8">
        Browse our collection of new and used books
      </p>

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
          <Button
            variant="outline"
            size="sm"
            className={`${showFilters ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              variant={viewType === "grid" ? "default" : "ghost"}
              size="sm"
              className={`${viewType === "grid" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setViewType("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewType === "list" ? "default" : "ghost"}
              size="sm"
              className={`${viewType === "list" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setViewType("list")}
            >
              <ListFilter className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              Sort by:{" "}
              {sortOption === "newest"
                ? "Newest"
                : sortOption === "price_low"
                  ? "Price: Low to High"
                  : sortOption === "price_high"
                    ? "Price: High to Low"
                    : "A-Z"}
              <ChevronDown className="ml-2 h-3.5 w-3.5" />
            </Button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white z-10">
                <div className="py-1" role="menu">
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleSortChange("newest")}
                  >
                    Newest Arrivals
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleSortChange("price_low")}
                  >
                    Price: Low to High
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleSortChange("price_high")}
                  >
                    Price: High to Low
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleSortChange("alphabetical")}
                  >
                    Alphabetical (A-Z)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Condition Filters */}

      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-2">Book Condition</h3>
          <div className="flex flex-wrap gap-2 ">
            <Button
              variant={filterCondition === null ? "default" : "outline"}
              size="sm"
              className={`${filterCondition === null ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setFilterCondition(null)}
            >
              Any
            </Button>
            <Button
              variant={filterCondition === "New" ? "default" : "outline"}
              size="sm"
              className={`${filterCondition === "New" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setFilterCondition("New")}
            >
              New
            </Button>
            <Button
              variant={filterCondition === "Like New" ? "default" : "outline"}
              size="sm"
              className={`${filterCondition === "Like New" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setFilterCondition("Like New")}
            >
              Like New
            </Button>
            <Button
              variant={filterCondition === "Very Good" ? "default" : "outline"}
              size="sm"
              className={`${filterCondition === "Very Good" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setFilterCondition("Very Good")}
            >
              Very Good
            </Button>
            <Button
              variant={filterCondition === "Good" ? "default" : "outline"}
              size="sm"
              className={`${filterCondition === "Good" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setFilterCondition("Good")}
            >
              Good
            </Button>
            <Button
              variant={filterCondition === "Acceptable" ? "default" : "outline"}
              size="sm"
              className={`${filterCondition === "Acceptable" ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
              onClick={() => setFilterCondition("Acceptable")}
            >
              Acceptable
            </Button>
          </div>
        </div>
      )}

      <div className="mb-6 overflow-x-auto pb-2">
        <ScrollArea className="w-full">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={`whitespace-nowrap ${activeCategory === category ? "bg-[#800020] hover:bg-[#800020]/90 text-white hover:text-white" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {sortedBooks.length > 0 ? (
        <div
          className={
            viewType === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              : "space-y-4"
          }
        >
          {sortedBooks.map((book) =>
            viewType === "grid" ? (
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
              <BookListItem key={book.id} book={book} />
            ),
          )}
        </div>
      ) : (
        <Card className="text-center py-12">
          <div className="mx-auto max-w-sm">
            <h2 className="text-xl font-semibold text-[#333333] mb-2">
              No books found
            </h2>
            <p className="text-gray-500 mb-6">
              We couldn&apos;t find any books matching your search criteria. Try
              adjusting your search or browse our categories.
            </p>
            <Button
              className="bg-[#800020] hover:bg-[#800020]/90 text-white"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
                setFilterCondition(null);
                setSortOption("newest");
              }}
            >
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
    condition: "New" | "Like New" | "Very Good" | "Good" | "Acceptable";
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
    <Card className="flex overflow-hidden py-0 flex-row hover:shadow-md transition-shadow">
      <div className="w-24 sm:w-32 flex-shrink-0">
        <Image
          width={100}
          height={100}
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 pl-2 py-4 pr-4">
        <h3 className="font-bold text-[#333333]">{book.title}</h3>
        <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
        <div className="flex items-center mb-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              book.condition === "New"
                ? "bg-green-600 text-white"
                : book.condition === "Like New"
                  ? "bg-green-500 text-white"
                  : book.condition === "Very Good"
                    ? "bg-blue-500 text-white"
                    : book.condition === "Good"
                      ? "bg-yellow-500 text-white"
                      : "bg-orange-500 text-white"
            }`}
          >
            {book.condition}
          </span>
          {book.isNew && (
            <span className="ml-2 text-xs bg-[] px-2 py-0.5 rounded-full text-[#333333]">
              New Arrival
            </span>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-lg text-[#800020]">
              ${book.price.toFixed(2)}
            </p>
            {book.originalPrice && (
              <p className="text-xs text-gray-500 line-through">
                ${book.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleWishlist}
              className={isWishlisted ? "text-[#800020]" : "text-gray-400"}
            >
              Save
            </Button>
            <Button
              size="sm"
              className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Books;
