
import React from "react";
import { CertificateHeader } from "./CertificateHeader";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoUrl: string;
  logoAlt: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  logoUrl,
  logoAlt,
}) => {
  return (
    <section className="pb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <CertificateHeader
        title={title}
        subtitle={subtitle}
        logoUrl={logoUrl}
        logoAlt={logoAlt}
      />
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="flex-1 glass-card animate-float">
          <h3 className="text-xl text-theme-blue dark:text-theme-blue mb-3 font-title">
            Что такое сертификат разработчика?
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted text-[15px] leading-relaxed">
            Сертификат разработчика позволяет устанавливать приложения, которые не прошли проверку App Store, 
            тестировать бета-версии, а также использовать эксклюзивные функции на вашем iPhone или iPad. 
            Это идеальное решение для разработчиков, тестировщиков и продвинутых пользователей.
          </p>
        </div>
        <div className="flex-1 glass-card animate-float" style={{ animationDelay: "1s" }}>
          <h3 className="text-xl text-theme-blue dark:text-theme-blue mb-3 font-title">
            Почему стоит выбрать нас?
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted text-[15px] leading-relaxed">
            Мы предлагаем быструю выдачу сертификатов, надежную техническую поддержку и простую процедуру 
            оформления. Наши сертификаты обеспечивают максимальную свободу использования ваших устройств 
            по доступным ценам.
          </p>
        </div>
      </div>
    </section>
  );
};
