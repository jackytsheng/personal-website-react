import React from 'react';
import styles from './About.module.scss';
import Skill from './components/Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import animation from './Animation.module.scss';

export default ({ skills, category, onClick, current }) => (
  <>
    {console.log(category, current)}
    <div className={styles.title} onClick={() => onClick(category)}>
      <h2>{category}</h2>
      <div
        className={`${styles.icon} ${
          current === category ? styles.iconActive : null
        }`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
    <CSSTransition
      timeout={500}
      unmountOnExit
      in={current === category}
      classNames={{ ...animation }}
    >
      <div className={styles.dropdown}>
        <div className={styles.detail}>
          {skills.map((skill) => (
            <Skill key={`${category}_${skill}`} name={skill} />
          ))}
        </div>
      </div>
    </CSSTransition>
  </>
);
