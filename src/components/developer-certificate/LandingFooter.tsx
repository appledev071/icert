import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowUpRight, AtSign, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface LandingFooterProps {
  contactHandle?: string;
  disclaimer?: string;
}

// Используем memo для предотвращения ненужных перерендеров
const LandingFooter: React.FC<LandingFooterProps> = memo(({
  contactHandle = "icertmanager",
  disclaimer = "iCert не является официальным продуктом Apple. Использование сертификатов разработчика для установки приложений должно соответствовать правилам и условиям Apple.",
}) => {
  const isMobile = useIsMobile();
  
  // Анимация элементов - оптимизированы для мобильных
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      variants={fadeInUp}
      className="pt-12 md:pt-20 pb-8 md:pb-12 border-t border-gray-200 dark:border-gray-800/50 relative overflow-hidden"
    >
      {/* Декоративные элементы - скрыты на мобильных для повышения производительности */}
      <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-theme-blue/5 rounded-full blur-[80px] -z-10"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-72 h-72 bg-theme-blue/3 rounded-full blur-[100px] -z-10"></div>
      
      {/* Верхняя секция футера с использованием адаптивной сетки */}
      <motion.div 
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* О нас */}
          <motion.div variants={fadeInUp} className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4 md:mb-6 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
                  alt="iCert Logo"
                  className="w-4 h-4 object-contain brightness-[1.2]"
                  loading="lazy"
                  width="16"
                  height="16"
                />
              </div>
              <div className="text-xl font-bold font-montserrat text-gray-800 dark:text-white">
                iCert
              </div>
            </div>
            
            <h3 className="text-xl font-semibold font-montserrat text-gray-800 dark:text-white mb-3 md:mb-4 text-center md:text-left">
              О нашем проекте
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-center md:text-left">
              Мы — команда энтузиастов, помогающая людям раскрыть полный потенциал своих устройств iOS 
              и получить доступ к расширенным возможностям.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href={`https://t.me/${contactHandle}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-theme-blue hover:text-blue-600 font-medium transition-colors group"
              >
                <AtSign className="w-4 h-4 mr-1.5" />
                {contactHandle}
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          {/* Навигация и Полезные ссылки в 2 колонки на мобильном */}
          <div className="grid grid-cols-2 gap-6 md:gap-0 md:col-span-8 md:grid-cols-2">
            {/* Навигация */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <h3 className="text-xl font-semibold font-montserrat text-gray-800 dark:text-white mb-3 md:mb-5">
                Навигация
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <Link to="/wiki" className="hover:text-theme-blue transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 opacity-70"></span>
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link to="/installation-guide" className="hover:text-theme-blue transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 opacity-70"></span>
                    Установка
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-theme-blue transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 opacity-70"></span>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-theme-blue transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 opacity-70"></span>
                    О нас
                  </Link>
                </li>
              </ul>
            </motion.div>
            
            {/* Полезные ссылки */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <h3 className="text-xl font-semibold font-montserrat text-gray-800 dark:text-white mb-3 md:mb-5">
                Полезные ссылки
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a 
                    href="https://t.me/icertmanager" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-theme-blue transition-colors inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 opacity-70"></span>
                    Поддержка
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Разделитель с узором */}
      <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      </div>
      
      {/* Подвал с копирайтом - оптимизирован для мобильных */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center text-gray-500 dark:text-gray-400 text-xs md:text-sm">
          <p className="mb-4 max-w-3xl mx-auto leading-relaxed">{disclaimer}</p>
          <div className="flex flex-col items-center gap-4">
            <p>&copy; {new Date().getFullYear()} iCert. Все права защищены.</p>
            <div className="flex items-center gap-3 text-xs justify-center">
              <Link to="/privacy-policy" className="hover:text-theme-blue transition-colors">
                Политика конфиденциальности
              </Link>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <Link to="/terms-of-use" className="hover:text-theme-blue transition-colors">
                Условия использования
              </Link>
            </div>
            <div className="flex items-center text-xs text-gray-400 dark:text-gray-500">
              <Heart className="w-3 h-3 mr-1 text-red-400" />
              <span className="hidden xs:inline">Сделано с любовью к iOS</span>
              <span className="xs:hidden">С любовью к iOS</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
});

// Экспортируем с именем
export { LandingFooter };
