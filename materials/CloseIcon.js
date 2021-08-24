import * as React from "react";
import styles from "./CloseIcon.module.scss";

const CloseIcon = () => {
  return (
    <div className={styles.container}>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9724 3.182C18.5581 2.59621 18.5581 1.64646 17.9724 1.06068C17.3866 0.474891 16.4368 0.474891 15.851 1.06068L9.45582 7.45589L3.06066 1.06073C2.47487 0.474944 1.52513 0.474944 0.93934 1.06073C0.353553 1.64652 0.353554 2.59626 0.93934 3.18205L7.3345 9.57721L1.06067 15.851C0.474889 16.4368 0.474888 17.3866 1.06067 17.9724C1.64646 18.5581 2.59621 18.5581 3.18199 17.9724L9.45582 11.6985L15.7297 17.9724C16.3155 18.5582 17.2652 18.5582 17.851 17.9724C18.4368 17.3866 18.4368 16.4369 17.851 15.8511L11.5771 9.57721L17.9724 3.182Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
