import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Apple, ShieldCheck } from "lucide-react";
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

// Анимированные частицы для фона
const FloatingParticle = ({ className = "", delay = 0, duration = 15 }) => (
  <motion.div
    className={`absolute rounded-full opacity-70 ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.7, 0.5],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
    }}
  />
);

// Интерактивный пузырёк, который двигается за мышкой
const InteractiveBubble = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {isVisible && (
        <motion.div
          className="absolute w-40 h-40 bg-theme-blue/5 dark:bg-theme-blue/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 80,
            y: mousePosition.y - 80,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5
          }}
        />
      )}
    </div>
  );
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
      className="min-h-[calc(100vh-100px)] relative flex flex-col justify-center py-[100px] overflow-hidden" 
    >
      {/* Градиентный фон с анимацией */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-black"></div>
        
        {/* Анимированный градиент */}
        <motion.div 
          className="absolute w-full h-full opacity-20 dark:opacity-30"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 30%, rgba(0, 87, 255, 0.15), transparent 40%)',
              'radial-gradient(circle at 40% 40%, rgba(0, 87, 255, 0.15), transparent 50%)',
              'radial-gradient(circle at 60% 60%, rgba(0, 87, 255, 0.15), transparent 60%)',
              'radial-gradient(circle at 30% 70%, rgba(0, 87, 255, 0.15), transparent 40%)',
              'radial-gradient(circle at 20% 30%, rgba(0, 87, 255, 0.15), transparent 40%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Интерактивный пузырёк, только для десктопа */}
        {!isMobile && <InteractiveBubble />}
        
        {/* Добавляем плавающие элементы только для десктопа */}
        {!isMobile && (
          <>
            <FloatingParticle 
              className="w-24 h-24 bg-theme-blue/10 blur-xl top-20 left-[10%]" 
              delay={0} 
              duration={18} 
            />
            <FloatingParticle 
              className="w-32 h-32 bg-purple-500/10 blur-xl bottom-20 right-[15%]" 
              delay={2} 
              duration={15} 
            />
            <FloatingParticle 
              className="w-16 h-16 bg-blue-300/15 blur-lg top-[40%] right-[25%]" 
              delay={1} 
              duration={12} 
            />
            <FloatingParticle 
              className="w-20 h-20 bg-indigo-400/10 blur-xl bottom-[30%] left-[20%]" 
              delay={3} 
              duration={20} 
            />
          </>
        )}
      </div>

      {/* Контейнер для контента */}
      <div className="relative container px-4 md:px-6 mx-auto flex-1 flex items-center justify-center z-10">
        <motion.div 
          className="w-full max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating Apple Logo - справа */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-10 -right-5 md:-right-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center p-4 pr-6 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="mr-3 bg-black dark:bg-white rounded-full p-2 flex">
                  <Apple className="h-4 w-4 text-white dark:text-black" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Совместимо с</span>
                  <span className="font-medium text-sm">iOS и iPadOS</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Floating Security Badge - слева */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="absolute top-20 -left-5 md:-left-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex items-center p-4 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="mr-3 bg-theme-blue rounded-full p-2 flex">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Абсолютная</span>
                  <span className="font-medium text-sm">Безопасность</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          <motion.div 
            variants={itemVariants} 
            className="mb-2 relative"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-theme-blue/10 text-theme-blue rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Сертификаты разработчика
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className={`${isMobile ? 'text-4xl leading-tight' : 'text-5xl md:text-6xl leading-tight'} font-bold mb-6`}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-theme-blue via-purple-500 to-blue-600 dark:from-blue-400 dark:via-theme-blue dark:to-indigo-400"
              animate={{
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              Расширенные возможности
            </motion.span>
            <span className="block mt-2 text-black dark:text-white">для ваших устройств</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto`}
          >
            Устанавливайте любые приложения, тестируйте бета-версии и
            используйте эксклюзивные функции на вашем iPhone и iPad
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex justify-center">
            <a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className={`bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white ${isMobile ? 'text-sm py-5 px-6' : 'text-base py-6 px-8'} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  <Sparkles className="mr-2 h-4 w-4 text-blue-200" />
                  Начать сейчас
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-sm text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 87, 255, 0.1)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            Безопасно и надежно
          </motion.div>
          
          {/* Декоративные элементы снизу */}
          {!isMobile && (
            <motion.div 
              variants={itemVariants}
              className="mt-16 flex justify-center gap-4 opacity-80"
            >
              <div className="flex items-center gap-1.5">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-theme-blue"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-purple-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-indigo-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
