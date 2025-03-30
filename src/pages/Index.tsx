
import React from "react";
import {
  PricingCard,
  ThemedLandingWrapper,
} from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { HeroSection } from "@/components/developer-certificate/HeroSection";
import { FeaturesSection } from "@/components/developer-certificate/FeaturesSection";
import { CtaSection } from "@/components/developer-certificate/CtaSection";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Pricing card data with different glow colors
  const pricingCards = [
    {
      title: "iPad",
      price: "399₽",
      iconBgColor: "bg-theme-blue",
      gradientColors:
        "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Одно устройство" },
      ],
      glowColor: "rgba(59, 130, 246, 0.5)" // Blue glow
    },
    {
      title: "Обычный",
      price: "999₽",
      iconBgColor: "bg-theme-blue",
      gradientColors:
        "bg-gradient-to-br from-gray-100 to-theme-blue/10 dark:from-gray-800 dark:to-theme-blue/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Одно устройство" },
      ],
      glowColor: "rgba(139, 92, 246, 0.5)" // Purple glow
    },
    {
      title: "Моментальный",
      price: "1499₽",
      iconBgColor: "bg-theme-blue",
      gradientColors:
        "bg-gradient-to-br from-theme-blue/10 to-gray-100 dark:from-theme-blue/20 dark:to-gray-800",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 30 минут" },
        { text: "Одно устройство" },
      ],
      glowColor: "rgba(34, 197, 94, 0.5)" // Green glow
    },
  ];

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "VPN", href: "/vpn-pricing" },
    { label: "О нас", href: "/about" },
  ];

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader 
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      {/* Hero section */}
      <HeroSection
        title="Сертификаты разработчика"
        subtitle="Расширенные возможности для вашего iPhone и iPad"
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        hideSparkles={true} // Hide sparkles as requested
      />

      {/* Features section */}
      <FeaturesSection />

      {/* Pricing section */}
      <section id="pricing" className="py-20 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
        <h2 className="section-title mb-4 font-montserrat">Тарифы сертификатов</h2>
        <p className="section-description mb-12">
          Выберите оптимальный вариант сертификата разработчика для ваших потребностей
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              price={card.price}
              iconBgColor={card.iconBgColor}
              gradientColors={card.gradientColors}
              features={card.features}
              glowColor={card.glowColor}
            />
          ))}
        </div>
      </section>

      {/* Expanded VPN section with more benefits */}
      <section id="vpn" className="py-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-10 text-center relative overflow-hidden group hover:border-theme-blue/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          
          <h2 className="text-3xl font-bold font-montserrat mb-4 text-black dark:text-white relative inline-block">
            VPN-сервис
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Защитите свою конфиденциальность и получите доступ к глобальному контенту с помощью нашего VPN-сервиса
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/50 dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-theme-blue/50 transition-all duration-300">
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">Высокая скорость</h3>
              <p className="text-gray-600 dark:text-gray-400">До 1 Гбит/с для комфортного серфинга, стриминга и быстрых загрузок</p>
            </div>
            
            <div className="bg-white/50 dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-theme-blue/50 transition-all duration-300">
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">100% анонимность</h3>
              <p className="text-gray-600 dark:text-gray-400">Шифрование военного уровня и отсутствие логирования для полной защиты данных</p>
            </div>
            
            <div className="bg-white/50 dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-theme-blue/50 transition-all duration-300">
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">Доступ к контенту</h3>
              <p className="text-gray-600 dark:text-gray-400">Обход географических ограничений и доступ к заблокированным сайтам и сервисам</p>
            </div>
          </div>
          
          <Link to="/vpn-pricing" onClick={scrollToTop}>
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-base 
                        py-2 px-8 rounded-full font-medium shadow-md
                        transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Узнать больше</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA section with more spacing */}
      <div className="py-12">
        <CtaSection />
      </div>

      {/* Footer section */}
      <div id="contacts">
        <LandingFooter
          contactMessage=""
          contactHandle="@icertmanager"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default Index;
