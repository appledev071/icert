import React, { useEffect, useMemo } from "react";
import {
  PricingCard,
  ThemedLandingWrapper,
} from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { HeroSection } from "@/components/developer-certificate/HeroSection";
import { FeaturesSection } from "@/components/developer-certificate/FeaturesSection";
import { CtaSection } from "@/components/developer-certificate/CtaSection";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";
import { Button } from "@/components/ui/button";
import { ArrowUp, Check, Shield, Smartphone, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Reusable animation variants 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger for pricing cards
    },
  },
};

// Используем облегченные варианты анимаций для мобильных устройств
const desktopItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 } 
  },
};

const Index = () => {
  const isMobile = useIsMobile();
  
  // Используем соответствующие варианты анимаций в зависимости от устройства
  const itemVariants = isMobile ? mobileItemVariants : desktopItemVariants;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Мемоизируем данные карточек, чтобы избежать повторных вычислений
  const pricingCards = useMemo(() => [
    {
      title: "iPad",
      price: "399₽",
      iconBgColor: "bg-blue-500",
      gradientColors:
        "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Одно устройство" },
      ],
      glowColor: "rgba(59, 130, 246, 0.5)" // Blue glow
    },
    {
      title: "Обычный",
      price: "999₽",
      iconBgColor: "bg-purple-500",
      gradientColors:
        "bg-gradient-to-br from-gray-100 to-purple-100 dark:from-gray-800 dark:to-purple-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Одно устройство" },
      ],
      glowColor: "rgba(139, 92, 246, 0.5)" // Purple glow
    },
    {
      title: "Моментальный",
      price: "1499₽",
      iconBgColor: "bg-green-500",
      gradientColors:
        "bg-gradient-to-br from-green-50 to-gray-100 dark:from-green-900/20 dark:to-gray-800",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 30 минут" },
        { text: "Одно устройство" },
      ],
      glowColor: "rgba(34, 197, 94, 0.5)" // Green glow
    },
    {
      title: "Парный обычный",
      price: "1799₽",
      iconBgColor: "bg-indigo-500",
      gradientColors:
        "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Два устройства" },
        { text: "Экономия 199₽" },
      ],
      glowColor: "rgba(99, 102, 241, 0.5)" // Indigo glow
    },
    {
      title: "Парный моментальный",
      price: "2799₽",
      iconBgColor: "bg-amber-500",
      gradientColors:
        "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 30 минут" },
        { text: "Два устройства" },
        { text: "Экономия 199₽" },
      ],
      glowColor: "rgba(245, 158, 11, 0.5)" // Amber glow
    },
    {
      title: "Супермоментальный",
      price: "1999₽",
      iconBgColor: "bg-rose-500",
      gradientColors:
        "bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 15 минут" },
        { text: "Одно устройство" },
        { text: "Для отозванных сертификатов" },
      ],
      glowColor: "rgba(244, 63, 94, 0.5)" // Rose glow
    },
  ], []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Wiki", href: "/wiki" },
    { label: "О нас", href: "/about" },
  ];

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Hero section as main CTA */}
      <HeroSection
        title="Сертификаты разработчика"
        subtitle="Расширенные возможности для вашего iPhone и iPad"
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        hideSparkles={isMobile}
      />

      {/* Visual Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col space-y-6"
            >
              <Badge className="w-fit bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
                Расширенные возможности
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
                Разблокируйте потенциал вашего устройства
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Сертификаты разработчика открывают новые возможности для вашего iPhone и iPad, 
                позволяя устанавливать приложения из любых источников и использовать 
                расширенные функции.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-theme-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Неограниченная установка приложений</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Устанавливайте приложения, не представленные в App Store</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-theme-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Доступ к бета-версиям</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Тестируйте новейшие приложения до их официального релиза</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-theme-blue" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Расширенная кастомизация</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Используйте темы и модификации, недоступные обычным пользователям</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex justify-center"
            >
              {/* Phone mockup with animated elements */}
              <div className="relative w-[280px] h-[580px] flex items-center justify-center">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-gray-900 dark:bg-gray-800 rounded-[40px] border-4 border-gray-800 dark:border-gray-700 shadow-2xl overflow-hidden">
                  {/* Screen content */}
                  <div className="absolute inset-[3px] rounded-[36px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 overflow-hidden">
                    {/* App icons grid */}
                    <div className="grid grid-cols-4 gap-4 p-6 pt-14">
                      {[...Array(16)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                          className="aspect-square rounded-xl bg-gradient-to-br from-theme-blue/80 to-purple-500/80 dark:from-theme-blue/60 dark:to-purple-600/60 shadow-md flex items-center justify-center"
                        >
                          <div className="w-2/3 h-2/3 rounded-md bg-white/30 dark:bg-white/20 backdrop-blur-sm" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Animated notification */}
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 5 
                      }}
                      className="absolute top-20 right-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-theme-blue flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-3 flex-grow">
                        <p className="text-xs font-semibold text-black dark:text-white">Сертификат установлен</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Все функции активированы</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                  <div className="w-36 h-6 bg-black rounded-b-xl" />
                </div>

                {/* Shine effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: 'loop',
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-[40px] pointer-events-none"
                />
              </div>

              {/* Decorative blobs */}
              <div className="absolute -z-10 w-full h-full overflow-hidden">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-10 -right-10 w-60 h-60 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <Badge className="bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
              Надежное решение
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-montserrat">
              Почему выбирают нас
            </h2>
            <p className="max-w-[700px] text-gray-700 dark:text-gray-300">
              Мы предлагаем надежные и безопасные сертификаты разработчика для разблокировки полного потенциала ваших устройств
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-900/40 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-3 rounded-full bg-theme-blue/10">
                <Shield className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold">Безопасность</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Все наши сертификаты полностью безопасны и не угрожают вашим данным и устройствам
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-900/40 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-3 rounded-full bg-theme-blue/10">
                <Smartphone className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold">Совместимость</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Работает на всех современных устройствах iPhone и iPad с актуальными версиями iOS
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-900/40 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-3 rounded-full bg-theme-blue/10">
                <Users className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold">Поддержка</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Наша команда всегда готова ответить на вопросы и помочь с настройкой
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30 rounded-2xl mx-4 md:mx-6 my-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <Badge className="bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
              Отзывы пользователей
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-montserrat">
              Что говорят клиенты
            </h2>
            <p className="max-w-[700px] text-gray-700 dark:text-gray-300">
              Присоединяйтесь к тысячам довольных пользователей, которые уже оценили наш сервис
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-theme-blue text-theme-blue" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 flex-grow">
                    "Очень доволен сервисом. Быстро получил сертификат, всё работает без проблем. Теперь могу устанавливать любые приложения на свой iPhone."
                  </blockquote>
                  <Separator className="my-4" />
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>АМ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Алексей Морозов</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">iPhone 14 Pro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-theme-blue text-theme-blue" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 flex-grow">
                    "Уже второй раз пользуюсь этим сервисом. Отличная поддержка, быстрая выдача сертификатов. Рекомендую всем, кто хочет разнообразить возможности своего iPad."
                  </blockquote>
                  <Separator className="my-4" />
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>ЕК</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Елена Кузнецова</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">iPad Pro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-theme-blue text-theme-blue" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 flex-grow">
                    "Моментальная выдача сертификата действительно моментальная! Получил через 15 минут после оплаты. Отдельное спасибо за подробную инструкцию по установке."
                  </blockquote>
                  <Separator className="my-4" />
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>ИС</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Игорь Соколов</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">iPhone 13 mini</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <div className="container mx-auto px-4 md:px-6">
        <FeaturesSection />
      </div>

      {/* Pricing section */}
      <section id="pricing" className="py-20 container mx-auto px-4 md:px-6 text-center">
        <h2 className="section-title mb-4 font-montserrat">Тарифы сертификатов</h2>
        <p className="section-description mb-12 mx-auto">
          Выберите оптимальный вариант сертификата разработчика для ваших потребностей
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              variants={itemVariants}
              title={card.title}
              price={card.price}
              iconBgColor={card.iconBgColor}
              gradientColors={card.gradientColors}
              features={card.features}
              glowColor={card.glowColor}
            />
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 my-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-theme-blue">98%</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Довольных клиентов</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-theme-blue">15 мин</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Быстрая выдача</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-theme-blue">24/7</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Поддержка клиентов</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30 rounded-2xl mx-4 md:mx-6 my-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <Badge className="bg-theme-blue/10 text-theme-blue hover:bg-theme-blue/20 transition-colors">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-montserrat">
              Часто задаваемые вопросы
            </h2>
            <p className="max-w-[700px] text-gray-700 dark:text-gray-300">
              Ответы на самые популярные вопросы о сертификатах разработчика
            </p>
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto">
            <motion.div 
              className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Что такое сертификат разработчика?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Сертификат разработчика — это специальный цифровой сертификат, который позволяет устанавливать и запускать на устройствах iOS приложения, не опубликованные в App Store, а также дает доступ к расширенным функциям устройства.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Безопасно ли использовать такие сертификаты?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Да, наши сертификаты абсолютно безопасны. Они не дают доступа к личным данным и не могут быть использованы для причинения вреда вашему устройству. Мы используем только официальные механизмы, предусмотренные Apple.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Как долго действует сертификат?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Все наши сертификаты действуют в течение 1 года с момента активации. После истечения срока действия, сертификат можно обновить, приобретя новый.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Что делать, если сертификат был отозван?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  В редких случаях сертификаты могут быть отозваны Apple. В такой ситуации мы предлагаем тариф "Супермоментальный", который позволяет получить новый сертификат в течение 15 минут.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Как установить сертификат на устройство?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  После приобретения сертификата вы получите подробную инструкцию по установке. Процесс установки занимает всего несколько минут и не требует специальных технических знаний.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/faq">
              <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10">
                Больше вопросов и ответов
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section with standard spacing */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <CtaSection />
      </div>

      {/* Back to top button */}
      <div className="container mx-auto px-4 md:px-6 flex justify-center mb-10">
        <button 
          onClick={scrollToTop}
          className="bg-theme-blue/10 hover:bg-theme-blue/20 text-theme-blue w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Прокрутить наверх"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      {/* Footer section */}
      <div id="contacts" className="container mx-auto px-4 md:px-6">
        <LandingFooter
          contactHandle="icertmanager"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </ThemedLandingWrapper>
  );
};

export default Index;
