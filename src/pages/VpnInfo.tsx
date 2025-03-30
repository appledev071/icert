
import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp, Globe, Shield, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

const VpnInfo = () => {
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

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      {/* Wiki Navigation */}
      <WikiNavigation />

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

      {/* VPN Info Content */}
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
            Наш VPN-сервис обеспечивает безопасное и анонимное подключение к интернету, защищая вашу конфиденциальность 
            и предоставляя доступ к глобальному контенту без ограничений.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-10 running-border">
          <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-8">
            Преимущества нашего VPN-сервиса
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-theme-blue group transition-all duration-500">
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-3">Безопасность</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Шифрование военного уровня защищает ваши данные от посторонних глаз, предотвращая слежку и кражу информации.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-theme-blue group transition-all duration-500">
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-3">Глобальный доступ</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Серверы в более чем 30 странах позволяют обходить географические ограничения и получать доступ к любому контенту.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-theme-blue group transition-all duration-500">
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-3">Высокая скорость</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Оптимизированные серверы обеспечивают стабильное соединение с высокой скоростью для комфортного использования интернета.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-4">
              Почему стоит выбрать наш VPN?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Без логирования:</strong> мы не храним информацию о вашей активности
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Безлимитный трафик:</strong> без ограничений по объему передаваемых данных
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Множество устройств:</strong> до 5 устройств на одну подписку
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Кросс-платформенность:</strong> поддержка всех популярных платформ
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Техническая поддержка:</strong> помощь в настройке и решении проблем
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-theme-blue flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Высокая надежность:</strong> стабильное соединение 24/7
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-6">
              Готовы повысить уровень своей безопасности в сети?
            </h3>
            
            <Link to="/vpn-pricing" onClick={scrollToTop}>
              <Button className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                Выбрать тариф
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* How VPN works section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12 running-border">
          <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-6">
            Как работает VPN?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            VPN (Virtual Private Network) создает защищенное соединение между вашим устройством и интернетом.
            Вот как это работает:
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Шифрование данных</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Все данные, которые вы отправляете и получаете, шифруются, что делает их невидимыми для посторонних глаз,
                  включая вашего интернет-провайдера и операторов общественных Wi-Fi сетей.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Туннельное соединение</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  VPN создает защищенный "туннель" через интернет от вашего устройства до VPN-сервера, через который 
                  проходит весь ваш интернет-трафик.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Изменение IP-адреса</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  При подключении к VPN-серверу ваш реальный IP-адрес заменяется на IP-адрес сервера, что делает 
                  вашу активность анонимной и позволяет обходить географические ограничения.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Доступ к контенту</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Подключившись к серверу в определенной стране, вы получаете доступ к контенту, доступному в этом регионе,
                  обходя блокировки и цензуру.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to top and main page buttons */}
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

export default VpnInfo;
