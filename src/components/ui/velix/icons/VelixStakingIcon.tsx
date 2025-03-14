import React from 'react';

interface VelixStakingIconProps extends React.SVGProps<SVGSVGElement> {}

const VelixStakingIcon: React.FC<VelixStakingIconProps> = ({ className, ...props }) => (
  <svg
    className={className} 
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} 
  >
    <g clipPath="url(#clip0_2824_8224)">
      <path
        d="M19.7918 9.375H15.6252V3.125H9.37516V9.375H5.2085L12.5002 16.6667L19.7918 9.375ZM5.2085 18.75V20.8333H19.7918V18.75H5.2085Z"
        fill="#FFFFFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_2824_8224">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default VelixStakingIcon;
