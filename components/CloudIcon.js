import * as React from "react";
import styles from "./CloudIcon.module.scss";
import { MapData } from "./Map";

const CloudIcon = ({ top, left, scale }) => {
  const consumerData = React.useContext(MapData);

  const icon_scale = React.useMemo(() => {
    if (consumerData.screenHeight > 1080)
      return consumerData.screenHeight * scale * 0.001;
    return scale;
  }, [consumerData.screenHeight, scale]);

  return (
    <div
      className={styles.cloud_icon}
      style={{
        transform: `scale(${icon_scale})`,
        top: `calc(${top}% - 60px / 2)`,
        left: `calc(${left}% - 80px / 2)`,
      }}
    ></div>
  );
};

export default CloudIcon;
