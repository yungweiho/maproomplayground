import * as React from "react";
import clsx from "clsx";
import styles from "./MapDialog.module.scss";
import CloseIcon from "../materials/CloseIcon";
import TriIcon from "../materials/TriIcon";

const MapDialog = ({ isOpen, onClose }) => {
  return (
    <div className={clsx(styles.container, { [styles.close]: !isOpen })}>
      <div className={styles.drop}></div>
      <div className={styles.dialog_block}>
        <div className={styles.close_button} onClick={onClose}>
          <CloseIcon />
        </div>
        <div className={styles.slide}>
          <div className={styles.image}></div>
          {/* <div className={styles.prev}>
            <SlideLeftArrow />
          </div>
          <div className={styles.next}>
            <SlideRightArrow />
          </div> */}
        </div>
        <div className={styles.content_block}>
          <div className={styles.content}>
            國立台灣美術館佔地面積約10公頃，這是一個大型的遊樂場，有許多雕塑座落在戶外園區的各個角落成為我們習慣的視角，但這些藝術卻是從未被發現的美好。不同於館內，園區24小時開放，不須拘謹，可以用你最自在的方式來場藝術散步。
          </div>
          <div className={styles.content}>
            戶外園區總共散落48件雕塑作品，雕塑Playground規劃出3條散步路線：「日光大道」、「荒路小徑」、「綠蔭秘境」，並將所有雕塑作品收納其中。
          </div>
          <div className={styles.content}>
            碑林廣場收錄並展出臺灣古今大家的手澤墨蹟，以現代吹沙技術鐫刻，呈現原有墨韻風貌。
          </div>
        </div>

        <div className={styles.video_block}>
          <TriIcon />
          <div className={styles.video_text}>宣傳影片</div>
        </div>
      </div>
    </div>
  );
};

export default MapDialog;
