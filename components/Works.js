import * as React from "react";
import clsx from "clsx";
import styles from "./Works.module.scss";
import WorksHeader from "./WorksHeader";
import WorksBody from "./WorksBody";
import WorksTab from "./WorksTab";
import WorkDialog from "./WorkDialog";
import { workData } from "../utils/constans";
import { useRouter } from "next/router";

const Works = ({ setWorkDialodOpen, setWorkkIndex }) => {
  const router = useRouter();

  const [toggleIndex, setToggleIndex] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const [limit, setLimit] = React.useState(8);

  const handleTabClick = (name, toggle, query) => {
    router.push({
      pathname: "/map/works",
      query: query ? { type: query } : undefined,
    });

    setPage(1);

    setToggleIndex(null);
  };

  return (
    <div
      className={clsx(styles.container, {
        // [styles.dialog]: isWorkDialodOpen,
      })}
    >
      <WorksHeader />
      <WorksTab handleTabClick={handleTabClick} />
      <WorksBody
        workData={workData}
        setWorkDialodOpen={setWorkDialodOpen}
        toggleIndex={toggleIndex}
        setToggleIndex={setToggleIndex}
        setWorkkIndex={setWorkkIndex}
        page={page}
        setPage={setPage}
        limit={limit}
      />
    </div>
  );
};

export default Works;
