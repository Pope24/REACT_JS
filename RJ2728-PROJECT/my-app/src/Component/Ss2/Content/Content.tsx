import Styles from "./Content.module.css";
import Navba from "./ComponentContent/Navba/Navba";
import ContainerContent from "./ComponentContent/ContainerContent/ContainerContent";
import Description from "./ComponentContent/Description/Description";
const Content: React.FC = () => {
  return (
    <div className={Styles.content}>
      <Navba />
      <ContainerContent />
      <Description />
    </div>
  );
};

export default Content;
