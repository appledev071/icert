
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Monitor, Laptop, Tablet } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";

const InstallationGuide = () => {
  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Тарифы", href: "/#pricing" },
    { label: "VPN", href: "/#vpn" },
    { label: "О нас", href: "/#about" },
    { label: "Контакты", href: "/#contacts" },
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

      {/* Installation Guide Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-black dark:text-white mb-6 relative">
            Инструкция по установке
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Подробная инструкция по установке VPN на различные устройства и платформы. 
            Следуйте пошаговым рекомендациям для быстрой настройки защищенного соединения.
          </p>
        </div>
      </section>

      {/* Device Specific Instructions */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <h2 className="text-2xl font-playfair font-semibold text-black dark:text-white mb-6">
          Выберите свое устройство
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* iOS */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-7 h-7 text-theme-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-black dark:text-white">iOS (iPhone/iPad)</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Рекомендуемые приложения:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Streisand (V2Ray)</li>
                    <li>ShadowRocket</li>
                    <li>V2Box</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Шаги по установке:</h4>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    <li>Скачайте одно из рекомендуемых приложений из App Store</li>
                    <li>После покупки VPN, вы получите конфигурационную ссылку или QR-код</li>
                    <li>В приложении найдите опцию "Импортировать из ссылки" или "Сканировать QR-код"</li>
                    <li>После импорта конфигурации, выберите сервер и нажмите "Подключиться"</li>
                    <li>При первом подключении разрешите приложению добавить VPN конфигурацию</li>
                    <li>Готово! Теперь ваше соединение защищено</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Совет:</p>
                  <p>Для iOS устройств рекомендуем использовать ShadowRocket как наиболее стабильное и функциональное приложение для работы с VLESS протоколом.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Android */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-7 h-7 text-theme-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-black dark:text-white">Android</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Рекомендуемые приложения:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>v2rayNG</li>
                    <li>Clash for Android</li>
                    <li>Nekoray (если доступно)</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Шаги по установке:</h4>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    <li>Скачайте и установите v2rayNG из Google Play или APK файл с официального сайта</li>
                    <li>После покупки VPN, вы получите конфигурационную ссылку или QR-код</li>
                    <li>Откройте v2rayNG и нажмите на "+" внизу экрана</li>
                    <li>Выберите "Импортировать из буфера обмена" или "Сканировать QR-код"</li>
                    <li>После импорта выберите добавленный сервер и нажмите на кнопку подключения</li>
                    <li>Разрешите приложению создать VPN подключение при запросе</li>
                    <li>Готово! Теперь ваше соединение защищено</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Совет:</p>
                  <p>Для большинства устройств Android рекомендуем v2rayNG как наиболее простое и эффективное решение для VLESS протокола.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Windows */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-7 h-7 text-theme-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-black dark:text-white">Windows</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Рекомендуемые приложения:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>v2rayN</li>
                    <li>Clash for Windows</li>
                    <li>Nekoray</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Шаги по установке:</h4>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    <li>Скачайте и установите v2rayN с GitHub</li>
                    <li>После запуска, найдите иконку программы в трее (внизу справа)</li>
                    <li>Правый клик по иконке → Импортировать из буфера обмена → VLESS</li>
                    <li>Вставьте полученную от нас конфигурационную ссылку</li>
                    <li>После импорта сервера, правый клик по иконке v2rayN → Системный прокси → Режим прокси PAC/Global</li>
                    <li>Готово! Теперь ваше соединение защищено</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Совет:</p>
                  <p>Для Windows пользователей рекомендуем v2rayN или Nekoray для максимальной производительности и гибкости настроек.</p>
                </div>
              </div>
            </div>
          </div>

          {/* macOS */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="w-7 h-7 text-theme-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-black dark:text-white">macOS</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Рекомендуемые приложения:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>V2rayU</li>
                    <li>ClashX</li>
                    <li>FairVPN</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-black dark:text-white mb-2">Шаги по установке:</h4>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                    <li>Скачайте и установите V2rayU с GitHub</li>
                    <li>Запустите приложение и найдите его иконку в строке меню</li>
                    <li>Нажмите на иконку → Servers → Import from clipboard</li>
                    <li>Вставьте полученную конфигурационную ссылку</li>
                    <li>Выберите импортированный сервер и нажмите "Turn V2Ray On"</li>
                    <li>При первом включении потребуется ввести пароль администратора</li>
                    <li>Готово! Теперь ваше соединение защищено</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Совет:</p>
                  <p>Для пользователей Mac рекомендуем V2rayU как наиболее стабильное и интуитивно понятное решение.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mt-12 border border-gray-200 dark:border-gray-800 rounded-lg p-8 group hover:border-theme-blue/30 transition-all duration-500 relative overflow-hidden shine-on-hover running-border">
          <h3 className="text-2xl font-playfair font-semibold text-black dark:text-white mb-6">
            Устранение неполадок
          </h3>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-red-100 dark:bg-red-900/20 rounded-lg p-4 text-gray-700 dark:text-gray-300 flex-1">
                <p className="font-medium text-red-600 dark:text-red-400 mb-2">Проблема: Не удается подключиться к VPN</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Убедитесь, что ваше интернет-соединение стабильно</li>
                  <li>Проверьте правильность импортированной конфигурации</li>
                  <li>Перезапустите приложение VPN-клиента</li>
                  <li>Попробуйте подключиться к другому серверу (если доступно)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-lg p-4 text-gray-700 dark:text-gray-300 flex-1">
                <p className="font-medium text-yellow-600 dark:text-yellow-400 mb-2">Проблема: Низкая скорость соединения</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Выберите сервер, который географически ближе к вам</li>
                  <li>Проверьте скорость вашего базового интернет-соединения</li>
                  <li>Убедитесь, что никакие другие приложения не потребляют большую часть трафика</li>
                  <li>Попробуйте изменить протокол в настройках (если доступно)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              Если у вас возникли проблемы с подключением или настройкой VPN, свяжитесь с нашей технической
              поддержкой через Telegram для получения дополнительной помощи: 
              <a href="https://t.me/icertstore" className="text-theme-blue hover:underline ml-1">t.me/icertstore</a>
            </p>
          </div>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default InstallationGuide;
