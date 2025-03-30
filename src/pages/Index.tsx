import React from "react";
import {
  CertificateHeader,
  PricingCard,
  CertificateFooter,
  ThemedLandingWrapper,
} from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { HeroSection } from "@/components/developer-certificate/HeroSection";
import { FeaturesSection } from "@/components/developer-certificate/FeaturesSection";
import { VpnSection } from "@/components/developer-certificate/VpnSection";
import { CtaSection } from "@/components/developer-certificate/CtaSection";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";

const Index = () => {
  // Pricing card data
  const pricingCards = [
    {
      title: "iPad",
      price: "399₽",
      iconBgColor: "bg-theme-pink",
      gradientColors:
        "bg-[linear-gradient(135deg,rgba(69,214,202,0.10)_70.71%,rgba(241,91,181,0.10)_0%)]",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Неограниченное количество приложений" },
      ],
    },
    {
      title: "Обычный",
      price: "999₽",
      iconBgColor: "bg-theme-teal",
      gradientColors:
        "bg-[linear-gradient(135deg,rgba(130,71,229,0.10)_70.71%,rgba(69,214,202,0.10)_0%)]",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Базовая поддержка" },
      ],
    },
    {
      title: "Моментальный",
      price: "1499₽",
      iconBgColor: "bg-theme-purple",
      gradientColors:
        "bg-[linear-gradient(135deg,rgba(241,91,181,0.10)_70.71%,rgba(130,71,229,0.10)_0%)]",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 30 минут" },
        { text: "Приоритетная поддержка" },
      ],
    },
  ];

  const menuItems = [
    { label: "Главная", href: "#" },
    { label: "Тарифы", href: "#pricing" },
    { label: "VPN", href: "#vpn" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

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
      />

      {/* Divider */}
      <div className="w-full h-0.5 bg-[rgba(255,255,255,0.10)] my-8" />

      {/* Features section */}
      <FeaturesSection />

      {/* Pricing section */}
      <section id="pricing" className="py-20 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
        <h2 className="section-title">Тарифы</h2>
        <p className="section-description">
          Выберите оптимальный вариант для ваших потребностей
        </p>
        
        <div className="flex gap-[34px] max-md:flex-col max-md:gap-6">
          {pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              price={card.price}
              iconBgColor={card.iconBgColor}
              gradientColors={card.gradientColors}
              features={card.features}
            />
          ))}
        </div>
      </section>

      {/* VPN section */}
      <div id="vpn">
        <VpnSection />
      </div>

      {/* CTA section */}
      <CtaSection />

      {/* Footer section */}
      <div id="contacts">
        <LandingFooter
          contactMessage="За дополнительными услугами в личные сообщения"
          contactHandle="@icertstore"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default Index;
