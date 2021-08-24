import * as React from "react";
import styles from "./SmallSearchBar.module.scss";
import SearchIcon from "../materials/SearchIcon";

const SmallSearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.input_block}>
        <input></input>
      </div>
      <SearchIcon type="small" />
    </div>
  );
};

export default SmallSearchBar;
