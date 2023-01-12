import * as React from "react";
import { IconType } from "react-icons/lib/esm/iconBase";
import Styles from "./MapBarBlockUI2.module.css";

interface IMapBarProps {
  icon: IconType;
  color: string;
  title: string;
  percent: any;
}

const MapBarBlockUI2: React.FunctionComponent<IMapBarProps> = (props) => {
  const { icon, color, title } = props;
  return (
    <div className={Styles.mapBar}>
      <div className={Styles.title__mapBar}>
        {React.createElement(icon, { color: props.color })}
        <span className={Styles.title__language}>{props.title}</span>
      </div>
      <div
        className={Styles.percent__mapBar}
        style={{
          backgroundColor: "#" + props.color,
          flex: props.percent / 100,
        }}
      ></div>
    </div>
  );
};

export default MapBarBlockUI2;
