
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoUrl: string;
  logoAlt: string;
  hideSparkles?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  logoUrl,
  logoAlt,
  hideSparkles = false,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      className="min-h-[calc(100vh-100px)] flex items-center justify-start animate-fade-in-up relative" 
      style={{ animationDelay: "0.2s" }}
    >
      {/* Background effect */}
      <div className="absolute -top-10 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Notion-style decorative elements (visible only in light mode) */}
      <div className="absolute -right-20 top-20 w-40 h-40 bg-gray-100 rounded-full opacity-20 dark:opacity-0 transform rotate-12"></div>
      <div className="absolute left-1/4 bottom-20 w-24 h-24 border-4 border-gray-200 dark:border-transparent rounded-full opacity-30 dark:opacity-0"></div>
      <div className="absolute left-10 top-10 w-32 h-16 bg-yellow-50 dark:bg-transparent rounded-xl opacity-40 dark:opacity-0"></div>
      
      {/* Hand-drawn underline elements */}
      <div className="absolute right-1/4 bottom-1/3 w-44 h-2 bg-gray-200 dark:bg-transparent opacity-50 dark:opacity-0 transform -rotate-3"></div>
      <div className="absolute left-1/3 top-1/4 w-36 h-2 bg-blue-100 dark:bg-transparent opacity-40 dark:opacity-0 transform rotate-6"></div>
      
      <div className="w-full text-left">
        <h1 className={`${isMobile ? 'text-4xl leading-tight' : 'text-5xl md:text-6xl leading-tight'} font-bold text-black dark:text-white mb-6 text-left`}>
          <span className="text-theme-blue relative inline-block">
            Расширенные возможности <br/>
          </span>
          <span className="block">для ваших устройств</span>
        </h1>
        <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-700 dark:text-gray-300 mb-10 max-w-2xl text-left`}>
          Устанавливайте любые приложения, тестируйте бета-версии и
          используйте эксклюзивные функции на вашем iPhone и iPad
        </p>
        <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
          <Button className={`bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white ${isMobile ? 'text-sm py-5 px-6' : 'text-base py-6 px-8'} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}>
            Начать сейчас
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </section>
  );
};
