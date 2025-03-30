
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Простая установка",
      description: "Удобный процесс активации сертификата без лишних действий",
    },
    {
      title: "Надежная работа",
      description: "Стабильная работа приложений без сбоев и перебоев",
    },
    {
      title: "Быстрая активация",
      description: "Получите доступ к возможностям в течение нескольких минут",
    },
    {
      title: "Полная поддержка",
      description: "Помощь на всех этапах использования сертификата",
    },
  ];

  return (
    <section className="py-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
      <h2 className="section-title mb-4 relative inline-block">
        Преимущества
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-theme-blue transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      </h2>
      <p className="section-description mb-12">
        Почему тысячи пользователей выбирают наши сертификаты
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 
                      hover:border-theme-blue transition-all duration-500 group
                      hover:shadow-glow-sm border-animated"
            style={{ animationDelay: `${(index + 1) * 0.15}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-theme-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-2 group-hover:text-theme-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm text-theme-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-1">Подробнее</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
