import * as React from "react";
import clsx from "clsx";
import styles from "./WorkDialog.module.scss";
import SteleIcon from "../materials/SteleIcon";
import TypeIcon from "../materials/TypeIcon";
import LocationIcon from "../materials/LocationIcon";
import SlideLeftArrow from "../materials/SlideLeftArrow";
import SlideRightArrow from "../materials/SlideRightArrow";
import CloseIcon from "../materials/CloseIcon";
import AudioInfoButton from "../materials/AudioInfoButton";
import PanoramaButton from "../materials/PanoramaButton";
import { workData } from "../utils/constans";
import { useRouter } from "next/router";

const WorkDialog = ({
  isOpen,
  onClose,
  setPanoramaOpen,
  workIndex,
  setMusicBarOpen,
}) => {
  const router = useRouter();

  const currWork = React.useMemo(() => {
    return workData.find((item) => item.id === workIndex);
  }, [workIndex]);

  const [slideIndex, setSlideIndex] = React.useState(0);

  const handleClose = () => {
    onClose();
    setMusicBarOpen(false);
    setSlideIndex(0);
  };

  const prev = () => {
    if (slideIndex === 0) {
      setSlideIndex(2);
      return;
    }
    setSlideIndex(slideIndex - 1);
  };

  const next = () => {
    if (slideIndex === 2) {
      setSlideIndex(0);
      return;
    }
    setSlideIndex(slideIndex + 1);
  };

  return (
    <div
      className={clsx(styles.container, {
        [styles.close]: !isOpen,
      })}
    >
      <div className={styles.drop}></div>
      <div className={styles.dialog_block}>
        <div className={styles.close_button} onClick={handleClose}>
          <CloseIcon />
        </div>
        <div className={styles.slide}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${currWork.image_list[slideIndex].file})`,
            }}
          ></div>
          <div className={styles.prev} onClick={() => prev()}>
            <SlideLeftArrow />
          </div>
          <div className={styles.next} onClick={() => next()}>
            <SlideRightArrow />
          </div>
        </div>
        <div className={styles.name}>{currWork.name}</div>
        <div className={styles.sub_block}>
          {currWork.type === "雕塑" ? (
            <TypeIcon type="dialog" />
          ) : (
            <SteleIcon />
          )}

          <div className={clsx(styles.sub_text, styles.margin_right)}>
            {currWork.type}
          </div>
          <LocationIcon type="work" />
          <div className={styles.sub_text}>
            {currWork.type === "雕塑" ? currWork.road : `${currWork.area}區域`}
          </div>
        </div>
        <div className={styles.content_block}>
          <div className={styles.info_block}>
            <div className={styles.info_text}>作者</div>
            <div className={styles.divider}></div>
            <div className={styles.info_text}>{currWork.author}</div>
          </div>

          {currWork.type === "雕塑" && (
            <React.Fragment>
              <div className={styles.info_block}>
                <div className={styles.info_text}>年代</div>
                <div className={styles.divider}></div>
                <div className={styles.info_text}>{currWork.time}</div>
              </div>
              <div className={styles.info_block}>
                <div className={styles.info_text}>尺寸</div>
                <div className={styles.divider}></div>
                <div className={styles.info_text}>{currWork.size}</div>
              </div>
              <div className={styles.info_block}>
                <div className={styles.info_text}>材質</div>
                <div className={styles.divider}></div>
                <div className={styles.info_text}>{currWork.material}</div>
              </div>
              <div className={styles.info_block}>
                <div className={styles.info_text}>簡介</div>
                <div className={styles.divider}></div>
                <div className={styles.info_content_text}>
                  {currWork.description}
                </div>
              </div>
            </React.Fragment>
          )}

          {currWork.type === "碑文" && (
            <React.Fragment>
              <div className={styles.info_block}>
                <div className={styles.info_text}>類別</div>
                <div className={styles.divider}></div>
                <div className={styles.info_text}>{currWork.author_type}</div>
              </div>
              <div className={styles.info_block}>
                <div className={styles.info_text}>作者簡介</div>
                <div className={styles.divider}></div>
                <div className={styles.info_content_text}>
                  {currWork.author_info}
                </div>
              </div>
              <div className={styles.info_article_block}>
                <div className={styles.info_article_title_block}>
                  <div className={styles.info_text}>釋文</div>
                  <div className={styles.divider}></div>
                </div>

                <div className={styles.info_article_content_text}>
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                      marginTop: -10,
                      lineHeight: "25px",
                    }}
                  >
                    {currWork.content}
                  </pre>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>

        {router.query.mapName !== "ground" && (
          <div className={styles.button_block}>
            <div onClick={() => setMusicBarOpen(true)}>
              <AudioInfoButton />
            </div>

            <div onClick={() => setPanoramaOpen(true)}>
              <PanoramaButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default WorkDialog;
