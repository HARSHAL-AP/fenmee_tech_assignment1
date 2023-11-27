import React from "react";
import style from "./Heder.module.css";
import Navbar from "../Nabar/Navbar";
import Button from "../Button/Button";
import Herosection from "../Herosection/Herosection";

const Header = () => {
  return (
    <div className={style.header}>
      <Navbar />
      <Herosection/>
    </div>
  );
};

export default Header;
