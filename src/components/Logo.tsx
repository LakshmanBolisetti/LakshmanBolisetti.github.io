
import React from 'react';
import { useTheme } from '../providers/theme-provider';
import { Infinity, Server } from 'lucide-react';
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
      icon: 24,
      text: "text-lg"
    },
    medium: {
      container: "h-10",
      icon: 32,
      text: "text-xl"
    },
    large: {
      container: "h-12",
      icon: 40,
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
        <Infinity 
          className={cn(
            "transition-colors duration-300", 
            theme === "dark" ? "text-white" : "text-gray-800"
          )}
          strokeWidth={2}
          size={selectedSize.icon} 
        />
        <Server 
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 transition-colors duration-300",
            theme === "dark" ? "text-purple-300" : "text-purple-700"
          )}
          strokeWidth={1.5}
          size={selectedSize.icon * 0.6} 
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
