import React from "react";
import Timer from "./Timer";
import "../styles/Header.css";

const Header = ({ timer, setTimer }) => {
  return (
    <header className="header">
      <p className="header__text">Скидка действует:</p>
      <Timer timer={timer} setTimer={setTimer} />
    </header>
  );
};

export default Header;
