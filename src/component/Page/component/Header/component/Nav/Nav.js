import React from "react";
import Item from "./component/Item";
import styles from "./Nav.module.scss"

const Nav = ({ current, handleClick }) => (
  <nav className={styles.container}>
    <div className={styles.topFiller}></div>
    
    <Item
      href="HOME"
      activeState={current === "HOME"}
      onClick={ handleClick}
    />
    <Item
      href="ABOUT"
      activeState={current === "ABOUT"}
      onClick={ handleClick}
    />
    <Item
      href="BLOG"
      activeState={current === "BLOG"}
      onClick={ handleClick}
    />
    <Item
      href="PROJECT"
      activeState={current === "PROJECT"}
      onClick={ handleClick}
    />
    <Item
      href="CONTACT"
      activeState={current === "CONTACT"}
      onClick={ handleClick}
    />
    <div className={styles.bottomFiller}></div>
  </nav>
);

export default Nav;
