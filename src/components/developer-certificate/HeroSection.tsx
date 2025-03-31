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
  
  return (
    <section 
      className="min-h-[calc(100vh-100px)] relative flex flex-col justify-center py-[100px]" 
    >
      {/* Контейнер для фоновых эффектов на всю ширину */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        {/* Background effects */}
        {/* Верхний правый угол */}
        <div className="absolute -top-20 -right-[10vw] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-radial from-blue-500/50 via-blue-400/30 to-transparent dark:from-blue-400/30 dark:via-blue-500/20 rounded-full blur-3xl -z-10"></div>
        
        {/* Нижний левый угол */}
        <div className="absolute -bottom-20 -left-[15vw] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-gradient-radial from-purple-500/40 via-fuchsia-500/30 to-transparent dark:from-purple-400/20 dark:via-fuchsia-400/20 rounded-full blur-[100px] -z-10"></div>
        
        {/* Центр справа */}
        <div className="absolute top-1/2 -right-[20vw] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-gradient-radial from-teal-500/40 via-emerald-500/30 to-transparent dark:from-teal-400/20 dark:via-emerald-400/20 rounded-full blur-[120px] -z-10"></div>
        
        {/* Верхний левый угол */}
        <div className="absolute -top-[10vw] -left-[10vw] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-radial from-indigo-500/40 via-violet-500/30 to-transparent dark:from-indigo-400/25 dark:via-violet-400/20 rounded-full blur-[90px] -z-10"></div>
        
        {/* Нижний правый угол */}
        <div className="absolute -bottom-[15vw] -right-[10vw] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-gradient-radial from-sky-500/40 via-blue-500/30 to-transparent dark:from-blue-400/20 dark:via-blue-400/20 rounded-full blur-[130px] -z-10"></div>
        
        {/* Центральная область */}
        <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-gradient-radial from-cyan-500/40 via-blue-500/30 to-transparent dark:from-cyan-400/25 dark:via-blue-400/20 rounded-full blur-[80px] -z-10"></div>
        
        {/* Дополнительное свечение для обеих тем */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-gradient-radial from-blue-500/40 via-indigo-500/30 to-transparent 
                      rounded-full blur-[150px] -z-10 dark:from-blue-400/30 dark:via-blue-500/10 dark:to-transparent"></div>

        {/* Новые декоративные свечения для светлой темы */}
        <div className="absolute -top-[5vw] left-1/4 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-gradient-radial from-rose-500/30 via-pink-500/20 to-transparent 
                      rounded-full blur-[100px] -z-10 dark:opacity-0"></div>
        
        <div className="absolute bottom-1/4 -right-[5vw] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] bg-gradient-radial from-amber-500/30 via-orange-500/20 to-transparent 
                      rounded-full blur-[90px] -z-10 dark:opacity-0"></div>
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
            <Button className={`bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white ${isMobile ? 'text-sm py-5 px-6' : 'text-base py-6 px-8'} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}>
              Начать сейчас
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
