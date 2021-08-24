import * as React from "react";
import clsx from "clsx";
import styles from "./WorkItem.module.scss";

const WorkItem = ({ workList, setWorkkIndex, setWorkDialodOpen }) => {
  const handleWorkClick = (workId) => {
    setWorkDialodOpen(true);
    setWorkkIndex(workId);
  };
  return (
    <div className={styles.container}>
      {workList.map((item) => (
        <div
          className={styles.work_block}
          key={item.id}
          onClick={() => handleWorkClick(item.id)}
        >
          <div className={styles.image} />
          <div className={styles.text_block}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.name}>{item.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WorkItem;
