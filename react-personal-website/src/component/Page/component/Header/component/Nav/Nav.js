import React from "react";
import Item from "./component/Item";
import './Nav.css'

function Nav(props) {
  return (
    <nav className="nav">
      <i className="nav__filler"></i>
      <Item className="item" href="HOME"/>
      <Item className="item" href="ABOUT"/>
      <Item className="item" href="BLOG"/>
      <Item className="item" href="PROJECT"/>
      <Item className="item" href="CONTACT"/>
    </nav>
  );
}

export default Nav;
