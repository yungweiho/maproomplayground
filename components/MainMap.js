import * as React from "react";
import * as R from "ramda";
import clsx from "clsx";
import styles from "./MainMap.module.scss";
import { useRouter } from "next/router";
import NameplateGround from "./NameplateGround";
import Tree from "./Tree";
import Grass from "./Grass";
import SmallTree from "./SmallTree";
import RedLine from "../materials/RedLine";
import BlueLine from "../materials/BlueLine";
import GreenLine from "../materials/GreenLine";
import WorkNumber from "./WorkNumber";
import AreaPlate from "./AreaPlate";
import PlateDescription from "../materials/PlateDescription";
import Park from "../materials/Park";
import Toilet from "../materials/Toilet";
import CloudIcon from "./CloudIcon";

const MainMap2 = React.memo(
  ({
    setList,
    map_container,
    isWorkDialodOpen,
    setWorkDialodOpen,
    setGroundArea,
    setWorkListOpen,
    setWorkkIndex,
    isLoading,
  }) => {
    const router = useRouter();

    const transferLineName = (name) => {
      if (name === "red-line") return "red_line";
      if (name === "blue-line") return "blue_line";
      if (name === "green-line") return "green_line";
      return name;
    };

    const tree = [
      {
        id: 1,
        scale: 0.3,
        top: 50,
        left: 87,
      },
      {
        id: 2,
        scale: 0.3,
        top: 85,
        left: 32,
      },
      {
        id: 3,
        scale: 0.3,
        top: 47,
        left: 26,
      },
      {
        id: 4,
        scale: 0.3,
        top: 19.2,
        left: 61.2,
      },
    ];

    const grass = [
      {
        id: 1,
        scale: 0.23,
        top: 52.5,
        left: 91.8,
      },
      {
        id: 2,
        scale: 0.23,
        top: 55.3,
        left: 91.3,
      },
      {
        id: 3,
        scale: 0.23,
        top: 62,
        left: 81.5,
      },
      {
        id: 4,
        scale: 0.23,
        top: 63.1,
        left: 79.4,
      },
      {
        id: 5,
        scale: 0.23,
        top: 64.2,
        left: 77.33,
      },
      {
        id: 6,
        scale: 0.23,
        top: 65.3,
        left: 75.25,
      },
    ];

    const small_tree = [
      {
        id: 1,
        scale: 0.2,
        top: 80,
        left: 39.2,
      },
      {
        id: 2,
        scale: 0.2,
        top: 5.5,
        left: 49,
      },
      {
        id: 3,
        scale: 0.2,
        top: 18.8,
        left: 46.7,
      },
    ];

    const works = {
      red_line: [
        {
          id: 1,
          road: "red_line",
          top: 77.5,
          left: 46.3,
          scale: 1,
        },
        {
          id: 2,
          road: "red_line",
          top: 66,
          left: 58,
          scale: 1,
        },
        {
          id: 3,
          road: "red_line",
          top: 60.3,
          left: 57.7,
          scale: 1,
        },
        {
          id: 4,
          road: "red_line",
          top: 54.2,
          left: 54.1,
          scale: 1,
        },
        {
          id: 5,
          road: "red_line",
          top: 53.8,
          left: 56.3,
          scale: 1,
        },
        {
          id: 6,
          road: "red_line",
          top: 54.9,
          left: 60,
          scale: 1,
        },
        {
          id: 7,
          road: "red_line",
          top: 56.1,
          left: 60.6,
          scale: 1,
        },
        {
          id: 8,
          road: "red_line",
          top: 59.5,
          left: 61,
          scale: 1,
        },
        {
          id: 9,
          road: "red_line",
          top: 63.2,
          left: 63.5,
          scale: 1,
        },
        {
          id: 10,
          road: "red_line",
          top: 58.2,
          left: 64.3,
          scale: 1,
        },
        {
          id: 11,
          road: "red_line",
          top: 56.6,
          left: 71.2,
          scale: 1,
        },
        {
          id: 12,
          road: "red_line",
          top: 56,
          left: 78,
          scale: 1,
        },
        {
          id: 13,
          road: "red_line",
          top: 52.3,
          left: 80.4,
          scale: 1,
        },
        {
          id: 14,
          road: "red_line",
          top: 49,
          left: 78.8,
          scale: 1,
        },
        {
          id: 15,
          road: "red_line",
          top: 52.5,
          left: 71.3,
          scale: 1,
        },
        {
          id: 16,
          road: "red_line",
          top: 53.7,
          left: 68,
          scale: 1,
        },
        {
          id: 17,
          road: "red_line",
          top: 48,
          left: 65.4,
          scale: 1,
        },
        {
          id: 18,
          road: "red_line",
          top: 48.5,
          left: 69.5,
          scale: 1,
        },
        {
          id: 19,
          road: "red_line",
          top: 33.5,
          left: 75.5,
          scale: 1,
        },
      ],
      blue_line: [
        {
          id: 1,
          road: "blue_line",
          top: 87.1,
          left: 35.7,
          scale: 1,
        },
        {
          id: 2,
          road: "blue_line",
          top: 78.5,
          left: 43.5,
          scale: 1,
        },
        {
          id: 3,
          road: "blue_line",
          top: 75.5,
          left: 39,
          scale: 1,
        },
        {
          id: 4,
          road: "blue_line",
          top: 68.5,
          left: 40.8,
          scale: 1,
        },
        {
          id: 5,
          road: "blue_line",
          top: 69.3,
          left: 39.3,
          scale: 1,
        },
        {
          id: 6,
          road: "blue_line",
          top: 72.5,
          left: 36.7,
          scale: 1,
        },
        {
          id: 7,
          road: "blue_line",
          top: 69,
          left: 33,
          scale: 1,
        },
        {
          id: 8,
          road: "blue_line",
          top: 65.8,
          left: 31.3,
          scale: 1,
        },
        {
          id: 9,
          road: "blue_line",
          top: 46.8,
          left: 44.8,
          scale: 1,
        },
        {
          id: 10,
          road: "blue_line",
          top: 40.9,
          left: 47,
          scale: 1,
        },
        {
          id: 11,
          road: "blue_line",
          top: 37.1,
          left: 54.8,
          scale: 1,
        },
        {
          id: 12,
          road: "blue_line",
          top: 36,
          left: 61.3,
          scale: 1,
        },
      ],
      green_line: [
        {
          id: 1,
          road: "green_line",
          top: 31,
          left: 68.5,
          scale: 1,
        },
        {
          id: 2,
          road: "green_line",
          top: 31.2,
          left: 62.5,
          scale: 1,
        },
        {
          id: 3,
          road: "green_line",
          top: 29.8,
          left: 60.7,
          scale: 1,
        },
        {
          id: 4,
          road: "green_line",
          top: 28.3,
          left: 65.6,
          scale: 1,
        },
        {
          id: 5,
          road: "green_line",
          top: 32.3,
          left: 56.2,
          scale: 1,
        },
        {
          id: 6,
          road: "green_line",
          top: 25.5,
          left: 58.8,
          scale: 1,
        },
        {
          id: 7,
          road: "green_line",
          top: 28.3,
          left: 55.1,
          scale: 1,
        },
        {
          id: 8,
          road: "green_line",
          top: 26.3,
          left: 51.5,
          scale: 1,
        },
        {
          id: 9,
          road: "green_line",
          top: 24.2,
          left: 50,
          scale: 1,
        },
        {
          id: 10,
          road: "green_line",
          top: 21.5,
          left: 48.3,
          scale: 1,
        },
        {
          id: 11,
          road: "green_line",
          top: 19.2,
          left: 54.3,
          scale: 1,
        },
        {
          id: 12,
          road: "green_line",
          top: 17.8,
          left: 55.3,
          scale: 1,
        },
        {
          id: 13,
          road: "green_line",
          top: 18,
          left: 53.4,
          scale: 1,
        },
        {
          id: 14,
          road: "green_line",
          top: 16.8,
          left: 52.5,
          scale: 1,
        },
        {
          id: 15,
          road: "green_line",
          top: 14.5,
          left: 49.4,
          scale: 1,
        },
        {
          id: 16,
          road: "green_line",
          top: 15.4,
          left: 44,
          scale: 1,
        },
        {
          id: 17,
          road: "green_line",
          top: 7.3,
          left: 44.4,
          scale: 1,
        },
      ],
      // main: [
      //   {
      //     id: 1,
      //     top: 7.3,
      //     left: 44.4,
      //     scale: 0.5,
      //   },
      //   {
      //     id: 2,
      //     top: 7.3,
      //     left: 44.4,
      //     scale: 0.5,
      //   },
      // ],
    };

    const park = [
      {
        id: 1,
        top: 72,
        left: 27,
      },
      // {
      //   top: 46,
      //   left: 32.5,
      // },
      {
        id: 2,
        top: 8,
        left: 49,
        type: "people",
      },
    ];

    const toilet = [
      {
        id: 1,
        top: 43.5,
        left: 73.2,
      },
      {
        id: 2,
        top: 45,
        left: 74.3,
        type: "special",
      },
      {
        id: 3,
        top: 60,
        left: 29,
      },
      {
        id: 4,
        top: 61.8,
        left: 29.7,
        type: "special",
      },
    ];

    const cloud = [
      {
        id: 1,
        top: 70,
        left: 22,
        scale: 0.2,
      },
      {
        id: 2,
        top: 10,
        left: 70,
        scale: 0.2,
      },
      {
        id: 3,
        top: 60,
        left: 100,
        scale: 0.2,
      },
    ];

    const area = [
      {
        id: 1,
        name: "1區域",
        scale: 0.35,
        top: 39.6,
        left: 71.3,
      },
      {
        id: 2,
        name: "2區域",
        scale: 0.35,
        top: 29.7,
        left: 72.2,
      },
      {
        id: 3,
        name: "3區域",
        scale: 0.35,
        top: 30.5,
        left: 64.5,
      },
    ];

    const handleClick = (e) => {
      e.stopPropagation();
    };

    // React.useEffect(() => {
    //   console.log(map_container.current.offsetHeight);
    // });

    const handleAreaClick = (area) => {
      setGroundArea(area);
      setWorkListOpen(true);
    };

    const handleNumberClick = (workId) => {
      setWorkDialodOpen(true);
      setWorkkIndex(workId);
    };

    const grass_scale = React.useMemo(() => {
      if (router.query.mapName === "ground") return 0.35;
      if (router.query.mapName === "main") return 0.16;
      return 0.23;
    }, [router.query.mapName]);

    const tree_scale = React.useMemo(() => {
      if (router.query.mapName === "ground") return 0.45;
      if (router.query.mapName === "main") return 0.2;
      return 0.3;
    }, [router.query.mapName]);

    const small_tree_scale = React.useMemo(() => {
      if (router.query.mapName === "main") return 0.15;
      return 0.2;
    }, [router.query.mapName]);

    return (
      <div
        id="map_container"
        ref={map_container}
        className={clsx(styles.container)}
      >
        <div
          id="map"
          className={clsx(styles.map_origin, "map", {
            [styles.map_red]: router.query.mapName === "red-line",
            [styles.map_blue]: router.query.mapName === "blue-line",
            [styles.map_green]: router.query.mapName === "green-line",
            [styles.map_ground]: router.query.mapName === "ground",
            [styles.map_main]: router.query.mapName === "main",
          })}
          style={{ transition: isLoading ? "0s" : "1s" }}
        >
          {router.query.mapName !== "ground" &&
            router.query.mapName !== "main" && (
              <div
                className="name"
                onClick={() => router.push("/map/ground")}
                style={{ cursor: "pointer" }}
              >
                <NameplateGround scale={0.23} top={35} left={69} type="gray" />
              </div>
            )}

          {router.query.mapName === "main" && (
            <div className="name">
              <div
                onClick={() => router.push("/map/ground")}
                style={{ cursor: "pointer" }}
              >
                <NameplateGround scale={0.23} top={34} left={69} type="gray" />
              </div>

              <div
                onClick={() => router.push("/map/red-line")}
                style={{ cursor: "pointer" }}
              >
                <NameplateGround scale={0.23} top={62.5} left={51} type="red" />
              </div>

              <div
                onClick={() => router.push("/map/blue-line")}
                style={{ cursor: "pointer" }}
              >
                <NameplateGround
                  scale={0.23}
                  top={44.5}
                  left={39}
                  type="blue"
                />
              </div>
              <div
                onClick={() => router.push("/map/green-line")}
                style={{ cursor: "pointer" }}
              >
                <NameplateGround
                  scale={0.23}
                  top={24.5}
                  left={57.3}
                  type="green"
                />
              </div>
            </div>
          )}

          {park.map((item) => (
            <Park
              key={item.id}
              top={item.top}
              left={item.left}
              type={item?.type}
            />
          ))}

          {toilet.map((item) => (
            <Toilet
              key={item.id}
              top={item.top}
              left={item.left}
              type={item?.type}
            />
          ))}

          {router.query.mapName === "ground" && (
            <React.Fragment>
              {area.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleAreaClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <AreaPlate
                    scale={item.scale}
                    top={item.top}
                    left={item.left}
                    area={item.id}
                  />
                </div>
              ))}

              <PlateDescription top={31} left={88} />
            </React.Fragment>
          )}

          {tree.map((item) => (
            <div key={item.id} className="tree" onClick={handleClick}>
              <Tree scale={tree_scale} top={item.top} left={item.left} />
            </div>
          ))}

          {grass.map((item) => (
            <Grass
              key={item.id}
              scale={grass_scale}
              top={item.top}
              left={item.left}
            />
          ))}

          {small_tree.map((item) => (
            <SmallTree
              key={item.id}
              scale={small_tree_scale}
              top={item.top}
              left={item.left}
            />
          ))}

          {(router.query.mapName === "red-line" ||
            router.query.mapName === "main") && (
            <React.Fragment>
              <div className={styles.red_line}>
                <RedLine />
              </div>
            </React.Fragment>
          )}

          {router.query.mapName === "red-line" && (
            <PlateDescription top={80} left={88} />
          )}

          {(router.query.mapName === "blue-line" ||
            router.query.mapName === "main") && (
            <React.Fragment>
              <div className={styles.blue_line}>
                <BlueLine />
              </div>
            </React.Fragment>
          )}

          {router.query.mapName === "blue-line" && (
            <PlateDescription top={83} left={80} />
          )}

          {(router.query.mapName === "green-line" ||
            router.query.mapName === "main") && (
            <React.Fragment>
              <div className={styles.green_line}>
                <GreenLine />
              </div>
            </React.Fragment>
          )}

          {router.query.mapName === "green-line" && (
            <PlateDescription top={10} left={88} />
          )}

          {works[`${transferLineName(router.query.mapName)}`]?.map((item) => (
            <div key={item.id} onClick={() => handleNumberClick(item.id)}>
              <WorkNumber
                number={item.id}
                scale={item.scale}
                top={item.top}
                left={item.left}
                line={router.query.mapName}
              />
            </div>
          ))}

          {router.query.mapName === "main" && (
            <React.Fragment>
              {works.green_line
                .concat(works.red_line)
                .concat(works.blue_line)
                .map((item, i) => (
                  <div
                    key={`${item.road}${item.id}`}
                    onClick={() => handleNumberClick(item.id)}
                  >
                    <WorkNumber
                      number={item.id}
                      scale={0.5}
                      top={item.top}
                      left={item.left}
                      line={router.query.mapName}
                    />
                  </div>
                ))}

              {cloud.map((item) => (
                <CloudIcon
                  key={item.id}
                  left={item.left}
                  top={item.top}
                  scale={item.scale}
                />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
);

export default MainMap2;
