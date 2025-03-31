import React, { useState, useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, AlertTriangle, CheckCircle, Smartphone, Laptop, Globe, DownloadCloud, FileDown, ArrowUp, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Steps } from "@/components/steps";
import { useIsMobile } from "@/hooks/use-mobile";

const InstallationGuide = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("udid");

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

      {/* Installation Guide Content */}
      <section className="py-8 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            Установка IPA-приложений
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            В этом руководстве собраны все доступные способы установки IPA-файлов через сертификаты разработчика на устройства iOS. 
            Выберите наиболее удобный для вас метод.
          </p>

          {/* Note about UDID */}
          <div className="mb-10 p-6 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Info className="h-6 w-6 text-theme-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Получение UDID устройства</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Прежде чем приступить к установке IPA-файлов, вам понадобится UDID (уникальный идентификатор) вашего устройства. 
                  Этот идентификатор необходим для регистрации устройства в сертификате разработчика.
                </p>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
                  onClick={() => setActiveTab("udid")}
                >
                  Инструкция по получению UDID
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Methods Tabs */}
        <Tabs defaultValue="udid" value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto overflow-x-auto">
            <TabsTrigger value="udid" className="py-3 px-4">
              <div className="flex flex-col items-center">
                <Smartphone className="h-5 w-5 mb-1" />
                <span>Получение UDID</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="altstore" className="py-3 px-4">
              <div className="flex flex-col items-center">
                <FileDown className="h-5 w-5 mb-1" />
                <span>AltStore</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="sideloadly" className="py-3 px-4">
              <div className="flex flex-col items-center">
                <Laptop className="h-5 w-5 mb-1" />
                <span>Sideloadly</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="other" className="py-3 px-4">
              <div className="flex flex-col items-center">
                <Globe className="h-5 w-5 mb-1" />
                <span>Другие методы</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* UDID Section */}
          <TabsContent value="udid" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Получение UDID устройства</CardTitle>
                <CardDescription>
                  UDID (Unique Device Identifier) - уникальный идентификатор вашего iOS устройства, необходимый для регистрации в сертификате разработчика
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Способы получения UDID</h3>

                <div className="space-y-6">
                  {/* Method 1 */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-theme-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                      Через iTunes (компьютер)
                    </h4>
                    <Steps>
                      <Steps.Step>Подключите устройство к компьютеру с помощью USB-кабеля</Steps.Step>
                      <Steps.Step>Откройте iTunes (для macOS Catalina и новее используйте Finder)</Steps.Step>
                      <Steps.Step>Нажмите на иконку устройства в верхней части iTunes</Steps.Step>
                      <Steps.Step>На странице устройства найдите раздел с серийным номером</Steps.Step>
                      <Steps.Step>Щелкните по серийному номеру несколько раз, пока не отобразится UDID</Steps.Step>
                      <Steps.Step>Скопируйте UDID (щелкните правой кнопкой мыши и выберите "Копировать")</Steps.Step>
                    </Steps>
                  </div>

                  {/* Method 2 */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-theme-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                      Через веб-сервис UDID.io
                    </h4>
                    <Steps>
                      <Steps.Step>Откройте Safari на iOS-устройстве</Steps.Step>
                      <Steps.Step>Перейдите на сайт <a href="https://udid.io" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">UDID.io <ExternalLink className="h-3 w-3 ml-1" /></a></Steps.Step>
                      <Steps.Step>Следуйте инструкциям на экране для установки профиля</Steps.Step>
                      <Steps.Step>После установки профиля, UDID будет отображён на экране</Steps.Step>
                      <Steps.Step>Скопируйте UDID и сохраните его</Steps.Step>
                    </Steps>
                  </div>

                  {/* Method 3 */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-theme-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
                      Через Apple Configurator 2 (для macOS)
                    </h4>
                    <Steps>
                      <Steps.Step>Скачайте и установите <a href="https://apps.apple.com/us/app/apple-configurator-2/id1037126344" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">Apple Configurator 2 <ExternalLink className="h-3 w-3 ml-1" /></a> из Mac App Store</Steps.Step>
                      <Steps.Step>Подключите iOS-устройство к Mac через USB</Steps.Step>
                      <Steps.Step>Запустите Apple Configurator 2</Steps.Step>
                      <Steps.Step>Выберите ваше устройство в списке</Steps.Step>
                      <Steps.Step>Нажмите на значок информации (i) в верхнем меню</Steps.Step>
                      <Steps.Step>В разделе "Общая информация" найдите и скопируйте UDID</Steps.Step>
                    </Steps>
                  </div>

                  {/* Method 4 */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <span className="bg-theme-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">4</span>
                      Отправьте нам номер телефона
                    </h4>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      Если у вас возникают трудности с получением UDID, вы можете отправить нам номер телефона вашего устройства:
                    </p>
                    <Steps>
                      <Steps.Step>На iPhone перейдите в Настройки → Основные → Об устройстве</Steps.Step>
                      <Steps.Step>Найдите и скопируйте номер телефона (не ваш номер, а идентификатор устройства)</Steps.Step>
                      <Steps.Step>Отправьте этот номер нашему менеджеру в Telegram: <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">@icertmanager <ExternalLink className="h-3 w-3 ml-1" /></a></Steps.Step>
                      <Steps.Step>Мы поможем получить UDID и зарегистрируем ваше устройство</Steps.Step>
                    </Steps>
                  </div>
                </div>

                <div className="mt-8 p-4 border border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50/50 dark:bg-orange-900/20">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <strong>Важно:</strong> Никогда не передавайте свой UDID ненадежным источникам. UDID должен использоваться только для регистрации устройства в программе разработчика Apple.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("altstore")}>
                  Перейти к AltStore
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* AltStore Section */}
          <TabsContent value="altstore" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-montserrat">Установка через AltStore</CardTitle>
                    <CardDescription>
                      AltStore - популярное решение для установки IPA без джейлбрейка
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                    Рекомендуемый метод
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Info className="w-5 h-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">О методе</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        AltStore - это альтернативный магазин приложений для устройств iOS, который не требует джейлбрейка. Он использует Apple ID для подписи приложений и позволяет устанавливать IPA-файлы. AltStore использует компьютер с AltServer, который периодически обновляет подпись приложений, чтобы они не переставали работать через 7 дней.
                      </p>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Как установить AltStore</h3>
                    
                    <h4 className="text-lg font-medium mb-3">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>iPhone или iPad с iOS 12.2 или новее</li>
                      <li>Mac с macOS 10.14.4 или новее / PC с Windows 10 или новее</li>
                      <li>Apple ID (можно использовать существующий или создать новый)</li>
                      <li>USB-кабель для подключения устройства к компьютеру</li>
                    </ul>

                    <h4 className="text-lg font-medium mb-3">Установка на macOS:</h4>
                    <Steps>
                      <Steps.Step>Скачайте <a href="https://altstore.io" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">AltServer <ExternalLink className="h-3 w-3 ml-1" /></a> для macOS с официального сайта</Steps.Step>
                      <Steps.Step>Распакуйте и переместите AltServer в папку "Программы"</Steps.Step>
                      <Steps.Step>Запустите AltServer (иконка появится в строке меню)</Steps.Step>
                      <Steps.Step>Подключите устройство iOS к Mac через USB</Steps.Step>
                      <Steps.Step>Выберите "Install AltStore" из меню AltServer</Steps.Step>
                      <Steps.Step>Выберите ваше устройство и введите ваш Apple ID и пароль</Steps.Step>
                      <Steps.Step>Дождитесь завершения установки AltStore на ваше устройство</Steps.Step>
                    </Steps>

                    <h4 className="text-lg font-medium mb-3 mt-6">Установка на Windows:</h4>
                    <Steps>
                      <Steps.Step>Скачайте <a href="https://altstore.io" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">AltServer <ExternalLink className="h-3 w-3 ml-1" /></a> для Windows с официального сайта</Steps.Step>
                      <Steps.Step>Установите iTunes (не из Microsoft Store) и iCloud для Windows</Steps.Step>
                      <Steps.Step>Установите и запустите AltServer (иконка появится в системном трее)</Steps.Step>
                      <Steps.Step>Подключите устройство iOS к компьютеру через USB</Steps.Step>
                      <Steps.Step>Щелкните правой кнопкой на иконке AltServer и выберите "Install AltStore"</Steps.Step>
                      <Steps.Step>Выберите ваше устройство</Steps.Step>
                      <Steps.Step>Введите ваш Apple ID и пароль</Steps.Step>
                      <Steps.Step>Дождитесь завершения установки AltStore на ваше устройство</Steps.Step>
                    </Steps>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Установка IPA через AltStore</h3>
                    
                    <Steps>
                      <Steps.Step>На устройстве iOS перейдите в Настройки → Основные → Управление устройством</Steps.Step>
                      <Steps.Step>Найдите свой Apple ID и нажмите "Доверять"</Steps.Step>
                      <Steps.Step>Откройте AltStore на вашем устройстве</Steps.Step>
                      <Steps.Step>Перейдите в раздел "My Apps" и нажмите "+" в верхнем углу</Steps.Step>
                      <Steps.Step>Выберите IPA-файл, который вы хотите установить (вы можете скачать его через Safari и открыть в AltStore через "Поделиться")</Steps.Step>
                      <Steps.Step>Дождитесь завершения установки приложения</Steps.Step>
                    </Steps>

                    <div className="mt-6 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
                      <div className="flex gap-3">
                        <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <strong>Совет:</strong> Убедитесь, что компьютер с запущенным AltServer находится в той же Wi-Fi сети, что и ваше устройство iOS, чтобы обновление подписи приложений происходило автоматически.
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                            Если у вас возникают проблемы с обновлением приложений, регулярно подключайте устройство к компьютеру с запущенным AltServer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("udid")}>
                  Назад к получению UDID
                </Button>
                <Button onClick={() => setActiveTab("sideloadly")}>
                  Перейти к Sideloadly
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sideloadly Section */}
          <TabsContent value="sideloadly" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Установка через Sideloadly</CardTitle>
                <CardDescription>
                  Sideloadly - простой инструмент для установки IPA с компьютера на iOS без джейлбрейка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-theme-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">О методе</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Sideloadly - это бесплатный инструмент для сайдлоадинга приложений на iOS и tvOS без джейлбрейка. Он работает как на Windows, так и на macOS, и отличается простым интерфейсом и высокой скоростью работы. Sideloadly позволяет устанавливать приложения как с бесплатным Apple ID (с ограничением в 7 дней), так и с сертификатом разработчика (действует год).
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Установка Sideloadly</h3>
                  
                  <h4 className="text-lg font-medium mb-3">Требования:</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>iPhone или iPad с iOS 10 или новее</li>
                    <li>Mac с macOS 10.13 или новее / PC с Windows 7 или новее</li>
                    <li>Apple ID (можно использовать существующий или создать новый)</li>
                    <li>USB-кабель для подключения устройства к компьютеру</li>
                  </ul>

                  <Steps>
                    <Steps.Step>Скачайте <a href="https://sideloadly.io" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">Sideloadly <ExternalLink className="h-3 w-3 ml-1" /></a> с официального сайта для вашей операционной системы</Steps.Step>
                    <Steps.Step>Установите iTunes (для Windows) или убедитесь, что он установлен (для macOS)</Steps.Step>
                    <Steps.Step>Установите и запустите Sideloadly</Steps.Step>
                  </Steps>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Установка IPA через Sideloadly</h3>
                  
                  <Steps>
                    <Steps.Step>Подключите устройство iOS к компьютеру через USB</Steps.Step>
                    <Steps.Step>Запустите Sideloadly</Steps.Step>
                    <Steps.Step>Перетащите IPA-файл в окно Sideloadly или нажмите на кнопку выбора файла</Steps.Step>
                    <Steps.Step>Убедитесь, что ваше устройство отображается в выпадающем списке</Steps.Step>
                    <Steps.Step>Введите ваш Apple ID и пароль (или используйте сертификат разработчика, если он у вас есть)</Steps.Step>
                    <Steps.Step>Нажмите кнопку "Start" для начала процесса установки</Steps.Step>
                    <Steps.Step>Дождитесь завершения установки приложения</Steps.Step>
                    <Steps.Step>На устройстве iOS перейдите в Настройки → Основные → Управление устройством/Профили</Steps.Step>
                    <Steps.Step>Найдите профиль с вашим Apple ID и нажмите "Доверять"</Steps.Step>
                    <Steps.Step>Теперь вы можете запустить установленное приложение</Steps.Step>
                  </Steps>

                  <div className="mt-6 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
                    <div className="flex gap-3">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>Совет:</strong> При использовании обычного Apple ID (не сертификата разработчика) приложения будут работать только 7 дней, после чего их нужно будет переустановить.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                          Если у вас есть сертификат разработчика, установите его в Sideloadly во вкладке настроек перед установкой приложений.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <strong>Преимущества Sideloadly:</strong> Простой интерфейс, быстрая установка, поддержка Windows и macOS, возможность использования как Apple ID, так и сертификата разработчика.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("altstore")}>
                  Назад к AltStore
                </Button>
                <Button onClick={() => setActiveTab("other")}>
                  Другие методы
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Other Methods Section */}
          <TabsContent value="other" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Другие методы установки</CardTitle>
                <CardDescription>
                  Альтернативные способы установки IPA-приложений на iOS устройства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Method 1: Apple Configurator 2 */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">Apple Configurator 2 (только для macOS)</h3>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-5 h-5 text-theme-blue" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Apple Configurator 2 — официальный инструмент Apple для настройки устройств iOS. С его помощью можно устанавливать приложения, используя сертификат разработчика.
                      </p>
                    </div>

                    <h4 className="text-lg font-medium mb-3">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>Mac с macOS 10.15.6 или новее</li>
                      <li>Сертификат разработчика Apple</li>
                      <li>Устройство iOS</li>
                    </ul>
                    
                    <Steps>
                      <Steps.Step>Скачайте и установите <a href="https://apps.apple.com/us/app/apple-configurator-2/id1037126344" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">Apple Configurator 2 <ExternalLink className="h-3 w-3 ml-1" /></a> из Mac App Store</Steps.Step>
                      <Steps.Step>Подключите iOS-устройство к Mac через USB</Steps.Step>
                      <Steps.Step>Запустите Apple Configurator 2</Steps.Step>
                      <Steps.Step>Выберите ваше устройство в списке</Steps.Step>
                      <Steps.Step>Нажмите "Добавить" в верхнем меню, затем выберите "Приложения"</Steps.Step>
                      <Steps.Step>Нажмите кнопку "Выбрать из моего Mac"</Steps.Step>
                      <Steps.Step>Найдите и выберите IPA-файл</Steps.Step>
                      <Steps.Step>Выберите свой сертификат разработчика, если потребуется</Steps.Step>
                      <Steps.Step>Нажмите "Добавить" для начала установки</Steps.Step>
                      <Steps.Step>На устройстве iOS перейдите в Настройки → Основные → Профили и управление устройством</Steps.Step>
                      <Steps.Step>Найдите профиль разработчика и нажмите "Доверять"</Steps.Step>
                    </Steps>
                  </div>

                  {/* Method 2: iMazing */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">iMazing</h3>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-5 h-5 text-theme-blue" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        iMazing — мощный менеджер для устройств iOS, который позволяет устанавливать IPA-файлы с компьютера на iPhone или iPad без джейлбрейка.
                      </p>
                    </div>

                    <h4 className="text-lg font-medium mb-3">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>Mac с macOS 10.13 или новее / PC с Windows 7 или новее</li>
                      <li>Apple ID или сертификат разработчика</li>
                      <li>USB-кабель для подключения устройства</li>
                    </ul>
                    
                    <Steps>
                      <Steps.Step>Скачайте и установите <a href="https://imazing.com/" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">iMazing <ExternalLink className="h-3 w-3 ml-1" /></a> с официального сайта</Steps.Step>
                      <Steps.Step>Подключите iOS-устройство к компьютеру через USB</Steps.Step>
                      <Steps.Step>Запустите iMazing и дождитесь обнаружения устройства</Steps.Step>
                      <Steps.Step>Выберите ваше устройство в левой панели</Steps.Step>
                      <Steps.Step>Нажмите на "Установить приложение" в правой части окна</Steps.Step>
                      <Steps.Step>Выберите IPA-файл на вашем компьютере</Steps.Step>
                      <Steps.Step>Следуйте инструкциям на экране для завершения установки</Steps.Step>
                      <Steps.Step>Введите свой Apple ID или выберите сертификат разработчика, если потребуется</Steps.Step>
                      <Steps.Step>На устройстве iOS перейдите в Настройки → Основные → Профили и управление устройством</Steps.Step>
                      <Steps.Step>Найдите профиль и нажмите "Доверять"</Steps.Step>
                    </Steps>

                    <div className="mt-6 p-4 border border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50/50 dark:bg-orange-900/20">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>Примечание:</strong> iMazing является платным приложением, но предлагает бесплатную пробную версию с ограниченным функционалом. Для полного использования функций сайдлоадинга может потребоваться приобрести лицензию.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Method 3: iOS App Signer */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">iOS App Signer + Xcode (только для macOS)</h3>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-5 h-5 text-theme-blue" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        iOS App Signer в сочетании с Xcode позволяет переподписывать IPA-файлы вашим Apple ID или сертификатом разработчика и устанавливать их на устройство.
                      </p>
                    </div>

                    <h4 className="text-lg font-medium mb-3">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>Mac с macOS 10.13 или новее</li>
                      <li>Xcode (скачивается из Mac App Store)</li>
                      <li>Apple ID (бесплатный или платный)</li>
                      <li>iOS App Signer</li>
                    </ul>
                    
                    <Steps>
                      <Steps.Step>Установите Xcode из Mac App Store</Steps.Step>
                      <Steps.Step>Скачайте <a href="https://dantheman827.github.io/ios-app-signer/" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">iOS App Signer <ExternalLink className="h-3 w-3 ml-1" /></a></Steps.Step>
                      <Steps.Step>Запустите Xcode и войдите в свой Apple ID (Xcode → Preferences → Accounts)</Steps.Step>
                      <Steps.Step>Создайте новый пустой проект в Xcode (File → New → Project)</Steps.Step>
                      <Steps.Step>Подключите устройство iOS к Mac</Steps.Step>
                      <Steps.Step>В Xcode выберите ваше устройство в качестве цели для запуска</Steps.Step>
                      <Steps.Step>Запустите iOS App Signer</Steps.Step>
                      <Steps.Step>Выберите IPA-файл в поле "Input File"</Steps.Step>
                      <Steps.Step>Выберите свой профиль в выпадающем меню "Signing Certificate"</Steps.Step>
                      <Steps.Step>Нажмите "Start" для переподписания приложения</Steps.Step>
                      <Steps.Step>После окончания процесса переподписания, откройте Xcode</Steps.Step>
                      <Steps.Step>В Xcode выберите Window → Devices and Simulators</Steps.Step>
                      <Steps.Step>Выберите ваше устройство и нажмите "+" под разделом "Installed Apps"</Steps.Step>
                      <Steps.Step>Выберите переподписанный IPA-файл и дождитесь завершения установки</Steps.Step>
                    </Steps>
                  </div>

                  {/* Method 4: SignTools */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">SignTools (для продвинутых пользователей)</h3>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-5 h-5 text-theme-blue" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        SignTools - это открытый веб-сервис для подписи IPA-файлов без компьютера. Вы можете развернуть его на своем сервере или использовать общедоступные экземпляры.
                      </p>
                    </div>

                    <h4 className="text-lg font-medium mb-3">Основная информация:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>Позволяет подписывать IPA-файлы через веб-интерфейс</li>
                      <li>Требуется базовое понимание работы с серверами</li>
                      <li>Требуется Apple ID или сертификат разработчика</li>
                      <li>Можно настроить для использования на мобильных устройствах</li>
                    </ul>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Подробные инструкции по установке и использованию SignTools можно найти в <a href="https://github.com/SignTools/SignTools" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">официальном репозитории GitHub <ExternalLink className="h-3 w-3 ml-1" /></a>.
                    </p>

                    <div className="p-4 border border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50/50 dark:bg-orange-900/20">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>Предупреждение:</strong> Установка и настройка SignTools может быть сложной для неопытных пользователей. Рекомендуется использовать более простые методы, такие как AltStore или Sideloadly, если у вас нет опыта работы с серверными приложениями.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("sideloadly")}>
                  Назад к Sideloadly
                </Button>
                <Button onClick={() => setActiveTab("udid")}>
                  Вернуться к UDID
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Back to top button */}
        <div className="flex flex-col items-center justify-center mt-12">
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
