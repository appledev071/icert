
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center relative overflow-hidden group hover:border-theme-blue/30 transition-all duration-500">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
        
        {/* Animated glow effect */}
        <div className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 duration-1000 bg-gradient-to-r from-transparent via-theme-blue/20 to-transparent -z-10 animate-shimmer pointer-events-none"></div>
        
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white relative inline-block">
          Готовы расширить возможности?
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Выберите подходящий тариф и начните использовать все преимущества
          сертификата разработчика уже сегодня
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black border-2 border-theme-blue hover:bg-gray-900 text-white 
                        dark:bg-theme-blue dark:text-white dark:border-white text-base 
                        py-2 px-8 rounded-full font-medium shadow-md hover:shadow-glow 
                        transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Выбрать тариф</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            </Button>
          </a>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/vpn-info">
                  <Button 
                    variant="outline" 
                    className="border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 
                              text-base py-2 px-8 rounded-full group hover:border-theme-blue/50 
                              transition-all duration-300 flex items-center relative overflow-hidden shine-effect"
                  >
                    <span className="relative z-10">Узнать больше</span>
                    <Info className="ml-2 h-4 w-4 text-gray-400 group-hover:text-theme-blue transition-colors duration-300 relative z-10" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Подробная информация о VPN и сертификатах</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};
