
import React from 'react';

type DevOpsLogoProps = {
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
};

const DevOpsLogo = ({ className = "", iconClassName = "", containerClassName = "" }: DevOpsLogoProps) => {
  return (
    <div className={`flex items-center gap-2 font-poppins relative ${containerClassName}`}>
      {/* Combined infinity symbol with Dev/Ops text */}
      <svg
        viewBox="0 0 100 40"
        className={`${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35 20c-3-4-6-6-9-6a6 6 0 1 0 0 12c3 0 6-2 9-6zm0 0c3-4 6-6 9-6a6 6 0 1 1 0 12c-3 0-6-2-9-6z"
          className={`${iconClassName} stroke-current`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dev text in left loop */}
        <text x="22" y="22" className="text-xs font-bold fill-current">Dev</text>
        {/* Ops text in right loop */}
        <text x="40" y="22" className="text-xs font-bold fill-current">Ops</text>
      </svg>
    </div>
  );
};

export default DevOpsLogo;
