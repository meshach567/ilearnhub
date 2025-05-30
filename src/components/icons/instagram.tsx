import { JSX } from "react";
import { IconType } from "./type/icon.type";

const Instagram = ({
  className = "h-5 w-5 lucide lucide-instagram",
  color = "",
}: IconType): JSX.Element => {
  return (
    <svg
      className={`${className} ${color || "text-[#FF7F50]"}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

export default Instagram;
