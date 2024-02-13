import { ComponentProps } from "react";

export default function DownloadIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_315_234)">
        <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" />
      </g>
      <defs>
        <clipPath id="clip0_315_234">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
