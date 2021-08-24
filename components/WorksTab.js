import * as React from "react";
import clsx from "clsx";
import styles from "./WorksTab.module.scss";
import { useRouter } from "next/router";

const WorksTab = React.memo(({ setToggleIndex }) => {
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

  const handleClick = (name, toggle, query) => {
    router.push({
      pathname: "/map/works",
      query: query ? { type: query } : undefined,
    });

    setToggleIndex(null);
  };

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
          onClick={() => handleClick(item.name, item.defaultToggle, item.query)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
});

export default WorksTab;
