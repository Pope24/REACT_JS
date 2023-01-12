import * as React from "react";
import Styles from "./ListMusicComponent.module.css";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface IListMusicProps {
  nameMusic: string;
  author: string;
  images: string;
  times: number | string;
}

const ListMusic: React.FunctionComponent<IListMusicProps> = (props) => {
  const { nameMusic, author, images, times } = props;
  const [numberOrder, setNumberOrder] = useState(0);
  const upSongList = () => {
    setNumberOrder(numberOrder + 1);
  };
  React.useEffect(() => {
    upSongList();
  }, []);
  return (
    <div className={`d-flex ${Styles.song__tag}`}>
      <div className={Styles.song_order}>{numberOrder}</div>
      <div className={`d-flex ${Styles.detail__song}`}>
        <img src={props.images} alt="" width={40 + "px"} height={40 + "px"} />
        <i className={Styles.icon__run}>
          <FaPlay />
        </i>
        <span>{props.nameMusic}</span>
      </div>
      <div className={Styles.author___song}>
        <p>{props.author}</p>
      </div>
      <div className={Styles.times__song}>
        <p>{props.times}</p>
      </div>
      <div className={Styles.like__song}>
        <FaHeart />
      </div>
    </div>
  );
};

export default ListMusic;
