
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [deviceType, setDeviceType] = useState("desktop");
  
  // Detect device type
  useEffect(() => {
    const detectDeviceType = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setDeviceType("mobile");
      } else if (width < 768) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    
    detectDeviceType();
    window.addEventListener('resize', detectDeviceType);
    
    return () => {
      window.removeEventListener('resize', detectDeviceType);
    };
  }, []);
  
  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  // Filter menu items for mobile - show only Wiki
  const filteredMenuItems = isMobile 
    ? menuItems.filter(item => item.label === "Wiki" || item.href === "/wiki")
    : menuItems;
  
  return (
    <header className="flex justify-between items-center py-6 mb-8 md:mb-12 animate-fade-in-up">
      <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 z-20">
        <img
          src={logoUrl}
          alt={logoAlt}
          className="w-8 h-8 rounded-none"
        />
        <div className="text-black dark:text-white text-xl font-bold font-montserrat">
          iCert {deviceType === "mobile" && <span className="text-xs ml-1 text-gray-500">(Mobile)</span>}
        </div>
      </Link>
      
      <div className="flex items-center gap-3 md:gap-6">
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          {filteredMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={scrollToTop}
              className={`text-gray-800 dark:text-gray-200 hover:text-theme-blue transition-colors text-[15px] font-medium font-montserrat relative group ${
                location.pathname === item.href ? 'text-theme-blue' : ''
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-theme-blue transform ${
                location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              } transition-transform duration-300 origin-left`}></span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-800 dark:text-gray-200 focus:outline-none z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Contact button - always visible */}
        <a 
          href="https://t.me/icertmanager" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`bg-black dark:bg-theme-blue dark:text-white text-white py-2 
            ${isMobile ? 'px-3 text-xs' : 'px-5 text-sm'} 
            rounded-full font-medium font-montserrat hover:bg-gray-800 
            dark:hover:bg-blue-600 transition-all relative group overflow-hidden shine-effect z-20`}
        >
          <span className="relative z-10">{isMobile ? 'Заказать' : 'Заказать'}</span>
        </a>
      </div>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-10 flex flex-col items-center justify-center transition-all duration-300">
          <nav className="flex flex-col items-center gap-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={scrollToTop}
                className={`text-gray-800 dark:text-gray-200 hover:text-theme-blue transition-colors text-xl font-medium font-montserrat ${
                  location.pathname === item.href ? 'text-theme-blue' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/wiki" 
              onClick={scrollToTop}
              className="mt-4 text-gray-800 dark:text-gray-200 hover:text-theme-blue transition-colors text-xl font-medium font-montserrat"
            >
              Wiki
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
