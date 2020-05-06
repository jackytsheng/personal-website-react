import React from "react";
import styles from "./Content.module.scss";
import About from "./component/About";
import Home from "./component/Home";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:"HOME",
    };
  }
  setCurrent(dir){
    this.state.currentPage = dir;
  }
  render(){
    const params = {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 0,
    };
    return (
      <div className = {styles.container}>
        <Swiper {...params}>
          <div>
            <Home />
          </div>
          <div>
            <About />
          </div>
        </Swiper>
        </div>
    );
}
};

export default Content;
