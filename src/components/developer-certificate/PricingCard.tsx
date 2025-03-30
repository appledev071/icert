
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
    <div className="flex-1 glass-card group hover:translate-y-[-5px]">
      <div className={`absolute ${gradientColors} inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`w-12 h-12 ${iconBgColor} flex items-center justify-center rounded-lg`}
          >
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
          </div>
          <h3 className="text-[#EFF6FF] text-[32px] leading-[48px] font-spectral font-medium">{title}</h3>
        </div>
        <div className="text-[#EFF6FF] text-[64px] leading-[96px] mb-8 font-spectral">
          {price}
        </div>
        <div className="flex flex-col gap-[21px]">
          {features.map((feature, index) => (
            <div key={index} className="text-[#CBD5E1] text-xl leading-[30px]">
              • {feature.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
