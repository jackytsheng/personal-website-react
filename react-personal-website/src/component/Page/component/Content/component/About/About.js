import React from 'react';
import styles from './About.module.scss';
import Skill from './components/Skill';
import Pdf from './components/Jiajin_Zheng_Resume.pdf';

const About = (props) => {
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
      <h2>Frontend</h2>
      <div className={styles.detail}>
        <Skill name={"HTML"} />
        <Skill name={"CSS"} />
        <Skill name={"Sass"} />
        <Skill name={"JavaScript"} />
        <Skill name={"React"} />
        <Skill name={"Redux"} />
        <Skill name={"Material UI"} />
        <Skill name={"Bootstrap"} />
        <Skill name={"JQuery"} />
        <Skill name={"Jest"} />
      </div>
      <h2>Backend</h2>
      <div className={styles.detail}>
        <Skill name={"Java"} />
        <Skill name={"Spring Boot"} />
        <Skill name={"Junit"} />
        <Skill name={"Jwt"} />
        <Skill name={"MySQL"} />
      </div>
      <h2>Development</h2>
      <div className={styles.detail}>
        <Skill name={"Agile"} />
        <Skill name={"Scrum"} />
        <Skill name={"TDD"} />
        <Skill name={"git"} />
        <Skill name={"Github"} />
      </div>
      <div className={styles.resume}>
        <a className={styles.download} href={Pdf} target="_blank">
          My Resume
        </a>
        
      </div>
    </div>
  );
};

export default About;
