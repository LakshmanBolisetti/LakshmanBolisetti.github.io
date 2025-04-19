
import React from 'react';
import Logo from './Logo';

const HeaderLogo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
      <Logo size="small" />
    </a>
  );
};

export default HeaderLogo;
