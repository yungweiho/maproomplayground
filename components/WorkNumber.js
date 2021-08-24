import * as React from "react";
import clsx from "clsx";
import styles from "./WorkNumber.module.scss";

const WorkNumber = ({ number, scale, top, left, line }) => {
  const color = React.useMemo(() => {
    if (line === "blue-line") return "#3AA9E0";
    if (line === "green-line") return "#3ACA3F";
    if (line === "main") return "#8E8E8E";
    return "#fe191a";
  }, [line]);

  return (
    <div
      className={clsx(styles.container, "number")}
      style={{
        transform: `scale(${scale})`,
        top: `calc(${top}% - 25px / 2)`,
        left: `calc(${left}% - 25px / 2)`,
        color: color,
        border: `solid ${line === "main" ? "4px" : "2px"} ${color}`,
      }}
    >
      {line === "main" ? undefined : number}
    </div>
  );
};

export default WorkNumber;
