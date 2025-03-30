
import React from "react";

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
    <footer className="flex flex-col items-center gap-4 text-center mt-12">
      <p className="text-[#BFBFE0] text-xl leading-[30px]">{contactMessage}</p>
      <p className="text-[#E6E6FF] text-2xl leading-9">
        <a href="https://t.me/icertstore" className="hover:underline">t.me/icertstore</a>
      </p>
      <p className="text-[#BFBFE0] text-base leading-6 mt-6">{disclaimer}</p>
    </footer>
  );
};
