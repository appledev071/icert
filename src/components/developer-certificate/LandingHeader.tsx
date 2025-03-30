
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface LandingHeaderProps {
  logoUrl: string;
  logoAlt: string;
  menuItems?: { label: string; href: string }[];
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({
  logoUrl,
  logoAlt,
  menuItems = [],
}) => {
  return (
    <header className="flex justify-between items-center py-6 mb-12 animate-fade-in-up">
      <div className="flex items-center gap-2">
        <img
          src={logoUrl}
          alt={logoAlt}
          className="w-12 h-12 rounded-xl"
        />
        <div className="text-theme-light-purple dark:text-theme-light-purple text-xl font-bold">
          iCert
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-theme-light-muted hover:text-theme-light-purple transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
