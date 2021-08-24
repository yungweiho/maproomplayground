import * as React from "react";
import clsx from "clsx";
import styles from "./Works.module.scss";
import WorksHeader from "./WorksHeader";
import WorksBody from "./WorksBody";
import WorksTab from "./WorksTab";
import WorkDialog from "./WorkDialog";
import { workData } from "../utils/constans";

const Works = ({ setWorkDialodOpen, setWorkkIndex }) => {
  const [toggleIndex, setToggleIndex] = React.useState(null);

  return (
    <div
      className={clsx(styles.container, {
        // [styles.dialog]: isWorkDialodOpen,
      })}
    >
      <WorksHeader />
      <WorksTab setToggleIndex={setToggleIndex} />
      <WorksBody
        workData={workData}
        setWorkDialodOpen={setWorkDialodOpen}
        toggleIndex={toggleIndex}
        setToggleIndex={setToggleIndex}
        setWorkkIndex={setWorkkIndex}
      />
    </div>
  );
};

export default Works;
