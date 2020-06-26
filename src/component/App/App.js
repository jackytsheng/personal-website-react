import React from "react";
import styles from "./App.module.scss";
import Page from "../Page";
import Particles from "react-tsparticles"; 
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
    console.log(this);
    setTimeout(() => this.setState({loading:false}),3000);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <CSSTransition
          in={this.state.loading}
          unmountOnExit
          timeout={5000}
          classNames={{ ...animation }}
        >
          <Loader />
        </CSSTransition>
        <div className={styles.layout}>
          <Page />
          <Footer />
        </div>
          <Particles className={styles.particle}  params={{ ...params }} />
      </div>
    );
  }
}

export default App;
