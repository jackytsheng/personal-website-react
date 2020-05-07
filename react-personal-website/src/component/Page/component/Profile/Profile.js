import React from 'react';
import styles from './Profile.module.scss';


const Profile = (props) => {
  
  return (
    <div className={styles.wrapper}>
    <figure className={styles.container}>
      <img
        className={styles.picture}
        src={require("./img/profile.PNG")}
      ></img>
    </figure>
    <div className ={styles.name}>
      <h2>JIAJIN ZHENG</h2>
      {/* <div className={styles.description}>Hello My name is </div> */}
    </div>
    </div>
  );
}



export default Profile;