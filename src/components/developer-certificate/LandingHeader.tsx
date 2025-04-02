import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Отслеживаем скролл для изменения стиля шапки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
  
  // Если меню открыто, блокируем скролл на мобильных
  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);
  
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
        className={`text-gray-800 dark:text-gray-200 hover:text-theme-blue transition-colors text-[15px] font-medium font-montserrat relative nav-link group ${
          location.pathname === item.href ? 'text-theme-blue active-nav-link' : ''
        }`}
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-blue group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </Link>
    ));
  }, [menuItems, location.pathname]);
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { 
        duration: 0.2, 
        ease: "easeIn" 
      }
    }
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: i * 0.05,
        duration: 0.3
      } 
    }),
    exit: { opacity: 0, x: 10 }
  };
  
  return (
    <>
      {/* Пустой блок для компенсации fixed-шапки */}
      <div className="h-20 md:h-24 w-full"></div>
      
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 py-4 md:py-5 px-4 md:px-6 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'bg-white/50 dark:bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2 md:gap-2.5 z-50 group"
      >
            {/* Логотип с эффектом при наведении */}
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
        <img
          src={logoUrl}
          alt={logoAlt}
                className="w-5 h-5 object-contain brightness-[1.2] group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
            </div>
            <div className="flex flex-col">
              <div className="text-black dark:text-white text-lg md:text-xl font-bold font-montserrat leading-tight group-hover:text-theme-blue transition-colors duration-300">
                iCert
              </div>
              <div className="hidden md:block text-xs text-gray-500 dark:text-gray-400 font-medium leading-none">
                Developer Services
              </div>
        </div>
      </Link>
      
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
        {/* Desktop navigation */}
            <nav className="hidden md:flex gap-5 lg:gap-8 z-50 nav-links">
          {menuLinks}
        </nav>
        
            {/* Divider line */}
            <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
        
        {/* Theme Toggle Slider */}
        <div className="z-50">
          <ThemeToggle />
        </div>
        
            {/* Contact button - always visible but smaller on mobile */}
            <a 
              href="https://t.me/icertmanager" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`relative overflow-hidden bg-gradient-to-r from-theme-blue to-blue-500 dark:from-blue-600 dark:to-blue-500 text-white py-2 md:py-2.5 
                ${isMobile ? 'px-3 text-xs' : 'px-5 md:px-6 text-sm'} 
                rounded-full font-medium font-montserrat shadow-md hover:shadow-lg
                transition-all duration-300 group z-50`}
              aria-label="Связаться с нами"
            >
              <span className="relative z-10 flex items-center group-hover:translate-x-0.5 transition-transform duration-300">
                {isMobile ? 'Заказать' : (
                  <>
                    Заказать
                    <ChevronDown className="w-4 h-4 ml-1 rotate-[270deg] group-hover:translate-x-0.5 transition-transform duration-300" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center z-50">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative focus:outline-none"
                aria-label="Меню навигации"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu - полноэкранное меню для мобильных */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed inset-0 top-[4rem] left-0 right-0 w-full h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 z-40 flex flex-col pt-6 pb-16 overflow-y-auto"
            >
              <div className="flex flex-col gap-1 px-4 md:px-6 w-full">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={mobileMenuItemVariants}
                    className="w-full"
                  >
                    <Link
                      to={item.href}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className={`text-gray-800 dark:text-gray-200 hover:text-theme-blue py-4 px-4 transition-colors text-xl font-medium border-b border-gray-100 dark:border-gray-800 flex items-center w-full ${
                        location.pathname === item.href ? 'text-theme-blue' : ''
                      }`}
                    >
                      <span className="w-2 h-2 bg-blue-500/40 rounded-full mr-3 opacity-70"></span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={mobileMenuItemVariants}
                custom={menuItems.length + 1}
                className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 px-4 md:px-6 w-full"
              >
                <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-6 tracking-wider px-4">Полезные ссылки</h3>
                <div className="flex flex-col gap-5 w-full">
                  <Link to="/privacy-policy" className="text-gray-700 dark:text-gray-300 hover:text-theme-blue transition-colors py-3 px-4 border-b border-gray-100 dark:border-gray-800 w-full">
                    Политика конфиденциальности
                  </Link>
                  <Link to="/terms-of-use" className="text-gray-700 dark:text-gray-300 hover:text-theme-blue transition-colors py-3 px-4 border-b border-gray-100 dark:border-gray-800 w-full">
                    Условия использования
                  </Link>
        <a 
          href="https://t.me/icertmanager" 
          target="_blank" 
          rel="noopener noreferrer" 
                    className="text-gray-700 dark:text-gray-300 hover:text-theme-blue transition-colors py-3 px-4 border-b border-gray-100 dark:border-gray-800 w-full"
        >
                    Поддержка
        </a>
      </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
