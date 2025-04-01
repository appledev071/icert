import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface LandingFooterProps {
  contactHandle: string;
  disclaimer: string;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({
  contactHandle,
  disclaimer,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <footer className={`py-12 border-t border-[rgba(255,255,255,0.10)] ${isMobile ? '' : 'animate-fade-in-up'}`} 
            style={isMobile ? {} : { animationDelay: "0.6s" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-montserrat text-theme-blue dark:text-theme-blue mb-4">
            О нас
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted">
            Мы — молодая и амбициозная команда энтузиастов, помогающая людям раскрыть 
            полный потенциал своих устройств и получить доступ к расширенным возможностям.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-montserrat text-theme-blue dark:text-theme-blue mb-4">
            Навигация
          </h3>
          <ul className="space-y-2 text-theme-light-muted dark:text-theme-light-muted">
            <li><Link to="/wiki" className="hover:text-theme-blue transition-colors">Wiki</Link></li>
            <li><Link to="/installation-guide" className="hover:text-theme-blue transition-colors">Инструкция по установке</Link></li>
            <li><Link to="/faq" className="hover:text-theme-blue transition-colors">Часто задаваемые вопросы</Link></li>
            <li><Link to="/about" className="hover:text-theme-blue transition-colors">О нас</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-montserrat text-theme-blue dark:text-theme-blue mb-4">
            Контакты
          </h3>
          <p className="text-theme-light-muted dark:text-theme-light-muted">
            Для связи с нами вы можете обратиться через телеграм:
          </p>
          <a 
            href={`https://t.me/${contactHandle}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-block mt-2 text-theme-blue font-medium hover:underline ${isMobile ? '' : 'will-change-transform'}`}
          >
            @{contactHandle}
          </a>
        </div>
      </div>
      
      <div className="text-center text-theme-light-muted dark:text-theme-light-muted text-sm">
        <p className="mb-2">{disclaimer}</p>
        <p>&copy; {new Date().getFullYear()} iCert. Все права защищены.</p>
      </div>
    </footer>
  );
};
