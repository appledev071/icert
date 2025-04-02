import React, { useState, useEffect, lazy, Suspense } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, AlertTriangle, CheckCircle, Smartphone, Laptop, Globe, DownloadCloud, FileDown, ArrowUp, ExternalLink, Sparkles, HelpCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Steps } from "@/components/steps";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

// Ленивая загрузка компонентов, которые не нужны в начальном рендеринге
const LandingFooter = lazy(() => import("@/components/developer-certificate/LandingFooter").then(module => ({ default: module.LandingFooter })));
const LoadingFallback = () => <div className="py-8 text-center">Загрузка...</div>;

// Анимационные варианты
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  },
};

const InstallationGuide = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("udid");
  const [isLoaded, setIsLoaded] = useState(false);

  // Функция для скролла вверх при навигации
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Скролл вверх при монтировании компонента
  useEffect(() => {
    scrollToTop();
    
    // Отметить, что страница загружена для анимаций
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "О нас", href: "/about" },
  ];

  // Варианты анимации
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <div className="container mx-auto px-4 md:px-6">
        <LandingHeader
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
          logoAlt="iCert Logo"
          menuItems={menuItems}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-0 md:pt-4">
        {/* Wiki Navigation - отображается на всех устройствах */}
        <WikiNavigation />

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/" onClick={scrollToTop}>
            <Button
              variant="outline"
              className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue/80 hover:bg-theme-blue/5 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Назад на главную
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 relative overflow-hidden rounded-3xl mb-16 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-indigo-950/20"
        >
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <Badge className="mb-4 bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
              Инструкция
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-blue-600 dark:from-blue-400 dark:to-theme-blue">
                Установка IPA-приложений
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              В этом руководстве собраны все доступные способы установки IPA-файлов через сертификаты 
              разработчика на устройства iOS. Выберите наиболее удобный для вас метод.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="https://get.udid.io" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base 
                  py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Получить UDID устройства
                  <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.section>
        
        {/* Features Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6">
                <DownloadCloud className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Простая установка</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Пошаговые инструкции, доступные даже для начинающих пользователей iOS
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
              className="bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Надёжная работа</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Приложения подписываются сертификатом разработчика для максимальной стабильности
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
              className="bg-white dark:bg-gray-900/40 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Широкие возможности</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Множество методов установки, соответствующих вашим потребностям
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* UDID Info Box */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-gray-900 rounded-2xl p-8 border border-blue-100/50 dark:border-blue-900/30 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <Info className="h-10 w-10 text-theme-blue" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-montserrat mb-4 text-center md:text-left">
                  Получение UDID устройства
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Прежде чем приступить к установке IPA-файлов, вам понадобится UDID (уникальный идентификатор) вашего устройства. 
                  Этот идентификатор необходим для регистрации устройства в сертификате разработчика.
                </p>
                <div className="flex justify-center md:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href="https://get.udid.io" target="_blank" rel="noopener noreferrer">
                      <Button
                        className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white 
                        py-5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        Получить UDID устройства
                        <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Installation Methods Tabs */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-900/40 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FileDown className="w-6 h-6 text-theme-blue" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-montserrat mb-2">
                  Методы установки IPA
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Выберите наиболее удобный для вас способ установки приложений в формате IPA
                </p>
              </div>
            </div>
            
            <Tabs defaultValue="udid" value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6 md:space-y-8">
              {/* Адаптивное отображение табов */}
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto bg-gray-100/70 dark:bg-gray-800/50 p-2 rounded-xl overflow-hidden">
                <TabsTrigger value="udid" className="py-3 px-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm rounded-lg transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Smartphone className="h-5 w-5 mb-1.5" />
                    <span className="text-sm font-medium">Получение UDID</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="esign" className="py-3 px-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm rounded-lg transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <FileDown className="h-5 w-5 mb-1.5" />
                    <span className="text-sm font-medium">ESign</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="gbox" className="py-3 px-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm rounded-lg transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Laptop className="h-5 w-5 mb-1.5" />
                    <span className="text-sm font-medium">GBox</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="other" className="py-3 px-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm rounded-lg transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Globe className="h-5 w-5 mb-1.5" />
                    <span className="text-sm font-medium">Другие методы</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="udid" className="pt-4">
                <Card className="border-blue-200/50 dark:border-blue-800/30 shadow-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                      Базовые знания
                    </Badge>
                    <CardTitle className="text-xl md:text-2xl font-bold">Получение UDID устройства</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Необходимый шаг перед установкой приложений через сертификат
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="prose prose-sm md:prose-base prose-blue dark:prose-invert max-w-none">
                      <h3>Что такое UDID?</h3>
                      <p>UDID (Unique Device Identifier) — это уникальный идентификатор вашего устройства iOS, необходимый для регистрации в сертификате разработчика. Без этого идентификатора невозможно активировать сертификат для конкретного устройства.</p>
                      
                      <h3 className="mt-6">Получение UDID через веб-сайт</h3>
                      <p>Самый простой способ получить UDID вашего устройства — использовать специальный веб-сайт:</p>
                      
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mb-6 border border-blue-100 dark:border-blue-900/30">
                        <h4 className="font-semibold mb-2 text-theme-blue">Пошаговая инструкция:</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>Откройте <a href="https://get.udid.io" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline">get.udid.io</a> на вашем устройстве iOS (iPhone или iPad).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Нажмите кнопку "Get Started" или "Install Profile".</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>В появившемся окне разрешите установку профиля, нажав "Разрешить" или "Allow".</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>Перейдите в Настройки → Основные → Профили и управление устройством.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                            <span>Найдите и установите профиль "UDID.io".</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                            <span>После установки профиля, вернитесь на сайт, где будет отображен ваш UDID.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">7</span>
                            <span>Скопируйте UDID длинным нажатием на него и отправьте нам для регистрации.</span>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/20">
                        <AlertTriangle className="flex-shrink-0 w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5" />
                        <p className="text-sm">
                          <strong>Важно:</strong> После получения UDID вы можете удалить установленный профиль через Настройки → Основные → Профили и управление устройством.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="esign" className="pt-4">
                <Card className="border-blue-200/50 dark:border-blue-800/30 shadow-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                      Популярный метод
                    </Badge>
                    <CardTitle className="text-xl md:text-2xl font-bold">Установка через ESign</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Подробная инструкция по установке через ESign
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="prose prose-sm md:prose-base prose-blue dark:prose-invert max-w-none">
                      <h3>Что такое ESign?</h3>
                      <p>ESign — это приложение для подписи и установки IPA-файлов непосредственно на вашем устройстве iOS. Это один из самых удобных способов, так как не требует компьютера.</p>
                      
                      <h3 className="mt-6">Процесс установки через ESign</h3>
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mb-6 border border-blue-100 dark:border-blue-900/30">
                        <h4 className="font-semibold mb-2 text-theme-blue">Шаг 1: Получение ссылок от администратора</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>После покупки отправьте свой UDID администратору.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Администратор пришлет вам две ссылки: на сертификат разработчика (.mobileprovision) и на IPA-файл приложения.</span>
                          </li>
                        </ol>
                        
                        <h4 className="font-semibold mb-2 mt-6 text-theme-blue">Шаг 2: Установка ESign и добавление сертификата</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>Установите приложение ESign с <a href="https://esign.app" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline">официального сайта</a>.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Откройте на вашем устройстве ссылку на сертификат (.mobileprovision), полученную от администратора.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>В появившемся окне выберите "ESign" для открытия файла.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>В ESign сертификат будет автоматически импортирован. Перейдите на вкладку "Settings" → "Signer" и убедитесь, что сертификат добавлен.</span>
                          </li>
                        </ol>
                        
                        <h4 className="font-semibold mb-2 mt-6 text-theme-blue">Шаг 3: Установка IPA через ESign</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>В ESign перейдите на вкладку "Files" в нижней части экрана.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Нажмите на значок "+" в правом верхнем углу и выберите "Import from URL".</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>Вставьте полученную от администратора ссылку на IPA-файл и нажмите "Import".</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>После загрузки файла, нажмите на него в списке.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                            <span>Выберите "Sign with..." и укажите добавленный сертификат разработчика.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                            <span>После подписи, нажмите "Install" для установки приложения.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">7</span>
                            <span>Дождитесь завершения процесса установки и запустите приложение с домашнего экрана.</span>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/20 mb-6">
                        <AlertTriangle className="flex-shrink-0 w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5" />
                        <p className="text-sm">
                          <strong>Важно:</strong> При первом запуске установленного приложения может появиться сообщение о недоверенном разработчике. Перейдите в Настройки → Основные → Профили и управление устройством, найдите сертификат разработчика и нажмите "Доверять".
                        </p>
                      </div>
                      
                      <h3>Решение проблем с установкой</h3>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800/30">
                        <h4 className="font-semibold mb-2">Ошибка "Приложение не может быть установлено"</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Убедитесь, что ваш UDID был правильно добавлен в сертификат разработчика.</li>
                          <li>Проверьте, что сертификат не был отозван или не истек срок его действия.</li>
                          <li>Попробуйте перезагрузить устройство и повторить установку.</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 mt-4">Ошибка "Неизвестная ошибка" при установке</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Освободите место на устройстве, если его не хватает.</li>
                          <li>Проверьте стабильность интернет-соединения.</li>
                          <li>Попробуйте установить приложение через другой метод (например, GBox).</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gbox" className="pt-4">
                <Card className="border-blue-200/50 dark:border-blue-800/30 shadow-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                      Альтернативный способ
                    </Badge>
                    <CardTitle className="text-xl md:text-2xl font-bold">Установка через GBox</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Подробная инструкция по установке через GBox
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="prose prose-sm md:prose-base prose-blue dark:prose-invert max-w-none">
                      <h3>Что такое GBox?</h3>
                      <p>GBox — это альтернативный магазин приложений для iOS, позволяющий устанавливать IPA-файлы с помощью сертификатов разработчика. Он имеет простой интерфейс и эффективно работает с подписанными приложениями.</p>
                      
                      <h3 className="mt-6">Процесс установки через GBox</h3>
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mb-6 border border-blue-100 dark:border-blue-900/30">
                        <h4 className="font-semibold mb-2 text-theme-blue">Шаг 1: Получение необходимых файлов от администратора</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>После приобретения сертификата отправьте свой UDID администратору.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Администратор предоставит вам: ссылку на установку профиля сертификата (.mobileprovision) и ссылку на IPA-файл.</span>
                          </li>
                        </ol>
                        
                        <h4 className="font-semibold mb-2 mt-6 text-theme-blue">Шаг 2: Установка GBox и добавление профиля</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>Установите GBox с <a href="https://gbox.run" target="_blank" rel="noopener noreferrer" className="text-theme-blue hover:underline">официального сайта</a>.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>На вашем устройстве iOS откройте ссылку на профиль сертификата (.mobileprovision).</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>В диалоговом окне выберите "GBox" для открытия файла.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>GBox предложит установить профиль сертификата — подтвердите действие.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                            <span>Перейдите в Настройки → Основные → Профили и управление устройством, найдите установленный профиль и нажмите "Доверять".</span>
                          </li>
                        </ol>
                        
                        <h4 className="font-semibold mb-2 mt-6 text-theme-blue">Шаг 3: Установка IPA-файла</h4>
                        <ol className="ml-4 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>Вернитесь в GBox и перейдите на вкладку "Import" в нижней части экрана.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Нажмите "Import from URL" и вставьте ссылку на IPA-файл, полученную от администратора.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>После загрузки файл появится в разделе "My Apps".</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>Нажмите на загруженное приложение и выберите "Sign with..." затем укажите установленный профиль сертификата.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                            <span>После подписи выберите "Install" для установки приложения.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-theme-blue text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                            <span>Дождитесь завершения установки и запустите приложение с домашнего экрана.</span>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/20 mb-6">
                        <AlertTriangle className="flex-shrink-0 w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5" />
                        <p className="text-sm">
                          <strong>Важно:</strong> Если после установки при запуске приложения появляется сообщение "Untrusted Developer", просто перейдите в Настройки → Основные → Профили и управление устройством, найдите сертификат и нажмите "Доверять".
                        </p>
                      </div>
                      
                      <h3>Преимущества установки через GBox</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800/30">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h4 className="font-semibold">Быстрая установка</h4>
                          </div>
                          <p className="text-sm">GBox позволяет быстро устанавливать приложения без использования компьютера.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800/30">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h4 className="font-semibold">Управление сертификатами</h4>
                          </div>
                          <p className="text-sm">Удобная система управления профилями и сертификатами в одном месте.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800/30">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h4 className="font-semibold">Автоматическая подпись</h4>
                          </div>
                          <p className="text-sm">Интегрированная система подписи IPA-файлов выбранным сертификатом.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800/30">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h4 className="font-semibold">Управление приложениями</h4>
                          </div>
                          <p className="text-sm">Возможность видеть все установленные через GBox приложения в одном месте.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="other" className="pt-4">
                <Card className="border-blue-200/50 dark:border-blue-800/30 shadow-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                      Дополнительные способы
                    </Badge>
                    <CardTitle className="text-xl md:text-2xl font-bold">Альтернативные методы установки</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Обзор других методов установки IPA-файлов
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="prose prose-sm md:prose-base prose-blue dark:prose-invert max-w-none">
                      <p className="text-sm md:text-base leading-relaxed">Здесь будет контент про другие методы</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </motion.section>

        {/* Back to top button */}
        <div className="flex justify-center mb-10">
          <button 
            onClick={scrollToTop}
            className="bg-theme-blue/10 hover:bg-theme-blue/20 text-theme-blue w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Прокрутить наверх"
          >
            <ArrowLeft className="h-5 w-5 rotate-90" />
          </button>
        </div>

        {/* Footer - ленивая загрузка */}
        <Suspense fallback={<LoadingFallback />}>
          <LandingFooter />
        </Suspense>
      </div>
    </ThemedLandingWrapper>
  );
};

export default InstallationGuide; 