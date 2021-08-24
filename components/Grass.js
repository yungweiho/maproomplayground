import * as React from "react";
import styles from "./Grass.module.scss";
import { MapData } from "./Map";

const Grass = ({ scale, top, left }) => {
  const consumerData = React.useContext(MapData);

  const icon_scale = React.useMemo(() => {
    if (consumerData.screenHeight > 1080)
      return consumerData.screenHeight * scale * 0.001;
    return scale;
  }, [consumerData.screenHeight, scale]);
  return (
    <div
      className={styles.grass}
      style={{
        transform: `scale(${icon_scale})`,
        top: `calc(${top}% - 300px / 2)`,
        left: `calc(${left}% - 300px / 2)`,
      }}
    ></div>
  );
};

export default Grass;
