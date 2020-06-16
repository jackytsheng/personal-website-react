import React from "react";
import styles from "./App.module.scss";
import Page from "../Page";
import Particles from "react-particles-js";
import {params} from "./components/Particle/params";
import Loader from './components/Loader';
import {CSSTransition} from 'react-transition-group';
import animation from './components/Loader/animation.module.scss';
import Footer from './../Footer';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading:true,
    }

  }
  componentDidMount(){
    console.log("Content componentDidMount called");
    setTimeout(() => this.setState({loading:false}),5000);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <CSSTransition
          in={this.state.loading}
          unmountOnExit
          timeout={500}
          classNames={{ ...animation }}
        >
           <Loader />
        </CSSTransition>
        <div className={styles.layout}>
          <Page />
          <Footer />
        </div>
        <div className={styles.particle}>
          <Particles width={"100%"} height={"100%"} params={{ ...params }} />
        </div>
      </div>
    );
  }
}

export default App;
