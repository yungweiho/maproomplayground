import * as React from "react";
import clsx from "clsx";
import styles from "./ExpandIcon.module.scss";

const ExpandIcon = ({ status, setStatus }) => {
  return (
    <svg
      className={clsx(styles.container, { [styles.open]: status })}
      width="37"
      height="13"
      viewBox="0 0 37 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{}}
      onClick={() => setStatus(!status)}
    >
      <path
        d="M2 11L15.9085 2.57061C17.5013 1.60527 19.4987 1.60526 21.0915 2.57061L35 11"
        stroke="#E2E4E2"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ExpandIcon;
