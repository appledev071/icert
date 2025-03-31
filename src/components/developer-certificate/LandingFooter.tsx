
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, FileText, Shield } from "lucide-react";

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
          <a href="https://t.me/icertmanager" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-black hover:bg-gray-900 dark:bg-theme-blue dark:hover:bg-blue-600 text-white">
              Связаться с нами
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Legal documents section */}
      <div className="border-t border-gray-800 pt-6 mb-6">
        <h3 className="text-xl font-montserrat text-theme-blue dark:text-theme-blue mb-4">
          Правовая информация
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/privacy-policy" className="flex items-center text-theme-light-muted hover:text-theme-blue transition-colors">
            <FileText className="mr-2 h-4 w-4" />
            Условия обработки персональных данных
          </Link>
          <Link to="/terms-of-use" className="flex items-center text-theme-light-muted hover:text-theme-blue transition-colors">
            <Shield className="mr-2 h-4 w-4" />
            Условия использования
          </Link>
        </div>
      </div>
      
      <div className="text-[#BFBFE0] text-base leading-6 mt-6 max-w-xl mx-auto border-t border-gray-800 pt-6 text-center">
        {disclaimer}
      </div>
    </footer>
  );
};
