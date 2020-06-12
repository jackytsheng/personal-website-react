import React from "react";
import styles from "./App.module.scss";
import Page from "../Page";
import Particles from "react-particles-js";
import {params} from "./components/Particle/params";

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          <section className="layout__page">
            <Page />
          </section>
          {/* <section className="layout__page">
        <Page/>
      </section>
      <section className="layout__Footer">
        <Footer/>
      </section> */}
        </div>
        <div className={styles.particle}>
         <Particles width={"100%"} height={"100%"} params={{...params}} />
         </div>
      </div>
     
    );
  }
}

export default App;
