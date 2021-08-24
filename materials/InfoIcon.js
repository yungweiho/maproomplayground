import * as React from "react";
import styles from "./InfoIcon.module.scss";

const InfoIcon = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.info_icon}
        width="9"
        height="30"
        viewBox="0 0 9 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.07659 8.56117C7.24343 8.56117 9 6.8046 9 4.63776C9 2.47092 7.24343 0.714355 5.07659 0.714355C2.90975 0.714355 1.15318 2.47092 1.15318 4.63776C1.15318 6.8046 2.90975 8.56117 5.07659 8.56117ZM8.24194 13.3677C8.63872 13.9151 8.47892 14.6441 8.29663 15.2952L5.46504 25.408C5.28649 26.0457 5.76582 26.6776 6.428 26.6776H7.19309C7.95427 26.6776 8.59195 27.1411 8.24194 27.6239C8.02447 27.9239 7.70574 28.1965 7.30391 28.4261C6.90209 28.6557 6.42504 28.8379 5.90004 28.9621C5.37503 29.0864 4.81236 29.1503 4.24409 29.1503C3.67582 29.1503 3.11315 29.0864 2.58814 28.9621C2.06313 28.8379 1.58609 28.6557 1.18426 28.4261C0.782439 28.1965 0.463705 27.9239 0.246233 27.6239C-0.150541 27.0765 0.00925855 26.3475 0.19155 25.6965L3.02314 15.5837C3.20168 14.946 2.72235 14.314 2.06018 14.314H1.29509C0.533907 14.314 -0.103772 13.8506 0.246233 13.3677C0.463705 13.0677 0.782439 12.7952 1.18426 12.5655C1.58609 12.3359 2.06313 12.1538 2.58814 12.0295C3.11315 11.9053 3.67582 11.8413 4.24409 11.8413C4.81236 11.8413 5.37503 11.9053 5.90004 12.0295C6.42504 12.1538 6.90209 12.3359 7.30391 12.5655C7.70574 12.7952 8.02447 13.0677 8.24194 13.3677Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default InfoIcon;