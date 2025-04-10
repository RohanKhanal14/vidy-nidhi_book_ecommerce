"use client";
import React, { useRef, useState } from "react";
import { Bell, CreditCard, Home, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
// import { useIsMobile } from '@/hooks/use-mobile';
import Image from "next/image";

const UserSettings = () => {
  const isMobile = false;
  const [activeTab, setActiveTab] = useState("profile");
  // const [fileName, setFileName] = useState<string | null>(null)
  // const fileInputRef = useRef<HTMLInputElement>(null)

  // const handleButtonClick = () => {
  //   fileInputRef.current?.click()
  // }

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]
  //   if (file) {
  //     setFileName(file.name)
  //     // You can add additional logic here, like file upload or preview
  //   }
  // }


  // const renderProfileSection = () => (
  //   <div className="space-y-6">
  //     <div>
  //       <div className="flex items-center mb-6">
  //         <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mr-4">
  //           <Image
  //             src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470"
  //             alt="Profile"
  //             className="w-full h-full object-cover"
  //             width={80}
  //             height={80}
  //           />
  //         </div>
  //         <div>
  //         <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
  //           <Button variant="outline" size="sm" className="mb-2" onClick={handleButtonClick}>
  //             Change Photo
  //           </Button>
  //           {fileName && <p className="text-sm text-muted-foreground mt-1">Selected: {fileName}</p>}
  //           <p className="text-xs text-gray-500">
  //             JPG, GIF or PNG. Max size 1MB
  //           </p>
  //         </div>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //         <div className="space-y-2">
  //           <Label htmlFor="firstName">First Name</Label>
  //           <Input id="firstName" defaultValue="Jane" />
  //         </div>
  //         <div className="space-y-2">
  //           <Label htmlFor="lastName">Last Name</Label>
  //           <Input id="lastName" defaultValue="Doe" />
  //         </div>
  //       </div>

  //       <div className="space-y-2 mt-4">
  //         <Label htmlFor="email">Email Address</Label>
  //         <Input id="email" type="email" defaultValue="jane.doe@example.com" />
  //       </div>

  //       <div className="space-y-2 mt-4">
  //         <Label htmlFor="phone">Phone Number</Label>
  //         <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
  //       </div>

  //       <Button className="mt-6 bg-[#800020] hover:bg-[#800020]/90">
  //         Save Changes
  //       </Button>
  //     </div>

  //     <Separator />

  //     <div>
  //       <h3 className="text-lg font-medium mb-4">Delete Account</h3>
  //       <p className="text-sm text-gray-500 mb-4">
  //         Permanently delete your account and remove all your data. This action
  //         cannot be undone.
  //       </p>
  //       <Button variant="destructive">Delete Account</Button>
  //     </div>
  //   </div>
  // );

  const renderAddressSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-4 mb-4">
        <div className="flex justify-between mb-2">
          <div>
            <span className="font-medium">Home (Default)</span>
            <p className="text-sm text-gray-500">
              Jane Doe
              <br />
              123 Book St
              <br />
              Reading, CA 12345
              <br />
              United States
            </p>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="outline" size="sm">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <div className="flex justify-between mb-2">
          <div>
            <span className="font-medium">Work</span>
            <p className="text-sm text-gray-500">
              Jane Doe
              <br />
              456 Library Ave
              <br />
              Reading, CA 12345
              <br />
              United States
            </p>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="outline" size="sm">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <Button className="bg-[#800020] hover:bg-[#800020]/90">
        Add New Address
      </Button>
    </div>
  );

  const renderPaymentSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center text-white font-bold text-xs">
              VISA
            </div>
            <div>
              <p className="font-medium">Visa ending in 4242</p>
              <p className="text-sm text-gray-500">Expires 12/2025</p>
            </div>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="outline" size="sm">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-8 bg-orange-500 rounded mr-3 flex items-center justify-center text-white font-bold text-xs">
              MC
            </div>
            <div>
              <p className="font-medium">Mastercard ending in 5678</p>
              <p className="text-sm text-gray-500">Expires 08/2024</p>
            </div>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="outline" size="sm">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <Button className="bg-[#800020] hover:bg-[#800020]/90">
        Add New Payment Method
      </Button>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Change Password</h3>
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input id="confirmPassword" type="password" />
        </div>
        <Button className="bg-[#800020] hover:bg-[#800020]/90">
          Update Password
        </Button>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Authenticator App</p>
            <p className="text-sm text-gray-500">Not Enabled</p>
          </div>
          <Button variant="outline">Setup</Button>
        </div>
      </div>
    </div>
  );

  const renderNotificationSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox id="orderUpdates" defaultChecked />
            <div className="grid gap-1.5">
              <Label htmlFor="orderUpdates">Order Updates</Label>
              <p className="text-sm text-gray-500">
                Receive emails about your order status
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="promotions" defaultChecked />
            <div className="grid gap-1.5">
              <Label htmlFor="promotions">Promotions and Deals</Label>
              <p className="text-sm text-gray-500">
                Receive emails about discounts and special offers
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="newBooks" />
            <div className="grid gap-1.5">
              <Label htmlFor="newBooks">New Book Arrivals</Label>
              <p className="text-sm text-gray-500">
                Get notified when new books arrive in your favorite genres
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="newsletter" defaultChecked />
            <div className="grid gap-1.5">
              <Label htmlFor="newsletter">Newsletter</Label>
              <p className="text-sm text-gray-500">
                Receive our monthly newsletter with top picks and reading tips
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button className="bg-[#800020] hover:bg-[#800020]/90">
        Save Preferences
      </Button>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "addresses":
        return renderAddressSection();
      case "payment":
        return renderPaymentSection();
      case "security":
        return renderSecuritySection();
      case "notifications":
        return renderNotificationSection();
      default:
        return renderAddressSection();
    }
  };

  const tabItems = [
    { id: "addresses", label: "Addresses", icon: <Home className="h-4 w-4" /> },
    {
      id: "payment",
      label: "Payment",
      icon: <CreditCard className="h-4 w-4" />,
    },
    { id: "security", label: "Security", icon: <Lock className="h-4 w-4" /> },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="h-4 w-4" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
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
            <Card className="sticky top-24">
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

export default UserSettings;
