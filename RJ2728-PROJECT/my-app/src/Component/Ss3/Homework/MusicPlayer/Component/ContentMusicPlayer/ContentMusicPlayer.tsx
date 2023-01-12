import * as React from "react";
import Styles from "./ContentMusicPlayer.module.css";
import ListMusic from "./ListMusicComponent/ListMusicComponent";
import { IMAGESMUSICPLAYERS } from "../../../../../../assets/images";
interface IContentMusicPlayerProps {}

const ContentMusicPlayer: React.FunctionComponent<IContentMusicPlayerProps> = (
  props
) => {
  return (
    <div className={Styles.content__music__player}>
      <ListMusic
        nameMusic="Ba kể con nghe"
        author="Dương Nghĩa"
        images={IMAGESMUSICPLAYERS.BAKECONNGHE}
        times="02:41"
      />
      <ListMusic
        nameMusic="Cảm ơn và xin lỗI"
        author="Hương Giang"
        images={IMAGESMUSICPLAYERS.CAMONVAXINLOI}
        times="03:17"
      />
      <ListMusic
        nameMusic="Đế vương "
        author="Dung Hoàng Phạm"
        images={IMAGESMUSICPLAYERS.DEVUONG}
        times="04:09"
      />
      <ListMusic
        nameMusic="Khoan Thai"
        author="Khải Đặng"
        images={IMAGESMUSICPLAYERS.KHOANTHAI}
        times="04:51"
      />
      <ListMusic
        nameMusic="Sài Gòn yếu đuối"
        author="Pope"
        images={IMAGESMUSICPLAYERS.SAIGONKHIYEUDUOI}
        times="02:59"
      />
      <ListMusic
        nameMusic="Thêm bao nhiêu lâu"
        author="Đạt G"
        images={IMAGESMUSICPLAYERS.THEMBAONHIEULAU}
        times="03:54"
      />
      <ListMusic
        nameMusic="Khi phải quên đi"
        author="Phan Mạnh Quỳnh"
        images={IMAGESMUSICPLAYERS.KHIPHAIQUENDI}
        times="02:30"
      />
      <ListMusic
        nameMusic=" Bước qua mùa cô đơn"
        author="Vũ"
        images={IMAGESMUSICPLAYERS.VU}
        times="02:54"
      />
      <ListMusic
        nameMusic="Bước qua nhau"
        author="Black Bi"
        images={IMAGESMUSICPLAYERS.VU}
        times="03:04"
      />
    </div>
  );
};

export default ContentMusicPlayer;
