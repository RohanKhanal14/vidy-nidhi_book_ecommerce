"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, Search } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";

const HeroSection = () => {
  const islogin = false; // Replace with actual login state
  return (
    <section className="py-16 px-8 bg-gradient-to-l from-[#faf8f0] via-[#f7f1e8] to-[#f0e0c8] md:px-16 flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Discover, Buy, and Exchange{" "}
          <span className="text-[#8b1a1a] dark:text-[#e06666]">Books</span>
          <br />
          You Love
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
          Find great deals on new and used books, or sell and exchange your
          collection with other book lovers in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/books">
            <Button className="bg-[#8b1a1a] hover:bg-[#6b1414] dark:bg-[#e06666] dark:hover:bg-[#c05555] text-white px-8 py-6 text-lg">
              Browse Books
            </Button>
          </Link>
          {islogin ? (
            <Link href="#">
              <Button
                variant="outline"
                className="border-[#8b1a1a] text-[#8b1a1a] dark:border-[#e06666] dark:text-[#e06666] hover:bg-[#f8e7e7] dark:hover:bg-gray-800 px-8 py-6 text-lg"
              >
                Sell Your Books
              </Button>
            </Link>
          ) : (
            <Link href="/signup">
              <Button
                variant="outline"
                className="border-[#8b1a1a] text-[#8b1a1a] dark:border-[#e06666] dark:text-[#e06666] hover:bg-[#f8e7e7] dark:hover:bg-gray-800 px-8 py-6 text-lg flex items-center animate-pulse"
              >
                Sign up
                <LogIn size={20} />
              </Button>
            </Link>
          )}
        </div>

        <div className="mt-12">
          <form className="relative">
            <Input
              type="text"
              placeholder="Search by title, author, ISBN or keyword..."
              className="w-full pl-10 pr-12 py-6 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </div>
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#8b1a1a] hover:bg-[#6b1414] dark:bg-[#e06666] dark:hover:bg-[#c05555] text-white p-2 rounded-full"
            >
              <Search size={18} />
            </button>
          </form>
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Popular: Harry Potter, Stephen King, Academic Textbooks, Manga
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="relative w-100 h-100">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={256}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
