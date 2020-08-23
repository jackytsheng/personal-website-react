import React from 'react';
import styles from "./About.module.scss";
import Skill from "./components/Skill";
import { CSSTransition } from 'react-transition-group';
import animation from './Animation.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";



export default ({ onClick, current }) => (
  <div className={styles.skillWrapper}>
    <div className={styles.title} onClick={() => onClick("Frontend")}>
      <h2>Frontend</h2>
      <div
        className={`${styles.icon} ${
          current === "Frontend" ? styles.iconActive : null
        }`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
    <CSSTransition
      timeout={300}
      unmountOnExit
      in={current === "Frontend"}
      classNames={{ ...animation }}
    >
      <div className={styles.dropdown}>
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
      </div>
    </CSSTransition>
    <div className={styles.title} onClick={() => onClick("Backend")}>
      <h2>Backend</h2>
      <div
        className={`${styles.icon} ${
          current === "Backend" ? styles.iconActive : null
        }`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
    <CSSTransition
      timeout={500}
      unmountOnExit
      in={current === "Backend"}
      classNames={{ ...animation }}
    >
      <div className={styles.dropdown}>
        <div className={styles.detail}>
          <Skill name={"Java"} />
          <Skill name={"Spring Boot"} />
          <Skill name={"Junit"} />
          <Skill name={"Jwt"} />
          <Skill name={"MySQL"} />
        </div>
      </div>
    </CSSTransition>
    <div className={styles.title} onClick={() => onClick("Development")}>
      <h2>Development</h2>
      <div
        className={`${styles.icon} ${
          current === "Development" ? styles.iconActive : null
        }`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
    <CSSTransition
      timeout={300}
      unmountOnExit
      in={current === "Development"}
      classNames={{ ...animation }}
    >
      <div className={styles.dropdown}>
        <div className={styles.detail}>
          <Skill name={"Agile"} />
          <Skill name={"Scrum"} />
          <Skill name={"TDD"} />
          <Skill name={"BDD"} />
          <Skill name={"git"} />
          <Skill name={"Github"} />
        </div>
      </div>
    </CSSTransition>
    <div className={styles.title} onClick={() => onClick("Cloud")}>
      <h2>AWS Cloud</h2>
      <div
        className={`${styles.icon} ${
          current === "Cloud" ? styles.iconActive : null
        }`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
    <CSSTransition
      timeout={300}
      unmountOnExit
      in={current === "Cloud"}
      classNames={{ ...animation }}
    >
      <div className={styles.dropdown}>
        <div className={styles.detail}>
          <Skill name={"S3"} />
          <Skill name={"Route 53"} />
          <Skill name={"EC2"} />
          <Skill name={"CloudFront"} />
          <Skill name={"Lambda"} />
          <Skill name={"API Gateway"} />
        </div>
      </div>
    </CSSTransition>
  </div>
);