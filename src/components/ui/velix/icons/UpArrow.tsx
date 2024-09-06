import { ComponentProps } from "react";

export default function UpArrow(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2420_1543)">
        <path d="M1 14L14 1M14 1H5.25455M14 1V9.27273" stroke="#54616B"/>
      </g>
      <defs>
        <clipPath id="clip0_2420_1543">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
