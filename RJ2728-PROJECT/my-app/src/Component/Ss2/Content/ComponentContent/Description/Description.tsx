import Styles from "./Description.module.css";
const Description: React.FC = () => {
  return (
    <div className={Styles.description}>
      <h4>What ?</h4>
      <p>
        The PulPit Rock is a part of a mountain that looks like a pulpit the
        american.
      </p>
      <h4>Where ?</h4>
      <p>The PulPit Rock is a part of a mountain that looks like a pulpit.</p>
      <h4>Price ?</h4>
      <p>The PulPit Rock is a part of a mountain.</p>
    </div>
  );
};

export default Description;
