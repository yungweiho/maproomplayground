import * as React from "react";
import styles from "./WorksBody.module.scss";
import SmallSearchBar from "./SmallSearchBar";
import WorksBoxList from "./WorksBoxList";
import WorksRoadToggle from "./WorksRoadToggle";
import SmallWorksRoadToggle from "./SmallWorksRoadToggle";
import { useRouter } from "next/router";

const WorksBody = ({
  setWorkDialodOpen,
  toggleIndex,
  setToggleIndex,
  setWorkkIndex,
  page,
  setPage,
  limit,
}) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <SmallSearchBar />
      {router.query.type && (
        <SmallWorksRoadToggle
          toggleIndex={toggleIndex}
          setToggleIndex={setToggleIndex}
        />
      )}

      <div className={styles.block}>
        <WorksBoxList
          setWorkDialodOpen={setWorkDialodOpen}
          toggleIndex={toggleIndex}
          setWorkkIndex={setWorkkIndex}
          page={page}
          setPage={setPage}
          limit={limit}
        />
        {router.query.type && (
          <WorksRoadToggle
            toggleIndex={toggleIndex}
            setToggleIndex={setToggleIndex}
            setWorkkIndex={setWorkkIndex}
            setWorkDialodOpen={setWorkDialodOpen}
          />
        )}
      </div>
    </div>
  );
};
export default WorksBody;
