
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
        
        {/* Animated glow blobs */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-300/10 dark:bg-blue-500/10 blur-[100px] 
                    animate-blob-float opacity-50 top-1/4 -left-[250px]"
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-300/10 dark:bg-purple-500/10 blur-[120px] 
                    animate-blob-float animation-delay-2000 opacity-40 bottom-0 right-0"
        ></div>
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-teal-300/10 dark:bg-teal-500/10 blur-[80px] 
                    animate-blob-float animation-delay-4000 opacity-30 top-0 right-1/4"
        ></div>
        
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
