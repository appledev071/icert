
import React, { useState, useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp, Smartphone, Monitor, Laptop, Tablet, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

const InstallationGuide = () => {
  const isMobile = useIsMobile();
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

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

  const devices = [
    {
      id: "ios",
      name: "iOS (iPhone/iPad)",
      icon: <Smartphone className="w-6 h-6" />,
      apps: ["Streisand (V2Ray)", "ShadowRocket", "V2Box"],
      instructions: [
        "Скачайте одно из рекомендуемых приложений из App Store",
        "После покупки VPN, вы получите конфигурационную ссылку или QR-код",
        "В приложении найдите опцию 'Импортировать из ссылки' или 'Сканировать QR-код'",
        "После импорта конфигурации, выберите сервер и нажмите 'Подключиться'",
        "При первом подключении разрешите приложению добавить VPN конфигурацию",
        "Готово! Теперь ваше соединение защищено"
      ],
      tip: "Для iOS устройств рекомендуем использовать ShadowRocket как наиболее стабильное и функциональное приложение"
    },
    {
      id: "android",
      name: "Android",
      icon: <Smartphone className="w-6 h-6" />,
      apps: ["V2rayNG", "V2Ray Plugin", "Shadowsocks"],
      instructions: [
        "Установите приложение V2rayNG из Google Play или загрузите APK с официального сайта",
        "После покупки VPN, вы получите конфигурационную ссылку или QR-код",
        "Откройте V2rayNG и нажмите на кнопку '+' в верхнем правом углу",
        "Выберите 'Импортировать конфигурацию из буфера обмена' или 'Сканировать QR код'",
        "После импорта, выберите новый профиль и нажмите кнопку подключения внизу экрана",
        "Примите запрос на настройку VPN-соединения"
      ],
      tip: "Для стабильной работы рекомендуем использовать V2rayNG, который поддерживает все современные протоколы"
    },
    {
      id: "windows",
      name: "Windows",
      icon: <Monitor className="w-6 h-6" />,
      apps: ["v2rayN", "Clash for Windows", "Qv2ray"],
      instructions: [
        "Скачайте и установите v2rayN с официального GitHub репозитория",
        "После установки запустите программу от имени администратора",
        "После покупки VPN, вы получите конфигурационный файл или ссылку",
        "В программе выберите 'Servers' → 'Add VMess Server' → 'Import from clipboard'",
        "Вставьте полученную ссылку и нажмите 'OK'",
        "Выберите добавленный сервер в списке и включите VPN нажатием кнопки в правом нижнем углу"
      ],
      tip: "Рекомендуем настроить автозапуск программы вместе с Windows для постоянной защиты"
    },
    {
      id: "macos",
      name: "macOS",
      icon: <Laptop className="w-6 h-6" />,
      apps: ["V2rayU", "ClashX", "V2RayX"],
      instructions: [
        "Загрузите и установите V2rayU из GitHub или App Store",
        "После установки запустите приложение (может потребоваться разрешение в настройках безопасности)",
        "Нажмите на значок V2rayU в строке меню и выберите 'Import Config'",
        "Вставьте полученную ссылку или выберите конфигурационный файл",
        "После импорта конфигурации нажмите 'Connect' для подключения к VPN",
        "Для автоматического подключения при запуске системы, настройте опцию 'Launch at Login'"
      ],
      tip: "В macOS Monterey и новее может потребоваться разрешение для VPN в настройках конфиденциальности и безопасности"
    },
    {
      id: "linux",
      name: "Linux",
      icon: <Monitor className="w-6 h-6" />,
      apps: ["Qv2ray", "v2rayA", "v2ray-core"],
      instructions: [
        "Установите v2ray-core с помощью менеджера пакетов вашего дистрибутива (apt, yum, pacman и т.д.)",
        "Установите Qv2ray графический интерфейс для управления VPN",
        "Настройте путь к исполняемым файлам v2ray в настройках Qv2ray",
        "Импортируйте полученную конфигурацию через меню 'Импорт'",
        "Выберите добавленный профиль и нажмите кнопку подключения",
        "Для автозагрузки добавьте Qv2ray в автозапуск вашего окружения рабочего стола"
      ],
      tip: "Для продвинутых пользователей: можно настроить systemd сервис для автоматического запуска v2ray без GUI"
    },
    {
      id: "router",
      name: "Роутер",
      icon: <Monitor className="w-6 h-6" />,
      apps: ["OpenWrt", "AsusWRT", "Padavan"],
      instructions: [
        "Убедитесь, что ваш роутер поддерживает OpenWrt или другую кастомную прошивку",
        "Установите пакет v2ray через менеджер пакетов или вручную",
        "Загрузите на роутер конфигурационный файл, полученный после покупки VPN",
        "Настройте перенаправление трафика согласно документации вашей прошивки",
        "Включите автозапуск службы v2ray при загрузке роутера",
        "Проверьте подключение, посетив сайт для проверки IP-адреса"
      ],
      tip: "Настройка VPN на уровне роутера защищает все устройства в сети, но может потребовать технических знаний"
    }
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

      {/* Installation Guide Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            Инструкция по установке
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Подробная инструкция по установке VPN на различные устройства и платформы. 
            Выберите ваше устройство для получения соответствующей инструкции.
          </p>
        </div>
      </section>

      {/* Device Selection */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <h2 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-6">
          Выберите ваше устройство
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => setSelectedDevice(selectedDevice === device.id ? null : device.id)}
              className={`flex flex-col items-center p-4 rounded-lg border transition-all duration-300 ${
                selectedDevice === device.id 
                  ? 'border-theme-blue bg-theme-blue/5 dark:bg-theme-blue/10' 
                  : 'border-gray-200 dark:border-gray-800 hover:border-theme-blue/50 hover:bg-gray-50 dark:hover:bg-gray-900/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                selectedDevice === device.id ? 'text-theme-blue' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {device.icon}
              </div>
              <span className={`text-sm font-medium ${
                selectedDevice === device.id ? 'text-theme-blue' : 'text-gray-800 dark:text-gray-200'
              }`}>
                {device.name}
              </span>
              <ChevronDown className={`mt-2 w-4 h-4 transition-transform duration-300 ${
                selectedDevice === device.id ? 'rotate-180 text-theme-blue' : 'text-gray-400'
              }`} />
            </button>
          ))}
        </div>

        {/* Device specific instructions */}
        {selectedDevice && devices.find(d => d.id === selectedDevice) && (
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-12 animate-fade-in transition-all duration-500">
            {devices.map((device) => (
              device.id === selectedDevice && (
                <div key={device.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center">
                      {device.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white">
                      Установка на {device.name}
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-black dark:text-white mb-2 font-montserrat">Рекомендуемые приложения:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      {device.apps.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-black dark:text-white mb-2 font-montserrat">Шаги по установке:</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                      {device.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
                    <p className="font-medium font-montserrat">Совет:</p>
                    <p>{device.tip}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
        
        {/* Support section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12">
          <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-4">
            Нужна помощь?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Если у вас возникли сложности с установкой или настройкой VPN, наша техническая поддержка всегда готова помочь. 
            Свяжитесь с нами через Telegram, и мы оперативно решим ваш вопрос.
          </p>
          
          <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black dark:bg-theme-blue dark:text-white text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Написать в поддержку
            </Button>
          </a>
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

export default InstallationGuide;
