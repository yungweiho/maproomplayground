import * as React from "react";
import clsx from "clsx";
import styles from "./AreaPlate.module.scss";
import { MapData } from "./Map";

const AreaPlate = ({ scale, top, left, area }) => {
  const consumerData = React.useContext(MapData);

  const icon_scale = React.useMemo(() => {
    if (consumerData.screenHeight > 1080)
      return consumerData.screenHeight * scale * 0.0008;
    return scale;
  }, [consumerData.screenHeight, scale]);

  const image = React.useMemo(() => {
    if (area === 1) return "/maproomplayground/map/map_ground/area_1.png";
    if (area === 2) return "/maproomplayground/map/map_ground/area_2.png";
    return "/maproomplayground/map/map_ground/area_3.png";
  }, [area]);

  return (
    <div
      className={clsx(styles.area_icon, "area")}
      style={{
        transform: `scale(${icon_scale})`,
        top: `calc(${top}% - 553px / 2)`,
        left: `calc(${left}% - 345px / 2)`,
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default AreaPlate;
