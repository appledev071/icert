import React, { useEffect, useState, memo } from "react";
import { Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Используем memo для предотвращения ненужных перерендеров
const ThemeToggle: React.FC = memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Синхронизация с системными настройками и localStorage
  useEffect(() => {
    // Предотвращаем гидрацию в SSR
    setMounted(true);
    
    const isDark = localStorage.getItem("theme") === "dark" || 
                 (!localStorage.getItem("theme") && 
                  window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    isDark ? document.documentElement.classList.add("dark") : 
            document.documentElement.classList.remove("dark");
            
    // Слушаем изменения системной темы
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
        e.matches ? document.documentElement.classList.add("dark") :
                    document.documentElement.classList.remove("dark");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toast({
        title: "Тёмная тема активирована",
        description: "Дизайн сайта переключен в тёмный режим",
        duration: 2000,
      });
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      toast({
        title: "Светлая тема активирована",
        description: "Дизайн сайта переключен в светлый режим",
        duration: 2000,
      });
    }
  };

  // Предотвращаем рендеринг во время SSR для избежания несоответствий
  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-transparent"></div>;
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className={`
        flex items-center justify-center w-9 h-9 rounded-full 
        transition-all duration-300 ease-out
        ${isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-blue-50 hover:bg-blue-100'
        }
        shadow-sm hover:shadow-md
      `}
      aria-label={isDarkMode ? "Включить светлую тему" : "Включить тёмную тему"}
      title={isDarkMode ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDarkMode ? 'dark' : 'light'}
          initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
          transition={{ 
            duration: isMobile ? 0.2 : 0.3, 
            ease: [0.19, 1.0, 0.22, 1.0] 
          }}
        >
          {isDarkMode ? (
            <Moon className="h-5 w-5 text-blue-400" />
          ) : (
            <Sun className="h-5 w-5 text-amber-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
});

// Добавляем display name для инструментов разработки
ThemeToggle.displayName = 'ThemeToggle';

export { ThemeToggle };
