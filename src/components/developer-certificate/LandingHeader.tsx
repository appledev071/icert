
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
    <header className="flex justify-between items-center py-4 mb-8 animate-fade-in-up">
      <div className="flex items-center gap-2">
        <img
          src={logoUrl}
          alt={logoAlt}
          className="w-10 h-10 rounded-lg"
        />
        <div className="text-theme-blue dark:text-theme-blue text-lg font-medium">
          iCert
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-5">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-theme-muted-blue hover:text-theme-blue transition-colors text-[15px]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
