
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black relative transition-colors duration-300">
      {/* Theme toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Content container */}
      <div className="relative p-8 max-md:px-6 max-sm:px-4 max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};
