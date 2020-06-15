import React from "react";
import styles from "./Content.module.scss";
import animation from './Animation.module.scss';
import About from "./component/About";
import Home from "./component/Home";
import {CSSTransition,TransitionGroup} from 'react-transition-group';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  decideComponent(name) {
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
  animationWrapper(name){
    return (
      <CSSTransition 
      unmountOnExit
      key={name} timeout={100000} classNames={{ ...animation }}>
        <div className={styles.container}>{this.decideComponent(name)}</div>
      </CSSTransition>
    );
  }
  render() {
    return (
      <CSSTransition
        unmountOnExit
        timeout={100000}
        classNames={{ ...animation }}
      >
        <div className={styles.container}>{this.decideComponent(this.props.current)}</div>
      </CSSTransition>
    );
  }
}

export default Content;
