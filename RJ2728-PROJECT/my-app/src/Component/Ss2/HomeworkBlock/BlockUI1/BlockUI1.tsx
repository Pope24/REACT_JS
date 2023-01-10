import Styles from "./BlockUI1.module.css";
import * as React from "react";
import MapBar from "./ComponentBlockUI1/MapBar";

interface IProps {}

const BlockUI1: React.FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <MapBar color="#eb144c" title="STORAGES" percent="50" />
      <MapBar color="#2196f3" title="USERS" percent="70" />
      <MapBar color="#8bc34a" title="VISITORS" percent="30" />
      <MapBar color="#ffc107" title="EMAIL" percent="45" />
      <MapBar color="#9c27b0" title="BASIC" percent="80" />
      <MapBar color="#f06292" title="OTHERS" percent="37" />
      <MapBar color="#2196f3" title="BANDWIDTH" percent="20" />
    </div>
  );
};
export default BlockUI1;
