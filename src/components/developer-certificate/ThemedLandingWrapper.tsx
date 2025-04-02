import React, { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ThemedLandingWrapperProps {
  children: React.ReactNode;
}

export const ThemedLandingWrapper: React.FC<ThemedLandingWrapperProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  // Определяем, нужно ли показывать сложные анимации
  const shouldReduceMotion = useMemo(() => {
    // Проверяем настройки пользователя на предпочтение уменьшенного движения
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);
  
  // Определяем скорость и интенсивность анимаций в зависимости от устройства
  const animationDuration = useMemo(() => {
    return shouldReduceMotion ? "0s" : (isMobile ? "10s" : "15s");
  }, [shouldReduceMotion, isMobile]);
  
  // Упрощаем визуальные эффекты для мобильных устройств
  const simplifiedEffects = isMobile || shouldReduceMotion;
  
  return (
    <div className="min-h-screen relative bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Элегантные фоновые элементы - оптимизированные для разных устройств */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Тонкая текстура для темного режима - облегченная версия для мобильных */}
        {!simplifiedEffects && (
          <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]"></div>
        )}
        
        {/* Градиентные фоны с пониженной интенсивностью для мобильных */}
        <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white"></div>
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-black via-blue-950/10 to-black"></div>
        
        {/* Верхние декоративные элементы - упрощены для мобильных */}
        <div className="block dark:hidden absolute top-0 left-0 right-0 h-[300px] md:h-[400px] opacity-30">
          <div 
            className={`absolute top-0 left-[5%] md:left-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-100 rounded-full blur-[60px] md:blur-[80px] ${!shouldReduceMotion ? 'animate-pulse-slow' : ''}`}
            style={{animationDuration}}
          ></div>
          {!simplifiedEffects && (
            <div 
              className={`absolute top-[100px] right-[5%] md:right-[15%] w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-200/50 rounded-full blur-[50px] md:blur-[70px] ${!shouldReduceMotion ? 'animate-pulse-slow' : ''}`}
              style={{animationDuration, animationDelay: "1s"}}
            ></div>
          )}
        </div>
        
        {/* Верхние декоративные элементы для темного режима - упрощены для мобильных */}
        <div className="hidden dark:block absolute top-0 left-0 right-0 h-[300px] md:h-[400px] opacity-40">
          <div 
            className={`absolute top-0 left-[5%] md:left-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-900/30 rounded-full blur-[60px] md:blur-[80px] ${!shouldReduceMotion ? 'animate-pulse-slow' : ''}`}
            style={{animationDuration}}
          ></div>
          {!simplifiedEffects && (
            <div 
              className={`absolute top-[100px] right-[5%] md:right-[15%] w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-800/20 rounded-full blur-[50px] md:blur-[70px] ${!shouldReduceMotion ? 'animate-pulse-slow' : ''}`}
              style={{animationDuration, animationDelay: "1s"}}
            ></div>
          )}
        </div>
        
        {/* Тонкая сетка - оптимизирована */}
        {!simplifiedEffects && (
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzIwNDA4MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAiIHN0cm9rZT0iIzIwNDA4MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMjA0MDgwIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjxwYXRoIGQ9Ik0gMCAwIEwgMCA2MCIgc3Ryb2tlPSIjMjA0MDgwIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 md:opacity-30 dark:opacity-5 dark:md:opacity-10"></div>
        )}
      </div>

      {/* Content container - с плавными переходами и оптимизированным центрированием */}
      <div className="relative w-full mx-auto transition-all duration-300 ease-in-out"> 
        {children}
      </div>
    </div>
  );
};
