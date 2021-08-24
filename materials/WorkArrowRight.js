import * as React from "react";
import styles from "./WorkArrowRight.module.scss";

const WorkArrowRight = () => {
  return (
    <svg
      className={styles.container}
      width="65"
      height="30"
      viewBox="0 0 65 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41.5 15L49 2L64 29H1L8 15H41.5Z" stroke="#8E8E8E" />
    </svg>
  );
};

export default WorkArrowRight;
