import React from "react";
import Item from "./component/Item";

function Nav(props) {
  return (
    <div className="Nav">
      <Item className="nav__item" href="HOME"/>
      <Item className="nav__item" href="ABOUT"/>
      <Item className="nav__item" href="BLOCK"/>
      <Item className="nav__item" href="PROJECT"/>
      <Item className="nav__item" href="CONTACT"/>
    </div>
  );
}

export default Nav;
