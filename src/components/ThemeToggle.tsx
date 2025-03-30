
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || 
                 (!localStorage.getItem("theme") && 
                  window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    isDark ? document.documentElement.classList.add("dark") : 
            document.documentElement.classList.remove("dark");
  }, []);

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

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 bg-white dark:bg-black border-gray-200 dark:border-gray-800 hover:border-theme-green dark:hover:border-theme-green transition-all duration-300"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-theme-green" />
      ) : (
        <Moon className="h-5 w-5 text-black" />
      )}
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
};
