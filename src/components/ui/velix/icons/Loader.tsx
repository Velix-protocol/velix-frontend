import { useTheme } from "@/context/theme-provider";
import { ComponentProps } from "react";

export default function Loader(props: ComponentProps<"svg">) {
  const { theme } = useTheme();
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
        strokeWidth="3"
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
          <stop stopColor={theme === "light" ? "#54616B" : "#fff"} />
          <stop
            offset="1"
            stopColor={theme === "light" ? "#A4BDD1" : "#fff"}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
