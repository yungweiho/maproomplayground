import * as React from "react";
import clsx from "clsx";
import styles from "./Map.module.scss";
import Loading from "./Loading";
import { useRouter } from "next/router";
import MainMap from "./MainMap";
import WorkList from "./WorkList";
import MenuIcon from "../materials/MenuIcon";
import MusicIcon from "../materials/MusicIcon";
import InfoIcon from "../materials/InfoIcon";
import Draggable from "react-draggable";
import HeaderLayout from "./HeaderLayout";
import Works from "./Works";
import WorkDialog from "./WorkDialog";
import MapDialog from "./MapDialog";
import Panorama from "./Panorama";
import MusicBar from "./MusicBar";
import { roadList } from "../utils/constans";
import { GetStaticPaths, GetStaticProps } from "next";

export const MapData = React.createContext();

const Map = () => {
  const [isMounted, setMounted] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  const [screenHeight, setScreenHeight] = React.useState(0);

  const [screenWidth, setScreenWidth] = React.useState(0);

  const [limitDragHeight, setlimitDragHeight] = React.useState(0);

  const [limitDragWidth, setlimitDragWidth] = React.useState(0);

  const [isMapDialogOpen, setMapDialogOpen] = React.useState(false);

  const [isWorkListOpen, setWorkListOpen] = React.useState(false);

  const [isWorkDialodOpen, setWorkDialodOpen] = React.useState(false);

  const [isMusicBarOpen, setMusicBarOpen] = React.useState(false);

  const [workIndex, setWorkkIndex] = React.useState(1);

  const [isPanoramaOpen, setPanoramaOpen] = React.useState(false);

  const [panoramaOffset, setPanoramaOffset] = React.useState(1);

  const [groundArea, setGroundArea] = React.useState("1區域");

  const map = React.useRef();

  const map_container = React.useRef();

  const router = useRouter();

  const readScreen = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setScreenHeight(100 * vh);
    setScreenWidth(window.innerWidth);
  };
  /* eslint-disable */
  React.useEffect(async () => {
    if (router.query.mapName === "works") return;

    setlimitDragWidth(map_container.current.offsetWidth - window.innerWidth);
    setlimitDragHeight(map_container.current.offsetHeight - window.innerHeight);
  });

  /* eslint-disable */

  React.useEffect(() => {
    readScreen();
    window.addEventListener("resize", readScreen, false);
    window.addEventListener("orientationchange", readScreen, false);
    document.addEventListener("gesturestart", function (event) {
      event.preventDefault();
    });

    return () => {
      window.removeEventListener("resize", readScreen, false);
      window.removeEventListener("orientationchange", readScreen, false);
    };
  }, []);

  return (
    <MapData.Provider
      value={{ screenHeight: screenHeight, screenWidth: screenWidth }}
    >
      <div className={styles.container}>
        <HeaderLayout
          setLoading={setLoading}
          isMapDialogOpen={isMapDialogOpen}
          setMapDialogOpen={setMapDialogOpen}
        />
        {router.query.mapName === "works" && (
          <Works
            setWorkDialodOpen={setWorkDialodOpen}
            setWorkkIndex={setWorkkIndex}
          />
        )}

        {/* <button onClick={() => router.push("/map2/green-line")}>green</button>
        <button onClick={() => router.push("/map2/red-line")}>red</button>
        <button onClick={() => router.push("/map2/blue-line")}>blue</button>
        <button onClick={() => router.push("/map2/ground")}>ground</button> */}
        {router.query.mapName !== "works" && (
          <Draggable
            axis="both"
            cancel=".name, .tree, .number, .area"
            allowAnyClick={true}
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            // defaultPosition={null}
            position={null}
            grid={[1, 1]}
            scale={1}
            nodeRef={map}
            bounds={{
              bottom: 0,
              right: 0,
              top: -Math.max(limitDragHeight, 0),
              left: -Math.max(limitDragWidth, 0),
            }}
          >
            <div ref={map} className={clsx("handle", styles.handle)}>
              <MainMap
                map_container={map_container}
                isWorkDialodOpen={isWorkDialodOpen}
                setWorkDialodOpen={setWorkDialodOpen}
                setGroundArea={setGroundArea}
                setWorkListOpen={setWorkListOpen}
                setWorkkIndex={setWorkkIndex}
                isLoading={isLoading}
              />
            </div>
          </Draggable>
        )}
      </div>
      <WorkList
        isOpen={isWorkListOpen}
        setOpen={setWorkListOpen}
        groundArea={groundArea}
        setGroundArea={setGroundArea}
        setWorkkIndex={setWorkkIndex}
        setWorkDialodOpen={setWorkDialodOpen}
      />
      <MapDialog
        isOpen={isMapDialogOpen}
        onClose={() => setMapDialogOpen(false)}
        groundArea={groundArea}
        setGroundArea={setGroundArea}
      />
      <WorkDialog
        isOpen={isWorkDialodOpen}
        onClose={() => setWorkDialodOpen(false)}
        setPanoramaOpen={setPanoramaOpen}
        workIndex={workIndex}
        setMusicBarOpen={setMusicBarOpen}
      />
      {isMusicBarOpen && (
        <MusicBar
          workIndex={workIndex}
          onClose={() => setMusicBarOpen(false)}
        />
      )}
      s
      {isPanoramaOpen && (
        <Panorama
          workIndex={workIndex}
          setPanoramaOpen={setPanoramaOpen}
          panoramaOffset={panoramaOffset}
          setPanoramaOffset={setPanoramaOffset}
        />
      )}
      {isLoading && <Loading isLoading={isLoading} setLoading={setLoading} />}
    </MapData.Provider>
  );
};

export const getStaticPaths = async () => {
  const maps = [
    { mapName: "main" },
    { mapName: "red-line" },
    { mapName: "green-line" },
    { mapName: "blue-line" },
    { mapName: "ground" },
    { mapName: "works" },
  ];
  const paths = maps.map((m) => ({
    params: { mapName: m.mapName.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const postId = context.params?.mapName || "";
  // Get post detail via API, file, etc.
  const post = { mapName: postId, content: `I'm the post with id ${postId}!` }; // Example
  return { props: { post } };
};

export default Map;
