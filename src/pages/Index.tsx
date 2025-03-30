import React, { useEffect } from "react";
import {
  PricingCard,
  ThemedLandingWrapper,
} from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { HeroSection } from "@/components/developer-certificate/HeroSection";
import { FeaturesSection } from "@/components/developer-certificate/FeaturesSection";
import { CtaSection } from "@/components/developer-certificate/CtaSection";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";
import { VpnSection } from "@/components/developer-certificate/VpnSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Pricing card data with different glow colors
  const pricingCards = [
    {
      title: "iPad",
      price: "399₽",
      iconBgColor: "bg-blue-500",
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
      iconBgColor: "bg-purple-500",
      gradientColors:
        "bg-gradient-to-br from-gray-100 to-purple-100 dark:from-gray-800 dark:to-purple-900/20",
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
      iconBgColor: "bg-green-500",
      gradientColors:
        "bg-gradient-to-br from-green-50 to-gray-100 dark:from-green-900/20 dark:to-gray-800",
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

      {/* Hero section as main CTA */}
      <HeroSection
        title="Сертификаты разработчика"
        subtitle="Расширенные возможности для вашего iPhone и iPad"
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        hideSparkles={true}
      />

      {/* Features section */}
      <FeaturesSection />

      {/* Pricing section */}
      <section id="pricing" className="py-20 animate-fade-in-up text-center" style={{ animationDelay: "0.35s" }}>
        <h2 className="section-title mb-4 font-montserrat">Тарифы сертификатов</h2>
        <p className="section-description mb-12 mx-auto">
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

      {/* VPN section */}
      <VpnSection />

      {/* CTA section with standard spacing */}
      <div className="py-12">
        <CtaSection />
      </div>

      {/* Back to top button */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={scrollToTop}
          className="bg-theme-blue/10 hover:bg-theme-blue/20 text-theme-blue w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
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
