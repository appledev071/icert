
import React from "react";
import { CertificateFooter } from "./CertificateFooter";

interface LandingFooterProps {
  contactMessage: string;
  contactHandle: string;
  disclaimer: string;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({
  contactMessage,
  contactHandle,
  disclaimer,
}) => {
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.10)] animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-montserrat text-theme-light-purple dark:text-theme-light-purple mb-4">
            О нас
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted">
            Мы предоставляем сертификаты для разработчиков iOS с 2018 года.
            Более 10,000 довольных клиентов уже оценили удобство и надежность
            наших услуг.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-montserrat text-theme-light-purple dark:text-theme-light-purple mb-4">
            Полезные ссылки
          </h3>
          <ul className="space-y-2 text-theme-light-muted dark:text-theme-light-muted">
            <li><a href="#" className="hover:text-theme-light-purple transition-colors">Инструкция по установке</a></li>
            <li><a href="#" className="hover:text-theme-light-purple transition-colors">Часто задаваемые вопросы</a></li>
            <li><a href="#" className="hover:text-theme-light-purple transition-colors">Политика конфиденциальности</a></li>
            <li><a href="#" className="hover:text-theme-light-purple transition-colors">Условия использования</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-montserrat text-theme-light-purple dark:text-theme-light-purple mb-4">
            Контакты
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted mb-2">{contactMessage}</p>
          <p className="text-theme-light-purple dark:text-theme-light-purple text-2xl font-medium">{contactHandle}</p>
        </div>
      </div>
      
      <CertificateFooter
        contactMessage={contactMessage}
        contactHandle={contactHandle}
        disclaimer={disclaimer}
      />
    </footer>
  );
};
