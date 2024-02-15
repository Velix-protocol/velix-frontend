import { ComponentProps } from "react";

export default function WalletIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 15 15"
      fill="currentColor"
    >
      <g clipPath="url(#clip0_315_264)">
        <path d="M13.125 11.25V11.875C13.125 12.5625 12.5625 13.125 11.875 13.125H3.125C2.43125 13.125 1.875 12.5625 1.875 11.875V3.125C1.875 2.4375 2.43125 1.875 3.125 1.875H11.875C12.5625 1.875 13.125 2.4375 13.125 3.125V3.75H7.5C6.80625 3.75 6.25 4.3125 6.25 5V10C6.25 10.6875 6.80625 11.25 7.5 11.25H13.125ZM7.5 10H13.75V5H7.5V10ZM10 8.4375C9.48125 8.4375 9.0625 8.01875 9.0625 7.5C9.0625 6.98125 9.48125 6.5625 10 6.5625C10.5188 6.5625 10.9375 6.98125 10.9375 7.5C10.9375 8.01875 10.5188 8.4375 10 8.4375Z" />
      </g>
      <defs>
        <clipPath id="clip0_315_264">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
