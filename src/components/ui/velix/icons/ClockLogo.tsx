import { ComponentProps } from "react";

export default function ClockLogo(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3063_1980)">
        <path
          d="M9.99984 1.6665C5.4165 1.6665 1.6665 5.4165 1.6665 9.99984C1.6665 14.5832 5.4165 18.3332 9.99984 18.3332C14.5832 18.3332 18.3332 14.5832 18.3332 9.99984C18.3332 5.4165 14.5832 1.6665 9.99984 1.6665ZM13.4998 13.4998L9.1665 10.8332V5.83317H10.4165V10.1665L14.1665 12.4165L13.4998 13.4998Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_3063_1980">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
