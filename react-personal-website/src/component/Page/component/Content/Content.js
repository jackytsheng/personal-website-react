import React from "react";
import styles from "./Content.module.scss";
import About from "./component/About";
import Home from "./component/Home";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Content = (props) => {
  const params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <div className={styles.container}>
      <Swiper {...params}>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
      </Swiper>
    </div>
    // <div className={styles.container}>
    //   <Swiper {...params}>
    //     <div>
    //
    //     </div>
    //     <div>
    //
    //     </div>
    //   </Swiper>
    // </div>
  );
};

export default Content;
