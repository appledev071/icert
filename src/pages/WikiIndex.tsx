
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, FileText, HelpCircle, Smartphone, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";

const WikiIndex = () => {
  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Тарифы", href: "/#pricing" },
    { label: "VPN", href: "/#vpn" },
    { label: "О нас", href: "/#about" },
    { label: "Контакты", href: "/#contacts" },
  ];

  const wikiSections = [
    {
      title: "О сертификатах разработчика",
      description: "Информация о сертификатах разработчика Apple, их преимуществах и применении",
      icon: <FileText className="w-6 h-6 text-theme-blue" />,
      link: "/developer-certificate-info"
    },
    {
      title: "VPN и VLESS протокол",
      description: "Подробная информация о VPN сервисе и протоколе VLESS",
      icon: <Shield className="w-6 h-6 text-theme-blue" />,
      link: "/vpn-info"
    },
    {
      title: "Инструкция по установке",
      description: "Пошаговые инструкции по установке и настройке VPN на различных устройствах",
      icon: <Smartphone className="w-6 h-6 text-theme-blue" />,
      link: "/installation-guide"
    },
    {
      title: "Часто задаваемые вопросы",
      description: "Ответы на популярные вопросы о наших услугах",
      icon: <HelpCircle className="w-6 h-6 text-theme-blue" />,
      link: "/faq"
    },
  ];

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      {/* Wiki Navigation */}
      <WikiNavigation />

      <div className="mb-8 animate-fade-in-left">
        <Link to="/">
          <Button
            variant="outline"
            className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Назад на главную
          </Button>
        </Link>
      </div>

      {/* Wiki Index Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-10 h-10 text-theme-blue" />
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-black dark:text-white relative">
              Вики
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
            </h1>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Добро пожаловать в наш справочный центр. Здесь вы найдете полезную информацию о сертификатах разработчика,
            VPN-сервисе и ответы на часто задаваемые вопросы.
          </p>
        </div>
      </section>

      {/* Wiki Sections */}
      <section className="py-6 animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8" style={{animationDelay: '0.2s'}}>
        {wikiSections.map((section, index) => (
          <Link to={section.link} key={index} className="block">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 h-full hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold mb-4 text-black dark:text-white group-hover:text-theme-blue transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {section.description}
                  </p>
                  <div className="text-theme-blue flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Подробнее <ArrowLeft className="w-4 h-4 rotate-180 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </ThemedLandingWrapper>
  );
};

export default WikiIndex;
