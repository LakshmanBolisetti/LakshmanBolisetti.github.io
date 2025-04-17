
import React from 'react';
import Logo from './Logo';

const HeaderLogo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
      <Logo size="medium" />
    </a>
  );
};

export default HeaderLogo;
