import React, { useEffect } from "react";
import { ThemedLandingWrapper } from "@/components/developer-certificate";
import { LandingHeader } from "@/components/developer-certificate/LandingHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { LandingFooter } from "@/components/developer-certificate/LandingFooter";

const TermsOfUse = () => {
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
          Условия использования
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-blue to-blue-400"></div>
        </h1>

        <div className="prose dark:prose-invert max-w-none mt-8 text-gray-700 dark:text-gray-300">
          <p>Настоящие Условия использования определяют правила и ограничения использования сервиса iCert и предоставляемых им сертификатов разработчика.</p>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">1. Общие положения</h2>
          <p>Сервис iCert предоставляет услуги по оформлению сертификатов разработчика для устройств на платформе iOS и iPadOS. Используя наш сервис, вы соглашаетесь с настоящими Условиями использования.</p>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">2. Ограничения использования</h2>
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

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">3. Ответственность пользователя</h2>
          <p>Пользователь несет полную ответственность за:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Любой контент, распространяемый с использованием сертификата;</li>
            <li>Соблюдение законодательства страны проживания;</li>
            <li>Соблюдение условий использования платформы iOS/iPadOS;</li>
            <li>Обеспечение безопасности своего аккаунта и устройств;</li>
            <li>Любой ущерб, причиненный в результате нарушения настоящих Условий.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">4. Отказ от гарантий</h2>
          <p>Сервис iCert предоставляется "как есть" без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Непрерывную работу сертификатов в течение всего заявленного срока, так как Apple Inc. может отозвать сертификат в любое время;</li>
            <li>Возможность установки любых приложений на устройства;</li>
            <li>Отсутствие сбоев или ошибок в работе сервиса;</li>
            <li>Совместимость со всеми устройствами и версиями ПО.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">5. Возврат средств</h2>
          <p>Возврат средств осуществляется в следующих случаях:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Если сертификат не был предоставлен в указанный срок;</li>
            <li>Если предоставленный сертификат не работает при первом использовании.</li>
          </ul>
          <p>Возврат средств не осуществляется в случаях:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Если сертификат был отозван Apple Inc. после его активации;</li>
            <li>Если пользователь нарушил настоящие Условия использования;</li>
            <li>Если UDID предоставлен некорректно или от другого устройства;</li>
            <li>По истечении 24 часов с момента предоставления сертификата.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">6. Изменение условий</h2>
          <p>Мы оставляем за собой право изменять настоящие Условия использования в любое время. Актуальная версия всегда доступна на нашем сайте. Продолжая использовать наш сервис после внесения изменений, вы соглашаетесь с новыми условиями.</p>

          <h2 className="text-2xl font-medium mt-8 mb-4 text-black dark:text-white">7. Контактная информация</h2>
          <p>По всем вопросам, связанным с использованием сервиса, вы можете связаться с нами:</p>
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

export default TermsOfUse;
