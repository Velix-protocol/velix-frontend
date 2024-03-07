import { ComponentProps } from "react";

export default function ClockIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 53 46"
      fill="none"
    >
      <path
        d="M30.5 0.5C18.075 0.5 8 10.575 8 23H0.5L10.225 32.725L10.4 33.075L20.5 23H13C13 13.325 20.825 5.5 30.5 5.5C40.175 5.5 48 13.325 48 23C48 32.675 40.175 40.5 30.5 40.5C25.675 40.5 21.3 38.525 18.15 35.35L14.6 38.9C18.675 42.975 24.275 45.5 30.5 45.5C42.925 45.5 53 35.425 53 23C53 10.575 42.925 0.5 30.5 0.5ZM28 13V25.5L38.7 31.85L40.5 28.825L31.75 23.625V13H28Z"
        fill="#54616B"
      />
    </svg>
  );
}
