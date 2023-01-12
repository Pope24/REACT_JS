import * as React from "react";
import MapBarBlockUI2 from "./ComponentBlockUI2/MapbarBlockUI2";
import { FaRobot } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaAdn } from "react-icons/fa";

interface IBlockUI2Props {}

const BlockUI2: React.FunctionComponent<IBlockUI2Props> = (props) => {
  return (
    <div>
      <MapBarBlockUI2 icon={FaRobot} color="4CAF50" title="HTML" percent="75" />
      <MapBarBlockUI2 icon={FaApple} color="DB3E00" title="CSS" percent="65" />
      <MapBarBlockUI2
        icon={FaDropbox}
        color="1273DE"
        title="PHP"
        percent="45"
      />
      <MapBarBlockUI2
        icon={FaBasketballBall}
        color="FCB900"
        title="Java"
        percent="75"
      />
      <MapBarBlockUI2 icon={FaAdn} color="9C27B0" title=".Net" percent="55" />
    </div>
  );
};

export default BlockUI2;
