"use client";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  condition: "New" | "Like New" | "Very Good" | "Good" | "Acceptable";
  isNew?: boolean;
  isFeatured?: boolean;
}

const BookCard = ({
  id,
  title,
  author,
  price,
  originalPrice,
  coverImage,
  condition,
  isNew = false,
  isFeatured = false,
}: BookCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link href={`/books/${id}`}>
      <div className="transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            width={100}
            height={100}
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <button
            className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm"
            onClick={toggleWishlist}
          >
            <Heart
              className={`h-5 w-5 ${isWishlisted ? "text-[#800020] fill-[#800020]" : "text-gray-400"}`}
            />
          </button>

          {discount > 0 && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#800020] text-white">{discount}% OFF</Badge>
            </div>
          )}

          {isNew && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#D4AF37] text-[#333333]">New Arrival</Badge>
            </div>
          )}

          {isFeatured && !isNew && !discount && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#8B4513] text-white">Featured</Badge>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
            <Badge
              className={`
              ${condition === "New" ? "bg-green-600" : ""}
              ${condition === "Like New" ? "bg-green-500" : ""}
              ${condition === "Very Good" ? "bg-blue-500" : ""}
              ${condition === "Good" ? "bg-yellow-500" : ""}
              ${condition === "Acceptable" ? "bg-orange-500" : ""}
              text-white
            `}
            >
              {condition}
            </Badge>
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-bookswap-charcoal line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">by {author}</p>

          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="font-bold text-lg text-[#800020]">
                ${price.toFixed(2)}
              </p>
              {originalPrice && (
                <p className="text-xs text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </p>
              )}
            </div>
            <Button className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white rounded-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
