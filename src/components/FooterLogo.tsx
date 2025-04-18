
import React from 'react';
import Logo from './Logo';

const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <Logo size="large" />
      <p className="text-gray-300 mt-2 max-w-md text-center md:text-left">
        Building scalable, resilient infrastructure and streamlining development workflows.
      </p>
    </div>
  );
};

export default FooterLogo;
