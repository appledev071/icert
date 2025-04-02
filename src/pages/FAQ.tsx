import React, { useEffect, useState } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, ArrowUp, Search, ChevronRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Анимационные варианты
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const FAQ = () => {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  
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

  const faqItems = [
    {
      question: "Для чего нужен сертификат разработчика Apple?",
      answer: "Сертификат разработчика Apple позволяет установить неограниченное количество приложений на iOS устройство в обход App Store. Это дает возможность использовать эмуляторы, модифицированные приложения и другой контент, недоступный в официальном магазине. Также сертификат позволяет разработчикам тестировать свои приложения на реальных устройствах.",
      categories: ["основное", "функции"]
    },
    {
      question: "Как долго действует сертификат разработчика?",
      answer: "Срок действия сертификата разработчика составляет 1 год с момента его выпуска Apple. Однако, существует вероятность отзыва сертификата компанией Apple, если будут обнаружены нарушения правил использования. В таком случае, если сертификат был приобретен менее месяца назад, мы предоставляем бесплатную замену.",
      categories: ["сроки", "гарантия"]
    },
    {
      question: "Есть ли гарантия на сертификаты разработчика?",
      answer: "Да, мы предоставляем гарантию на все сертификаты разработчика сроком 1 месяц. Если в течение этого периода сертификат будет отозван компанией Apple, мы бесплатно заменим его на новый. Важно понимать, что сертификаты могут быть отозваны Apple при нарушении правил использования.",
      categories: ["гарантия", "поддержка"]
    },
    {
      question: "Как получить UDID своего устройства?",
      answer: "UDID (Unique Device Identifier) можно получить несколькими способами: через iTunes, подключив устройство к компьютеру; с помощью специальных сайтов или приложений для определения UDID; или обратившись к нам за подробной инструкцией. UDID необходим для регистрации вашего устройства в системе Apple Developer и активации сертификата.",
      categories: ["установка", "техническое"]
    },
    {
      question: "Сколько устройств можно привязать к одному сертификату?",
      answer: "К одному сертификату разработчика Apple можно привязать только одно устройство. Это ограничение введено нами для обеспечения стабильной работы сертификатов и минимизации рисков их отзыва.",
      categories: ["ограничения", "техническое"]
    },
    {
      question: "Какие приложения можно установить с помощью сертификата?",
      answer: "С помощью сертификата разработчика можно установить практически любые приложения, совместимые с вашей версией iOS, включая: эмуляторы игр (Nintendo, PlayStation, и др.), модифицированные версии популярных приложений с расширенным функционалом, приложения для кастомизации интерфейса, а также приложения для разработки и тестирования.",
      categories: ["функции", "приложения"]
    },
    {
      question: "Как происходит процесс получения сертификата?",
      answer: "Процесс получения сертификата разработчика включает несколько этапов: 1) Вы предоставляете нам UDID вашего устройства; 2) Мы регистрируем ваше устройство в системе Apple Developer; 3) Создаем и активируем для вас сертификат; 4) Отправляем вам инструкции по установке профиля на ваше устройство. Весь процесс обычно занимает от нескольких часов до 2-3 дней в зависимости от выбранного тарифа.",
      categories: ["процесс", "установка"]
    },
    {
      question: "Что делать, если приложение, установленное через сертификат, перестало работать?",
      answer: "Если приложение, установленное через сертификат разработчика, перестало работать, возможно, сертификат был отозван Apple. В этом случае, если срок гарантии не истек (1 месяц с момента покупки), обратитесь к нам для бесплатной замены сертификата. Если гарантийный срок истек, вам потребуется приобрести новый сертификат или воспользоваться тарифом 'Супермоментальный' для более быстрой замены.",
      categories: ["поддержка", "техническое"]
    },
    {
      question: "Чем отличаются обычные сертификаты от моментальных?",
      answer: "Обычные сертификаты выдаются в порядке очереди и процесс может занять до 3 дней. Моментальные сертификаты, как следует из названия, выдаются максимально быстро, обычно в течение нескольких часов. Они идеально подходят для тех, кто не хочет ждать и нуждается в немедленном доступе к функциям сертификата.",
      categories: ["тарифы", "сроки"]
    },
    {
      question: "Что такое парные тарифы на сертификаты?",
      answer: "Парные тарифы предоставляют два сертификата по специальной цене, которая ниже, чем стоимость двух отдельных сертификатов. Это выгодно для семейных пар, друзей или для тех, кто имеет несколько устройств. Мы предлагаем 'Парный обычный' тариф и 'Парный моментальный' для более быстрого получения сертификатов.",
      categories: ["тарифы", "ценообразование"]
    },
    {
      question: "Что такое тариф 'Супермоментальный'?",
      answer: "Тариф 'Супермоментальный' разработан специально для тех, у кого был отозван сертификат и кто нуждается в экстренной замене. Этот тариф обеспечивает самую быструю выдачу нового сертификата, чтобы минимизировать время, в течение которого вы не можете пользоваться установленными приложениями.",
      categories: ["тарифы", "сроки"]
    },
    {
      question: "Могу ли я самостоятельно обновлять приложения, установленные через сертификат?",
      answer: "Да, вы можете самостоятельно обновлять приложения, установленные через сертификат разработчика. Обычно это делается путем загрузки новой версии IPA-файла приложения и его установки через AltStore или другие подобные программы. В некоторых случаях приложения могут иметь встроенную функцию обновления.",
      categories: ["приложения", "техническое"]
    },
    {
      question: "Безопасно ли использовать сертификат разработчика?",
      answer: "Использование сертификата разработчика безопасно при соблюдении определенных правил: устанавливайте приложения только из проверенных источников, не устанавливайте подозрительные приложения, регулярно проверяйте установленные приложения на наличие обновлений. Сам сертификат не представляет угрозы для безопасности вашего устройства.",
      categories: ["безопасность", "основное"]
    },
    {
      question: "Что будет, если Apple отзовет мой сертификат?",
      answer: "Если Apple отзовет ваш сертификат, все приложения, установленные с его помощью, перестанут работать. В этом случае, если вы находитесь в пределах гарантийного срока (1 месяц), мы бесплатно предоставим вам новый сертификат. Если гарантийный срок истек, вы можете приобрести новый сертификат или воспользоваться тарифом 'Супермоментальный'.",
      categories: ["поддержка", "гарантия"]
    },
    {
      question: "Можно ли передать сертификат другому человеку?",
      answer: "Нет, сертификат разработчика привязывается к конкретному устройству по его уникальному идентификатору (UDID) и не может быть передан другому устройству или пользователю. Для каждого нового устройства требуется отдельный сертификат.",
      categories: ["ограничения", "техническое"]
    },
  ];

  // Filter FAQ items based on search query
  const filteredFaqItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categories.some(category => 
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Группировка FAQ по категориям
  const categoriesMap = {};
  faqItems.forEach(item => {
    item.categories.forEach(category => {
      if (!categoriesMap[category]) {
        categoriesMap[category] = [];
      }
      if (!categoriesMap[category].includes(item)) {
        categoriesMap[category].push(item);
      }
    });
  });

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
              Помощь и поддержка
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-blue-600 dark:from-blue-400 dark:to-theme-blue">
                Ответы на вопросы
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Ответы на самые популярные вопросы о сертификатах разработчика и процессе их получения.
              Если вы не нашли ответ на свой вопрос, свяжитесь с нами.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск по вопросам..."
                  className="pl-10 pr-4 py-6 rounded-full border-theme-blue/30 focus:border-theme-blue focus:ring-2 focus:ring-theme-blue/30 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* FAQ Categories */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(categoriesMap).map((category, index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  className="px-4 py-2 text-sm cursor-pointer bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors"
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              transition={{ delay: Object.keys(categoriesMap).length * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer border-theme-blue/30 hover:bg-theme-blue/5 transition-colors"
                onClick={() => setSearchQuery("")}
              >
                Сбросить фильтр
              </Badge>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Accordion */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-900/40 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-theme-blue" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-montserrat mb-2">
                  {searchQuery 
                    ? `Результаты поиска по запросу: "${searchQuery}"` 
                    : "Основные вопросы о сертификатах"
                  }
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {filteredFaqItems.length === 0 
                    ? "По вашему запросу ничего не найдено. Попробуйте изменить запрос или свяжитесь с нами." 
                    : `Найдено ${filteredFaqItems.length} ответов`
                  }
                </p>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFaqItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`} className="border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden px-1 bg-gray-50/50 dark:bg-gray-800/20 hover:border-theme-blue/30 transition-all duration-300">
                    <AccordionTrigger className="text-lg font-medium text-black dark:text-white hover:text-theme-blue transition-colors duration-300 py-6 px-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6 pt-2 px-6">
                      <p className="mb-4">{item.answer}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.categories.map((category, catIndex) => (
                          <Badge 
                            key={catIndex} 
                            variant="outline" 
                            className="cursor-pointer border-theme-blue/20 hover:bg-theme-blue/5 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSearchQuery(category);
                            }}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.section>
        
        {/* Additional Help Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/20 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
                  Поддержка
                </Badge>
                <h2 className="text-3xl font-bold font-montserrat mb-4">
                  Не нашли ответ на свой вопрос?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Если вы не нашли ответ на свой вопрос в этом разделе, обратитесь к нашей технической поддержке через Telegram. 
                  Мы готовы помочь вам с любыми вопросами, связанными с нашими услугами.
                </p>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-theme-blue/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-theme-blue" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Техническая поддержка</h3>
                    <a 
                      href="https://t.me/icertmanager" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-theme-blue hover:underline"
                    >
                      @icertmanager
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
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
                      Написать в поддержку
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Back to top and main page buttons */}
        <div className="flex flex-col items-center justify-center my-12">
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300 mb-8"
          >
            <ArrowUp className="w-5 h-5 text-theme-blue" />
          </motion.button>
          
          <Link to="/" onClick={scrollToTop}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue/80 hover:bg-theme-blue/5 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Вернуться на главную
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </ThemedLandingWrapper>
  );
};

export default FAQ;
