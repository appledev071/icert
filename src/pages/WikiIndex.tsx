import React, { useEffect, useState, useRef } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowUp, 
  FileText, 
  Monitor, 
  HelpCircle, 
  Info, 
  Search,
  Sparkles,
  ExternalLink,
  BookOpen,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";

const WikiIndex = () => {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const wikiCategories = [
    {
      title: "Сертификаты разработчика",
      icon: <FileText className="w-7 h-7 text-theme-blue" />,
      description: "Информация о сертификатах, их применении и особенностях",
      link: "/developer-certificate-info",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Инструкции по установке",
      icon: <Monitor className="w-7 h-7 text-theme-blue" />,
      description: "Пошаговые руководства по установке и настройке",
      link: "/installation-guide",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Часто задаваемые вопросы",
      icon: <HelpCircle className="w-7 h-7 text-theme-blue" />,
      description: "Ответы на популярные вопросы о наших услугах",
      link: "/faq",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "О нас",
      icon: <Info className="w-7 h-7 text-theme-blue" />,
      description: "Информация о нашей компании и миссии",
      link: "/about",
      color: "bg-blue-50 dark:bg-blue-900/20"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const handleSearchFocus = () => {
    searchInputRef.current?.focus();
  };

  const filteredCategories = wikiCategories.filter(category => 
    searchQuery === "" || 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      
      {/* Wiki Navigation */}
      <div className="container mx-auto px-4 md:px-6">
        <WikiNavigation />

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

        {/* Wiki Index Content */}
        <motion.section
          className="py-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-[80px] animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-10 h-10 text-theme-blue" />
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-blue-500">
                Wiki
              </h1>
            </div>
            <div className="h-1 w-32 bg-theme-blue rounded-full mb-6"></div>
          </motion.div>
          
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Добро пожаловать в наш информационный центр. Здесь вы найдете всю необходимую информацию о сертификатах разработчика 
            и других наших услугах.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="relative mb-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div 
              className="flex items-center bg-white dark:bg-gray-900 rounded-full py-2 px-4 border border-gray-200 dark:border-gray-800 shadow-sm max-w-lg hover:shadow-md hover:border-theme-blue/30 transition-all duration-300"
              onClick={handleSearchFocus}
            >
              <Search className="w-5 h-5 text-gray-400 dark:text-gray-600 mr-2" />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Поиск по wiki..."
                className="border-0 focus:ring-0 focus-visible:ring-0 focus:outline-none dark:bg-gray-900 flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setSearchQuery("")}
                >
                  <span className="sr-only">Clear</span>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            {searchQuery && (
              <div className="absolute -bottom-6 left-4 text-sm text-gray-500 dark:text-gray-400">
                Найдено: {filteredCategories.length} {filteredCategories.length === 1 ? 'результат' : (filteredCategories.length >= 2 && filteredCategories.length <= 4) ? 'результата' : 'результатов'}
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* Wiki Categories */}
        <motion.section
          className="py-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredCategories.map((category, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link 
                  to={category.link} 
                  onClick={scrollToTop}
                  className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-theme-blue transition-all duration-300 hover:shadow-lg group"
                >
                  <div className={`p-6 ${category.color}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700 group-hover:border-theme-blue transition-all duration-300 shadow-sm">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-montserrat text-black dark:text-white mb-2 group-hover:text-theme-blue transition-colors duration-300 flex items-center gap-2">
                          {category.title}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Contact section */}
          <motion.div 
            variants={itemVariants}
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-gradient-to-br from-transparent to-blue-50 dark:from-transparent dark:to-blue-950/20 shadow-sm mb-12 group hover:border-theme-blue/50 hover:shadow-md transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold font-montserrat text-black dark:text-white mb-4 relative inline-block">
                  Не нашли, что искали?
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-0">
                  Если вы не нашли ответ на свой вопрос в нашей базе знаний, обратитесь к нашей
                  технической поддержке. Мы с радостью поможем вам с любым вопросом.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="bg-theme-blue text-white text-base 
                            py-3 px-8 rounded-full font-medium shadow-md hover:shadow-glow
                            transition-all duration-300 group/btn relative overflow-hidden shine-effect"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Написать в поддержку</span>
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Back to top and main page buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center py-8"
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
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5 text-theme-blue" />
            </motion.button>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-6">
        <LandingFooter
          contactHandle="icertmanager"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default WikiIndex;
