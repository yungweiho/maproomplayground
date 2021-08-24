import * as React from "react";

const LocationIcon = ({ type }) => {
  return (
    <svg
      width={type === "work" ? "17" : "14"}
      height={type === "work" ? "25" : "20"}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 7.22689C14 8.58828 13.6354 9.86175 13.0015 10.9489L8.40981 19.1597C7.78322 20.2801 6.21677 20.2801 5.59019 19.1597L0.998474 10.9488C0.364595 9.86168 0 8.58824 0 7.22689C0 3.23559 3.13401 0 7 0C10.866 0 14 3.23559 14 7.22689ZM7 11.0924C9.15776 11.0924 10.907 9.28653 10.907 7.05882C10.907 4.83112 9.15776 3.02521 7 3.02521C4.84224 3.02521 3.09302 4.83112 3.09302 7.05882C3.09302 9.28653 4.84224 11.0924 7 11.0924Z"
        fill={type === "work" ? "#8E8E8E" : "#C4C4C4"}
      />
    </svg>
  );
};

export default LocationIcon;
