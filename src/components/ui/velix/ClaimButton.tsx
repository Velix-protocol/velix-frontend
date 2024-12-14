import React from 'react';

type ClaimButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const ClaimButton: React.FC<ClaimButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      className={`font-space-grotes text-blue-600 border border-blue-600 rounded-full px-3 py-1 text-sm font-medium hover:bg-velix-blue  hover:text-white dark:hover:bg-velix-claim dark:border-white dark:text-velix-claim dark:hover:text-velix-claim-gray ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ClaimButton;
