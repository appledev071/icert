
import React from "react";
import { Button } from "@/components/ui/button";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Готовы расширить возможности?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Выберите подходящий тариф и начните использовать все преимущества
          сертификата разработчика уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white dark:bg-theme-green dark:text-black text-base py-2 px-8 rounded-full font-medium">
            Выбрать тариф
          </Button>
          <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-base py-2 px-8 rounded-full">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};
