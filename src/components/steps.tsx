
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
      <div className="w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
        {/* Bullet point */}
        <span>·</span>
      </div>
      <span className="text-gray-700 dark:text-gray-300">{children}</span>
    </li>
  );
};

Steps.Step = Step;

export { Steps };
