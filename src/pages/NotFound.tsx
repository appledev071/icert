
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
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
      <section className="py-12 flex flex-col items-center justify-center min-h-[60vh] animate-fade-in-up text-center">
        <h1 className="text-9xl font-bold font-montserrat text-theme-blue mb-6">404</h1>
        <h2 className="text-3xl font-semibold font-montserrat text-black dark:text-white mb-6">
          Страница не найдена
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        
        <Link to="/">
          <Button
            className="bg-black dark:bg-theme-blue dark:text-white text-white text-base 
                      py-6 px-8 rounded-full font-medium shadow-md
                      transition-all duration-300 group relative overflow-hidden shine-effect"
          >
            <Home className="mr-2 h-5 w-5 relative z-10" />
            <span className="relative z-10">Вернуться на главную</span>
          </Button>
        </Link>
      </section>
    </ThemedLandingWrapper>
  );
};

export default NotFound;
