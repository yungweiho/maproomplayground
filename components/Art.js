import * as React from "react";
import styles from "./Art.module.scss";
import { useRouter } from "next/router";

const Grass = ({ parent, scale, top, left }) => {
  const router = useRouter();

  const image = React.useMemo(() => {
    if (router.query.mapName === "blue-line")
      return "/maproomplayground/blue_art.png";

    if (router.query.mapName === "green-line")
      return "/maproomplayground/green_art.png";
    return "/maproomplayground/red_art.png";
  }, [router.query.mapName]);

  return (
    <div
      className={styles.art}
      style={{ backgroundImage: `url(${image})`, transform: `scale(${scale})` }}
    ></div>
  );
};

export default Grass;
