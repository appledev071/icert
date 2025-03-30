
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
      
      <div className="w-full text-left">
        <h1 className={`${isMobile ? 'text-4xl leading-tight' : 'text-5xl md:text-6xl leading-tight'} font-bold text-black dark:text-white mb-6 text-left`}>
          <span className="text-theme-blue relative inline-block">
            Расширенные возможности <br/>
          </span>
          для ваших устройств
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
