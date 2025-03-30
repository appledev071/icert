
import React from "react";
import { Globe, Shield, Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VpnSection: React.FC = () => {
  const vpnFeatures = [
    {
      title: "Высокая скорость",
      description: "До 1 Гбит/с для стриминга и загрузки без задержек",
      icon: <Zap className="w-5 h-5 text-white" />,
      bgColor: "bg-theme-blue",
    },
    {
      title: "Глобальное покрытие",
      description: "Серверы в более чем 30 странах для доступа к любому контенту",
      icon: <Globe className="w-5 h-5 text-white" />,
      bgColor: "bg-theme-blue",
    },
    {
      title: "Максимальная защита",
      description: "Шифрование военного уровня и политика отсутствия логов",
      icon: <Shield className="w-5 h-5 text-white" />,
      bgColor: "bg-theme-blue",
    },
  ];

  return (
    <section className="py-20 animate-fade-in-up relative" style={{ animationDelay: "0.4s" }}>
      {/* Background effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <h2 className="section-title mb-4 relative inline-block">
        VPN-сервис
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-theme-blue transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      </h2>
      <p className="section-description mb-12">
        Защитите свою конфиденциальность и получите доступ к глобальному контенту
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vpnFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 
                    hover:border-theme-blue transition-all duration-500 group hover:shadow-glow-sm
                    glow-card"
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center mb-6 
                          group-hover:scale-110 transition-all duration-300 shadow-md`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white mb-3 group-hover:text-theme-blue transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {feature.description}
            </p>
            
            {/* Button that appears on hover */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <button className="flex items-center text-sm text-theme-blue">
                Узнать больше <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-gray-200 dark:border-gray-800 rounded-lg p-8 group hover:border-theme-blue/30 transition-all duration-500 relative overflow-hidden">
        {/* Animated background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/10 dark:to-indigo-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium text-black dark:text-white mb-4 group-hover:text-theme-blue transition-colors duration-300">
              Почему наш VPN-сервис особенный
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-theme-blue flex items-center justify-center mt-0.5 flex-shrink-0 animate-pulse-slow">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Мгновенное подключение без лагов и потери скорости</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-theme-blue flex items-center justify-center mt-0.5 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Поддержка всех устройств: iOS, macOS, Android, Windows</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-theme-blue flex items-center justify-center mt-0.5 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: "1s" }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Безлимитный трафик и отсутствие ограничений по скорости</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-theme-blue flex items-center justify-center mt-0.5 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: "1.5s" }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Возможность обхода блокировок и географических ограничений</span>
              </li>
            </ul>
          </div>
          
          <div className="md:ml-8 flex-shrink-0">
            <Button className="bg-black border-2 border-theme-blue hover:bg-gray-900 text-white 
                            dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base 
                            py-2 px-6 rounded-full font-medium group/btn animate-border-glow">
              Подключить VPN
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
