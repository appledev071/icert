
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, ShieldCheck, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";

const AboutUs = () => {
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

      {/* About Us Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            О нас
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Мы — молодая и амбициозная команда энтузиастов, помогающая людям раскрыть 
            полный потенциал своих устройств и получить доступ к расширенным возможностям.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-10 running-border">
          <div className="flex items-start gap-4 mb-10">
            <div className="mt-1 w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-theme-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
                Наша миссия
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Мы стремимся сделать технологии более доступными и функциональными для каждого пользователя. 
                Наша цель — помочь вам получить максимум от ваших устройств, открывая новые возможности 
                и облегчая доступ к глобальному контенту.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Мы верим, что ваши устройства должны работать так, как вы этого хотите, без ограничений и 
                барьеров. С нашими решениями вы получаете полный контроль над своими гаджетами.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-theme-blue group transition-all duration-500">
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-3">Надежность</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Мы обеспечиваем стабильную работу наших сервисов и предоставляем только проверенные решения.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-theme-blue group transition-all duration-500">
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-3">Оперативность</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Мы ценим ваше время и обрабатываем все запросы максимально быстро, обеспечивая моментальную поддержку.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-theme-blue group transition-all duration-500">
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-3">Качество</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Мы гарантируем высокое качество всех предоставляемых услуг и заботимся о вашем комфорте.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Если у вас возникли вопросы или вам нужна помощь с нашими услугами, не стесняйтесь обращаться к нашему менеджеру. 
              Мы всегда рады помочь!
            </p>
            <div className="flex justify-center">
              <a href="https://t.me/icertstoremanager" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-black dark:bg-theme-blue dark:text-white text-base 
                          py-2 px-8 rounded-full font-medium shadow-md
                          transition-all duration-300 group relative overflow-hidden shine-effect"
                >
                  <span className="relative z-10">@icertstoremanager</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default AboutUs;
