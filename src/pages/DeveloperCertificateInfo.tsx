import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Shield, Calendar, Smartphone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";
import { Badge } from "@/components/ui/badge";

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
      <div className="container mx-auto px-4 md:px-6">
        <LandingHeader
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
          logoAlt="iCert Logo"
          menuItems={menuItems}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Wiki Navigation */}
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
              Информация
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-blue-600 dark:from-blue-400 dark:to-theme-blue">
                Сертификаты разработчика
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Сертификаты разработчика Apple позволяют устанавливать и тестировать приложения 
              на устройствах iOS без необходимости их публикации в App Store. Это незаменимый 
              инструмент как для разработчиков, так и для пользователей.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/installation-guide">
                <Button 
                  className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base 
                  py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Инструкция по установке
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Certificates Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-900/40 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-theme-blue" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-montserrat mb-2">
                  Что такое сертификат разработчика?
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Сертификат разработчика Apple — это цифровой сертификат, который позволяет подписывать 
                  приложения для iOS, iPadOS и других платформ Apple. Официально Apple предоставляет 
                  такие сертификаты разработчикам, которые зарегистрированы в программе Apple Developer Program 
                  за $99 в год.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Однако мы предлагаем доступ к таким сертификатам по более доступной цене, что позволяет 
                  устанавливать приложения, которых нет в App Store, или тестировать приложения без необходимости 
                  их официальной публикации.
                </p>
              </div>
            </div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-theme-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-montserrat mb-4">
                    Для чего нужен сертификат?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Установка сторонних приложений</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Возможность устанавливать приложения в обход App Store</p>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Тестирование бета-версий</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Доступ к ранним версиям приложений, которые ещё не вышли официально</p>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Эмуляторы и игры</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Установка эмуляторов для запуска классических игр</p>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Модифицированные приложения</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Доступ к приложениям с расширенным функционалом</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-theme-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-montserrat mb-4">
                    Особенности и ограничения
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-theme-blue/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-theme-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Срок действия</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Сертификаты действуют 1 год с момента активации</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-theme-blue/10 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="h-5 w-5 text-theme-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">UDID устройства</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Для активации требуется UDID вашего устройства</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-theme-blue/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-theme-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Возможность отзыва</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Apple может отозвать сертификат при нарушении правил использования</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-yellow-200 dark:border-yellow-900/50 bg-yellow-50 dark:bg-yellow-900/10">
                    <p className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Важно:</strong> мы предоставляем гарантию на сертификаты сроком 1 месяц. В случае отзыва в течение этого периода,
                        мы бесплатно заменим ваш сертификат.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* How it Works Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/20 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-3xl font-bold font-montserrat mb-8 text-center">
              Как это работает?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="w-16 h-16 bg-theme-blue text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Покупка сертификата</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                  Выберите подходящий тариф на нашем сайте и свяжитесь с нами через Telegram для оформления заказа.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="w-16 h-16 bg-theme-blue text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Предоставление UDID</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                  Мы попросим вас предоставить UDID вашего устройства. Инструкцию по получению UDID можно найти в разделе "Инструкция по установке".
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="w-16 h-16 bg-theme-blue text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Активация сертификата</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                  После регистрации вашего устройства, мы отправим вам сертификат и инструкцию по его установке.
                </p>
              </motion.div>
            </div>
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

        {/* Footer section */}
        <LandingFooter
          contactHandle="icertmanager"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default DeveloperCertificateInfo;
