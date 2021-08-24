import * as React from "react";
import clsx from "clsx";
import styles from "./WorksRoadToggle.module.scss";
import TriIcon from "../materials/TriIcon";
import { useRouter } from "next/router";
import { workData } from "../utils/constans";

const WorksRoadToggle = ({
  toggleIndex,
  setToggleIndex,
  setWorkkIndex,
  setWorkDialodOpen,
}) => {
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

  const handleWorkClick = (id) => {
    setWorkDialodOpen(true);
    setWorkkIndex(id);
  };

  return (
    <div className={styles.container}>
      {currList.map((item, i) => (
        <div key={item} className={styles.block}>
          <div className={styles.title_block} onClick={() => handleClick(item)}>
            <TriIcon open={toggleIndex === item} type="toggle" />
            <div className={styles.title}>{item}</div>
          </div>
          <div
            className={clsx(styles.work_container, {
              [styles.hide]: toggleIndex !== item,
            })}
          >
            {workData
              .filter((work) => work?.road === item || work?.area === item)
              .map((work, wi) => (
                <div
                  key={work.id}
                  className={styles.work_block}
                  onClick={() => handleWorkClick(work.id)}
                >
                  <div className={styles.work_id}>
                    {wi + 1 >= 10 ? wi + 1 : "0" + Math.ceil(wi + 1)}
                  </div>
                  <div className={styles.work_name}>{work.name}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default WorksRoadToggle;
