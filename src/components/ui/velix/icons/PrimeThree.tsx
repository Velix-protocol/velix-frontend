import React from 'react';

const PrimeThree: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="fill-current text-[#90919C] dark:text-[#B0B3B8] mr-1" 
  >
    <ellipse
      cx="6"
      cy="5.5"
      rx="6"
      ry="5.5"
      className="fill-current" 
    />
  </svg>
);

export default PrimeThree;
