import React, { useEffect, useMemo } from "react";
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
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

// Reusable animation variants 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger for pricing cards
    },
  },
};

// Используем облегченные варианты анимаций для мобильных устройств
const desktopItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 } 
  },
};

const Index = () => {
  const isMobile = useIsMobile();
  
  // Используем соответствующие варианты анимаций в зависимости от устройства
  const itemVariants = isMobile ? mobileItemVariants : desktopItemVariants;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Мемоизируем данные карточек, чтобы избежать повторных вычислений
  const pricingCards = useMemo(() => [
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
    {
      title: "Парный обычный",
      price: "1799₽",
      iconBgColor: "bg-indigo-500",
      gradientColors:
        "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Два устройства" },
        { text: "Экономия 199₽" },
      ],
      glowColor: "rgba(99, 102, 241, 0.5)" // Indigo glow
    },
    {
      title: "Парный моментальный",
      price: "2799₽",
      iconBgColor: "bg-amber-500",
      gradientColors:
        "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 30 минут" },
        { text: "Два устройства" },
        { text: "Экономия 199₽" },
      ],
      glowColor: "rgba(245, 158, 11, 0.5)" // Amber glow
    },
    {
      title: "Супермоментальный",
      price: "1999₽",
      iconBgColor: "bg-rose-500",
      gradientColors:
        "bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 15 минут" },
        { text: "Одно устройство" },
        { text: "Для отозванных сертификатов" },
      ],
      glowColor: "rgba(244, 63, 94, 0.5)" // Rose glow
    },
  ], []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
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
        hideSparkles={isMobile}
      />

      {/* Features section */}
      <FeaturesSection />

      {/* Pricing section */}
      <section id="pricing" className="py-20 text-center">
        <h2 className="section-title mb-4 font-montserrat">Тарифы сертификатов</h2>
        <p className="section-description mb-12 mx-auto">
          Выберите оптимальный вариант сертификата разработчика для ваших потребностей
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              variants={itemVariants}
              title={card.title}
              price={card.price}
              iconBgColor={card.iconBgColor}
              gradientColors={card.gradientColors}
              features={card.features}
              glowColor={card.glowColor}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA section with standard spacing */}
      <div className="py-12">
        <CtaSection />
      </div>

      {/* Back to top button */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={scrollToTop}
          className="bg-theme-blue/10 hover:bg-theme-blue/20 text-theme-blue w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Прокрутить наверх"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      {/* Footer section */}
      <div id="contacts">
        <LandingFooter
          contactHandle="icertmanager"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default Index;
