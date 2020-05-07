import React from "react";
import styles from "./App.module.scss";
import Page from "../Page";
import Particles from "react-particles-js";

class App extends React.Component {
  render() {
    const params = {
      detectRetina: true,
      fpsLimit: 30,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: false,
              force: 60,
              smooth: 10,
            },
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            speed: 1,
          },
        },
      },
      particles: {
        color: {
          value: "#2E3D66",
        },
        lineLinked: {
          blink: false,
          color: {
            value: "#2E3D66",
          },
          consent: false,
          distance: 150,
          enable: true,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "lime",
            },
            enable: false,
          },
          width: 1,
        },
        move: {
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          enable: true,
          outMode: "out",
        },
        number: {
          density: {
            enable: true,
            area: 400,
          },
          limit: 150,
          value: 10,
        },
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 10,
      },
      stroke: {
        color: {
          value: "#2E3D66",
        },
        width: 0,
        opacity: 1,
      },
      pauseOnBlur: true,
    };
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
