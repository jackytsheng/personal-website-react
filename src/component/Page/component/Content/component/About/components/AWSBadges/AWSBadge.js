import React from 'react';
import style from './Badge.module.scss';

const AWSBadge = ({ awsBadgeUrl,awsAlt,link}) => {
 
  return (
    <a href={link} target="__blank" className={style.card}>
      <img src={awsBadgeUrl} alt={awsAlt} />
    </a>
  );
};

export default AWSBadge;
