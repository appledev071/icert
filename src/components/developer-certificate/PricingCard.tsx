
import React from "react";
import { Check } from "lucide-react";

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
    <div className="flex-1 p-6 border border-gray-200 dark:border-gray-800 rounded-lg group hover:border-theme-green dark:hover:border-theme-green transition-all duration-300">
      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <h3 className="text-black dark:text-white text-xl leading-tight font-medium">{title}</h3>
          <div className={`w-8 h-8 ${iconBgColor} flex items-center justify-center rounded-full`}>
            <Check className="w-5 h-5 text-black" />
          </div>
        </div>
        <div className="text-black dark:text-white text-4xl mb-8 font-bold">
          {price}
        </div>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-green flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-black" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-[15px] leading-tight">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
