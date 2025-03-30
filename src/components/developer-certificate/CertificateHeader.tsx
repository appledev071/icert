
import React from "react";

interface CertificateHeaderProps {
  title: string;
  subtitle: string;
  logoUrl: string;
  logoAlt: string;
}

export const CertificateHeader: React.FC<CertificateHeaderProps> = ({
  title,
  subtitle,
  logoUrl,
  logoAlt,
}) => {
  return (
    <header className="flex justify-between items-start mb-12 max-md:flex-col max-md:gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#E6E6FF] text-[57px] leading-[85.5px] max-md:text-5xl max-md:leading-[72px] max-sm:text-4xl max-sm:leading-[54px] font-montserrat">
          {title}
        </h1>
        <p className="text-[#8A8AA3] text-3xl leading-[45px] max-md:text-2xl max-md:leading-9 max-sm:text-xl max-sm:leading-[30px] font-montserrat">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={logoUrl}
          alt={logoAlt}
          className="w-[128px] h-[131px] rounded-[35px]"
        />
        <div className="text-white text-center text-xl leading-[30px] mt-[5px] font-montserrat">
          iCert
        </div>
      </div>
    </header>
  );
};
