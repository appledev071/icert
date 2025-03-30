
import React from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Globe, Zap, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VpnInfo = () => {
  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Тарифы", href: "/#pricing" },
    { label: "VPN", href: "/#vpn" },
    { label: "О нас", href: "/#about" },
    { label: "Контакты", href: "/#contacts" },
  ];

  return (
    <ThemedLandingWrapper>
      {/* Header with navigation */}
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      {/* Back button */}
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

      {/* VPN Info Hero */}
      <section className="py-12 animate-fade-in-up">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute -z-10 top-20 left-10 w-72 h-72 bg-theme-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -z-10 bottom-10 right-10 w-80 h-80 bg-theme-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 relative">
            VLESS Протокол VPN
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
            VLESS — это современный протокол туннелирования трафика, обеспечивающий высокую скорость соединения 
            и обход блокировок. Разработан как улучшенная версия V2Ray, предлагает минимальные накладные расходы 
            и максимальную производительность.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-7 h-7 text-theme-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Повышенная безопасность</h3>
            <p className="text-gray-700 dark:text-gray-300">
              VLESS обеспечивает высокий уровень шифрования и защиты данных. Используется протокол TLS для создания 
              безопасного туннеля, что делает ваше соединение невидимым для посторонних глаз.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-theme-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Высокая скорость</h3>
            <p className="text-gray-700 dark:text-gray-300">
              В отличие от традиционных VPN-протоколов, VLESS создан с акцентом на производительность. 
              Минимальные накладные расходы позволяют достигать скорости до 1 Гбит/с без компромиссов по безопасности.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-7 h-7 text-theme-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Обход блокировок</h3>
            <p className="text-gray-700 dark:text-gray-300">
              VLESS эффективно обходит даже самые сложные системы блокировок и цензуры в интернете. 
              Технология маскирует VPN-трафик под обычный HTTPS-трафик, что позволяет получить доступ к заблокированным ресурсам.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-theme-blue group transition-all duration-500 shadow-sm hover:shadow-glow-sm running-border">
            <div className="w-14 h-14 bg-theme-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-7 h-7 text-theme-blue" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Нет логов</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Наша реализация VLESS протокола полностью соответствует политике отсутствия логов. 
              Мы не отслеживаем и не храним информацию о ваших действиях в интернете, обеспечивая полную конфиденциальность.
            </p>
          </div>
        </div>
      </section>

      {/* Technical details */}
      <section className="py-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Технические особенности
          <div className="h-1 w-24 bg-theme-blue mt-2"></div>
        </h2>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gradient-to-br from-transparent to-blue-50/5 dark:from-transparent dark:to-blue-950/10 shadow-sm">
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-theme-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-black dark:text-white text-lg mb-1">Мультиплексирование</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  VLESS использует мультиплексирование для создания нескольких подключений в рамках одного TCP-соединения, 
                  что уменьшает задержки и повышает стабильность работы.
                </p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-theme-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-black dark:text-white text-lg mb-1">Поддержка TLS 1.3</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Протокол интегрирован с последней версией TLS 1.3, обеспечивая более быстрое установление защищенного 
                  соединения и улучшенные алгоритмы шифрования.
                </p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-theme-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-black dark:text-white text-lg mb-1">XTLS Direct Mode</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Расширенная технология XTLS Direct Mode позволяет передавать зашифрованные данные без дополнительной 
                  обработки, значительно повышая скорость при работе с большими файлами.
                </p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-theme-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-black dark:text-white text-lg mb-1">Reality Протокол</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Дополнительный уровень защиты с использованием Reality протокола, который имитирует TLS-рукопожатие 
                  реальных популярных веб-сайтов, делая обнаружение VPN-соединения практически невозможным.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center relative overflow-hidden group hover:border-theme-blue/30 transition-all duration-500">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Готовы попробовать наш VPN на базе VLESS?
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите доступ к быстрому, безопасному и надежному VPN-соединению уже сегодня
          </p>
          
          <a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-black border-2 border-theme-blue hover:bg-gray-900 text-white 
                      dark:bg-theme-blue dark:text-white dark:border-white text-base 
                      py-2 px-8 rounded-full font-medium shadow-md hover:shadow-glow 
                      transition-all duration-300 group relative overflow-hidden shine-effect"
            >
              <span className="relative z-10">Подключить VPN сейчас</span>
            </Button>
          </a>
        </div>
      </section>
    </ThemedLandingWrapper>
  );
};

export default VpnInfo;
