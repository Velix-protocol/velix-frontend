import { ComponentProps } from "react";

export default function InfoICon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g clip-path="url(#clip0_315_799)">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" />
      </g>
      <defs>
        <clipPath id="clip0_315_799">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
