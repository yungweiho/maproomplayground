import * as React from "react";
import clsx from "clsx";
import gsap from "gsap";
import styles from "./Loading.module.scss";
import { is, scan } from "ramda";

const Loading = React.memo(({ isLoading, isLoadingEnd, setLoading }) => {
  React.useEffect(() => {
    console.log(isLoading);
    if (isLoading) {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });

      tl.to(
        ".loading_container",
        {
          duration: 2,
          opacity: 0,
        },
        2
      )
        .to(
          ".cloud_right_bottom",
          {
            duration: 2,
            // opacity: 0,
            transform: "translate(100%)",
          },
          2
        )
        .to(
          ".cloud_left_bottom",
          {
            duration: 2,
            // opacity: 0,
            transform: "translate(-100%)",
          },
          2.2
        )
        .to(
          ".cloud_left",
          {
            duration: 2,
            // opacity: 0,
            transform: "translate(-100%, -100%)",
          },
          2.1
        )
        .to(
          ".cloud_left_top",
          {
            duration: 2,
            // opacity: 0,
            transform: "translate(-100%, -10%)",
          },
          2.2
        )
        .to(
          ".cloud_top",
          {
            duration: 1,
            // opacity: 0,
            transform: "translate(0, -100%) rotate(180deg)",
          },
          2.2
        )
        .to(
          ".cloud_right_top",
          {
            duration: 0.5,
            // opacity: 0,
            transform: "translate(100%, 0)",
          },
          2.1
        )
        // .to(
        //   ".map",
        //   {
        //     duration: 2,
        //     transform: "scale(1) translateY(0)",
        //   },
        //   0.1
        // )
        .fromTo(
          ".map",
          {
            transition: "0s",
            transform: "scale(0.3) translateY(-120%)",
          },
          {
            transform: "scale(1) translateY(0%)",
            duration: 2,
          },
          2.1
        );
      // .to(".map", { duration: 0, transition: "1s" });
    }
  });
  return (
    <React.Fragment>
      <div
        className={clsx(styles.container, "loading_container", {
          [styles.close]: isLoadingEnd,
        })}
      ></div>
      <div
        className={clsx(styles.cloud_right_bottom, "cloud_right_bottom")}
      ></div>
      <div
        className={clsx(styles.cloud_left_bottom, "cloud_left_bottom")}
      ></div>
      <div className={clsx(styles.cloud_left, "cloud_left")}></div>
      <div className={clsx(styles.cloud_left_top, "cloud_left_top")}></div>
      <div className={clsx(styles.cloud_top, "cloud_top")}></div>
      <div className={clsx(styles.cloud_right_top, "cloud_right_top")}></div>
    </React.Fragment>
  );
});

export default Loading;
