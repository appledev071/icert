
import React from "react";

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
    <div className="flex-1 glass-card group hover:translate-y-[-3px]">
      <div className={`absolute ${gradientColors} inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-10 h-10 ${iconBgColor} flex items-center justify-center rounded-md`}
          >
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
          </div>
          <h3 className="text-[#EFF6FF] text-xl leading-tight font-title">{title}</h3>
        </div>
        <div className="text-[#EFF6FF] text-4xl mb-6 font-title">
          {price}
        </div>
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="text-[#CBD5E1] text-[15px] leading-tight">
              • {feature.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
