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
            <TabsTrigger value="esign" className="py-3 px-4">
              <div className="flex flex-col items-center">
                <FileDown className="h-5 w-5 mb-1" />
                <span>ESign</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="gbox" className="py-3 px-4">
              <div className="flex flex-col items-center">
                <Laptop className="h-5 w-5 mb-1" />
                <span>GBox</span>
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
              <CardFooter className="flex justify-end">
                <Button onClick={() => setActiveTab("esign")}>
                  Перейти к ESign
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* ESign Section */}
          <TabsContent value="esign" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Установка через ESign</CardTitle>
                <CardDescription>
                  ESign - популярное решение для установки IPA напрямую на устройстве iOS без компьютера
                </CardDescription>
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
                        ESign - это приложение для iOS, которое позволяет устанавливать IPA-файлы прямо на вашем устройстве без необходимости подключения к компьютеру. Оно может использовать ваш сертификат разработчика для подписи приложений, обеспечивая их работу в течение всего срока действия сертификата.
                      </p>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Получение и установка ESign</h3>
                    
                    <Steps>
                      <Steps.Step>Свяжитесь с нашим менеджером в Telegram: <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">@icertmanager <ExternalLink className="h-3 w-3 ml-1" /></a></Steps.Step>
                      <Steps.Step>Запросите у менеджера ссылку для установки приложения ESign</Steps.Step>
                      <Steps.Step>Откройте полученную ссылку на вашем iOS-устройстве в браузере Safari</Steps.Step>
                      <Steps.Step>Нажмите на кнопку "Установить" или "Install" на открывшейся странице</Steps.Step>
                      <Steps.Step>Подтвердите установку в появившемся диалоговом окне</Steps.Step>
                      <Steps.Step>Дождитесь завершения установки ESign на ваше устройство</Steps.Step>
                      <Steps.Step>Перейдите в Настройки → Основные → VPN и управление устройством</Steps.Step>
                      <Steps.Step>Найдите профиль ESign и нажмите "Доверять"</Steps.Step>
                    </Steps>

                    <h4 className="text-lg font-medium mb-3 mt-6">Импорт сертификата разработчика:</h4>
                    <Steps>
                      <Steps.Step>Запросите у нашего менеджера в Telegram (<a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">@icertmanager <ExternalLink className="h-3 w-3 ml-1" /></a>) файлы сертификата (.p12) и профиля (.mobileprovision)</Steps.Step>
                      <Steps.Step>Откройте ESign на вашем устройстве</Steps.Step>
                      <Steps.Step>Перейдите во вкладку "Settings" (Настройки)</Steps.Step>
                      <Steps.Step>Выберите "Certificate" (Сертификат)</Steps.Step>
                      <Steps.Step>Нажмите "Import P12" и выберите полученный файл .p12</Steps.Step>
                      <Steps.Step>Введите пароль к сертификату (предоставляется менеджером вместе с файлом)</Steps.Step>
                      <Steps.Step>После импорта сертификата, нажмите "Import .mobileprovision" и выберите полученный файл профиля</Steps.Step>
                    </Steps>

                    <h4 className="text-lg font-medium mb-3 mt-6">Установка IPA через ESign:</h4>
                    <Steps>
                      <Steps.Step>Скачайте IPA-файл на ваше устройство (через Safari или другой источник)</Steps.Step>
                      <Steps.Step>Откройте ESign</Steps.Step>
                      <Steps.Step>На главном экране нажмите кнопку "+" в верхнем правом углу</Steps.Step>
                      <Steps.Step>Выберите "Import IPA" и найдите скачанный IPA-файл</Steps.Step>
                      <Steps.Step>Выберите IPA-файл для установки из списка</Steps.Step>
                      <Steps.Step>Нажмите кнопку "Sign" (Подписать) рядом с выбранным приложением</Steps.Step>
                      <Steps.Step>В открывшемся меню выберите ваш импортированный сертификат разработчика</Steps.Step>
                      <Steps.Step>Нажмите "Sign" и дождитесь завершения процесса подписи</Steps.Step>
                      <Steps.Step>После подписи нажмите "Install" для установки приложения</Steps.Step>
                      <Steps.Step>Подтвердите установку в появившемся диалоговом окне</Steps.Step>
                    </Steps>

                    <div className="mt-6 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
                      <div className="flex gap-3">
                        <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <strong>Совет:</strong> Если вы не можете получить файлы сертификата напрямую, вы можете использовать ESign со стандартными методами подписи (которые работают 7 дней) и регулярно продлевать их.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <strong>Преимущества ESign:</strong>
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                          <li>Не требует компьютера для установки приложений</li>
                          <li>Поддерживает импорт собственных сертификатов разработчика</li>
                          <li>Простой и понятный интерфейс</li>
                          <li>Возможность управлять несколькими приложениями</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("udid")}>
                  Назад к получению UDID
                </Button>
                <Button onClick={() => setActiveTab("gbox")}>
                  Перейти к GBox
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* GBox Section */}
          <TabsContent value="gbox" className="mt-6 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Установка через GBox</CardTitle>
                <CardDescription>
                  GBox - альтернативный магазин приложений с поддержкой установки IPA-файлов
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
                      GBox - это альтернативный магазин приложений для iOS, который позволяет устанавливать приложения, не представленные в официальном App Store, включая IPA-файлы. GBox поддерживает работу с сертификатами разработчика и предоставляет удобный интерфейс для управления приложениями.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Получение и установка GBox</h3>
                  
                  <Steps>
                    <Steps.Step>Свяжитесь с нашим менеджером в Telegram: <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">@icertmanager <ExternalLink className="h-3 w-3 ml-1" /></a></Steps.Step>
                    <Steps.Step>Запросите у менеджера ссылку для установки приложения GBox</Steps.Step>
                    <Steps.Step>Откройте полученную ссылку на вашем iOS-устройстве в браузере Safari</Steps.Step>
                    <Steps.Step>Нажмите на кнопку "Установить" или "Install" на открывшейся странице</Steps.Step>
                    <Steps.Step>Подтвердите установку в появившемся диалоговом окне</Steps.Step>
                    <Steps.Step>Дождитесь завершения установки GBox на ваше устройство</Steps.Step>
                    <Steps.Step>Перейдите в Настройки → Основные → VPN и управление устройством</Steps.Step>
                    <Steps.Step>Найдите профиль GBox и нажмите "Доверять"</Steps.Step>
                    <Steps.Step>Теперь вы можете открыть и использовать GBox</Steps.Step>
                  </Steps>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Использование GBox с сертификатом разработчика</h3>
                  
                  <h4 className="text-lg font-medium mb-3">Импорт сертификата (если есть файлы .p12 и .mobileprovision):</h4>
                  <Steps>
                    <Steps.Step>Получите файлы сертификата (.p12) и профиля (.mobileprovision) от нашего менеджера</Steps.Step>
                    <Steps.Step>Откройте GBox на вашем устройстве</Steps.Step>
                    <Steps.Step>Перейдите во вкладку "Settings" или "Настройки"</Steps.Step>
                    <Steps.Step>Найдите раздел "Developer Certificate" или "Сертификаты"</Steps.Step>
                    <Steps.Step>Следуйте инструкциям для импорта сертификата и профиля</Steps.Step>
                    <Steps.Step>Введите пароль к сертификату, если потребуется</Steps.Step>
                  </Steps>

                  <h4 className="text-lg font-medium mb-3 mt-6">Установка IPA через GBox:</h4>
                  <Steps>
                    <Steps.Step>Скачайте IPA-файл на ваше устройство iOS</Steps.Step>
                    <Steps.Step>Откройте GBox</Steps.Step>
                    <Steps.Step>Перейдите во вкладку "My Apps" или "Мои приложения"</Steps.Step>
                    <Steps.Step>Нажмите на кнопку "+" или "Import"</Steps.Step>
                    <Steps.Step>Выберите скачанный IPA-файл</Steps.Step>
                    <Steps.Step>GBox предложит подписать приложение вашим сертификатом разработчика</Steps.Step>
                    <Steps.Step>Выберите ваш сертификат из списка</Steps.Step>
                    <Steps.Step>Нажмите "Install" или "Установить"</Steps.Step>
                    <Steps.Step>Дождитесь завершения установки приложения</Steps.Step>
                  </Steps>

                  <h4 className="text-lg font-medium mb-3 mt-6">Альтернативный метод (через библиотеку GBox):</h4>
                  <Steps>
                    <Steps.Step>Откройте GBox</Steps.Step>
                    <Steps.Step>Перейдите во вкладку "Store" или "Магазин"</Steps.Step>
                    <Steps.Step>Найдите нужное приложение в каталоге GBox</Steps.Step>
                    <Steps.Step>Нажмите на приложение и затем на кнопку "Get" или "Скачать"</Steps.Step>
                    <Steps.Step>Выберите "Sign with Developer Certificate" (Подписать сертификатом разработчика)</Steps.Step>
                    <Steps.Step>Выберите ваш импортированный сертификат</Steps.Step>
                    <Steps.Step>Дождитесь завершения установки приложения</Steps.Step>
                  </Steps>
                </div>

                <div className="mt-6 p-4 border border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50/50 dark:bg-orange-900/20">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <strong>Примечание:</strong> GBox может предлагать платные подписки или дополнительные функции. Для использования с вашим собственным сертификатом разработчика обычно достаточно базовой (бесплатной) версии приложения.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <strong>Преимущества GBox:</strong>
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>Встроенная библиотека приложений, отсутствующих в App Store</li>
                        <li>Поддержка импорта собственных IPA-файлов</li>
                        <li>Возможность использования с сертификатом разработчика</li>
                        <li>Не требуется подключение к компьютеру</li>
                        <li>Удобное управление установленными приложениями</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("esign")}>
                  Назад к ESign
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
                  {/* Sideloadly with Certificate */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-theme-blue transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">Sideloadly с сертификатом разработчика</h3>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="mt-1 w-10 h-10 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-5 h-5 text-theme-blue" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Sideloadly - это бесплатный инструмент для сайдлоадинга приложений на iOS и tvOS с компьютера. При использовании с сертификатом разработчика он обеспечивает работу приложений в течение всего срока действия сертификата (1 год).
                      </p>
                    </div>

                    <h4 className="text-lg font-medium mb-3">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>iPhone или iPad с iOS 10 или новее</li>
                      <li>Mac с macOS 10.13 или новее / PC с Windows 7 или новее</li>
                      <li>Файлы сертификата разработчика (.p12 и .mobileprovision)</li>
                      <li>USB-кабель для подключения устройства к компьютеру</li>
                    </ul>
                    
                    <Steps>
                      <Steps.Step>Скачайте <a href="https://sideloadly.io" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">Sideloadly <ExternalLink className="h-3 w-3 ml-1" /></a> с официального сайта для вашей операционной системы</Steps.Step>
                      <Steps.Step>Установите iTunes (для Windows) или убедитесь, что он установлен (для macOS)</Steps.Step>
                      <Steps.Step>Установите и запустите Sideloadly</Steps.Step>
                      <Steps.Step>Подключите устройство iOS к компьютеру через USB</Steps.Step>
                      <Steps.Step>Перетащите IPA-файл в окно Sideloadly или нажмите на кнопку выбора файла</Steps.Step>
                      <Steps.Step>Убедитесь, что ваше устройство отображается в выпадающем списке</Steps.Step>
                      <Steps.Step>Нажмите на значок шестеренки (настройки)</Steps.Step>
                      <Steps.Step>Выберите опцию "Use custom .p12 & .mobileprovision"</Steps.Step>
                      <Steps.Step>Укажите путь к файлу .p12 и введите пароль (полученный от менеджера)</Steps.Step>
                      <Steps.Step>Укажите путь к файлу .mobileprovision</Steps.Step>
                      <Steps.Step>Закройте окно настроек и нажмите кнопку "Start" для начала процесса установки</Steps.Step>
                      <Steps.Step>Дождитесь завершения установки приложения</Steps.Step>
                      <Steps.Step>На устройстве iOS перейдите в Настройки → Основные → VPN и управление устройством</Steps.Step>
                      <Steps.Step>Найдите профиль разработчика и нажмите "Доверять"</Steps.Step>
                      <Steps.Step>Теперь вы можете запустить установленное приложение</Steps.Step>
                    </Steps>

                    <div className="mt-6 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50/50 dark:bg-blue-900/20">
                      <div className="flex gap-3">
                        <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <strong>Совет:</strong> Для получения файлов сертификата (.p12 и .mobileprovision) обратитесь к нашему менеджеру в Telegram: <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">@icertmanager <ExternalLink className="h-3 w-3 ml-1" /></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                      <li>Сертификат разработчика</li>
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
                      <Steps.Step>При запросе выберите ваш сертификат разработчика</Steps.Step>
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
                        iOS App Signer в сочетании с Xcode позволяет переподписывать IPA-файлы вашим сертификатом разработчика и устанавливать их на устройство.
                      </p>
                    </div>

                    <h4 className="text-lg font-medium mb-3">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li>Mac с macOS 10.13 или новее</li>
                      <li>Xcode (скачивается из Mac App Store)</li>
                      <li>Сертификат разработчика</li>
                      <li>iOS App Signer</li>
                    </ul>
                    
                    <Steps>
                      <Steps.Step>Установите Xcode из Mac App Store</Steps.Step>
                      <Steps.Step>Скачайте <a href="https://dantheman827.github.io/ios-app-signer/" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline inline-flex items-center">iOS App Signer <ExternalLink className="h-3 w-3 ml-1" /></a></Steps.Step>
                      <Steps.Step>Запустите Xcode и войдите в свой Apple ID (Xcode → Preferences → Accounts)</Steps.Step>
                      <Steps.Step>Импортируйте ваш сертификат разработчика в Xcode</Steps.Step>
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
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("gbox")}>
                  Назад к GBox
                </Button>
                <Button onClick={() => setActiveTab("udid")}>
                  Вернуться к началу
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
