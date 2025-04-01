import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
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
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [deviceType, setDeviceType] = useState("desktop");
  
  // Мемоизируем определение типа устройства для предотвращения лишних рендеров
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
    
    // Используем debounce для обработчика resize для улучшения производительности
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(detectDeviceType, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  // Мемоизируем menuItems чтобы избежать ненужных перерисовок
  const menuLinks = useMemo(() => {
    return menuItems.map((item, index) => (
      <Link
        key={index}
        to={item.href}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMenuOpen(false);
        }}
        className={`text-gray-800 dark:text-gray-200 hover:text-theme-blue transition-colors text-[15px] font-medium font-montserrat relative nav-link ${
          location.pathname === item.href ? 'text-theme-blue active-nav-link' : ''
        }`}
      >
        {item.label}
      </Link>
    ));
  }, [menuItems, location.pathname]);
  
  return (
    <header className={`flex justify-between items-center py-6 mb-8 md:mb-0 ${isMobile ? '' : 'animate-fade-in-up'} relative z-50`}>
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="flex items-center gap-2 z-50"
      >
        {/* Применяем loading="lazy" для картинки */}
        <img
          src={logoUrl}
          alt={logoAlt}
          className="w-8 h-8 rounded-none"
          loading="lazy"
        />
        <div className="text-black dark:text-white text-xl font-bold font-montserrat">
          iCert {deviceType === "mobile" && <span className="text-xs ml-1 text-gray-500">(Mobile)</span>}
        </div>
      </Link>
      
      <div className="flex items-center gap-3 md:gap-6">
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8 z-50 nav-links">
          {menuLinks}
        </nav>
        
        {/* Mobile direct links instead of dropdown */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <Link 
            to="/wiki" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-800 dark:text-gray-200 hover:text-theme-blue px-2 py-1 text-sm font-medium z-50"
          >
            Wiki
          </Link>
        </div>
        
        {/* Theme Toggle Slider */}
        <div className="z-50">
          <ThemeToggle />
        </div>
        
        {/* Contact button - always visible */}
        <a 
          href="https://t.me/icertmanager" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`bg-black dark:bg-theme-blue dark:text-white text-white py-2 
            ${isMobile ? 'px-3 text-xs' : 'px-5 text-sm'} 
            rounded-full font-medium font-montserrat hover:bg-gray-800 
            dark:hover:bg-blue-600 transition-all relative group overflow-hidden ${isMobile ? '' : 'shine-effect'} z-50`}
        >
          <span className="relative z-10">Заказать</span>
        </a>
      </div>
    </header>
  );
};
