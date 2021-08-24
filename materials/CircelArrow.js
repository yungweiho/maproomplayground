import * as React from "react";
import styles from "./CircelArrow.module.scss";

const CircelArrow = ({ width, height, top, right }) => {
  return (
    <div className={styles.container}>
      <svg
        width="10"
        height="18"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L1.81365 9.55281C1.37888 9.95759 1.39076 10.6499 1.83915 11.0395L11 19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CircelArrow;
