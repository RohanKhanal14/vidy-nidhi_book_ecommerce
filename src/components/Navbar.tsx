"use client";
import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Sun,
  Moon,
  Settings,
  Package,
  LogOut,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const isLogin = useSelector((state: RootState) => state.user.isLogin);
  // const user = useSelector((state: RootState) => state.user.user);
  const isLogin = true;
  const user = {
    name: "John Doe",
    profilePicture: "/placeholder.svg",
    email: "rohankhanal114@gmail.com",
  };

  const menuItems = [
    {
      name: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
      href: "/profile",
    },
    {
      name: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      href: "/settings",
    },
    {
      name: "My Orders",
      icon: <Package className="mr-2 h-4 w-4" />,
      href: "/orders",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logging out...");
  };

  return (
    <>
      <header className="py-4 px-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center text-[#8b1a1a] dark:text-[#e06666] font-bold text-2xl"
          >
            <span className="mr-2">📚</span>
            <span>VIDYANIDHI</span>
          </a>
        </div>

        <div className="hidden md:block flex-1 max-w-3xl mx-6">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search for books by title, author or ISBN..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#8b1a1a] dark:hover:text-[#e06666] cursor-pointer"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        <div className="items-center space-x-4 hidden md:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {isLogin && (
            <>
              <Link href="/wishlist">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <Heart size={20} />
                </button>
              </Link>
              <Link href="/cart">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ShoppingCart size={20} />
                </button>
              </Link>
            </>
          )}

          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center space-x-1 focus:outline-none"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-[#8b1a1a] dark:hover:ring-[#e06666] transition-all">
                    <AvatarImage
                      src={
                        user?.profilePicture ||
                        "/placeholder.svg?height=32&width=32"
                      }
                      alt="User avatar"
                    />
                    <AvatarFallback className="bg-[#8b1a1a] dark:bg-[#e06666] text-white">
                      {user?.name
                        ? user.name.substring(0, 2).toUpperCase()
                        : "U"}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuLabel className="text-gray-500 py-0">
                  {" "}
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {menuItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <DropdownMenuItem>
                        {item.icon}
                        <span>{item.name}</span>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-500 dark:text-red-400"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <button
                type="submit"
                className="bg-[#8b1a1a] hover:bg-[#6b1414] text-white px-4 py-2 rounded"
              >
                Sign In
              </button>
            </Link>
          )}
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-4">
            <Input
              type="text"
              placeholder="Search books..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#8b1a1a] dark:hover:text-[#e06666] cursor-pointer"
            >
              <Search size={18} />
            </button>
          </form>

          {/* Mobile Navigation Links */}
          <nav className="space-y-4">
            {/* User Account Section */}

            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              {isLogin && (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="User avatar"
                      />
                      <AvatarFallback className="bg-[#8b1a1a] dark:bg-[#e06666] text-white">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      {user.name} <br />
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {user.email}
                      </span>
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Browse
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right text-gray-400"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Sell
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right text-gray-400"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Wishlist
              </Link>
              <Heart size={20} className="text-gray-400" />
            </div>

            {/* Sign Out Button (only when signed in) */}
            {isLogin ? (
              <button
                onClick={handleLogout}
                className="w-full mt-4 flex items-center justify-center space-x-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-2 rounded-md"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            ) : (
              <Link href="/login">
                <button
                  onClick={handleLogout}
                  className="w-full mt-4 flex items-center justify-center space-x-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-2 rounded-md"
                >
                  <LogOut size={18} />
                  <span>Sign In</span>
                </button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
