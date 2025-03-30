
import React from "react";
import { CheckCircle } from "lucide-react";

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
      <h2 className="section-title mb-4">Преимущества</h2>
      <p className="section-description mb-12">
        Почему тысячи пользователей выбирают наши сертификаты
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-duration-300"
            style={{ animationDelay: `${(index + 1) * 0.15}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle className="h-6 w-6 text-theme-blue" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
