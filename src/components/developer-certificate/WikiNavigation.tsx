
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const WikiNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const wikiLinks = [
    { path: "/wiki", label: "Wiki" },
    { path: "/developer-certificate-info", label: "О сертификатах" },
    { path: "/vpn-info", label: "VPN" },
    { path: "/installation-guide", label: "Установка" },
    { path: "/faq", label: "FAQ" },
    { path: "/about", label: "О нас" },
  ];

  return (
    <nav className="flex overflow-x-auto py-2 mb-4 border-b border-gray-200 dark:border-gray-800 animate-fade-in-down">
      <div className="flex gap-1 md:gap-3">
        {wikiLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`px-4 py-2 whitespace-nowrap rounded-md transition-colors duration-300 text-sm font-medium ${
              currentPath === link.path
                ? "bg-theme-blue text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
