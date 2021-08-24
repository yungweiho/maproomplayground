import * as React from "react";
import styles from "./CloudTransition.module.scss";

const CloudTransition = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cloud_right_bottom}></div>
      <div className={styles.cloud_left_bottom}></div>
      <div className={styles.cloud_left}></div>
      <div className={styles.cloud_left_top}></div>
      <div className={styles.cloud_top}></div>
      <div className={styles.cloud_right_top}></div>
    </div>
  );
};

export default CloudTransition;
