import { ComponentProps } from "react";

export default function ChatIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 22 22"
      fill="currentColor"
    >
      <g clipPath="url(#clip0_173_83)">
        <path d="M17.4167 2.75H4.58333C3.575 2.75 2.75 3.575 2.75 4.58333V17.4167C2.75 18.425 3.575 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75ZM8.25 15.5833H6.41667V9.16667H8.25V15.5833ZM11.9167 15.5833H10.0833V6.41667H11.9167V15.5833ZM15.5833 15.5833H13.75V11.9167H15.5833V15.5833Z" />
      </g>
      <defs>
        <clipPath id="clip0_173_83">
          <rect width="22" height="22" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
