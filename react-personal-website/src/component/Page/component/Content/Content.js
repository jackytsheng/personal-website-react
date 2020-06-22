import React from "react";
import styles from "./Content.module.scss";
import animation from './Animation.module.scss';
import About from "./component/About";
import Home from "./component/Home";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Contact from "./component/Contact";
import Blog from './component/Blog';
import Project from "./component/Project";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Content componentDidMount called");
  }
  componentDidUpdate() {
    console.log("Content componentDidUpdate called");
  }
  decideComponent(name) {
    switch (name) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "BLOG":
        return <Blog />;
      case "PROJECT":
        return <Project />;
      case "CONTACT":
        return <Contact />;
      default:
        return null;
    }
  }
  animationWrapper(name) {
    return (
      <CSSTransition
        unmountOnExit
        key={name}
        timeout={500}
        classNames={{ ...animation }}
      >
        <div className={styles.container}>{this.decideComponent(name)}</div>
      </CSSTransition>
    );
  }
  render() {
    console.log(this.props.current);
    return (
      <SwitchTransition>
        {this.animationWrapper(this.props.current)}
      </SwitchTransition>
    );
  }
}

export default Content;
