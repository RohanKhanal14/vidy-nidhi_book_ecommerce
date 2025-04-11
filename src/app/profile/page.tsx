"use client";
import React, { useRef, useState } from "react";
import { Camera, Edit2, Heart, Package, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Products from "../products/page";
import MyOrders from "../orders/page";
import Wishlist from "../wishlist/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const UserProfile = () => {
  const isMobile = false;
  const [activeTab, setActiveTab] = useState("profile");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // You can add additional logic here, like file upload or preview
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
    phone: "(555) 123-4567",
    joinDate: "April 2022",
    bio: "Book lover and collector. Interested in classic literature, science fiction, and contemporary novels.",
    favoriteGenres: ["Fiction", "Science Fiction", "Classics", "Mystery"],
    booksListed: 12,
    booksSold: 8,
    booksPurchased: 15,
  });
  const handleEditToggle = () => {
    if (isEditing) {
      // In a real app, this would save changes to a backend
      toast("Your profile has been successfully updated");
    }
    setIsEditing(!isEditing);
  };
  const uploadAvatar = () => {
    // In a real app, this would open a file dialog
    toast.error("Feature Unavailable");
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mr-4">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470"
            alt="Profile"
            className="w-full h-full object-cover"
            width={80}
            height={80}
          />
        </div>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          <Button
            variant="outline"
            size="sm"
            className="mb-2"
            onClick={handleButtonClick}
          >
            Change Photo
          </Button>
          {fileName && (
            <p className="text-sm text-muted-foreground mt-1">
              Selected: {fileName}
            </p>
          )}
          <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size 1MB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          {isEditing ? (
            <Input
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          ) : (
            <div className="p-2 border rounded-md bg-gray-50">
              {userData.name}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          {isEditing ? (
            <Input
              id="email"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          ) : (
            <div className="p-2 border rounded-md bg-gray-50">
              {userData.email}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          {isEditing ? (
            <Input
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <div className="p-2 border rounded-md bg-gray-50">
              {userData.phone}
            </div>
          )}
        </div>
        
      </div>
      <div>
          <Button
            onClick={handleEditToggle}
            className="bg-[#800020] hover:bg-[#800020]/90"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
            {!isEditing && <Edit2 className="ml-2 h-4 w-4" />}
          </Button>
        </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-4">Delete Account</h3>
        <p className="text-sm text-gray-500 mb-4">
          Permanently delete your account and remove all your data. This action
          cannot be undone.
        </p>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return renderProfileSection();
      case "My Orders":
        return <MyOrders />;
      case "My Wishlist":
        return <Wishlist />;
      case "My Products":
        return <Products />;
      default:
        return renderProfileSection();
    }
  };

  const tabItems = [
    { id: "Profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    {
      id: "My Orders",
      label: "My Orders",
      icon: <Package className="h-4 w-4" />,
    },
    {
      id: "My Wishlist",
      label: "My Wishlist",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      id: "My Products",
      label: "My Products",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
  ];

  return (
    <div className="mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-[#333333] mb-8">
        Account Settings
      </h1>

      {isMobile ? (
        <div>
          <div className="bg-white rounded-lg shadow mb-4">
            <select
              className="w-full p-4 border-0 text-base font-medium bg-transparent focus:outline-none"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {tabItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <Card>
            <CardContent className="pt-6">{renderContent()}</CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        className="w-full h-full object-cover"
                        src={userData.avatar}
                        alt={userData.name}
                      />
                      <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h2 className="mt-4 text-xl font-bold">{userData.name}</h2>
                  <p className="text-muted-foreground">{userData.email}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="space-y-1 py-2">
                  {tabItems.map((item) => (
                    <button
                      key={item.id}
                      className={`w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                        activeTab === item.id ? "bg-gray-100 font-medium" : ""
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">
                  {tabItems.find((item) => item.id === activeTab)?.label}
                </h2>
              </CardHeader>
              <CardContent>{renderContent()}</CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
