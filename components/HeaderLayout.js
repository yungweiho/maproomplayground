import * as React from "react";
import styles from "./HeaderLayout.module.scss";
import MenuIcon from "../materials/MenuIcon";
import MusicIcon from "../materials/MusicIcon";
import InfoIcon from "../materials/InfoIcon";
import Menu from "./Menu";

const HeaderLayout = ({ isMapDialogOpen, setMapDialogOpen, setLoading }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div className={styles.menu_icon_block}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </div>
        <Menu isOpen={menuOpen} setLoading={setLoading} />
      </div>
      <div className={styles.music_icon}>
        <MusicIcon />
      </div>
      <div
        className={styles.info_icon}
        onClick={() => setMapDialogOpen(!isMapDialogOpen)}
      >
        <InfoIcon />
      </div>
    </React.Fragment>
  );
};
export default HeaderLayout;
