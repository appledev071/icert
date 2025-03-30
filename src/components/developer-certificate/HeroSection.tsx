
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoUrl: string;
  logoAlt: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  logoUrl,
  logoAlt,
}) => {
  return (
    <section className="pb-12 animate-fade-in-up relative" style={{ animationDelay: "0.2s" }}>
      {/* Background effect */}
      <div className="absolute -top-10 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight relative">
          Расширенные возможности <br/>
          <span className="text-theme-blue relative inline-block">
            для ваших устройств
            <span className="absolute -top-1 -right-6">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse-slow" />
            </span>
          </span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
          Устанавливайте любые приложения, тестируйте бета-версии и
          используйте эксклюзивные функции на вашем iPhone и iPad
        </p>
        <Button className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
          Начать сейчас
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};
