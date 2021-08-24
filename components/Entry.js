import * as React from "react";
import styles from "./Entry.module.scss";
import { useRouter } from "next/router";

const Entry = () => {
  const router = useRouter();
  // const readVh = () => {
  //   // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  //   let vh = window.innerHeight * 0.01;
  //   // Then we set the value in the --vh custom property to the root of the document
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // };

  // React.useEffect(() => {
  //   readVh();
  //   window.addEventListener("resize", readVh, false);
  //   window.addEventListener("orientationchange", readVh, false);

  //   return () => {
  //     window.removeEventListener("resize", readVh, false);
  //     window.removeEventListener("orientationchange", readVh, false);
  //   };
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.enter} onClick={() => router.push("/map/main")}>
        進入地圖
      </div>
    </div>
  );
};

export default Entry;
