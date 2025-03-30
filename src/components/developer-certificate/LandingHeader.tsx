
import React from "react";

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
    <header className="flex justify-between items-center py-6 mb-16 animate-fade-in-up">
      <div className="flex items-center gap-2">
        <img
          src={logoUrl}
          alt={logoAlt}
          className="w-8 h-8 rounded-none"
        />
        <div className="text-black dark:text-white text-xl font-bold">
          iCert
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-800 dark:text-gray-200 hover:text-theme-green transition-colors text-[15px] font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="border border-gray-300 dark:border-gray-700 text-black dark:text-white py-2 px-5 rounded-full text-sm font-medium hover:border-theme-green transition-colors">
          Заказать
        </button>
      </div>
    </header>
  );
};
