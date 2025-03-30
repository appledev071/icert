
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WikiNavigation } from "@/components/developer-certificate/WikiNavigation";

const FAQ = () => {
  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "VPN", href: "/vpn-pricing" },
    { label: "О нас", href: "/about" },
  ];

  const faqItems = [
    {
      question: "Для чего нужен VPN?",
      answer: "VPN (Virtual Private Network) необходим для защиты вашей конфиденциальности в интернете, обхода географических ограничений и цензуры, а также для безопасного подключения к публичным Wi-Fi сетям. Наш VPN на базе протокола VLESS обеспечивает высокую скорость соединения, надежное шифрование данных и возможность доступа к заблокированным ресурсам.",
    },
    {
      question: "Как долго действует тариф VPN?",
      answer: "Стандартный срок действия наших VPN тарифов составляет 1 месяц с момента активации. Мы также предлагаем годовой тариф со значительной скидкой. После окончания срока действия тарифа вы можете продлить его, обратившись к нам через Telegram.",
    },
    {
      question: "Для чего нужен сертификат разработчика Apple?",
      answer: "Сертификат разработчика Apple позволяет установить неограниченное количество приложений на iOS устройство в обход App Store. Это дает возможность использовать эмуляторы, модифицированные приложения и другой контент, недоступный в официальном магазине. Также сертификат позволяет разработчикам тестировать свои приложения на реальных устройствах.",
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
      question: "Как обновить VPN клиент на моем устройстве?",
      answer: "Для обновления VPN клиента на вашем устройстве, просто обновите приложение через соответствующий магазин приложений (App Store, Google Play и т.д.). Если вы используете клиент, установленный через APK или другие источники, скачайте новую версию с официального сайта приложения и установите поверх существующей. Ваши конфигурации и настройки обычно сохраняются при обновлении.",
    },
    {
      question: "Может ли использование VPN повлиять на скорость интернета?",
      answer: "Да, использование VPN может незначительно снизить скорость интернет-соединения из-за процесса шифрования и маршрутизации трафика через удаленные серверы. Однако наш VPN на базе протокола VLESS оптимизирован для минимального влияния на скорость и в большинстве случаев снижение скорости практически незаметно для обычного пользователя.",
    },
    {
      question: "Что делать, если приложение, установленное через сертификат, перестало работать?",
      answer: "Если приложение, установленное через сертификат разработчика, перестало работать, возможно, сертификат был отозван Apple. В этом случае, если срок гарантии не истек (1 месяц с момента покупки), обратитесь к нам для бесплатной замены сертификата. Если гарантийный срок истек, вам потребуется приобрести новый сертификат.",
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
        <Link to="/">
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
            Ответы на самые популярные вопросы о VPN-сервисе, сертификатах разработчика и других наших услугах.
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
            <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white">
              Основные вопросы
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-800">
                <AccordionTrigger className="text-lg font-medium text-black dark:text-white hover:text-theme-blue transition-colors duration-300 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4 pt-2">
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
          
          <h2 className="text-2xl font-montserrat font-semibold text-black dark:text-white mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Если вы не нашли ответ на свой вопрос в этом разделе, обратитесь к нашей технической поддержке через Telegram. 
            Мы готовы помочь вам с любыми вопросами, связанными с нашими услугами.
          </p>
          
          <a href="https://t.me/icertstoremanager" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black dark:bg-theme-blue dark:text-white text-base 
                      py-2 px-8 rounded-full font-medium shadow-md
                      transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">@icertstoremanager</span>
            </Button>
          </a>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default FAQ;
