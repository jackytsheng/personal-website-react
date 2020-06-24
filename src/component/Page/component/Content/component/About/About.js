import React from 'react';
import styles from './About.module.scss';
import AboutSkill from './AboutSkill';
import Pdf from './components/Jiajin_Zheng_Resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
    };
  }
  handleClick=()=>{
    this.setState({
      show: !this.state.show,
    });
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
        <div className={styles.seperator}></div>
        <div className = {styles.window}>
          {this.state.show ? null : (
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
          )}

          {this.state.show ? (
           <AboutSkill/>
          ) : null}
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
