
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
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
    <div className="flex items-center gap-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 group hover:border-gray-300 dark:hover:border-gray-700">
      <Sun className="h-4 w-4 text-yellow-500 dark:text-gray-400 transition-transform duration-300 group-hover:rotate-12" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-theme-blue data-[state=unchecked]:bg-gray-200"
      />
      <Moon className="h-4 w-4 text-gray-400 dark:text-theme-blue transition-transform duration-300 group-hover:-rotate-12" />
      <span className="sr-only">Переключить тему</span>
    </div>
  );
};
