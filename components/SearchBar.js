import * as React from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "../materials/SearchIcon";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.input_block}>
        <input></input>
      </div>
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
