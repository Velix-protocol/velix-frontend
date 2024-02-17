import { ComponentProps } from "react";

export default function UnstakeIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
      fill="currentColor"
    >
      <path d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9ZM22 3V14C22 15.1 21.1 16 20 16H3V14H20V3H22Z" />
    </svg>
  );
}
