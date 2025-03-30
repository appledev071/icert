
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BackToHomeButtonProps {
  className?: string;
  variant?: "button" | "link";
}

export const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({ 
  className = "",
  variant = "button"
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (variant === "link") {
    return (
      <Link 
        to="/" 
        onClick={scrollToTop}
        className={`text-theme-blue hover:text-theme-blue/80 flex items-center gap-2 transition-all duration-300 ${className}`}
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        Вернуться на главную
      </Link>
    );
  }

  return (
    <Link to="/" onClick={scrollToTop} className={className}>
      <Button
        variant="outline"
        className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        Вернуться на главную
      </Button>
    </Link>
  );
};
