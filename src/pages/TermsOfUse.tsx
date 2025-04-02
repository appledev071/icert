import React, { useEffect, useState } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp, FileText, Shield, AlertTriangle, Info, ShieldCheck, DollarSign, ClipboardList, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";
import { motion } from "framer-motion";

const TermsOfUse = () => {
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
    { id: "general", label: "Общие положения", icon: <Info className="w-4 h-4" /> },
    { id: "restrictions", label: "Ограничения", icon: <AlertTriangle className="w-4 h-4" /> },
    { id: "responsibility", label: "Ответственность", icon: <Shield className="w-4 h-4" /> },
    { id: "warranty", label: "Отказ от гарантий", icon: <ShieldCheck className="w-4 h-4" /> },
    { id: "refund", label: "Возврат средств", icon: <DollarSign className="w-4 h-4" /> },
    { id: "changes", label: "Изменение условий", icon: <ClipboardList className="w-4 h-4" /> },
    { id: "contact", label: "Контактная информация", icon: <PhoneCall className="w-4 h-4" /> },
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
                Условия использования
              </h1>
              <div className="h-1 w-32 bg-theme-blue rounded-full mb-6"></div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mb-12 text-lg text-gray-700 dark:text-gray-300"
            >
              <p>Настоящие Условия использования определяют правила и ограничения использования сервиса iCert и предоставляемых им сертификатов разработчика.</p>
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
              <motion.section variants={itemVariants} id="general" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Info className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Общие положения</h2>
                </div>
                <div className="pl-14">
                  <p>Сервис iCert предоставляет услуги по оформлению сертификатов разработчика для устройств на платформе iOS и iPadOS. Используя наш сервис, вы соглашаетесь с настоящими Условиями использования.</p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="restrictions" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Ограничения использования</h2>
                </div>
                <div className="pl-14">
                  <p>Пользователи обязуются не использовать сертификаты разработчика, полученные через сервис iCert, для следующих целей:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Незаконная деятельность любого рода;</li>
                    <li>Распространение вредоносного ПО;</li>
                    <li>Нарушение прав интеллектуальной собственности третьих лиц;</li>
                    <li>Перепродажа сертификатов или предоставление доступа третьим лицам;</li>
                    <li>Использование в целях, нарушающих политики Apple Inc.;</li>
                    <li>Массовое распространение приложений в обход официальных магазинов приложений;</li>
                    <li>Любые другие действия, которые могут привести к блокировке сертификата.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="responsibility" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Ответственность пользователя</h2>
                </div>
                <div className="pl-14">
                  <p>Пользователь несет полную ответственность за:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Любой контент, распространяемый с использованием сертификата;</li>
                    <li>Соблюдение законодательства страны проживания;</li>
                    <li>Соблюдение условий использования платформы iOS/iPadOS;</li>
                    <li>Обеспечение безопасности своего аккаунта и устройств;</li>
                    <li>Любой ущерб, причиненный в результате нарушения настоящих Условий.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="warranty" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Отказ от гарантий</h2>
                </div>
                <div className="pl-14">
                  <p>Сервис iCert предоставляется "как есть" без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем:</p>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li>Непрерывную работу сертификатов в течение всего заявленного срока, так как Apple Inc. может отозвать сертификат в любое время;</li>
                    <li>Возможность установки любых приложений на устройства;</li>
                    <li>Отсутствие сбоев или ошибок в работе сервиса;</li>
                    <li>Совместимость со всеми устройствами и версиями ПО.</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="refund" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Возврат средств</h2>
                </div>
                <div className="pl-14">
                  <div className="mb-4">
                    <p className="font-medium mb-2">Возврат средств осуществляется в следующих случаях:</p>
                    <ul className="list-disc ml-6 mt-2 mb-4">
                      <li>Если сертификат не был предоставлен в указанный срок;</li>
                      <li>Если предоставленный сертификат не работает при первом использовании.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Возврат средств не осуществляется в случаях:</p>
                    <ul className="list-disc ml-6 mt-2 mb-4">
                      <li>Если сертификат был отозван Apple Inc. после его активации;</li>
                      <li>Если пользователь нарушил настоящие Условия использования;</li>
                      <li>Если UDID предоставлен некорректно или от другого устройства;</li>
                      <li>По истечении 24 часов с момента предоставления сертификата.</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} id="changes" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-theme-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Изменение условий</h2>
                </div>
                <div className="pl-14">
                  <p>Мы оставляем за собой право изменять настоящие Условия использования в любое время. Актуальная версия всегда доступна на нашем сайте. Продолжая использовать наш сервис после внесения изменений, вы соглашаетесь с новыми условиями.</p>
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
                  <p>По всем вопросам, связанным с использованием сервиса, вы можете связаться с нами:</p>
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

export default TermsOfUse;
