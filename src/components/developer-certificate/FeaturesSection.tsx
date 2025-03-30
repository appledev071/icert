
import React from "react";

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
      <h2 className="section-title">Преимущества</h2>
      <p className="section-description">
        Почему тысячи пользователей выбирают наши сертификаты
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass-card"
            style={{ animationDelay: `${(index + 1) * 0.15}s` }}
          >
            <h3 className="text-2xl font-montserrat text-theme-light-purple dark:text-theme-light-purple mb-4">
              {feature.title}
            </h3>
            <p className="text-theme-light-muted dark:text-theme-light-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
