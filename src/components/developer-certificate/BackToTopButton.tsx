
import React from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopButtonProps {
  className?: string;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`bg-theme-blue/10 hover:bg-theme-blue/20 text-theme-blue w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${className}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
