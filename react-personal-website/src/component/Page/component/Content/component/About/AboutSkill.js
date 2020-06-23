import React from 'react';
import styles from "./About.module.scss";
import Skill from "./components/Skill";

export default () => (
  <React.Fragment>
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
  </React.Fragment>
);