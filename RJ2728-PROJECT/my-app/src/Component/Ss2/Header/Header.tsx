import React from "react";
import Styles from "./Header.module.css";
const Header: React.FC = () => {
  return (
    <div className={Styles.header__app}>
      <h1 className={Styles.title__header}>The Pulpit Rock</h1>
    </div>
  );
};

export default Header;
