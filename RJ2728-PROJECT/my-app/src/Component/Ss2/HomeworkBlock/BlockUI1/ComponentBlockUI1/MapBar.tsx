import * as React from "react";
import Styles from "./MapBar.module.css";

interface IProps {
  color: string | undefined;
  title: string;
  percent: any;
}
const MapBar: React.FunctionComponent<IProps> = (props) => {
  const { color, title, percent } = props;

  return (
    <div className={Styles.mapBar}>
      <div
        className={Styles.title__mapbar}
        style={{ backgroundColor: props.color }}
      >
        {props.title}
      </div>
      <div
        className={Styles.percent__mapbar}
        style={{
          backgroundColor: props.color,
          flex: props.percent / 100,
        }}
      >
        {props.percent}%
      </div>
    </div>
  );
};

export default MapBar;
