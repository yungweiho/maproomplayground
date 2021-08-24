import * as React from "react";
import styles from "./Arrow.module.scss";

const Arrow = ({ width, height, top, right }) => {
  return (
    <svg
      width={`${width}%`}
      height={`${height}%`}
      style={{
        position: "absolute",
        top: `${top}%`,
        right: `${right}%`,
      }}
      className={styles.arrow}
      viewBox="0 0 66 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="white"
        d="M-0.000137329 29.25L16.0213 0L23.7182 14.052L57.5227 14.0051L65.0229 29.1996L32.0358 29.2373L32.0428 29.25H-0.000137329Z"
      />
    </svg>
  );
};

export default Arrow;
