import React, { useEffect, useState } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp, Shield, Lock, FileText, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  
  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Function to scroll to specific section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = "";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 200) {
          currentActive = section.id;
        }
      });
      
      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "О нас", href: "/about" },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };
  
  const tableOfContents = [
    { id: "collection", label: "Собираемые данные", icon: <FileText className="w-4 h-4" /> },
    { id: "purposes", label: "Цели обработки", icon: <Shield className="w-4 h-4" /> },
    { id: "storage", label: "Хранение и защита", icon: <Lock className="w-4 h-4" /> },
    { id: "sharing", label: "Передача данных", icon: <FileText className="w-4 h-4" /> },
    { id: "rights", label: "Права пользователей", icon: <FileText className="w-4 h-4" /> },
    { id: "changes", label: "Изменение политики", icon: <FileText className="w-4 h-4" /> },
    { id: "contact", label: "Контакты", icon: <PhoneCall className="w-4 h-4" /> },
  ];

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Back button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" onClick={scrollToTop}>
            <Button
              variant="outline"
              className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Назад на главную
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with table of contents - visible on large screens */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Содержание</h3>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center w-full text-left p-2 rounded-md transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-theme-blue/10 text-theme-blue font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span className="text-sm">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-blue-500 mb-6">
                Политика конфиденциальности
              </h1>
              <div className="h-1 w-32 bg-theme-blue rounded-full mb-6"></div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mb-12 text-lg text-gray-700 dark:text-gray-300"
            >
              <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса iCert.</p>
            </motion.div>

            {/* Mobile table of contents */}
            <motion.div 
              variants={itemVariants}
              className="lg:hidden mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Содержание</h3>
              <div className="flex flex-wrap gap-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center text-sm p-2 rounded-md transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-theme-blue/10 text-theme-blue font-medium"
                        : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="prose dark:prose-invert max-w-none space-y-12 text-gray-700 dark:text-gray-300">
              <motion.section variants={itemVariants} id="collection" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Собираемые данные</h2>
                </div>
                <div className="pl-14">
                  <p>Мы собираем и обрабатываем следующие персональные данные:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>UDID устройства;</li>
                    <li>Номер телефона (для связи);</li>
                    <li>ФИО (при необходимости);</li>
                    <li>Платежные данные (для оформления заказа).</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="purposes" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Цели обработки данных</h2>
                </div>
                <div className="pl-14">
                  <p>Персональные данные обрабатываются в следующих целях:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Оформление и обработка заказов на подключение сертификатов разработчика;</li>
                    <li>Связь с пользователем по вопросам обслуживания;</li>
                    <li>Выполнение технических операций, необходимых для предоставления услуг;</li>
                    <li>Улучшение качества обслуживания.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="storage" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Хранение и защита данных</h2>
                </div>
                <div className="pl-14">
                  <p>Мы принимаем все необходимые меры для защиты персональных данных пользователей от неправомерного доступа, изменения, раскрытия или уничтожения:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Данные хранятся на защищенных серверах;</li>
                    <li>Доступ к данным ограничен и контролируется;</li>
                    <li>Применяются современные методы технической защиты информации;</li>
                    <li>Персональные данные хранятся не дольше, чем это необходимо для оказания услуг.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="sharing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Передача данных третьим лицам</h2>
                </div>
                <div className="pl-14">
                  <p>Мы не передаем персональные данные пользователей третьим лицам, за исключением следующих случаев:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Для выполнения обязательств перед пользователем (например, при оформлении сертификата);</li>
                    <li>По требованию законодательства;</li>
                    <li>Для защиты наших прав и интересов.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="rights" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Права пользователей</h2>
                </div>
                <div className="pl-14">
                  <p>Пользователи имеют право:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Запрашивать информацию об обработке их персональных данных;</li>
                    <li>Требовать уточнения, блокирования или уничтожения персональных данных;</li>
                    <li>Отозвать согласие на обработку персональных данных;</li>
                    <li>Обжаловать действия или бездействие администрации сервиса.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="changes" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Изменение политики конфиденциальности</h2>
                </div>
                <div className="pl-14">
                  <p>Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия политики всегда доступна на нашем сайте.</p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="contact" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Контактная информация</h2>
                </div>
                <div className="pl-14">
                  <p>По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:</p>
                  <p className="mt-2">
                    Telegram: <a href="https://t.me/icertmanager" className="text-theme-blue hover:underline transition-all font-medium">@icertmanager</a>
                  </p>
                </div>
              </motion.section>
            </div>
            
            {/* Bottom navigation */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center justify-center py-12"
            >
              <Link to="/" onClick={scrollToTop} className="mb-8">
                <Button
                  variant="outline"
                  className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Вернуться на главную
                </Button>
              </Link>
              
              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-5 h-5 text-theme-blue" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <LandingFooter
        contactHandle="icertmanager"
        disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
      />
    </ThemedLandingWrapper>
  );
};

export default PrivacyPolicy;
