"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BookOpen, Facebook, Github, Mail } from "lucide-react";
import Link from "next/link";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center">
            <BookOpen className="h-8 w-8 text-[#800020]" />
            <span className="ml-2 text-2xl font-bold text-[#8B4513]">
              VIDHYA<span className="text-[#800020]">NIDHI</span>
            </span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-[#333333]">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Join BookSwap to buy, sell, and swap books
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center bg-[#FAF8F0] hover:bg-[#800020] hover:text-white"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Sign up with Facebook
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center bg-[#FAF8F0] hover:bg-[#800020] hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Sign up with Google
              </Button>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">
                  or continue with
                </span>
              </div>
            </div>
          </CardHeader>

          <form>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-[#FAF8F0]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-[#FAF8F0]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#FAF8F0]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#FAF8F0]"
                  required
                />
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters with uppercase, lowercase,
                  number, and special character.
                </p>
              </div>

              <div className="flex items-start space-x-2 mb-4">
                <Checkbox id="terms" className="mt-1" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-[#800020] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-[#800020] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-[#800020] hover:bg-[#800020]/90"
              >
                Sign up
              </Button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#800020] hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
