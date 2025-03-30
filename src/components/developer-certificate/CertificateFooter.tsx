
import React from "react";
import { ExternalLink } from "lucide-react";

interface CertificateFooterProps {
  contactMessage: string;
  contactHandle: string;
  disclaimer: string;
}

export const CertificateFooter: React.FC<CertificateFooterProps> = ({
  contactMessage,
  contactHandle,
  disclaimer,
}) => {
  return (
    <footer className="flex flex-col items-center gap-4 text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <p className="text-[#BFBFE0] text-xl leading-[30px]">{contactMessage}</p>
      <p className="text-[#E6E6FF] text-2xl leading-9 transition-all duration-300 hover:scale-105">
        <a 
          href="https://t.me/icertstore" 
          className="flex items-center gap-2 hover:text-theme-blue border-b-2 border-transparent hover:border-theme-blue px-2 py-1 rounded-sm transition-all"
        >
          t.me/icertstore <ExternalLink className="h-4 w-4" />
        </a>
      </p>
      <p className="text-[#BFBFE0] text-base leading-6 mt-6 max-w-xl mx-auto border-t border-gray-800 pt-6">{disclaimer}</p>
    </footer>
  );
};
