import * as React from "react";
import clsx from "clsx";
import styles from "./WorkList.module.scss";
import Tab from "../materials/Tab";
import WorkItem from "./WorkItem";
import InfoButton from "../materials/InfoButton";
import { useRouter } from "next/router";
import ExpandIcon from "../materials/ExpandIcon";
import { workData } from "../utils/constans";
import Art from "./Art";

const WorkList = ({
  isOpen,
  setOpen,
  groundArea,
  setGroundArea,
  setWorkkIndex,
  setWorkDialodOpen,
}) => {
  const router = useRouter();

  const name = React.useMemo(() => {
    if (router.query.mapName === "red-line") return "日光大道";
    if (router.query.mapName === "blue-line") return "勃勒小徑";
    if (router.query.mapName === "green-line") return "綠蔭秘境";
    return "碑林廣場";
  }, [router.query.mapName]);

  const currData = React.useMemo(() => {
    if (router.query.mapName === "red-line")
      return workData.filter((item) => item.road === "日光大道");

    if (router.query.mapName === "blue-line")
      return workData.filter((item) => item.road === "勃勒小徑");

    if (router.query.mapName === "green-line")
      return workData.filter((item) => item.road === "綠蔭秘境");

    if (router.query.mapName === "ground")
      return workData.filter(
        (item) => item.type === "碑文" && item.area === groundArea
      );

    return [];
  }, [router.query, groundArea]);

  const [isInfo, setInfo] = React.useState(false);

  const titleBlock = React.useMemo(() => {
    if (router.query.mapName === "ground" && !isInfo)
      return <Tab activeTab={groundArea} setActiveTab={setGroundArea} />;

    if (router.query.mapName === "ground")
      return <div className={styles.tab}>廣場介紹</div>;

    if (isInfo) return <div className={styles.tab}>路線介紹</div>;

    return <div className={styles.tab}>路線作品</div>;
  }, [isInfo, groundArea, setGroundArea, router.query]);

  const infoButtonText = React.useMemo(() => {
    if (router.query.mapName === "ground" && !isInfo) return "廣場介紹";
    if (router.query.mapName === "ground") return "廣場作品";
    if (isInfo) return "路線作品";
    return "路線介紹";
  }, [isInfo, router.query]);

  const info = React.useMemo(() => {
    if (router.query.mapName === "red-line")
      return `最有人氣的遊覽路線，從五權西路的國美館大門一路向右經過碑林廣場到英才路。以大型不鏽鋼的「展」為起點，到由花崗石與不銹鋼複合材質創作的「生命之碑」為終點，共有22件作品。

    途中在靠近五權西路一側有一片高低起伏綠油油的陽光草坪，這是許多人對國美館最熟悉的印象，是清晨破曉的健步如飛；是午後時光的不亦樂乎：是暮色漸深的依依不捨。
    
    這條路線適合野餐、玩樂、午覺、戀愛，在這裡歲月靜好，做什麼都好。隱藏在這之下還有一條小溪步道，在綠蔭之下，伴著微風輕拂是許多人散步的首選。`;

    if (router.query.mapName === "blue-line")
      return `這是隱藏版的路線，從美村路停車場的方向往國美館後門前進，經過只有館員會走的路線繞到後方的秘境。

    從銅製的「仙樂風飄」到青銅製的「耕」，這裡有9件的雕塑作品，坐落在側邊與後門，若不是刻意找尋往往會被大眾遺忘。
    
    美村路西側是土庫里，隱藏許多文藝小店以及特色美食。`;

    if (router.query.mapName === "green-line")
      return `隱身在綠蔭之中的深度探索，撿拾散落在草悟道雕塑園區的藝術。從國美館英才門以觀音石製的「守望」開始，往草悟道的方向前進到民生路口大理石製的「大同」， 共15件作品。

    踏在林蔭大道上，披上一身的樹影搖曳，這裡是最涼爽的路線，雕塑作品也被緊密的排列在一起。沿著草悟道繼續直行，可以到達市民廣場與勤美誠品，折返後沿路會經過綠光計劃與審計新村。`;

    return ``;
  }, [router.query.mapName]);

  return (
    <div className={clsx(styles.container, { [styles.close]: !isOpen })}>
      <ExpandIcon status={isOpen} setStatus={setOpen} />
      <div className={styles.art}>
        <Art scale={0.22} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.info_button} onClick={() => setInfo(!isInfo)}>
        <div className={styles.info_button_bg}>
          <div className={styles.info_button_text}>{infoButtonText}</div>
        </div>
      </div>

      {titleBlock}

      {!isInfo && (
        <WorkItem
          workList={currData}
          setWorkkIndex={setWorkkIndex}
          setWorkDialodOpen={setWorkDialodOpen}
        />
      )}

      {isInfo && (
        <div className={styles.info}>
          <pre style={{ whiteSpace: "pre-wrap" }}>{info}</pre>
        </div>
      )}
    </div>
  );
};
export default WorkList;
