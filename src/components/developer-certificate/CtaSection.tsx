
import React from "react";
import { Button } from "@/components/ui/button";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <div className="glass-card text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold font-spectral mb-6 text-theme-light-blue dark:text-theme-light-blue tracking-wide">
          Готовы расширить возможности?
        </h2>
        <p className="text-xl md:text-2xl text-theme-light-muted dark:text-theme-light-muted mb-10 max-w-3xl mx-auto font-light">
          Выберите подходящий тариф и начните использовать все преимущества
          сертификата разработчика уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button className="button-primary bg-theme-teal text-lg py-4 px-10">Выбрать тариф</Button>
          <Button variant="outline" className="border-theme-light-muted text-theme-light-blue text-lg py-4 px-10">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};
