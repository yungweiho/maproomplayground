import * as React from "react";
import clsx from "clsx";
import styles from "./SmallWorksRoadToggle.module.scss";
import TriIcon from "../materials/TriIcon";
import { useRouter } from "next/router";

const SmallWorksRoadToggle = ({ toggleIndex, setToggleIndex }) => {
  const router = useRouter();

  const currList = React.useMemo(() => {
    const roadList = ["日光大道", "勃勒大道", "綠蔭秘境"];
    const areaList = ["1區域", "2區域", "3區域"];
    if (router.query.type === "stele") return areaList;
    return roadList;
  }, [router.query.type]);

  const handleClick = (currToggle) => {
    if (toggleIndex === currToggle) {
      setToggleIndex(null);
      return;
    }
    setToggleIndex(currToggle);
  };

  return (
    <div className={styles.container}>
      {currList.map((item) => (
        <div key={item.id} className={styles.block}>
          <div className={styles.title_block} onClick={() => handleClick(item)}>
            <TriIcon type="toggle" open={toggleIndex === item} />
            <div className={styles.title}>{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallWorksRoadToggle;
