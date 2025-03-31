
import React, { useState, useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp, Smartphone, Monitor, Laptop, Download, MousePointer, Share2, CloudLightning, BookOpen, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const InstallationGuide = () => {
  const isMobile = useIsMobile();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const { toast } = useToast();

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

  const showComingSoon = () => {
    toast({
      title: "Скоро будет доступно",
      description: "Мы работаем над добавлением этого метода. Пожалуйста, посетите нас позже.",
      duration: 5000,
    });
  };

  const installationMethods = [
    {
      id: "sideloadly",
      name: "Sideloadly",
      icon: <Download className="w-6 h-6" />,
      description: "Популярный и простой инструмент для установки IPA файлов на iPhone и iPad",
      steps: [
        "Скачайте и установите программу Sideloadly с официального сайта (https://sideloadly.io)",
        "Подключите устройство iOS к компьютеру с помощью USB-кабеля",
        "Запустите iTunes, чтобы устройство было распознано",
        "Откройте Sideloadly и выберите ваш файл IPA",
        "Введите ваш Apple ID и пароль (используйте отдельный Apple ID для сайдлоадинга)",
        "Установите наш сертификат разработчика через опцию "Custom Developer Certificate"",
        "Нажмите кнопку "Start" и дождитесь завершения процесса",
        "На устройстве iOS перейдите в Настройки → Основные → Профили и управление устройством",
        "Доверьте корпоративному разработчику",
        "Теперь вы можете запустить установленное приложение"
      ],
      pros: ["Простой интерфейс", "Поддержка Windows и macOS", "Не требует джейлбрейка", "Возможность использования кастомных сертификатов"],
      cons: ["Требуется компьютер", "Ограничение Apple в 3 приложения на бесплатном аккаунте (без нашего сертификата)", "Приложения нужно переподписывать каждые 7 дней (без нашего сертификата)"],
      resources: [
        { name: "Официальный сайт Sideloadly", url: "https://sideloadly.io" },
        { name: "Видео инструкция", url: "https://www.youtube.com/watch?v=2dDlDz_CWww" }
      ]
    },
    {
      id: "altstore",
      name: "AltStore",
      icon: <Share2 className="w-6 h-6" />,
      description: "Альтернативный магазин приложений с возможностью установки IPA файлов",
      steps: [
        "Скачайте и установите AltServer с официального сайта (https://altstore.io)",
        "Подключите устройство iOS к компьютеру с помощью USB-кабеля",
        "Запустите iTunes (Windows) или Finder (macOS), чтобы устройство было распознано",
        "Запустите AltServer и войдите в свой Apple ID",
        "Из меню AltServer в системном трее выберите "Install AltStore" и выберите ваше устройство",
        "Дождитесь завершения установки AltStore на ваше устройство",
        "На устройстве iOS перейдите в Настройки → Основные → Профили и управление устройством",
        "Доверьте профилю с вашим Apple ID",
        "Откройте AltStore и импортируйте файл IPA через опцию "Browse"",
        "Используйте наш сертификат разработчика в настройках AltStore для расширенных возможностей",
        "Нажмите "Install" для установки приложения"
      ],
      pros: ["Автоматическое обновление приложений", "Простой процесс установки", "Возможность установки приложений напрямую с устройства"],
      cons: ["Требуется запускать AltServer на компьютере каждые 7 дней", "Ограничение в количестве приложений без сертификата", "Не все приложения совместимы"],
      resources: [
        { name: "Официальный сайт AltStore", url: "https://altstore.io" },
        { name: "Руководство по использованию", url: "https://altstore.io/faq/" }
      ]
    },
    {
      id: "appdb",
      name: "AppDB",
      icon: <CloudLightning className="w-6 h-6" />,
      description: "Сервис для установки приложений без компьютера с поддержкой сертификатов",
      steps: [
        "Посетите сайт AppDB (https://appdb.to) на устройстве iOS",
        "Создайте аккаунт на сервисе",
        "Подпишитесь на план PRO или используйте наш сертификат разработчика",
        "Следуйте инструкциям на сайте для установки профиля на ваше устройство",
        "После установки профиля, вы сможете устанавливать IPA файлы напрямую с сайта",
        "Загрузите нужный IPA файл на сервис или выберите из каталога",
        "Нажмите кнопку "Install" для установки приложения"
      ],
      pros: ["Не требуется компьютер", "Большая библиотека приложений", "Простота использования", "Поддержка кастомных сертификатов"],
      cons: ["Платный PRO план для полного функционала", "Зависимость от стороннего сервиса", "Потенциальные проблемы с доверием профилей"],
      resources: [
        { name: "Официальный сайт AppDB", url: "https://appdb.to" },
        { name: "Руководство по использованию", url: "https://appdb.to/docs" }
      ]
    },
    {
      id: "signulous",
      name: "Signulous",
      icon: <Laptop className="w-6 h-6" />,
      description: "Онлайн-сервис для подписи и установки IPA файлов с поддержкой кастомных сертификатов",
      steps: [
        "Посетите сайт Signulous (https://www.signulous.com)",
        "Зарегистрируйтесь и оплатите подписку или используйте наш сертификат разработчика",
        "Добавьте свое устройство в аккаунт, следуя инструкциям на сайте",
        "Установите профиль конфигурации на ваше устройство",
        "На устройстве iOS перейдите в Настройки → Основные → Профили и управление устройством",
        "Доверьте профилю Signulous",
        "Загрузите IPA файл на сервис и выполните подпись с нашим сертификатом",
        "Установите подписанное приложение на ваше устройство через сайт Signulous"
      ],
      pros: ["Простота использования", "Не требуется компьютер после начальной настройки", "Длительный срок действия сертификатов", "Возможность импорта собственных сертификатов"],
      cons: ["Ежегодная плата за сервис", "Ограниченное количество устройств", "Зависимость от стороннего сервиса"],
      resources: [
        { name: "Официальный сайт Signulous", url: "https://www.signulous.com" },
        { name: "База знаний", url: "https://www.signulous.com/faq" }
      ]
    },
    {
      id: "trollstore",
      name: "TrollStore",
      icon: <Monitor className="w-6 h-6" />,
      description: "Перманентный установщик приложений для джейлбрейкнутых устройств",
      steps: [
        "Проверьте совместимость вашего устройства и iOS версии с TrollStore",
        "Установите TrollStore, следуя инструкциям на GitHub (https://github.com/opa334/TrollStore)",
        "После установки TrollStore откройте приложение на вашем устройстве",
        "Скачайте файл IPA на ваше устройство",
        "Откройте файл IPA через приложение "Файлы" и выберите "Открыть в TrollStore"",
        "Нажмите "Install" для установки приложения",
        "Приложение будет установлено без необходимости подписи сертификатом"
      ],
      pros: ["Постоянная установка без истечения срока действия", "Не требуется повторная подпись", "Полный доступ к системным API", "Не требуются сертификаты"],
      cons: ["Требуется совместимое устройство и версия iOS", "Повышенные риски безопасности", "Сложный процесс установки для новичков"],
      resources: [
        { name: "GitHub репозиторий TrollStore", url: "https://github.com/opa334/TrollStore" },
        { name: "Инструкция по установке", url: "https://ios.cfw.guide/installing-trollstore/" }
      ]
    },
    {
      id: "esign",
      name: "ESign",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Мобильный установщик IPA прямо на устройстве iOS",
      steps: [
        "Скачайте ESign с официального сайта (https://esign.yyyue.xyz)",
        "Установите приложение, используя один из других методов (например, AltStore)",
        "Откройте ESign и импортируйте наш сертификат разработчика",
        "Загрузите файлы IPA на ваше устройство",
        "В приложении ESign нажмите "+" и выберите IPA файл",
        "Выберите наш сертификат разработчика для подписи",
        "Нажмите "Sign" и дождитесь завершения процесса",
        "После подписи нажмите "Install" для установки приложения"
      ],
      pros: ["Не требуется компьютер после начальной настройки", "Возможность использования различных сертификатов", "Удобный интерфейс", "Все операции выполняются на устройстве"],
      cons: ["Сначала нужно установить само приложение ESign", "Ограничения бесплатной версии", "Потенциальные сбои при подписи сложных приложений"],
      resources: [
        { name: "Официальный сайт ESign", url: "https://esign.yyyue.xyz" },
        { name: "Туториал по использованию", url: "https://www.youtube.com/watch?v=o7U5qZRbNKw" }
      ]
    },
    {
      id: "3utools",
      name: "3uTools",
      icon: <MousePointer className="w-6 h-6" />,
      description: "Многофункциональный инструмент для управления iOS устройствами с функцией установки IPA",
      steps: [
        "Скачайте и установите 3uTools с официального сайта (http://www.3u.com)",
        "Подключите ваше устройство iOS к компьютеру",
        "В интерфейсе 3uTools перейдите в раздел "Инструменты" → "Установка IPA"",
        "Нажмите "Импорт IPA" и выберите файл IPA",
        "Выберите опцию использования кастомного сертификата и импортируйте наш сертификат",
        "Нажмите "Установить" и дождитесь завершения процесса",
        "На устройстве iOS перейдите в Настройки → Основные → Профили и управление устройством",
        "Доверьте профилю разработчика"
      ],
      pros: ["Многофункциональный инструмент с дополнительными возможностями", "Интуитивно понятный интерфейс", "Возможность управления файлами", "Поддержка кастомных сертификатов"],
      cons: ["Доступен только для Windows", "Некоторые антивирусы могут помечать как потенциально нежелательное ПО", "Требуется компьютер"],
      resources: [
        { name: "Официальный сайт 3uTools", url: "http://www.3u.com" },
        { name: "Руководство по использованию", url: "http://www.3u.com/tutorial/" }
      ]
    },
    {
      id: "scarlet",
      name: "Scarlet",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Альтернативный магазин приложений, позволяющий устанавливать IPA без компьютера",
      steps: [
        "Посетите сайт Scarlet (https://usescarlet.com) на вашем iOS устройстве",
        "Нажмите кнопку "Install" для установки приложения Scarlet",
        "Следуйте инструкциям на экране для установки профиля",
        "В Настройках → Общие → Управление устройством, доверьте профилю",
        "Откройте приложение Scarlet",
        "В настройках импортируйте наш сертификат разработчика",
        "Перейдите в раздел "Sideload" для загрузки собственных IPA файлов",
        "Выберите файл IPA и нажмите "Install"",
        "Приложение будет установлено на ваше устройство"
      ],
      pros: ["Не требуется компьютер", "Простой интерфейс", "Встроенный каталог приложений", "Поддержка кастомных сертификатов"],
      cons: ["Приложение может быть отозвано Apple", "Ограничения без платной подписки", "Не все IPA файлы совместимы"],
      resources: [
        { name: "Официальный сайт Scarlet", url: "https://usescarlet.com" },
        { name: "Telegram канал", url: "https://t.me/usescarlet" }
      ]
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
            Установка приложений через сертификаты
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl font-inter">
            Подробные инструкции по установке iOS приложений (IPA) с помощью сертификатов разработчика.
            Выберите предпочтительный метод установки из приведенных ниже вариантов.
          </p>
        </div>
      </section>

      {/* Warning about certificate usage */}
      <section className="mb-10">
        <Card className="border-amber-300 dark:border-amber-600 bg-amber-50/50 dark:bg-amber-950/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-amber-800 dark:text-amber-400 mb-2">
                  Важная информация о сертификатах
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  Установка приложений через сертификаты разработчика является альтернативным методом установки и может иметь ограничения. 
                  Apple может отозвать сертификаты без предупреждения. Используйте наши премиум-сертификаты для максимальной стабильности и продолжительного срока службы.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Installation Methods */}
      <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <h2 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-6">
          Способы установки IPA файлов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {installationMethods.map((method) => (
            <Card 
              key={method.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                selectedMethod === method.id 
                  ? 'border-theme-blue bg-theme-blue/5 dark:bg-theme-blue/10' 
                  : 'hover:border-theme-blue/50'
              }`}
              onClick={() => setSelectedMethod(selectedMethod === method.id ? null : method.id)}
            >
              <CardHeader className="p-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  selectedMethod === method.id ? 'text-theme-blue' : 'text-gray-600 dark:text-gray-400'
                } bg-gray-100 dark:bg-gray-800`}>
                  {method.icon}
                </div>
                <CardTitle className={`text-lg ${
                  selectedMethod === method.id ? 'text-theme-blue' : ''
                }`}>
                  {method.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {method.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Selected method detailed instructions */}
        {selectedMethod && installationMethods.find(m => m.id === selectedMethod) && (
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-12 animate-fade-in">
            {installationMethods.map((method) => (
              method.id === selectedMethod && (
                <div key={method.id} className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white">
                        {method.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{method.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium font-montserrat text-black dark:text-white mb-4">
                      Инструкция по установке
                    </h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300 font-inter">
                      {method.steps.map((step, index) => (
                        <li key={index} className="pl-2">{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium font-montserrat text-black dark:text-white mb-3">
                        Преимущества
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                        {method.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium font-montserrat text-black dark:text-white mb-3">
                        Ограничения
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                        {method.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium font-montserrat text-black dark:text-white mb-3">
                      Полезные ресурсы
                    </h4>
                    <ul className="pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                      {method.resources.map((resource, index) => (
                        <li key={index}>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-theme-blue hover:underline"
                          >
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
        
        {/* Common problems and solutions */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12">
          <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-6">
            Частые проблемы и их решения
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-2 font-montserrat">
                Приложение не запускается или вылетает
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 font-inter">
                Если после установки приложение закрывается сразу после запуска или не запускается вовсе:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                <li>Убедитесь, что вы доверили сертификату разработчика в настройках (Настройки → Основные → Профили и управление устройством)</li>
                <li>Проверьте, не отозван ли сертификат Apple (может потребоваться переустановка с новым сертификатом)</li>
                <li>Убедитесь, что IPA файл совместим с вашей версией iOS</li>
                <li>Попробуйте перезагрузить устройство и запустить приложение снова</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-2 font-montserrat">
                Ошибка "Не удается проверить приложение"
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 font-inter">
                Если вы видите сообщение "Не удается проверить приложение" или "Невозможно установить":
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                <li>Проверьте подключение к интернету - для первого запуска требуется соединение с серверами Apple</li>
                <li>Убедитесь, что сертификат не был отозван</li>
                <li>Попробуйте использовать другой метод установки с нашим премиум-сертификатом</li>
                <li>Включите режим полета, затем выключите его и повторите попытку</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-2 font-montserrat">
                Сертификат отозван или истек срок действия
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 font-inter">
                Если сертификат был отозван Apple или истек срок его действия:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-inter">
                <li>Свяжитесь с нами для получения нового действующего сертификата</li>
                <li>Удалите старый профиль в настройках устройства</li>
                <li>Переустановите приложение с новым сертификатом</li>
                <li>Рассмотрите возможность использования нашего премиум-сертификата с увеличенным сроком действия</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Premium certificates section */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm mb-12">
          <h3 className="text-2xl font-bold font-montserrat text-black dark:text-white mb-4">
            Премиум-сертификаты для максимальной стабильности
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-inter">
            Получите расширенные возможности с нашими премиум-сертификатами разработчика:
          </p>
          
          <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 font-inter mb-6">
            <li>Увеличенный срок действия - до 365 дней без необходимости переустановки</li>
            <li>Повышенная стабильность - меньший риск отзыва сертификата</li>
            <li>Неограниченное количество устанавливаемых приложений</li>
            <li>Совместимость со всеми методами установки</li>
            <li>Приоритетная техническая поддержка</li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/developer-certificate-info" onClick={scrollToTop}>
              <Button className="bg-theme-blue dark:text-white text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
                Узнать больше о сертификатах
              </Button>
            </Link>
            
            <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-theme-blue/50 hover:border-theme-blue px-6 py-2 rounded-full font-medium transition-all duration-300">
                Связаться с поддержкой
              </Button>
            </a>
          </div>
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
