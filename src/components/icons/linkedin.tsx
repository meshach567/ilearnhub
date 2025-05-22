import { JSX } from "react";
import { IconType } from "./type/icon.type";

const Linkedin = ({
  className = "h-5 w-5 bi bi-journal-text",
  color = "",
}: IconType): JSX.Element => {
  return (
    <svg
      className={`${className} ${color || "text-[#FF7F50]"}`}
      viewBox="0 0 540 507"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <g filter="url(#filter0_d_4_3412)">
        {" "}
        <rect
          x="25"
          y="21"
          width="490"
          height="457"
          rx="14"
          fill="white"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <filter
          id="filter0_d_4_3412"
          x="0"
          y="0"
          width="540"
          height="507"
          filterUnits="userSpaceOnUse"
          colorinterpolation-filters="sRGB"
        >
          {" "}
          <feFlood floodOpacity="0" result="BackgroundImageFix" />{" "}
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />{" "}
          <feOffset dy="4" /> <feGaussianBlur stdDeviation="12.5" />{" "}
          <feComposite in2="hardAlpha" operator="out" />{" "}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />{" "}
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_3412"
          />{" "}
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_3412"
            result="shape"
          />{" "}
        </filter>{" "}
      </defs>{" "}
    </svg>
  );
};

export default Linkedin;
