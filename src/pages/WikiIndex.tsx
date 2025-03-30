
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, HelpCircle, Shield, Smartphone, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";

const WikiIndex = () => {
  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "VPN", href: "/vpn-pricing" },
    { label: "О нас", href: "/about" },
  ];

  const wikiCategories = [
    {
      title: "О сертификатах разработчика",
      description: "Подробная информация о сертификатах разработчика Apple, их возможностях и преимуществах",
      icon: <FileText className="w-6 h-6 text-theme-blue" />,
      link: "/developer-certificate-info"
    },
    {
      title: "VPN-сервис",
      description: "Информация о нашем VPN-сервисе, его особенностях и преимуществах",
      icon: <Shield className="w-6 h-6 text-theme-blue" />,
      link: "/vpn-info"
    },
    {
      title: "Инструкция по установке",
      description: "Пошаговые руководства по установке и настройке наших продуктов на различных устройствах",
      icon: <Smartphone className="w-6 h-6 text-theme-blue" />,
      link: "/installation-guide"
    },
    {
      title: "Часто задаваемые вопросы",
      description: "Ответы на самые популярные вопросы о наших услугах",
      icon: <HelpCircle className="w-6 h-6 text-theme-blue" />,
      link: "/faq"
    },
    {
      title: "О нас",
      description: "Информация о нашей компании, миссии и ценностях",
      icon: <Info className="w-6 h-6 text-theme-blue" />,
      link: "/about"
    }
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
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            База знаний
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Добро пожаловать в нашу базу знаний. Здесь вы найдете всю необходимую информацию 
            о наших продуктах и услугах, инструкции по установке и ответы на часто задаваемые вопросы.
          </p>
        </div>
      </section>

      {/* Wiki Categories */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wikiCategories.map((category, index) => (
            <Link key={index} to={category.link}>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm min-h-[180px] flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-black dark:text-white group-hover:text-theme-blue transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 ml-16">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center relative overflow-hidden group hover:border-theme-blue/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          
          <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
            Нужна дополнительная помощь?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Если вы не нашли ответ на свой вопрос в нашей базе знаний, свяжитесь с нашим менеджером, 
            и мы с радостью поможем вам решить любую проблему.
          </p>
          
          <a href="https://t.me/icertstoremanager" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-white text-base 
                        py-2 px-8 rounded-full font-medium shadow-md
                        transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Связаться с менеджером</span>
            </Button>
          </a>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default WikiIndex;
