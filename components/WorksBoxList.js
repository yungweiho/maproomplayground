import * as React from "react";
import styles from "./WorksBoxList.module.scss";
import TypeIcon from "../materials/TypeIcon";
import LocationIcon from "../materials/LocationIcon";
import WorkArrowRight from "../materials/WorkArrowRight";
import WorkArrowLeft from "../materials/WorkArrowLeft";
import { workData } from "../utils/constans";
import { useRouter } from "next/router";
import { set } from "ramda";

const WorksBoxList = ({
  setWorkDialodOpen,
  toggleIndex,
  setWorkkIndex,
  page,
  setPage,
  limit,
}) => {
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

  const prev = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const next = () => {
    if (page >= currData.length / 8) return;
    setPage(page + 1);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.work_container}
        style={{
          borderRight: router.query.type ? "solid 1px #e2e4e2" : "none",
        }}
      >
        {currData
          .slice((page - 1) * limit, (page - 1) * limit + 8)
          .map((item) => (
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
        <div onClick={() => prev()}>
          <WorkArrowLeft />
        </div>
        <div className={styles.page_block}>
          <div className={styles.page_start}>{page}</div>
          <div className={styles.divide}>/</div>
          <div className={styles.page_end}>
            {Math.ceil(currData.length / limit)}
          </div>
        </div>
        <div onClick={() => next()}>
          <WorkArrowRight />
        </div>
      </div>
    </div>
  );
};
export default WorksBoxList;
