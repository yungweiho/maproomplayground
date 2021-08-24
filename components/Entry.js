import * as React from "react";
import styles from "./Entry.module.scss";
import { useRouter } from "next/router";
import Tree from "./Tree";
import Grass from "./Grass";
import SmallTree from "./SmallTree";
import CloudIcon from "./CloudIcon";

export const EntryData = React.createContext();

const Entry = () => {
  const router = useRouter();
  const [screenHeight, setScreenHeight] = React.useState(0);

  const [screenWidth, setScreenWidth] = React.useState(0);
  const readVh = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setScreenHeight(100 * vh);
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    readVh();
    window.addEventListener("resize", readVh, false);
    window.addEventListener("orientationchange", readVh, false);

    return () => {
      window.removeEventListener("resize", readVh, false);
      window.removeEventListener("orientationchange", readVh, false);
    };
  }, []);
  const tree = [
    {
      id: 1,
      scale: 0.3,
      top: 50,
      left: 94,
    },
    {
      id: 2,
      scale: 0.3,
      top: 83,
      left: 59,
    },
    {
      id: 3,
      scale: 0.3,
      top: 68,
      left: 19,
    },
    {
      id: 4,
      scale: 0.3,
      top: 5,
      left: 60,
    },
  ];

  const grass = [
    {
      id: 1,
      scale: 0.23,
      top: 68,
      left: 99,
    },
    {
      id: 2,
      scale: 0.23,
      top: 70.8,
      left: 96.6,
    },
    {
      id: 3,
      scale: 0.23,
      top: 73.5,
      left: 94.2,
    },
    {
      id: 4,
      scale: 0.23,
      top: 76.2,
      left: 91.7,
    },
    {
      id: 5,
      scale: 0.23,
      top: 23,
      left: 5,
    },
    {
      id: 6,
      scale: 0.23,
      top: 25.5,
      left: 2.5,
    },
    {
      id: 7,
      scale: 0.23,
      top: 28,
      left: 0,
    },
    {
      id: 8,
      scale: 0.23,
      top: 94,
      left: 8,
    },
    {
      id: 9,
      scale: 0.23,
      top: 96.5,
      left: 10.3,
    },
  ];

  const small_tree = [
    {
      id: 1,
      scale: 0.15,
      top: 6,
      left: 63,
    },
    {
      id: 2,
      scale: 0.15,
      top: 3,
      left: 87,
    },
    {
      id: 3,
      scale: 0.15,
      top: 58,
      left: 92,
    },
    {
      id: 4,
      scale: 0.15,
      top: 68,
      left: 22,
    },
  ];

  const cloud = [
    {
      id: 1,
      top: 78,
      left: 5,
      scale: 0.5,
    },
    {
      id: 2,
      top: 3,
      left: 15,
      scale: 0.5,
    },
    {
      id: 3,
      top: 88,
      left: 75,
      scale: 0.5,
    },
  ];
  return (
    <EntryData.Provider
      value={{ screenHeight: screenHeight, screenWidth: screenWidth }}
    >
      <div className={styles.container}>
        <div className={styles.background}>
          {tree.map((item) => (
            <Tree
              key={item.id}
              scale={item.scale}
              top={item.top}
              left={item.left}
              parent="entry"
            ></Tree>
          ))}

          {grass.map((item) => (
            <Grass
              key={item.id}
              scale={item.scale}
              top={item.top}
              left={item.left}
              parent="entry"
            ></Grass>
          ))}

          {small_tree.map((item) => (
            <SmallTree
              key={item.id}
              scale={item.scale}
              top={item.top}
              left={item.left}
              parent="entry"
            ></SmallTree>
          ))}

          {cloud.map((item) => (
            <CloudIcon
              key={item.id}
              scale={item.scale}
              top={item.top}
              left={item.left}
              parent="entry"
              width={200}
            ></CloudIcon>
          ))}
        </div>
        <div
          className={styles.enter}
          onClick={() =>
            router.push({ pathname: "/map", query: { mapName: "main" } })
          }
        >
          進入地圖
        </div>
      </div>
    </EntryData.Provider>
  );
};

export default Entry;
