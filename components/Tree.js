import * as React from "react";
import styles from "./Tree.module.scss";
import { MapData } from "./Map";
import { EntryData } from "./Entry";

const Tree = ({ parent, scale, top, left }) => {
  const consumerData = React.useContext(
    parent === "entry" ? EntryData : MapData
  );

  const icon_scale = React.useMemo(() => {
    if (consumerData.screenHeight > 1080)
      return consumerData.screenHeight * scale * 0.001;
    return scale;
  }, [consumerData.screenHeight, scale]);
  return (
    <div
      className={styles.tree}
      style={{
        transform: `scale(${icon_scale})`,
        top: `calc(${top}% - 472.3px / 2)`,
        left: `calc(${left}% - 300px / 2)`,
      }}
    ></div>
  );
};

export default Tree;
