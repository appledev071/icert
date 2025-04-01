import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoUrl: string;
  logoAlt: string;
  hideSparkles?: boolean;
}

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
      delayChildren: 0.3,   // Initial delay before the first child animates
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
  visible: { 
    opacity: 1, 
    y: 0,       // Animate to original position
    transition: { duration: 0.5 } 
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  logoUrl,
  logoAlt,
  hideSparkles = false,
}) => {
  const isMobile = useIsMobile();
  // Явно определяем, что мы находимся на ПК
  const isDesktop = !isMobile;
  
  return (
    <section 
      className="min-h-[calc(100vh-100px)] relative flex flex-col justify-center py-[100px]" 
    >
      {/* Фоновые эффекты удалены, оставлен только простой фон */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        {/* Все эффекты удалены */}
      </div>

      {/* Контейнер для контента */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-8">
          <h1 className={`${isMobile ? 'text-4xl leading-tight' : 'text-5xl md:text-6xl leading-tight'} font-bold text-black dark:text-white mb-6 text-center`}>
          <span className="text-theme-blue relative inline-block">
            Расширенные возможности <br/>
          </span>
          <span className="block">для ваших устройств</span>
        </h1>
          
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-center`}>
          Устанавливайте любые приложения, тестируйте бета-версии и
          используйте эксклюзивные функции на вашем iPhone и iPad
        </p>
          
          <div className="flex justify-center">
          <a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer">
            <Button className={`bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white ${isMobile ? 'text-sm py-5 px-6' : 'text-base py-6 px-8'} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}>
              Начать сейчас
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};
