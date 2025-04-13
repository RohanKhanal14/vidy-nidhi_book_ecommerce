"use client";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import Image from "next/image";

const BookLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(25), 300);
    const timer2 = setTimeout(() => setProgress(50), 800);
    const timer3 = setTimeout(() => setProgress(75), 1500);
    const timer4 = setTimeout(() => setProgress(95), 2200);
    const timer5 = setTimeout(() => setProgress(100), 3000);

    return () => {
      [timer1, timer2, timer3, timer4, timer5].forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-[#333333]/90 backdrop-blur-sm z-50">
      <div className="relative flex flex-col items-center justify-center p-6 max-w-sm mx-auto animate-[fade-in_0.4s_ease_forwards]">
        <div className="flex items-center justify-center mb-4 relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="w-30 h-35 animate-[pulse_2s_infinite]"
            priority
          />
        </div>

        <h2 className="text-xl font-medium text-[#333333] dark:text-white mb-3">
          {progress < 50
            ? "Loading your books..."
            : progress < 80
              ? "Almost there..."
              : "Finalizing..."}
        </h2>

        <div className="w-full max-w-xs mb-3">
          <Progress
            value={progress}
            indicatorClassName="bg-gradient-to-r from-blue-500 to-purple-600"
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {progress < 30
            ? "Preparing your library..."
            : progress < 70
              ? "Organizing collections..."
              : "Ready to explore!"}
        </p>
      </div>
    </div>
  );
};

export default BookLoader;
