import * as React from "react";
import styles from "./WorksHeader.module.scss";
import MenuIcon from "../materials/MenuIcon";
import MusicIcon from "../materials/MusicIcon";
import InfoIcon from "../materials/InfoIcon";
import SearchBar from "./SearchBar";

const WorksHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo} />
      {/* <MenuIcon />
      <MusicIcon />
      <InfoIcon /> */}
      <SearchBar />
    </div>
  );
};

export default WorksHeader;
