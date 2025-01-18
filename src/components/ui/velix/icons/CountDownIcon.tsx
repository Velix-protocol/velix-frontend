import { ComponentProps } from "react";

export default function CountDownIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3063_1980)">
        <path d="M10.0003 1.66699C5.41699 1.66699 1.66699 5.41699 1.66699 10.0003C1.66699 14.5837 5.41699 18.3337 10.0003 18.3337C14.5837 18.3337 18.3337 14.5837 18.3337 10.0003C18.3337 5.41699 14.5837 1.66699 10.0003 1.66699ZM13.5003 13.5003L9.16699 10.8337V5.83366H10.417V10.167L14.167 12.417L13.5003 13.5003Z" />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
