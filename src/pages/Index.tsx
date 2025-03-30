import React from "react";
import {
  CertificateHeader,
  PricingCard,
  CertificateFooter,
} from "@/components/developer-certificate";

const Index = () => {
  // Pricing card data
  const pricingCards = [
    {
      title: "iPad",
      price: "399₽",
      iconBgColor: "bg-[#F15BB5]",
      gradientColors:
        "bg-[linear-gradient(135deg,rgba(69,214,202,0.10)_70.71%,rgba(241,91,181,0.10)_0%)]",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Неограниченное количество приложений" },
      ],
    },
    {
      title: "Обычный",
      price: "999₽",
      iconBgColor: "bg-[#45D6CA]",
      gradientColors:
        "bg-[linear-gradient(135deg,rgba(130,71,229,0.10)_70.71%,rgba(69,214,202,0.10)_0%)]",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 3 дней" },
        { text: "Базовая поддержка" },
      ],
    },
    {
      title: "Моментальный",
      price: "1499₽",
      iconBgColor: "bg-[#8247E5]",
      gradientColors:
        "bg-[linear-gradient(135deg,rgba(241,91,181,0.10)_70.71%,rgba(130,71,229,0.10)_0%)]",
      features: [
        { text: "Срок действия 1 год" },
        { text: "Выдача в течение 30 минут" },
        { text: "Приоритетная поддержка" },
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#2A2A4E] relative">
      {/* Background gradient overlay */}
      <div className="absolute bg-[linear-gradient(96deg,rgba(69,214,202,0.15)_90.99%,rgba(241,91,181,0.15)_0%,rgba(130,71,229,0.15)_90.99%,rgba(69,214,202,0.15)_0%)] inset-0" />

      {/* Content container */}
      <div className="relative p-12 max-md:px-6 max-sm:px-4">
        {/* Header section */}
        <CertificateHeader
          title="Сертификаты разработчика"
          subtitle="Расширенные возможности для вашего iPhone и iPad"
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98bfd98eea8e1e9276756a26afa94aea5545d6"
          logoAlt="iCert Logo"
        />

        {/* Divider */}
        <div className="w-full h-0.5 bg-[rgba(255,255,255,0.10)] mb-[35px]" />

        {/* Pricing cards section */}
        <section className="flex gap-[34px] max-md:flex-col max-md:gap-6">
          {pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              price={card.price}
              iconBgColor={card.iconBgColor}
              gradientColors={card.gradientColors}
              features={card.features}
            />
          ))}
        </section>

        {/* Footer section */}
        <CertificateFooter
          contactMessage="За дополнительными услугами в личные сообщения"
          contactHandle="@icertstore"
          disclaimer="*в случае если UDID предоставляется для iPhone при покупке сертификата для iPad - средства не возвращаются"
        />
      </div>
    </main>
  );
};

export default Index;
