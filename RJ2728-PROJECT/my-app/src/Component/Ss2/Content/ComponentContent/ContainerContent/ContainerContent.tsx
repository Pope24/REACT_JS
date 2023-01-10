import Styles from "./ContainerContent.module.css";
import { IMAGES } from "../../../../../assets/images";
const ContainerContent: React.FC = () => {
  return (
    <div className={Styles.title__content}>
      <h3>The Walk</h3>
      <p>
        The walk to the PulPit Rock will take you approximately two hours, give
        or you take an hour depending on the weather conditions and your
        physical shape.
      </p>
      <img src={IMAGES.LOGO} alt="" />
    </div>
  );
};

export default ContainerContent;
