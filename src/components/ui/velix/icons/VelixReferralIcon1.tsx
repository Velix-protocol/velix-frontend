import React from 'react';

interface VelixReferralIconProps extends React.SVGProps<SVGSVGElement> {}

const VelixReferralIcon1: React.FC<VelixReferralIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props} 
  >
    <g clipPath="url(#clip0_2824_8232)">
      <path
        d="M17 8V5L24 12L17 19V16L21 12L17 8ZM11 9V5L18 12L11 19V14.9C6 14.9 2.5 16.5 0 20C1 15 4 10 11 9Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_2824_8232">
        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
      </clipPath>
    </defs>
  </svg>
);

export default VelixReferralIcon1;
