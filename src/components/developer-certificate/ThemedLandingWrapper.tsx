
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black relative transition-colors duration-300 overflow-x-hidden">
      {/* Theme toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-10"></div>
        
        {/* Floating circles */}
        <div 
          className="floating-circle" 
          style={{
            width: '300px', 
            height: '300px', 
            top: '10%', 
            left: '5%',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="floating-circle" 
          style={{
            width: '200px', 
            height: '200px', 
            top: '60%', 
            right: '10%',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="floating-circle" 
          style={{
            width: '150px', 
            height: '150px', 
            bottom: '15%', 
            left: '20%',
            animationDelay: '4s'
          }}
        ></div>
        <div 
          className="floating-circle" 
          style={{
            width: '400px', 
            height: '400px', 
            top: '30%', 
            right: '-10%',
            animationDelay: '1s',
            opacity: '0.2'
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative p-8 max-md:px-6 max-sm:px-4 max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};
