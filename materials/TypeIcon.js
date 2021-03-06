import * as React from "react";

const TypeIcon = ({ type }) => {
  return (
    <svg
      width={type === "dialog" ? "25" : "20"}
      height={type === "dialog" ? "25" : "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM12.3749 9.28045C11.9107 9.66308 11.9107 10.3369 12.3749 10.7196C13.1597 11.3665 14 12.1524 14 13C14 15.2091 12.2091 17 10 17C7.79086 17 6 15.2091 6 13C6 12.1524 6.84029 11.3665 7.62512 10.7196C8.08932 10.3369 8.08932 9.66308 7.62512 9.28045C6.84029 8.63354 6 7.84756 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 7.84756 13.1597 8.63354 12.3749 9.28045Z"
        fill={type === "dialog" ? "#8e8e8e" : "#C4C4C4"}
      />
    </svg>
  );
};

export default TypeIcon;
