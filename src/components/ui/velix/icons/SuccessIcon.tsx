import { ComponentProps } from "react";

export default function SuccessIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 50 50"
      fill="none"
    >
      <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM20 37.5L7.5 25L11.025 21.475L20 30.425L38.975 11.45L42.5 15L20 37.5Z" />
    </svg>
  );
}
