
import React from "react";
import { Button } from "@/components/ui/button";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <div className="glass-card text-center py-12">
        <h2 className="text-3xl font-medium mb-4 text-gray-900 dark:text-white">
          Готовы расширить возможности?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Выберите подходящий тариф и начните использовать все преимущества
          сертификата разработчика уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-theme-blue text-base py-2 px-8 rounded-full font-medium">Выбрать тариф</Button>
          <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-base py-2 px-8 rounded-full">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};
