import * as React from "react";
import styles from "./SearchIcon.module.scss";

const SearchIcon = ({ type }) => {
  return (
    <div className={styles.container}>
      <svg
        width="30"
        height="27"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.8571 11.3684C21.8571 17.0898 17.1931 21.7368 11.4286 21.7368C5.66405 21.7368 1 17.0898 1 11.3684C1 5.64707 5.66405 1 11.4286 1C17.1931 1 21.8571 5.64707 21.8571 11.3684Z"
          stroke={type === "small" ? "#c4c4c4" : "#FFF0B9"}
          strokeWidth="2"
        />
        <path
          d="M19.6335 18.4853L27.0766 25.3164"
          stroke={type === "small" ? "#c4c4c4" : "#FFF0B9"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
