import * as React from "react";
import Styles from "./MusicPlayer.module.css";
import ContentMusicPlayer from "./Component/ContentMusicPlayer/ContentMusicPlayer";
import HeaderMusicPlayer from "./Component/HeaderMusicPlayer/HeaderMusicPlayer";
import SideBarMusicPlayer from "./Component/SideBarMusicPlayer/SideBarMusicPlayer";

interface IMusicPlayerProps {}

const MusicPlayer: React.FunctionComponent<IMusicPlayerProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "##e5e7f1",
      }}
    >
      <HeaderMusicPlayer />
      <div className="container-fluid">
        <div className="row flex-nowrap fixed-bottom-0">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <SideBarMusicPlayer />
          </div>
          <div className="col py-3">
            <ContentMusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
