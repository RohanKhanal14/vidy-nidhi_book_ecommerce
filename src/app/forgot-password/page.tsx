"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  interface IFormInput {
    email: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setSubmittedEmail(data.email);
    setIsSubmitted(true);
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="ml-2 h-11 w-9"
            />
            <span className="ml-2 text-2xl font-bold text-[#8B4513]">
              VIDHYA<span className="text-[#800020]">NIDHI</span>
            </span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-[#333333]">
            {isSubmitted ? "Check your email" : "Reset your password"}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {isSubmitted
              ? "We've sent you an email with a link to reset your password."
              : "Enter your email address and we'll send you a link to reset your password."}
          </p>
        </div>

        <Card>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", { required: "Email is required" })}
                      aria-invalid={errors.email ? "true" : "false"}
                      className="pl-10 bg-[#FAF8F0] mb-2"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col">
                <Button
                  type="submit"
                  className="w-full bg-[#800020] hover:bg-[#800020]/90 mt-5"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending reset link...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </Button>

                <div className="mt-4 flex items-center justify-center">
                  <Link
                    href="/signin"
                    className="inline-flex items-center text-sm text-[#800020] hover:underline"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </CardFooter>
            </form>
          ) : (
            <CardContent className="pt-6 pb-4 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <p className="mb-4">
                If an account exists with the email <strong>{submittedEmail}</strong>,
                you will receive a password reset link shortly.
              </p>
              <Button variant="outline" className="mt-2 hover:bg-[#800020] hover:text-white" onClick={() => setIsSubmitted(false)}>
                Try a different email
              </Button>
              <div className="mt-4">
                <Link
                  href="/signin"
                  className="inline-flex items-center text-sm text-[#800020] hover:underline"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to login
                </Link>
              </div>
            </CardContent>
          )}
        </Card>

        <p className="mt-4 text-center text-xs text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline text-[#800020]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
