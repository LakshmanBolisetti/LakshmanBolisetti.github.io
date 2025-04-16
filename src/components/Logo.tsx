
import React from 'react';
import { useTheme } from '../providers/theme-provider';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = "medium", 
  showText = true 
}) => {
  const { theme } = useTheme();
  
  const sizeMap = {
    small: {
      container: "h-8",
      logo: "h-8 w-8",
      text: "text-lg"
    },
    medium: {
      container: "h-10",
      logo: "h-10 w-10",
      text: "text-xl"
    },
    large: {
      container: "h-12",
      logo: "h-12 w-12",
      text: "text-2xl"
    }
  };
  
  const selectedSize = sizeMap[size];

  return (
    <div className={cn(
      "flex items-center gap-2", 
      selectedSize.container, 
      className
    )}>
      <div className="relative">
        <img 
          src="/lovable-uploads/e2f6755d-ac8f-42e5-be8a-f9f05002a79e.png" 
          alt="DevOps Logo" 
          className={cn(
            selectedSize.logo,
            "transition-colors duration-300",
            theme === "dark" ? "invert" : ""
          )}
        />
      </div>
      
      {showText && (
        <span className={cn(
          "font-bold tracking-tight transition-colors duration-300", 
          selectedSize.text,
          theme === "dark" ? "text-white" : "text-gray-800"
        )}>
          DevOps
        </span>
      )}
    </div>
  );
};

export default Logo;
