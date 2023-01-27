import * as React from "react";
import Styles from "./ContentMusicPlayer.module.css";
import ListMusic from "./ListMusicComponent/ListMusicComponent";
import { IMAGESMUSICPLAYERS } from "../../../../../../assets/images";
import { MUSICS } from "../../../../../../assets/images";
interface IContentMusicPlayerProps {}

const ContentMusicPlayer: React.FunctionComponent<IContentMusicPlayerProps> = (
  props
) => {
  const listSong = [
    <ListMusic
      path={MUSICS.baKeConNghe}
      nameMusic="Ba kể con nghe"
      author="Dương Nghĩa"
      images={IMAGESMUSICPLAYERS.BAKECONNGHE}
      times="02:41"
    />,
    <ListMusic
      path={MUSICS.camOnVaXinLoi}
      nameMusic="Cảm ơn và xin lỗI"
      author="Hương Giang"
      images={IMAGESMUSICPLAYERS.CAMONVAXINLOI}
      times="03:17"
    />,
    <ListMusic
      path={MUSICS.khiPhaiQuenDi}
      nameMusic="Đế vương "
      author="Dung Hoàng Phạm"
      images={IMAGESMUSICPLAYERS.DEVUONG}
      times="04:09"
    />,
    <ListMusic
      path={MUSICS.khoanThai}
      nameMusic="Khoan Thai"
      author="Khải Đặng"
      images={IMAGESMUSICPLAYERS.KHOANTHAI}
      times="04:51"
    />,
    <ListMusic
      path={MUSICS.saiGonKhiYeuDuoi}
      nameMusic="Sài Gòn yếu đuối"
      author="Pope"
      images={IMAGESMUSICPLAYERS.SAIGONKHIYEUDUOI}
      times="02:59"
    />,
    <ListMusic
      path={MUSICS.baKeConNghe}
      nameMusic="Thêm bao nhiêu lâu"
      author="Đạt G"
      images={IMAGESMUSICPLAYERS.THEMBAONHIEULAU}
      times="03:54"
    />,
    <ListMusic
      path={MUSICS.khiPhaiQuenDi}
      nameMusic="Khi phải quên đi"
      author="Phan Mạnh Quỳnh"
      images={IMAGESMUSICPLAYERS.KHIPHAIQUENDI}
      times="02:30"
    />,
    <ListMusic
      path={MUSICS.buocQuaMuaCoDon}
      nameMusic=" Bước qua mùa cô đơn"
      author="Vũ"
      images={IMAGESMUSICPLAYERS.VU}
      times="02:54"
    />,
    <ListMusic
      path={MUSICS.buocQuaNhau}
      nameMusic="Bước qua nhau"
      author="Black Bi"
      images={IMAGESMUSICPLAYERS.VU}
      times="03:04"
    />,
  ];
  const renderSong = listSong.map((song, index) => {
    return (
      <div className={Styles.navbar__song}>
        <span className={Styles.index__song}>
          {index < 9 ? "0" + (index + 1) : index + 1}
        </span>{" "}
        {song}
      </div>
    );
  });
  return <div className={Styles.content__music__player}>{renderSong}</div>;
};

export default ContentMusicPlayer;
