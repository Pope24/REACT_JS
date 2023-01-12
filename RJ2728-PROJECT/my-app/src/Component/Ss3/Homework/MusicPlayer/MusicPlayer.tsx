import * as React from "react";
import HeaderMusicPlayer from "./Component/HeaderMusicPlayer/HeaderMusicPlayer";
import SideBarMusicPlayer from "./Component/SideBarMusicPlayer/SideBarMusicPlayer";

interface IMusicPlayerProps {}

const MusicPlayer: React.FunctionComponent<IMusicPlayerProps> = (props) => {
  return (
    <div>
      <HeaderMusicPlayer />
      <div>
        <SideBarMusicPlayer />
      </div>
    </div>
  );
};

export default MusicPlayer;
