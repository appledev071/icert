
import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";

const FAQ = () => {
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
    },
    {
      question: "Как долго действует сертификат разработчика?",
      answer: "Срок действия сертификата разработчика составляет 1 год с момента его выпуска Apple. Однако, существует вероятность отзыва сертификата компанией Apple, если будут обнаружены нарушения правил использования. В таком случае, если сертификат был приобретен менее месяца назад, мы предоставляем бесплатную замену.",
    },
    {
      question: "Есть ли гарантия на сертификаты разработчика?",
      answer: "Да, мы предоставляем гарантию на все сертификаты разработчика сроком 1 месяц. Если в течение этого периода сертификат будет отозван компанией Apple, мы бесплатно заменим его на новый. Важно понимать, что сертификаты могут быть отозваны Apple при нарушении правил использования.",
    },
    {
      question: "Как получить UDID своего устройства?",
      answer: "UDID (Unique Device Identifier) можно получить несколькими способами: через iTunes, подключив устройство к компьютеру; с помощью специальных сайтов или приложений для определения UDID; или обратившись к нам за подробной инструкцией. UDID необходим для регистрации вашего устройства в системе Apple Developer и активации сертификата.",
    },
    {
      question: "Сколько устройств можно привязать к одному сертификату?",
      answer: "К одному сертификату разработчика Apple можно привязать только одно устройство. Это ограничение введено нами для обеспечения стабильной работы сертификатов и минимизации рисков их отзыва.",
    },
    {
      question: "Какие приложения можно установить с помощью сертификата?",
      answer: "С помощью сертификата разработчика можно установить практически любые приложения, совместимые с вашей версией iOS, включая: эмуляторы игр (Nintendo, PlayStation, и др.), модифицированные версии популярных приложений с расширенным функционалом, приложения для кастомизации интерфейса, а также приложения для разработки и тестирования.",
    },
    {
      question: "Как происходит процесс получения сертификата?",
      answer: "Процесс получения сертификата разработчика включает несколько этапов: 1) Вы предоставляете нам UDID вашего устройства; 2) Мы регистрируем ваше устройство в системе Apple Developer; 3) Создаем и активируем для вас сертификат; 4) Отправляем вам инструкции по установке профиля на ваше устройство. Весь процесс обычно занимает от нескольких часов до 2-3 дней в зависимости от выбранного тарифа.",
    },
    {
      question: "Что делать, если приложение, установленное через сертификат, перестало работать?",
      answer: "Если приложение, установленное через сертификат разработчика, перестало работать, возможно, сертификат был отозван Apple. В этом случае, если срок гарантии не истек (1 месяц с момента покупки), обратитесь к нам для бесплатной замены сертификата. Если гарантийный срок истек, вам потребуется приобрести новый сертификат или воспользоваться тарифом 'Супермоментальный' для более быстрой замены.",
    },
    {
      question: "Чем отличаются обычные сертификаты от моментальных?",
      answer: "Обычные сертификаты выдаются в порядке очереди и процесс может занять до 3 дней. Моментальные сертификаты, как следует из названия, выдаются максимально быстро, обычно в течение нескольких часов. Они идеально подходят для тех, кто не хочет ждать и нуждается в немедленном доступе к функциям сертификата.",
    },
    {
      question: "Что такое парные тарифы на сертификаты?",
      answer: "Парные тарифы предоставляют два сертификата по специальной цене, которая ниже, чем стоимость двух отдельных сертификатов. Это выгодно для семейных пар, друзей или для тех, кто имеет несколько устройств. Мы предлагаем 'Парный обычный' тариф и 'Парный моментальный' для более быстрого получения сертификатов.",
    },
    {
      question: "Что такое тариф 'Супермоментальный'?",
      answer: "Тариф 'Супермоментальный' разработан специально для тех, у кого был отозван сертификат и кто нуждается в экстренной замене. Этот тариф обеспечивает самую быструю выдачу нового сертификата, чтобы минимизировать время, в течение которого вы не можете пользоваться установленными приложениями.",
    },
    {
      question: "Могу ли я самостоятельно обновлять приложения, установленные через сертификат?",
      answer: "Да, вы можете самостоятельно обновлять приложения, установленные через сертификат разработчика. Обычно это делается путем загрузки новой версии IPA-файла приложения и его установки через AltStore или другие подобные программы. В некоторых случаях приложения могут иметь встроенную функцию обновления.",
    },
    {
      question: "Безопасно ли использовать сертификат разработчика?",
      answer: "Использование сертификата разработчика безопасно при соблюдении определенных правил: устанавливайте приложения только из проверенных источников, не устанавливайте подозрительные приложения, регулярно проверяйте установленные приложения на наличие обновлений. Сам сертификат не представляет угрозы для безопасности вашего устройства.",
    },
    {
      question: "Что будет, если Apple отзовет мой сертификат?",
      answer: "Если Apple отзовет ваш сертификат, все приложения, установленные с его помощью, перестанут работать. В этом случае, если вы находитесь в пределах гарантийного срока (1 месяц), мы бесплатно предоставим вам новый сертификат. Если гарантийный срок истек, вы можете приобрести новый сертификат или воспользоваться тарифом 'Супермоментальный'.",
    },
    {
      question: "Можно ли передать сертификат другому человеку?",
      answer: "Нет, сертификат разработчика привязывается к конкретному устройству по его уникальному идентификатору (UDID) и не может быть передан другому устройству или пользователю. Для каждого нового устройства требуется отдельный сертификат.",
    },
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

      {/* FAQ Content */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
            Часто задаваемые вопросы
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            Ответы на самые популярные вопросы о сертификатах разработчика и процессе их получения.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm running-border">
          <div className="flex items-start gap-4 mb-8">
            <div className="mt-1 w-12 h-12 bg-theme-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-theme-blue" />
            </div>
            <h2 className="text-2xl font-semibold font-montserrat text-black dark:text-white">
              Основные вопросы о сертификатах
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden px-1">
                <AccordionTrigger className="text-lg font-medium text-black dark:text-white hover:text-theme-blue transition-colors duration-300 py-6 px-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6 pt-2 px-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-12 border border-gray-200 dark:border-gray-800 rounded-lg p-8 group hover:border-theme-blue/30 transition-all duration-500 relative overflow-hidden shine-on-hover running-border">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          
          <h2 className="text-2xl font-semibold font-montserrat text-black dark:text-white mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Если вы не нашли ответ на свой вопрос в этом разделе, обратитесь к нашей технической поддержке через Telegram. 
            Мы готовы помочь вам с любыми вопросами, связанными с нашими услугами.
          </p>
          
          <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-base 
                      py-2 px-8 rounded-full font-medium shadow-md
                      transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Написать</span>
            </Button>
          </a>
        </div>
        
        {/* Back to top and main page buttons */}
        <div className="flex flex-col items-center justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300 mb-8"
          >
            <ArrowUp className="w-5 h-5 text-theme-blue" />
          </button>
          
          <Link to="/" onClick={scrollToTop}>
            <Button
              variant="outline"
              className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default FAQ;
