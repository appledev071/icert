import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { BookOpen, FileText, HelpCircle, Users, Download } from "lucide-react";

export const WikiNavigation: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [prevPath, setPrevPath] = useState<string>(location.pathname);
  
  useEffect(() => {
    // Store previous path to compare
    setPrevPath(location.pathname);
  }, [location.pathname]);
  
  const wikiLinks = [
    { path: "/wiki", label: "Wiki", icon: <BookOpen className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
    { path: "/developer-certificate-info", label: "О сертификатах", icon: <FileText className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
    { path: "/installation-guide", label: "Установка", icon: <Download className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
    { path: "/faq", label: "FAQ", icon: <HelpCircle className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
    { path: "/about", label: "О нас", icon: <Users className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
  ];

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="flex overflow-x-auto py-2 mb-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex gap-1 md:gap-3">
        {wikiLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={scrollToTop}
            className={`px-3 md:px-4 py-2 whitespace-nowrap rounded-md transition-colors duration-300 
              ${isMobile ? 'text-xs' : 'text-sm'} font-medium font-montserrat flex items-center gap-1.5 md:gap-2 ${
              location.pathname === link.path
                ? "bg-theme-blue text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
