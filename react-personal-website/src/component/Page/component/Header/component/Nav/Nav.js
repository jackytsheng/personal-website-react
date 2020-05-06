import React from "react";
import Item from "./component/Item";
import './Nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDir: "HOME",
    };
  }
  
  handleClick(evt, dir) {
    evt.preventDefault();
    this.props.IndexChange(dir);
    this.setState({
      currentDir: dir,
    });
  }
  render() {
    const ItemActive = true;
    const clickFunction = this.handleClick.bind(this);
    return (
      <nav className="nav">
        <i className="nav__filler"></i>
        <Item
          href="HOME"
          activeState={this.state.currentDir === "HOME"}
          onClick={clickFunction}
        />
        <Item
          href="ABOUT"
          activeState={this.state.currentDir === "ABOUT"}
          onClick={clickFunction}
        />
        <Item
          href="BLOG"
          activeState={this.state.currentDir === "BLOG"}
          onClick={clickFunction}
        />
        <Item
          href="PROJECT"
          activeState={this.state.currentDir === "PROJECT"}
          onClick={clickFunction}
        />
        <Item
          href="CONTACT"
          activeState={this.state.currentDir === "CONTACT"}
          onClick={clickFunction}
        />
      </nav>
    );
  }
}

export default Nav;
