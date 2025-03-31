
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
    { label: "О нас", href: "/about" },
  ];

  const devices = [
    {
      id: "ios",
      name: "iOS (iPhone/iPad)",
      icon: <Smartphone className="w-6 h-6" />,
      apps: ["Safari", "Files", "Mail"],
      instructions: [
        "Откройте полученное электронное письмо с файлом сертификата (.p12 или .pfx)",
        "Нажмите на вложение с сертификатом для скачивания",
        "Когда появится запрос, выберите 'Установить сертификат'",
        "Введите пароль для сертификата (если требуется)",
        "Подтвердите установку в настройках профиля (Настройки → Основные → Профили)",
        "После установки сертификат станет доступен для использования в приложениях"
      ],
      tip: "На iOS устройствах после установки сертификата необходимо включить его в настройках доверия (Настройки → Основные → О устройстве → Доверие сертификатам)"
    },
    {
      id: "android",
      name: "Android",
      icon: <Smartphone className="w-6 h-6" />,
      apps: ["Chrome", "Gmail", "Файлы"],
      instructions: [
        "Откройте письмо с сертификатом в Gmail или другом почтовом клиенте",
        "Нажмите на вложение с файлом сертификата для скачивания",
        "В появившемся окне введите имя сертификата и пароль (если требуется)",
        "Выберите для каких целей будет использоваться сертификат (VPN и приложения, Wi-Fi)",
        "Нажмите 'ОК' для завершения установки",
        "Проверьте установку в Настройки → Безопасность → Шифрование и учетные данные → Просмотр сертификатов"
      ],
      tip: "На некоторых версиях Android может потребоваться установка PIN-кода или пароля блокировки экрана перед установкой сертификата"
    },
    {
      id: "windows",
      name: "Windows",
      icon: <Monitor className="w-6 h-6" />,
      apps: ["Chrome", "Firefox", "Edge", "Internet Explorer"],
      instructions: [
        "Скачайте файл сертификата из электронного письма",
        "Дважды щелкните на файл сертификата (.p12 или .pfx) для запуска мастера импорта",
        "Выберите 'Текущий пользователь' или 'Локальный компьютер' для установки",
        "Укажите путь к файлу сертификата (обычно уже заполнен)",
        "Введите пароль для сертификата (если требуется)",
        "В разделе 'Хранилище сертификатов' выберите 'Автоматически выбрать...' или укажите конкретное хранилище",
        "Завершите мастер импорта, нажав 'Готово'"
      ],
      tip: "Для проверки установки откройте 'Управление сертификатами пользователя' через поиск Windows или выполните команду 'certmgr.msc'"
    },
    {
      id: "macos",
      name: "macOS",
      icon: <Laptop className="w-6 h-6" />,
      apps: ["Safari", "Keychain Access", "Mail"],
      instructions: [
        "Скачайте файл сертификата из электронного письма",
        "Дважды щелкните на файл сертификата для открытия Keychain Access",
        "Если появится диалоговое окно, выберите 'login' keychain для установки",
        "Введите пароль для сертификата (если требуется)",
        "После установки сертификат появится в Keychain Access",
        "Для настройки доверия щелкните правой кнопкой мыши на сертификате, выберите 'Get Info' и настройте параметры доверия"
      ],
      tip: "Чтобы сертификат работал во всех приложениях, добавьте его в системное хранилище (System Keychain), а не только в пользовательское (login)"
    },
    {
      id: "linux",
      name: "Linux",
      icon: <Monitor className="w-6 h-6" />,
      apps: ["Firefox", "Chrome", "Thunderbird"],
      instructions: [
        "Для Firefox: Откройте меню ≡ → Настройки → Приватность и Защита → Сертификаты → Просмотр сертификатов → Импорт",
        "Для Chrome: Откройте настройки → Конфиденциальность и безопасность → Безопасность → Управление сертификатами → Импорт",
        "Для системного хранилища: Используйте команду 'sudo trust anchor --store path/to/certificate.p12'",
        "При импорте введите пароль для сертификата (если требуется)",
        "Выберите хранилище для установки сертификата (личные сертификаты)",
        "Подтвердите импорт и, если требуется, введите пароль пользователя Linux"
      ],
      tip: "В разных дистрибутивах Linux процесс может отличаться. В Ubuntu можно использовать инструмент 'seahorse' (Менеджер паролей и ключей) с графическим интерфейсом"
    },
    {
      id: "browser",
      name: "Веб-браузеры",
      icon: <Monitor className="w-6 h-6" />,
      apps: ["Chrome", "Firefox", "Safari", "Edge"],
      instructions: [
        "Chrome: Настройки → Конфиденциальность и безопасность → Безопасность → Управление сертификатами → Импорт",
        "Firefox: Меню ≡ → Настройки → Приватность и Защита → Сертификаты → Просмотр сертификатов → Личные → Импорт",
        "Safari: Сертификаты автоматически используют Keychain Access в macOS. Установите сертификат в систему",
        "Edge: Настройки → Конфиденциальность, поиск и службы → Безопасность → Управление сертификатами → Импорт",
        "При импорте следуйте инструкциям мастера и введите пароль для сертификата (если требуется)",
        "Подтвердите доверие к сертификату, если браузер запрашивает это"
      ],
      tip: "Большинство современных браузеров используют системное хранилище сертификатов, поэтому после установки в ОС сертификат будет доступен в браузерах"
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
            Инструкция по установке сертификатов
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl font-inter">
            Подробная инструкция по установке сертификатов на различные устройства и платформы. 
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
              <span className={`text-sm font-medium font-montserrat ${
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

        {/* Device specific instructions - only shown when a device is selected */}
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
                      Установка сертификата на {device.name}
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-black dark:text-white mb-2 font-montserrat">Рекомендуемые приложения:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                      {device.apps.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-black dark:text-white mb-2 font-montserrat">Шаги по установке:</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300 font-inter">
                      {device.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 font-inter">
                    <p className="font-medium font-montserrat">Совет:</p>
                    <p>{device.tip}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
        
        {/* Certificate installation common information */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12">
          <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-4">
            Общая информация о сертификатах
          </h3>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 font-inter">
            <p>
              <strong>Типы файлов сертификатов:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>.p12/.pfx</strong> - Формат PKCS#12, содержащий сертификат и приватный ключ. Обычно защищен паролем.</li>
              <li><strong>.cer/.crt</strong> - Формат сертификата без приватного ключа. Используется для установки корневых или промежуточных сертификатов.</li>
              <li><strong>.pem</strong> - Текстовый формат сертификата/ключа в кодировке Base64.</li>
            </ul>
            
            <p>
              <strong>Основные меры предосторожности:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Никогда не передавайте файлы сертификатов через незащищенные каналы связи.</li>
              <li>Храните пароль от сертификата в надежном месте.</li>
              <li>Регулярно проверяйте срок действия сертификата и обновляйте его при необходимости.</li>
              <li>При утере устройства, на котором установлен сертификат, запросите отзыв сертификата.</li>
            </ul>
            
            <p>
              <strong>Использование сертификата:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>После установки сертификат будет автоматически использоваться при посещении ресурсов, требующих аутентификации.</li>
              <li>Некоторые приложения могут запрашивать разрешение на использование сертификата при первом обращении.</li>
              <li>Если сертификат не работает, убедитесь, что он установлен в правильное хранилище и имеет необходимые разрешения.</li>
            </ul>
          </div>
        </div>
        
        {/* Support section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12">
          <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-4">
            Нужна помощь?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Если у вас возникли сложности с установкой или настройкой сертификата, наша техническая поддержка всегда готова помочь. 
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
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300 mb-8"
          >
            <ArrowUp className="w-5 h-5 text-theme-blue" />
          </button>
          
          <Link to="/" onClick={scrollToTop}>
            <Button
              variant="outline"
              className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default InstallationGuide;
