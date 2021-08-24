import * as React from "react";
import styles from "./MenuIcon.module.scss";

const MenuIcon = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.menu_icon}
        width="27"
        height="17"
        viewBox="0 0 27 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.26807C0 0.577711 0.559644 0.0180664 1.25 0.0180664H25.75C26.4404 0.0180664 27 0.577711 27 1.26807C27 1.95842 26.4404 2.51807 25.75 2.51807H1.25C0.559644 2.51807 0 1.95842 0 1.26807ZM0 8.50021C0 7.80985 0.559644 7.25021 1.25 7.25021H18.0357C18.7261 7.25021 19.2857 7.80985 19.2857 8.50021C19.2857 9.19057 18.7261 9.75021 18.0357 9.75021H1.25C0.559644 9.75021 0 9.19057 0 8.50021ZM1.25 14.4824C0.559644 14.4824 0 15.042 0 15.7324C0 16.4227 0.559644 16.9824 1.25 16.9824H11.6071C12.2975 16.9824 12.8571 16.4227 12.8571 15.7324C12.8571 15.042 12.2975 14.4824 11.6071 14.4824H1.25Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
