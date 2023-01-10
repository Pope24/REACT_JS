import Styles from "./Navba.module.css";
const Navba: React.FC = () => {
  return (
    <div>
      <table className={Styles.table}>
        <tbody>
          <tr>
            <td>The Drive</td>
          </tr>
          <tr>
            <td>The Walk</td>
          </tr>
          <tr>
            <td>The Return</td>
          </tr>
          <tr>
            <td>The End</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Navba;
