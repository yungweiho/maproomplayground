import * as React from "react";
import styles from "./WorksBoxList.module.scss";
import TypeIcon from "../materials/TypeIcon";
import LocationIcon from "../materials/LocationIcon";
import WorkArrowRight from "../materials/WorkArrowRight";
import WorkArrowLeft from "../materials/WorkArrowLeft";
import { workData } from "../utils/constans";
import { useRouter } from "next/router";

const WorksBoxList = ({ setWorkDialodOpen, toggleIndex, setWorkkIndex }) => {
  const router = useRouter();

  const currData = React.useMemo(() => {
    if (router.query.type === "stele" && toggleIndex !== null)
      return workData.filter(
        (item) => item.type === "碑文" && item?.area === toggleIndex
      );

    if (router.query.type === "stele")
      return workData.filter((item) => item.type === "碑文");

    if (router.query.type === "sculpture" && toggleIndex !== null)
      return workData.filter(
        (item) => item.type === "雕塑" && item?.road === toggleIndex
      );
    if (router.query.type === "sculpture")
      return workData.filter((item) => item.type === "雕塑");

    return workData;
  }, [router.query.type, toggleIndex]);

  const handleClick = (id) => {
    setWorkDialodOpen(true);
    setWorkkIndex(id);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.work_container}
        style={{
          borderRight: router.query.type ? "solid 1px #e2e4e2" : "none",
        }}
      >
        {currData.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className={styles.work_block}
            onClick={() => handleClick(item.id)}
          >
            <div className={styles.image} />
            <div className={styles.text_block}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.sub_block}>
                <div className={styles.type_block}>
                  <TypeIcon />
                  <div className={styles.type}>{item.type}</div>
                </div>
                <div className={styles.road_block}>
                  <LocationIcon />
                  <div className={styles.road}>{item.road}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <WorkArrowLeft />
        <div className={styles.page_block}>
          <div className={styles.page_start}>1</div>
          <div className={styles.divide}>/</div>
          <div className={styles.page_end}>2</div>
        </div>
        <WorkArrowRight />
      </div>
    </div>
  );
};
export default WorksBoxList;
