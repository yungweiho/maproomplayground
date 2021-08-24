import * as React from "react";
import clsx from "clsx";
import styles from "./TriIcon.module.scss";

const TriIcon = ({ type, open }) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.active]: type === "toggle" && open,
        [styles.menu_active]: type === "menu" && open,
      })}
    >
      <svg
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.8789 5.64479C10.5212 6.03404 10.5212 6.96596 9.8789 7.35521L2.09087 12.075C1.42443 12.4789 0.572584 11.9991 0.572584 11.2198L0.572584 1.78016C0.572584 1.00088 1.42443 0.521062 2.09087 0.92495L9.8789 5.64479Z"
          fill="#C4C4C4"
        />
      </svg>
    </div>
  );
};

export default TriIcon;
