"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";

// Sample book data
const featuredBooks = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 9.99,
    originalPrice: 14.99,
    coverImage:
      "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
    condition: "Very Good" as const,
    isFeatured: true,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    price: 8.5,
    coverImage:
      "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
    condition: "New" as const,
    isNew: true,
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 7.99,
    originalPrice: 12.99,
    coverImage:
      "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    condition: "Good" as const,
    isFeatured: true,
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 6.99,
    coverImage:
      "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    condition: "Like New" as const,
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 11.99,
    originalPrice: 16.99,
    coverImage:
      "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    condition: "Very Good" as const,
  },
  {
    id: "6",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 10.99,
    coverImage:
      "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
    condition: "Good" as const,
    isFeatured: true,
  },
];

const FeaturedBooks = () => {
  const [activeTab, setActiveTab] = useState<"Featured" | "New" | "Bestseller">(
    "Featured",
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4 md:mb-0">
            {activeTab === "Featured" && "Featured Books"}
            {activeTab === "New" && "New Arrivals"}
            {activeTab === "Bestseller" && "Bestsellers"}
          </h2>

          <div className="flex space-x-2">
            <Button
              variant={activeTab === "Featured" ? "default" : "outline"}
              onClick={() => setActiveTab("Featured")}
              className={
                activeTab === "Featured"
                  ? "bg-[#800020] hover:bg-[#6b1414]/90"
                  : "text-[#333333] hover:text-[#800020]"
              }
            >
              Featured
            </Button>
            <Button
              variant={activeTab === "New" ? "default" : "outline"}
              onClick={() => setActiveTab("New")}
              className={
                activeTab === "New"
                  ? "bg-[#800020] hover:bg-[#6b1414]/90"
                  : "text-[#333333] hover:text-[#800020]"
              }
            >
              New Arrivals
            </Button>
            <Button
              variant={activeTab === "Bestseller" ? "default" : "outline"}
              onClick={() => setActiveTab("Bestseller")}
              className={
                activeTab === "Bestseller"
                  ? "bg-[#800020] hover:bg-[#6b1414]/90"
                  : "text-[#333333] hover:text-[#800020]"
              }
            >
              Bestsellers
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/10"
          >
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
