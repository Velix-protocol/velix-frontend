import { ComponentProps } from "react";

export default function OfflineBolt(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_113_229)">
        <path
          d="M17.5 2.94586C9.46461 2.94586 2.94586 9.46461 2.94586 17.5C2.94586 25.5354 9.46461 32.0542 17.5 32.0542C25.5354 32.0542 32.0542 25.5354 32.0542 17.5C32.0542 9.46461 25.5354 2.94586 17.5 2.94586ZM16.7417 29.1667V20.0375H11.6667L18.9584 5.83336V14.9625H23.8438L16.7417 29.1667Z"
          fill="#0000FE"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_229">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
