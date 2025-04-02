import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Clock, Award, ArrowUp, MessageSquare, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";

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

const AboutUs = () => {
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
          className="py-16 relative overflow-hidden rounded-3xl my-8 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-indigo-950/20"
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
              О нашей компании
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-blue-600 dark:from-blue-400 dark:to-theme-blue">
                Наша миссия
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Мы — молодая и амбициозная команда энтузиастов, помогающая людям раскрыть 
              полный потенциал своих устройств и получить доступ к расширенным возможностям.
              Мы стремимся сделать технологии более доступными и функциональными для каждого пользователя.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-black hover:bg-gray-900 text-white dark:bg-theme-blue dark:hover:bg-blue-600 dark:text-white text-base 
                  py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Свяжитесь с нами
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-16"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
              Наши ценности
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Почему нам доверяют</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Нашим приоритетом является предоставление высококачественных услуг, которые делают вашу жизнь проще и удобнее
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Надежность</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Мы обеспечиваем стабильную работу наших сервисов и предоставляем только проверенные решения.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Оперативность</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Мы ценим ваше время и обрабатываем все запросы максимально быстро, обеспечивая моментальную поддержку.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-theme-blue/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Мы гарантируем высокое качество всех предоставляемых услуг и заботимся о вашем комфорте.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-16 my-8 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 dark:from-blue-950/10 dark:to-indigo-950/10 rounded-2xl"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
              Связаться с нами
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Есть вопросы?</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Мы всегда на связи и готовы ответить на любые ваши вопросы
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.a 
              href="https://t.me/icertmanager"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0, 87, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-900/70 shadow-sm hover:shadow-md p-6 rounded-xl flex items-center gap-4 w-full max-w-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-theme-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Telegram</h3>
                <p className="text-gray-700 dark:text-gray-300">@icertmanager</p>
              </div>
            </motion.a>
          </div>
        </motion.section>

        {/* Back to Top Button */}
        <div className="flex justify-center py-8">
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300"
          >
            <ArrowUp className="w-6 h-6 text-theme-blue" />
          </motion.button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <LandingFooter
          contactHandle="icertmanager"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default AboutUs;
