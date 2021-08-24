import * as React from "react";
import clsx from "clsx";
import styles from "./WorksTab.module.scss";
import { useRouter } from "next/router";

const WorksTab = React.memo(({ handleTabClick }) => {
  const router = useRouter();
  const tabList = [
    {
      id: 1,
      name: "所有作品",
      defaultToggle: null,
    },
    {
      id: 2,
      name: "雕塑作品",
      defaultToggle: "日光大道",
      query: "sculpture",
    },
    {
      id: 3,
      query: "stele",
      name: "碑文作品",
      defaultToggle: "1區域",
    },
  ];

  return (
    <div className={styles.container}>
      {tabList.map((item) => (
        <div
          key={item.id}
          className={clsx(styles.tab, {
            [styles.active]:
              router.query.type === item.query ||
              (!router.query.type && item.id === 1),
          })}
          onClick={() =>
            handleTabClick(item.name, item.defaultToggle, item.query)
          }
        >
          {item.name}
        </div>
      ))}
    </div>
  );
});

export default WorksTab;
