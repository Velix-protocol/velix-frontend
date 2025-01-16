import { ComponentProps } from "react";

export default function AddWallet(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g clipPath="url(#clip0_2291_1103)">
        <path
          d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM14 10H10V14H8V10H4V8H8V4H10V8H14V10Z"
          fill="#FF0303"
        />
      </g>
    </svg>
  );
}
