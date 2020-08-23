import React from "react";
import Item from "./component/Item";
import styles from "./Nav.module.scss"

const Nav = ({ current, handleClick }) => (
  <nav className={styles.container}>
    <div className={styles.topFiller}></div>
    <Item
      href="PROFILE"
      activeState={current === "PROFILE"}
      onClick={handleClick}
    />
    <Item href="HOME" activeState={current === "HOME"} onClick={handleClick} />
    <Item
      href="ABOUT"
      activeState={current === "ABOUT"}
      onClick={handleClick}
    />
    <Item
      href="CONTACT"
      activeState={current === "CONTACT"}
      onClick={handleClick}
    />
    <Item href="https://blog.jiajinzheng.com" onClick={(e, url) => {}} />
    <Item href="https://gaget.jiajinzheng.com" onClick={(e, url) => {}} />
    <div className={styles.bottomFiller}></div>
  </nav>
);

export default Nav;
