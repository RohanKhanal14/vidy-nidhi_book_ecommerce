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
import { BookOpen, Facebook, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const [signupLoading, setSignupLoading] = useState(false);

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    className="bg-[#FAF8F0]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    className="bg-[#FAF8F0]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", { required: "Email is required" })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="bg-[#FAF8F0]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  {...register("password", { required: "Password is required" })}
                  aria-invalid={errors.password ? "true" : "false"}
                  className="bg-[#FAF8F0]"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center  space-x-2 mb-4">
                <Checkbox
                  id="terms"
                  {...register("agreeToTerms", {
                    required: "You must agree to the terms and conditions",
                  })}
                  aria-invalid={errors.agreeToTerms ? "true" : "false"}
                />
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-xs">
                    {errors.agreeToTerms.message}
                  </p>
                )}
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
                {signupLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing up...
                  </>
                ) : (
                  "Sign up"
                )}
              </Button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/signin"
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
