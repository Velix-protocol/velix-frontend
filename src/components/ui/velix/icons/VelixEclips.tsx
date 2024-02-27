import { ComponentProps } from "react";

export default function VelixEclips(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="543"
      height="590"
      viewBox="0 0 543 590"
      fill="none"
    >
      <g opacity="0.5" filter="url(#filter0_f_792_231)">
        <path
          d="M448.923 283.6C414.08 353.821 250.323 461.787 195.884 434.775C141.445 407.763 139.247 345.774 174.09 275.553C208.934 205.332 298.447 128.594 352.886 155.606C407.324 182.618 483.766 213.38 448.923 283.6Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_792_231"
          x="0.897461"
          y="0.0588379"
          width="606.808"
          height="588.962"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_792_231"
          />
        </filter>
      </defs>
    </svg>
  );
}
