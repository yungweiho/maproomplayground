import * as React from "react";
import clsx from "clsx";
import styles from "./Menu.module.scss";
import MapIcon from "../materials/MapIcon";
import ListIcon from "../materials/ListIcon";
import TriIcon from "../materials/TriIcon";
import { useRouter } from "next/router";

const Menu = React.memo(({ isOpen, setLoading }) => {
  const router = useRouter();
  const menu = [
    {
      id: 1,
      type: "map",
      title: "導覽地圖",
      list: [
        {
          id: 1,
          name: "日光大道",
          url: "/map",
          mapName: "red-line",
        },
        {
          id: 2,
          name: "伯樂小徑",
          url: "/map",
          mapName: "blue-line",
        },
        {
          id: 3,
          name: "綠蔭秘境",
          url: "/map",
          mapName: "green-line",
        },
        {
          id: 4,
          name: "碑林廣場",
          url: "/map",
          mapName: "ground",
        },
      ],
    },
    {
      id: 2,
      type: "work",
      title: "作品列表",
      list: [
        {
          id: 1,
          name: "雕塑",
          url: "/map/works",
          query: "sculpture",
        },
        {
          id: 2,
          name: "碑文",
          url: "/map/works",
          query: "stele",
        },
      ],
    },
  ];

  const handleClick = (e, url, query, mapName) => {
    e.preventDefault();
    if (!query) {
      setLoading(true);
    }
    router.push({
      pathname: url,
      query: query ? { type: query } : undefined,
      query: mapName ? { mapName } : undefined,
    });
  };

  return (
    <div className={clsx(styles.container, { [styles.close]: !isOpen })}>
      <div
        className={styles.logo}
        onClick={(e) => handleClick(e, "/map", undefined, "main")}
      />

      <div className={styles.block}>
        {menu.map((item) => (
          <div key={item.id} className={styles.list}>
            <div className={styles.list_title_block}>
              {item.type === "map" ? <MapIcon /> : <ListIcon />}
              <div className={styles.list_title}>{item.title}</div>
            </div>
            <div className={styles.sub_block}>
              {item.list.map((item) => (
                <div
                  key={item.id}
                  className={styles.sub_title_block}
                  onClick={(e) =>
                    handleClick(e, item.url, item.query, item?.mapName)
                  }
                >
                  <TriIcon
                    type="menu"
                    open={
                      router.asPath === item.url ||
                      (router.asPath === item.url &&
                        router.query.type === item?.query)
                    }
                  />
                  <div className={styles.sub_title}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.info_title}>國美典藏 NTMoFA Collection</div>

        <div className={styles.info_sub_block}>
          <div className={styles.info_sub_text}>國立臺灣美術館</div>
          <div className={styles.info_sub_text}>
            403 台中市西區五權西路一段2號
          </div>
          <div className={styles.info_sub_text}>04-2372-3552</div>
        </div>

        <div className={styles.info_bottom}>
          <div className={styles.info_logo} />
          <div className={styles.copy}>copyright © 2021</div>
        </div>
      </div>

      <div className={styles.info_block}></div>
    </div>
  );
});

export default Menu;
