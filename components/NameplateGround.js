import * as React from "react";
import styles from "./NameplateGround.module.scss";
import { MapData } from "./Map";

const NameplateGround = ({ scale, top, left, type }) => {
  const consumerData = React.useContext(MapData);

  const image = {
    gray: "/maproomplayground/map/gray_icon.png",
    red: "/maproomplayground/map/red_icon.png",
    blue: "/maproomplayground/map/blue_icon.png",
    green: "/maproomplayground/map/green_icon.png",
  };

  const icon_scale = React.useMemo(() => {
    if (consumerData.screenHeight > 1080)
      return consumerData.screenHeight * scale * 0.001;
    return scale;
  }, [consumerData.screenHeight, scale]);

  return (
    <div
      className={styles.gray_icon}
      style={{
        transform: `scale(${icon_scale})`,
        top: `calc(${top}% - 553px / 2)`,
        left: `calc(${left}% - 345px / 2)`,
        backgroundImage: `url(${image[type]})`,
      }}
    ></div>
  );
};

export default NameplateGround;
