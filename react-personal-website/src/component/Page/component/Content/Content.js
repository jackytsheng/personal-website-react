import React from "react";
import styles from "./Content.module.scss";
import animation from './Animation.module.scss';
import About from "./component/About";
import Home from "./component/Home";
import {CSSTransition} from 'react-transition-group';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

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
  wrapAnimation(name) {
    return (  
      <CSSTransition >
        {this.decideComponent(name)}
      </CSSTransition >
      )
  }

  render() {

    console.log({ ...styles });
    return (
      <div className={styles.container}>
        {/* {this.wrapAnimation(this.props.current)} */}
        <CSSTransition
          unmountOnExit
          timeout={1000}
          in={this.props.current === "HOME"}
          classNames={{ ...animation }}
        >
          <Home />
        </CSSTransition>
        <CSSTransition
          unmountOnExit
          timeout={1}
          in={this.props.current === "ABOUT"}
          classNames={{ ...animation }}
        >
          <About />
        </CSSTransition>
      </div>
    );
  }
}

export default Content;
