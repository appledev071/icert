import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

const DeveloperCertificateInfo = () => {
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

      {/* Developer Certificate Info Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            Сертификаты разработчика
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Сертификаты разработчика Apple позволяют устанавливать и тестировать приложения 
            на устройствах iOS без необходимости их публикации в App Store. Это незаменимый 
            инструмент как для разработчиков, так и для пользователей.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-10 running-border">
          <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
            <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-theme-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
                Что такое сертификат разработчика?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Сертификат разработчика Apple — это цифровой сертификат, который позволяет подписывать 
                приложения для iOS, iPadOS и других платформ Apple. Официально Apple предоставляет 
                такие сертификаты разработчикам, которые зарегистрированы в программе Apple Developer Program 
                за $99 в год.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Однако мы предлагаем доступ к таким сертификатам по более доступной цене, что позволяет 
                устанавливать приложения, которых нет в App Store, или тестировать приложения без необходимости 
                их официальной публикации.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
            <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-theme-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
                Для чего нужен сертификат?
              </h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Установка сторонних приложений</strong> — возможность устанавливать приложения в обход App Store</li>
                <li><strong>Тестирование бета-версий</strong> — доступ к ранним версиям приложений, которые ещё не вышли официально</li>
                <li><strong>Эмуляторы и игры</strong> — установка эмуляторов для запуска классических игр</li>
                <li><strong>Модифицированные приложения</strong> — доступ к приложениям с расширенным функционалом</li>
                <li><strong>Бизнес-решения</strong> — распространение корпоративных приложений внутри организации</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
            <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-theme-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
                Особенности и ограничения
              </h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Срок действия</strong> — сертификаты действуют 1 год с момента активации</li>
                <li><strong>UDID устройства</strong> — для активации требуется UDID вашего устройства</li>
                <li><strong>Количество устройств</strong> — на один сертификат можно зарегистрировать ограниченное количество устройств</li>
                <li><strong>Возможность отзыва</strong> — Apple может отозвать сертификат при нарушении правил использования</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Важно: мы предоставляем гарантию на сертификаты сроком 1 месяц. В случае отзыва в течение этого периода,
                мы бесплатно заменим ваш сертификат.
              </p>
            </div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm running-border mb-12">
          <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-6">
            Как это работает?
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Покупка сертификата</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Выберите подходящий тариф на нашем сайте и свяжитесь с нами через Telegram для оформления заказа.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Предоставление UDID</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Мы попросим вас предоставить UDID вашего устройства. Инструкцию по получению UDID можно найти в разделе "Инструкция по установке".
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Активация сертификата</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  После оплаты мы регистрируем ваше устройство в системе и выдаем вам активированный сертификат в зависимости от выбранного тарифа.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <div className="bg-theme-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-theme-blue flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-montserrat font-medium text-black dark:text-white mb-2">Использование</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Теперь вы можете устанавливать приложения, подписанные вашим сертификатом, на свое устройство. 
                  Срок действия сертификата составляет 1 год с момента активации.
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

export default DeveloperCertificateInfo;
