
import React from "react";
import { Button } from "@/components/ui/button";

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
    <section className="pb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
          Расширенные возможности <br/>
          <span className="text-theme-blue">для ваших устройств</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          Устанавливайте любые приложения, тестируйте бета-версии и
          используйте эксклюзивные функции на вашем iPhone и iPad
        </p>
        <Button className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base py-3 px-8 rounded-full">
          Начать сейчас
        </Button>
      </div>
    </section>
  );
};
