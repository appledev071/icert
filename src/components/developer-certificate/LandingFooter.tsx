
import React from "react";
import { CertificateFooter } from "./CertificateFooter";
import { Link } from "react-router-dom";

interface LandingFooterProps {
  contactMessage: string;
  contactHandle: string;
  disclaimer: string;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({
  contactHandle,
  disclaimer,
}) => {
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.10)] animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-playfair text-theme-blue dark:text-theme-blue mb-4">
            О нас
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted">
            Мы предоставляем сертификаты для разработчиков iOS с 2018 года.
            Более 10,000 довольных клиентов уже оценили удобство и надежность
            наших услуг.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-playfair text-theme-blue dark:text-theme-blue mb-4">
            Полезные ссылки
          </h3>
          <ul className="space-y-2 text-theme-light-muted dark:text-theme-light-muted">
            <li><Link to="/installation-guide" className="hover:text-theme-blue transition-colors">Инструкция по установке</Link></li>
            <li><Link to="/faq" className="hover:text-theme-blue transition-colors">Часто задаваемые вопросы</Link></li>
            <li><a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer" className="hover:text-theme-blue transition-colors">Политика конфиденциальности</a></li>
            <li><a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer" className="hover:text-theme-blue transition-colors">Условия использования</a></li>
            <li><Link to="/wiki" className="hover:text-theme-blue transition-colors">Узнать больше</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-playfair text-theme-blue dark:text-theme-blue mb-4">
            Контакты
          </h3>
          <p className="text-theme-blue dark:text-theme-blue text-2xl font-medium">
            <a href="https://t.me/icertstore" target="_blank" rel="noopener noreferrer" className="hover:underline">t.me/icertstore</a>
          </p>
        </div>
      </div>
      
      <CertificateFooter
        contactMessage=""
        contactHandle={contactHandle}
        disclaimer={disclaimer}
      />
    </footer>
  );
};
