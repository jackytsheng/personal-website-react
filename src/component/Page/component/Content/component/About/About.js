import React from 'react';
import styles from './About.module.scss';
import AboutSkill from './AboutSkill';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      current: '',
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  toggleDropDown(name) {
    console.log(name);
    if (name === this.state.current) {
      this.setState({
        current: '',
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
        <h2>A life long learner</h2>
        <h4 className={styles.description}>
          Over 3 years experience in various fullstack technologies, DevOps tools and in-depth Cloud knowledge. Committed maintain inquisitive mindset and continuously learning  
        </h4>
        <h2 className={styles.skill}>MY SKILLS</h2>
        <div className={styles.UnderlineSeperator}></div>
        <div className={styles.window}>
            <AboutSkill
              current={this.state.current}
              onClick={this.toggleDropDown}
            />
        </div>
        {/* Come back and uncomment this when I need to include the Resume again */}
        {/* 
        <div className={styles.resume}>
          <a className={styles.download} href={Pdf} target="__blank">
            My Resume
          </a>
        </div> */}
      </div>
    );
  }
}

export default About;
