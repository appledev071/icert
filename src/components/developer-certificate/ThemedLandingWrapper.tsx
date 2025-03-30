
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#2A2A4E] dark:bg-theme-darker-bg relative transition-colors duration-300">
      {/* Background gradient overlay */}
      <div className="absolute bg-[linear-gradient(96deg,rgba(69,214,202,0.15)_90.99%,rgba(241,91,181,0.15)_0%,rgba(130,71,229,0.15)_90.99%,rgba(69,214,202,0.15)_0%)] dark:bg-[linear-gradient(96deg,rgba(69,214,202,0.1)_90.99%,rgba(241,91,181,0.1)_0%,rgba(130,71,229,0.1)_90.99%,rgba(69,214,202,0.1)_0%)] inset-0" />

      {/* Theme toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Content container */}
      <div className="relative p-12 max-md:px-6 max-sm:px-4 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};
