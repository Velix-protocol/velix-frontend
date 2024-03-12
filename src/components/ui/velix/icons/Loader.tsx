import { ComponentProps } from "react";

export default function Loader(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 93 93"
      fill="none"
    >
      <circle
        cx="46.5"
        cy="46.5"
        r="45"
        transform="matrix(1 0 0 -1 0 93)"
        stroke="url(#paint0_linear_1165_292)"
        stroke-width="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1165_292"
          x1="46.5"
          y1="0"
          x2="46.5"
          y2="93"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#54616B" />
          <stop offset="1" stop-color="#A4BDD1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
