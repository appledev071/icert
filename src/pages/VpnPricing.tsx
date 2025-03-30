
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Globe, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

const VpnPricing = () => {
  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "VPN", href: "/vpn-pricing" },
    { label: "О нас", href: "/about" },
  ];

  const vpnPlans = [
    {
      title: "Базовый",
      price: "299₽",
      period: "в месяц",
      features: [
        "Высокая скорость соединения",
        "Доступ к глобальному контенту",
        "Шифрование трафика",
        "Поддержка всех устройств",
      ],
      highlighted: false,
    },
    {
      title: "Премиум",
      price: "499₽",
      period: "в месяц",
      features: [
        "Максимальная скорость соединения",
        "Доступ к глобальному контенту",
        "Военное шифрование трафика",
        "Приоритетная поддержка",
        "Одновременное подключение до 5 устройств",
      ],
      highlighted: true,
    },
    {
      title: "Годовой",
      price: "2999₽",
      period: "в год",
      features: [
        "Максимальная скорость соединения",
        "Доступ к глобальному контенту",
        "Военное шифрование трафика",
        "Приоритетная поддержка",
        "Одновременное подключение до 5 устройств",
        "Экономия более 40%",
      ],
      highlighted: false,
    },
  ];

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      <div className="mb-8 animate-fade-in-left">
        <Link to="/">
          <Button
            variant="outline"
            className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Назад на главную
          </Button>
        </Link>
      </div>

      {/* VPN Pricing Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            VPN-сервис
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Защитите свою конфиденциальность и получите доступ к глобальному контенту 
            с помощью нашего высокоскоростного VPN-сервиса.
          </p>
        </div>
      </section>

      {/* VPN Features */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-theme-blue" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-black dark:text-white mb-3">Высокая скорость</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Наш VPN-сервис обеспечивает высокую скорость соединения до 1 Гбит/с, 
              что позволяет комфортно смотреть видео, играть и загружать файлы без задержек.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-theme-blue" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-black dark:text-white mb-3">Глобальный доступ</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Серверы в более чем 30 странах обеспечивают доступ к региональному контенту 
              и позволяют обходить географические ограничения сервисов.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-theme-blue" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-black dark:text-white mb-3">Надежная защита</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Шифрование военного уровня и политика отсутствия логов обеспечивают 
              максимальную защиту ваших данных и конфиденциальность в сети.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <h2 className="text-3xl font-bold font-montserrat text-black dark:text-white mb-8 text-center">
          Выберите подходящий тариф
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vpnPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`border ${plan.highlighted ? 'border-theme-blue' : 'border-gray-200 dark:border-gray-800'} 
                        rounded-lg p-6 hover:border-theme-blue transition-all duration-500 
                        ${plan.highlighted ? 'shadow-glow-sm' : 'shadow-sm hover:shadow-glow-sm'} 
                        relative overflow-hidden running-border`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-theme-blue text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
                    Популярный выбор
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-2">
                {plan.title}
              </h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-black dark:text-white">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-theme-blue flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://t.me/icertstoremanager" target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-theme-blue text-white hover:bg-blue-600' 
                      : 'bg-black text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                  } py-2 rounded-full font-medium transition-all duration-300`}
                >
                  Заказать
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center relative overflow-hidden group hover:border-theme-blue/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          
          <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
            Нужна помощь с выбором?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Наш менеджер поможет вам выбрать оптимальный тариф VPN и ответит на все ваши вопросы
          </p>
          
          <a href="https://t.me/icertstoremanager" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-base 
                        py-2 px-8 rounded-full font-medium shadow-md
                        transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Связаться с менеджером</span>
            </Button>
          </a>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default VpnPricing;
