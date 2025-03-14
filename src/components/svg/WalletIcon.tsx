import { ComponentProps } from "react";

export default function WalletIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <g clipPath="url(#clip0_2005_46)">
        <path
          d="M23.5 21V21.8333C23.5 22.75 22.75 23.5 21.8333 23.5H10.1667C9.24167 23.5 8.5 22.75 8.5 21.8333V10.1667C8.5 9.25 9.24167 8.5 10.1667 8.5H21.8333C22.75 8.5 23.5 9.25 23.5 10.1667V11H16C15.075 11 14.3333 11.75 14.3333 12.6667V19.3333C14.3333 20.25 15.075 21 16 21H23.5ZM16 19.3333H24.3333V12.6667H16V19.3333ZM19.3333 17.25C18.6417 17.25 18.0833 16.6917 18.0833 16C18.0833 15.3083 18.6417 14.75 19.3333 14.75C20.025 14.75 20.5833 15.3083 20.5833 16C20.5833 16.6917 20.025 17.25 19.3333 17.25Z"
          // fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2005_46">
          <rect
            width="20"
            height="20"
            fill="currentColor"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
