
import React from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

const Steps = ({ children, className }: StepsProps) => {
  return (
    <ol className={cn("space-y-3 list-none pl-0", className)}>
      {children}
    </ol>
  );
};

const Step = ({ children, className }: StepProps) => {
  return (
    <li className={cn("flex gap-3 items-start", className)}>
      <div className="w-6 h-6 rounded-full bg-theme-blue dark:bg-theme-blue flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5 relative light:shadow-sm">
        {/* Light theme pencil-style decoration */}
        <div className="absolute inset-0 rounded-full border border-blue-300 opacity-20 light:block hidden"></div>
        <span>•</span>
      </div>
      <span className="text-gray-700 dark:text-gray-300 notion-box p-2 border-0 shadow-none relative group">
        {/* Light theme paper texture and hover effect */}
        <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-20 rounded transition-opacity duration-300 dark:hidden"></div>
        {children}
      </span>
    </li>
  );
};

Steps.Step = Step;

export { Steps };
