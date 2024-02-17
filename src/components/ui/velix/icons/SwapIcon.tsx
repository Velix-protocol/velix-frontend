import { ComponentProps } from "react";

export default function SwapIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 30 30"
      fill="currentColor"
    >
      <g clip-path="url(#clip0_420_209)">
        <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM8.125 11.25L12.5 6.875L16.875 11.25H13.75V16.25H11.25V11.25H8.125ZM21.875 18.75L17.5 23.125L13.125 18.75H16.25V13.75H18.75V18.75H21.875Z" />
      </g>
      <defs>
        <clipPath id="clip0_420_209">
          <rect width="30" height="30" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
