
import React from "react";
import { Button } from "@/components/ui/button";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <div className="glass-card text-center py-12">
        <h2 className="text-3xl font-title mb-4 text-theme-light-blue dark:text-theme-light-blue">
          Готовы расширить возможности?
        </h2>
        <p className="text-lg text-theme-light-muted dark:text-theme-light-muted mb-8 max-w-2xl mx-auto font-light">
          Выберите подходящий тариф и начните использовать все преимущества
          сертификата разработчика уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="button-primary bg-theme-teal text-base py-2 px-8">Выбрать тариф</Button>
          <Button variant="outline" className="border-theme-light-muted text-theme-light-blue text-base py-2 px-8">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};
