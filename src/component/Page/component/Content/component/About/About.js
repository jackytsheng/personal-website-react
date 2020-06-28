import React from 'react';
import styles from './About.module.scss';
import AboutSkill from './AboutSkill';
import Pdf from './components/Jiajin_Zheng_Resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";
import animationLaptop from './AnimationLaptop.module.scss';
import animationDisplay from "./AnimationDisplay.module.scss";
import { CSSTransition } from "react-transition-group";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      current: "",
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  toggleDropDown(name) {
    if (name === this.state.current) {
      this.setState({
        current: "",
      });
    } else if (name !== this.state.current) {
      this.setState({
        current: name,
      });
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>ABOUT ME</h1>
        <div className={styles.seperator}></div>
        <h2> A passionate programmer who is always learning.</h2>

        <h4 className={styles.description}>
          I <span className={styles.emphasis}>Continuously Integrates</span> new
          knowledge and insight, and{" "}
          <span className={styles.emphasis}>Continuously Deploy</span> quality
          solution to customers.
        </h4>
        <h2 className={styles.skill}>MY SKILLS</h2>
        <div className={styles.UnderlineSeperator}></div>
        <div className={styles.window}>
          <div div className={styles.laptopScreen}>
            <CSSTransition
              timeout={500}
              unmountOnExit
              in={!this.state.show}
              classNames={{ ...animationLaptop }}
            >
              <div className={styles.laptop}>
                <FontAwesomeIcon icon={faLaptop} />
                <div className={styles.clickMe}>
                  <div className={styles.click} onClick={this.handleClick}>
                    <span className={styles.one}>C</span>
                    <span className={styles.two}>L</span>
                    <span className={styles.three}>I</span>
                    <span className={styles.four}>C</span>
                    <span className={styles.five}>K</span>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
          <CSSTransition
            timeout={1000}
            unmountOnExit
            in={this.state.show}
            classNames={{ ...animationDisplay }}
          >
            <AboutSkill
              current={this.state.current}
              onClick={this.toggleDropDown}
            />
          </CSSTransition>
        </div>
        <div className={styles.resume}>
          <a className={styles.download} href={Pdf}>
            My Resume
          </a>
        </div>
      </div>
    );
  }
};

export default About;
