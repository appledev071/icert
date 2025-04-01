import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  // Определяем, нужно ли показывать сложные анимации
  const shouldReduceMotion = React.useMemo(() => {
    // Проверяем настройки пользователя на предпочтение уменьшенного движения
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);
  
  // Явно определяем, что мы находимся на ПК
  const isDesktop = !isMobile;
  
  return (
    <div className="min-h-screen relative bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Фоновые элементы убраны, оставлен только простой белый/черный фон */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Содержимое удалено, оставлен только простой фон */}
      </div>

      {/* Content container */}
      <div className="relative p-8 max-md:px-6 max-sm:px-4 max-w-6xl mx-auto z-10"> 
        {children}
      </div>
    </div>
  );
};
