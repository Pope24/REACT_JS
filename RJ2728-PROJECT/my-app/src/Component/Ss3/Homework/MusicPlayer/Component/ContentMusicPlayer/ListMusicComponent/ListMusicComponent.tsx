import * as React from "react";
import Styles from "./ListMusicComponent.module.css";
import { FaPause, FaPlay } from "react-icons/fa";
import { useMemo, useState } from "react";
import { FaHeart } from "react-icons/fa";

interface IListMusicProps {
  nameMusic: string;
  author: string;
  images: string;
  times: number | string;
  path: string;
}

const ListMusic: React.FunctionComponent<IListMusicProps> = (props) => {
  const { nameMusic, author, images, path } = props;
  const [playStatus, setStatusPlay] = useState(false);
  const [colorHeart, setColorHeart] = useState(false);
  const audio = useMemo(() => new Audio(props.path), [props.path]);
  const play = () => {
    setStatusPlay(true);
    audio.play();
  };

  const pause = () => {
    setStatusPlay(false);
    audio.pause();
  };
  return (
    <div className={`d-flex ${Styles.song__tag}`}>
      <div className={Styles.song_order}></div>
      <div className={`d-flex ${Styles.detail__song}`}>
        <img src={props.images} alt="" width={40 + "px"} height={40 + "px"} />
        <i className={Styles.icon__run} onClick={playStatus ? pause : play}>
          {playStatus ? <FaPause /> : <FaPlay />}
        </i>
        <span>{props.nameMusic}</span>
      </div>
      <div className={Styles.author___song}>
        <p>{props.author}</p>
      </div>
      <div className={Styles.times__song}>
        <p>03:12</p>
      </div>
      <div className={Styles.like__song}>
        <FaHeart />
      </div>
    </div>
  );
};

export default ListMusic;
