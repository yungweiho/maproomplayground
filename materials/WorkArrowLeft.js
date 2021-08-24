import * as React from "react";
import styles from "./WorkArrowLeft.module.scss";

const WorkArrowLeft = () => {
  return (
    <svg
      className={styles.container}
      width="65"
      height="30"
      viewBox="0 0 65 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 29.5L16 2L23.5 15.5H57L64 29.5H1Z" stroke="#8E8E8E" />
    </svg>
  );
};

export default WorkArrowLeft;
