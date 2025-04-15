
import React from 'react';
import Logo from './Logo';

const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Logo size="large" />
      <p className="text-sm mt-2 text-muted-foreground">
        Continuous Integration & Delivery
      </p>
    </div>
  );
};

export default FooterLogo;
