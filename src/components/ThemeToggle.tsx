
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/theme-provider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        theme === 'dark'
          ? 'bg-white bg-opacity-10 hover:bg-opacity-20 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-devops-navy'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
