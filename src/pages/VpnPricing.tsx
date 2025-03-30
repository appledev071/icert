
import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const VpnPricing = () => {
  const isMobile = useIsMobile();

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "VPN", href: "/vpn-pricing" },
    { label: "О нас", href: "/about" },
  ];

  const vpnPlans = [
    {
      title: "1 месяц",
      price: "300₽",
      features: [
        "Безлимитный трафик",
        "Высокая скорость",
        "Доступ ко всем серверам",
        "Техническая поддержка",
      ],
      popular: false,
      backgroundColor: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
    },
    {
      title: "6 месяцев",
      price: "1500₽",
      features: [
        "Безлимитный трафик",
        "Максимальная скорость",
        "Доступ ко всем серверам",
        "Приоритетная поддержка",
        "Скидка 17%",
      ],
      popular: true,
      backgroundColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
    },
    {
      title: "12 месяцев",
      price: "2500₽",
      features: [
        "Безлимитный трафик",
        "Максимальная скорость",
        "Доступ ко всем серверам",
        "Премиум поддержка 24/7",
        "Скидка 30%",
      ],
      popular: false,
      backgroundColor: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
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

      {/* Back button */}
      <div className="mb-8 animate-fade-in-left">
        <Link to="/" onClick={scrollToTop}>
          <Button
            variant="outline"
            className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Назад на главную
          </Button>
        </Link>
      </div>

      {/* Page content */}
      <section className="py-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
          Тарифы VPN-сервиса
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
          Выберите оптимальный тариф для безопасного и анонимного доступа к интернету без ограничений
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vpnPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col h-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all duration-500 ${plan.popular ? 'border-theme-blue shadow-lg scale-105 md:scale-110 z-10' : 'hover:border-theme-blue hover:shadow-md'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-theme-blue text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Популярный
                  </div>
                </div>
              )}
              
              <div className={`flex-1 flex flex-col p-6 ${plan.backgroundColor}`}>
                <h3 className="text-xl font-semibold font-montserrat text-black dark:text-white mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold font-montserrat text-black dark:text-white mb-6">{plan.price}</div>
                
                <div className="flex-1 flex flex-col gap-4 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-[15px] leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-4">
                  <a 
                    href="https://t.me/icertmanager" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full py-2 px-4 text-center rounded-lg font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-theme-blue text-white hover:bg-blue-600' 
                        : 'bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600'
                    }`}
                  >
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold font-montserrat text-black dark:text-white mb-6">
            Особенности нашего VPN-сервиса
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                  Глобальная сеть серверов
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Серверы в более чем 30 странах для быстрого доступа к любому контенту без географических ограничений
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                  Домашний интернет
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Наш VPN работает на всех устройствах: компьютерах, смартфонах, планшетах, телевизорах и роутерах
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                  Обход блокировок
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Обход всех видов блокировок и ограничений, включая DPI и другие методы фильтрации трафика
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                  Простое подключение
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Интуитивно понятные приложения и инструкции для быстрой настройки на любом устройстве без специальных знаний
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold font-montserrat text-black dark:text-white mb-6">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                Как подключить VPN?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                После оплаты вы получите конфигурационный файл или QR-код для быстрой настройки. Просто установите рекомендуемое приложение на ваше устройство и импортируйте полученные данные. Подробную инструкцию вы найдете в разделе "Установка".
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                На скольких устройствах можно использовать VPN?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Один VPN аккаунт можно использовать одновременно на 5 устройствах. Если вам нужно больше устройств, рекомендуем приобрести дополнительный аккаунт.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium font-montserrat text-black dark:text-white mb-2">
                Какой протокол VPN вы используете?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Наш VPN использует современный протокол VLESS, который обеспечивает высокую скорость и стабильность соединения при максимальном уровне безопасности и минимальном потреблении ресурсов.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex flex-col items-center justify-center">
          <Link to="/" onClick={scrollToTop} className="mb-8">
            <Button
              variant="outline"
              className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Вернуться на главную
            </Button>
          </Link>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5 text-theme-blue" />
          </button>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default VpnPricing;
