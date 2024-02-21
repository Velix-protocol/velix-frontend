import { ComponentProps } from "react";

export default function Analytics(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g clipPath="url(#clip0_333_309)">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V12H9V17ZM13 17H11V14H13V17ZM13 12H11V10H13V12ZM17 17H15V7H17V17Z" />
      </g>
      <defs>
        <clipPath id="clip0_333_309">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
