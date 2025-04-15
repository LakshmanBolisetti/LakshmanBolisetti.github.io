
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
      <Logo size="medium" />
    </Link>
  );
};

export default HeaderLogo;
