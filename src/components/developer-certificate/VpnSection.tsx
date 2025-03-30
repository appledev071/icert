
import React from "react";
import { Globe, Shield, Zap } from "lucide-react";

export const VpnSection: React.FC = () => {
  const vpnFeatures = [
    {
      title: "Высокая скорость",
      description: "До 1 Гбит/с для стриминга и загрузки без задержек",
      icon: <Zap className="w-8 h-8 text-white" />,
      bgColor: "bg-theme-teal",
    },
    {
      title: "Глобальное покрытие",
      description: "Серверы в более чем 30 странах для доступа к любому контенту",
      icon: <Globe className="w-8 h-8 text-white" />,
      bgColor: "bg-theme-pink",
    },
    {
      title: "Максимальная защита",
      description: "Шифрование военного уровня и политика отсутствия логов",
      icon: <Shield className="w-8 h-8 text-white" />,
      bgColor: "bg-theme-purple",
    },
  ];

  return (
    <section className="py-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <h2 className="section-title">VPN-сервис</h2>
      <p className="section-description">
        Защитите свою конфиденциальность и получите доступ к глобальному контенту
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vpnFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card"
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            <div className={`feature-icon ${feature.bgColor}`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-montserrat text-theme-light-purple dark:text-theme-light-purple mb-4">
              {feature.title}
            </h3>
            <p className="text-theme-light-muted dark:text-theme-light-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-card">
        <h3 className="text-2xl font-montserrat text-theme-light-purple dark:text-theme-light-purple mb-4">
          Почему наш VPN-сервис особенный
        </h3>
        <ul className="text-theme-light-muted dark:text-theme-light-muted space-y-4">
          <li className="flex items-start">
            <span className="text-theme-teal mr-2">•</span>
            <span>Мгновенное подключение без лагов и потери скорости</span>
          </li>
          <li className="flex items-start">
            <span className="text-theme-pink mr-2">•</span>
            <span>Поддержка всех устройств: iOS, macOS, Android, Windows</span>
          </li>
          <li className="flex items-start">
            <span className="text-theme-purple mr-2">•</span>
            <span>Безлимитный трафик и отсутствие ограничений по скорости</span>
          </li>
          <li className="flex items-start">
            <span className="text-theme-teal mr-2">•</span>
            <span>Возможность обхода блокировок и географических ограничений</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
