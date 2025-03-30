
import React from "react";
import { CertificateHeader } from "./CertificateHeader";
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
    <section className="pb-12 animate-fade-in-up flex flex-col md:flex-row md:items-center md:justify-between" style={{ animationDelay: "0.2s" }}>
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
          Расширенные возможности <br/>
          <span className="text-theme-green">для ваших устройств</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md">
          Устанавливайте любые приложения, тестируйте бета-версии и
          используйте эксклюзивные функции на вашем iPhone и iPad
        </p>
        <Button className="bg-black hover:bg-gray-900 text-white dark:bg-theme-green dark:text-black text-base py-3 px-8 rounded-full">
          Начать сейчас
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <img 
            src="/lovable-uploads/590d7b03-b886-4449-95bc-aeecd65e03a2.png" 
            alt="Hero illustration" 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};
