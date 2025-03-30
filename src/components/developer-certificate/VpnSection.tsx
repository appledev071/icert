
import React from "react";
import { Globe, Shield, Zap, Check } from "lucide-react";

export const VpnSection: React.FC = () => {
  const vpnFeatures = [
    {
      title: "Высокая скорость",
      description: "До 1 Гбит/с для стриминга и загрузки без задержек",
      icon: <Zap className="w-5 h-5 text-black" />,
      bgColor: "bg-theme-green",
    },
    {
      title: "Глобальное покрытие",
      description: "Серверы в более чем 30 странах для доступа к любому контенту",
      icon: <Globe className="w-5 h-5 text-black" />,
      bgColor: "bg-theme-green",
    },
    {
      title: "Максимальная защита",
      description: "Шифрование военного уровня и политика отсутствия логов",
      icon: <Shield className="w-5 h-5 text-black" />,
      bgColor: "bg-theme-green",
    },
  ];

  return (
    <section className="py-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <h2 className="section-title mb-4">VPN-сервис</h2>
      <p className="section-description mb-12">
        Защитите свою конфиденциальность и получите доступ к глобальному контенту
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vpnFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-green transition-duration-300"
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            <div className={`w-10 h-10 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-medium text-black dark:text-white mb-4">
          Почему наш VPN-сервис особенный
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-theme-green flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="w-3 h-3 text-black" />
            </div>
            <span>Мгновенное подключение без лагов и потери скорости</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-theme-green flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="w-3 h-3 text-black" />
            </div>
            <span>Поддержка всех устройств: iOS, macOS, Android, Windows</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-theme-green flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="w-3 h-3 text-black" />
            </div>
            <span>Безлимитный трафик и отсутствие ограничений по скорости</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-theme-green flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="w-3 h-3 text-black" />
            </div>
            <span>Возможность обхода блокировок и географических ограничений</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
