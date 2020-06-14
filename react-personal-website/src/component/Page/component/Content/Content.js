import React from "react";
import styles from "./Content.module.scss";
import About from "./component/About";
import Home from "./component/Home";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  renderComponent(name){
    switch (name) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "HOME":
        return <About />;
      case "HOME":
        return <About />;
      case "HOME":
        return <About />;

    }
  }
  render() {
    return <div className={styles.container}>{this.renderComponent(this.props.current)}</div>;
  }
}

export default Content;
