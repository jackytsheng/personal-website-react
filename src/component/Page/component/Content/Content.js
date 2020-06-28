import React from "react";
import styles from "./Content.module.scss";
import animation from './Animation.module.scss';
import About from "./component/About";
import Home from "./component/Home";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Contact from "./component/Contact";
import Blog from './component/Blog';
import Project from "./component/Project";
import Profile from './../Profile';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  decideComponent(name) {
    switch (name) {
      case "PROFILE":
        return <Profile/>;
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
    return (
      <SwitchTransition>
        {this.animationWrapper(this.props.current)}
      </SwitchTransition>
    );
  }
}

export default Content;
