import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp, FileText, Monitor, HelpCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

const WikiIndex = () => {
  const isMobile = useIsMobile();

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "О нас", href: "/about" },
  ];

  const wikiCategories = [
    {
      title: "Сертификаты разработчика",
      icon: <FileText className="w-6 h-6 text-theme-blue" />,
      description: "Информация о сертификатах, их применении и особенностях",
      link: "/developer-certificate-info",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Инструкции по установке",
      icon: <Monitor className="w-6 h-6 text-theme-blue" />,
      description: "Пошаговые руководства по установке и настройке",
      link: "/installation-guide",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Часто задаваемые вопросы",
      icon: <HelpCircle className="w-6 h-6 text-theme-blue" />,
      description: "Ответы на популярные вопросы о наших услугах",
      link: "/faq",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "О нас",
      icon: <Info className="w-6 h-6 text-theme-blue" />,
      description: "Информация о нашей компании и миссии",
      link: "/about",
      color: "bg-blue-50 dark:bg-blue-900/20"
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
        <Link to="/" onClick={scrollToTop}>
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
            Wiki
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Добро пожаловать в наш информационный центр. Здесь вы найдете всю необходимую информацию о сертификатах разработчика 
            и других наших услугах.
          </p>
        </div>
      </section>

      {/* Wiki Categories */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {wikiCategories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link} 
              onClick={scrollToTop}
              className="block border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-theme-blue transition-all duration-300 hover:shadow-md group"
            >
              <div className={`p-6 ${category.color}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700 group-hover:border-theme-blue transition-all duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium font-montserrat text-black dark:text-white mb-2 group-hover:text-theme-blue transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Contact section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12 group hover:border-theme-blue/30 transition-all duration-500">
          <h2 className="text-2xl font-semibold font-montserrat text-black dark:text-white mb-4 relative inline-block">
            Не нашли, что искали?
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Если вы не нашли ответ на свой вопрос в нашей базе знаний, обратитесь к нашей
            технической поддержке. Мы с радостью поможем вам с любым вопросом.
          </p>
          
          <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-base 
                      py-2 px-8 rounded-full font-medium shadow-md
                      transition-all duration-300 group/btn relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Написать в поддержку</span>
            </Button>
          </a>
        </div>
        
        {/* Back to top and main page buttons */}
        <div className="flex flex-col items-center justify-center">
          <Link to="/" onClick={scrollToTop} className="mb-8">
            <Button
              variant="outline"
              className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Вернуться на главную
            </Button>
          </Link>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5 text-theme-blue" />
          </button>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default WikiIndex;
