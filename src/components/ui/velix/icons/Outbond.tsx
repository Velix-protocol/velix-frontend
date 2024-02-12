import { ComponentProps } from "react";

export default function Outbond(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 37 37"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M33.391 19.1795C33.5946 11.1321 27.2286 4.43555 19.1812 4.2319C11.1338 4.02825 4.43728 10.3942 4.23363 18.4416C4.02998 26.4891 10.3959 33.1856 18.4434 33.3892C26.4908 33.5929 33.1873 27.2269 33.391 19.1795ZM19.4136 21.5683L12.3655 14.1543L14.4731 12.1507L21.5212 19.5648L24.705 16.5381L24.482 24.7747L16.2447 24.5808L19.4136 21.5683Z" />
    </svg>
  );
}
