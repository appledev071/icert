
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "VPN", href: "/vpn-pricing" },
    { label: "О нас", href: "/about" },
  ];

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      {/* 404 Content */}
      <section className="py-16 flex flex-col items-center justify-center text-center animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <div className="text-9xl font-bold font-montserrat text-theme-blue mb-6">404</div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6">
            Страница не найдена
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Извините, запрашиваемая страница не существует или была перемещена.
            Вернитесь на главную страницу и продолжите просмотр сайта.
          </p>
          
          <Link to="/" onClick={scrollToTop}>
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-white text-base 
                        py-2 px-8 rounded-full font-medium shadow-md hover:shadow-glow 
                        transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <Home className="mr-2 h-4 w-4" />
              <span className="relative z-10">Вернуться на главную</span>
            </Button>
          </Link>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default NotFound;
