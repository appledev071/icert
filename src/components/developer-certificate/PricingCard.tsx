
import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: Feature[];
  iconBgColor: string;
  gradientColors: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  iconBgColor,
  gradientColors,
}) => {
  return (
    <div className="flex-1 p-6 border border-gray-200 dark:border-gray-800 rounded-lg group 
                  hover:border-theme-blue transition-all duration-500 glow-card card-lift
                  relative overflow-hidden running-border">
      {/* Shine effect on hover */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 duration-700 bg-gradient-to-r from-transparent via-theme-blue/5 to-transparent -z-10 animate-shimmer"></div>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-theme-blue/5 to-transparent rounded-lg blur-xl"></div>
      </div>
      
      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <h3 className="text-black dark:text-white text-xl leading-tight font-medium font-playfair group-hover:text-theme-blue transition-colors duration-300">{title}</h3>
          <div className={`w-8 h-8 ${iconBgColor} flex items-center justify-center rounded-full shadow-sm group-hover:shadow-glow-sm transition-all duration-300 animate-pulse-slow`}>
            <Check className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className={cn(
          "text-black dark:text-white text-4xl mb-8 font-bold",
          "group-hover:scale-105 transition-transform duration-300 origin-left group-hover:glow-text"
        )}>
          {price}
        </div>
        
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 group/feature"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-all duration-300 group-hover:animate-pulse-slow" style={{ animationDelay: `${index * 0.5}s` }}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-[15px] leading-tight group-hover/feature:text-black dark:group-hover/feature:text-white transition-colors duration-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        {/* Button that appears on hover */}
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2 text-sm text-theme-blue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 shine-effect relative overflow-hidden">
            <span className="relative z-10">Выбрать тариф</span> <ArrowRight className="w-4 h-4 relative z-10" />
          </a>
        </div>
      </div>
    </div>
  );
};
