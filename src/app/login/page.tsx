"use client";
import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
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
import { BookOpen, Facebook, Mail } from "lucide-react";
// import { toast } from "sonner";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //   const navigate = useNavigate();

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //   }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center">
            <BookOpen className="h-8 w-8 text-[#800020]" />
            <span className="ml-2 text-2xl font-bold text-[#8B4513]">
              VIDYA<span className="text-[#800020]">NIDHI</span>
            </span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-[#333333]">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to your account to continue
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
                Sign in with Facebook
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center bg-[#FAF8F0] hover:bg-[#800020] hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Sign in with Google
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#800020] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#FAF8F0]"
                  required
                />
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me for 30 days
                </Label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-[#800020] hover:bg-[#800020]/90"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-[#800020] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

        <p className="mt-4 text-center text-xs text-gray-500">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
