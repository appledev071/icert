import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";

const PrivacyPolicy = () => {
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
      <LandingHeader
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
        logoAlt="iCert Logo"
        menuItems={menuItems}
      />

      {/* Back button */}
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

      {/* Main content */}
      <section className="py-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-black dark:text-white mb-6 relative">
          Условия обработки персональных данных
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
        </h1>

        <div className="prose dark:prose-invert max-w-none mt-8 text-gray-700 dark:text-gray-300">
          <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса iCert.</p>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">1. Собираемые данные</h2>
          <p>Мы собираем и обрабатываем следующие персональные данные:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>UDID устройства;</li>
            <li>Номер телефона (для связи);</li>
            <li>ФИО (при необходимости);</li>
            <li>Платежные данные (для оформления заказа).</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">2. Цели обработки данных</h2>
          <p>Персональные данные обрабатываются в следующих целях:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Оформление и обработка заказов на подключение сертификатов разработчика;</li>
            <li>Связь с пользователем по вопросам обслуживания;</li>
            <li>Выполнение технических операций, необходимых для предоставления услуг;</li>
            <li>Улучшение качества обслуживания.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">3. Хранение и защита данных</h2>
          <p>Мы принимаем все необходимые меры для защиты персональных данных пользователей от неправомерного доступа, изменения, раскрытия или уничтожения:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Данные хранятся на защищенных серверах;</li>
            <li>Доступ к данным ограничен и контролируется;</li>
            <li>Применяются современные методы технической защиты информации;</li>
            <li>Персональные данные хранятся не дольше, чем это необходимо для оказания услуг.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">4. Передача данных третьим лицам</h2>
          <p>Мы не передаем персональные данные пользователей третьим лицам, за исключением следующих случаев:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Для выполнения обязательств перед пользователем (например, при оформлении сертификата);</li>
            <li>По требованию законодательства;</li>
            <li>Для защиты наших прав и интересов.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">5. Права пользователей</h2>
          <p>Пользователи имеют право:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Запрашивать информацию об обработке их персональных данных;</li>
            <li>Требовать уточнения, блокирования или уничтожения персональных данных;</li>
            <li>Отозвать согласие на обработку персональных данных;</li>
            <li>Обжаловать действия или бездействие администрации сервиса.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">6. Изменение политики конфиденциальности</h2>
          <p>Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия политики всегда доступна на нашем сайте.</p>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">7. Контактная информация</h2>
          <p>По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:</p>
          <p className="mt-2">Telegram: <a href="https://t.me/icertmanager" className="text-theme-blue hover:underline">@icertmanager</a></p>
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="flex flex-col items-center justify-center mb-10">
        <Link to="/" onClick={scrollToTop} className="mb-8">
          <Button
            variant="outline"
            className="group flex items-center gap-2 border-theme-blue/30 hover:border-theme-blue transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Вернуться на главную
          </Button>
        </Link>
        
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 bg-theme-blue/10 rounded-full hover:bg-theme-blue/20 transition-colors duration-300"
        >
          <ArrowUp className="w-5 h-5 text-theme-blue" />
        </button>
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
