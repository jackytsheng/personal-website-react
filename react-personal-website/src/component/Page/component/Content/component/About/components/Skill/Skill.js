import React from 'react';
import styles from './Skill.module.scss';

const Skill = ({name}) =>{
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
    </div>
  );
}

export default Skill;