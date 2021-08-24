import * as React from "react";
import * as R from "ramda";
import clsx from "clsx";
import styles from "./MusicBar.module.scss";
import MusicControlIcon from "../materials/MusicControlIcon";
import PauseIcon from "../materials/PauseIcon";
import PlayIcon from "../materials/PlayIcon";
import { workData } from "../utils/constans";

const MusicBar = ({ workIndex, onClose }) => {
  const [audioOn, setAudioOn] = React.useState(false);

  const [audioLength, setAudioLength] = React.useState("00:00");

  const [currentAudioLength, setCurrentAudioLength] = React.useState("00:00");

  const currAudio = React.useMemo(() => {
    return workData.find((item) => item.id === workIndex).audio || null;
  }, [workIndex]);

  const currName = React.useMemo(() => {
    return workData.find((item) => item.id === workIndex).name || null;
  }, [workIndex]);

  const getCurrentTime = () => {
    const player = document.getElementById("player");

    if (player) {
      const current_minutes = Math.floor(Number(player.currentTime) / 60);
      const current_seconds = parseInt(
        Number(player.currentTime) - current_minutes * 60
      );
      const string_current_minutes =
        current_minutes >= 10 ? current_minutes : "0" + current_minutes;

      const string_current_seconds =
        current_seconds >= 10 ? current_seconds : "0" + current_seconds;
      setCurrentAudioLength(
        string_current_minutes + ":" + string_current_seconds
      );
    }
  };

  const forward = () => {
    const player = document.getElementById("player");
    player.currentTime = player.currentTime + 5;
  };

  const reverse = () => {
    const player = document.getElementById("player");
    player.currentTime = player.currentTime - 5;
  };

  // 如果是未播放，就播放；播放中，就暫停。
  const play = () => {
    const player = document.getElementById("player");
    if (player) {
      if (audioOn) {
        player.pause();
        setAudioOn(false);
        clearInterval(getCurrentInt);
        return;
      }
      player.play();
      setAudioOn(true);
      const getCurrentInt = setInterval(() => getCurrentTime(), 500);
      return;
    }
  };

  React.useEffect(() => {
    const player = document.getElementById("player");
    if (player) {
      player.onloadedmetadata = () => {
        // 音檔總長
        const duration_minutes = Math.floor(Number(player.duration) / 60);
        const string_duration_minutes =
          duration_minutes >= 10 ? duration_minutes : "0" + duration_minutes;
        const duration_seconds = parseInt(
          Number(player.duration) - duration_minutes * 60
        );

        const string_duration_seconds =
          duration_seconds >= 10 ? duration_seconds : "0" + duration_seconds;
        setAudioLength(string_duration_minutes + ":" + string_duration_seconds);
      };
    }
  }, [workIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <audio
          src={currAudio}
          controls
          id="player"
          preload="metadata"
          style={{ visibility: "hidden", position: "absolute" }}
        />
        <div className={styles.close} onClick={onClose}>
          <div className={styles.x}></div>
        </div>
        <div className={styles.prev} onClick={() => reverse()}>
          <MusicControlIcon />
        </div>
        <div className={styles.play} onClick={() => play()}>
          {audioOn ? <PauseIcon /> : <PlayIcon />}
        </div>
        <div className={styles.next} onClick={() => forward()}>
          <MusicControlIcon />
        </div>
        <div className={styles.curr_time}>{currentAudioLength}</div>
        <div className={styles.divider}>/</div>
        <div className={styles.dura_time}>{audioLength}</div>
        <div className={styles.name}>{currName}</div>
      </div>
    </div>
  );
};

export default MusicBar;
