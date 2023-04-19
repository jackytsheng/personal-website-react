import React from 'react';
import styles from './About.module.scss';
import SkillCategory from './SkillCategory';
import AWSBadge from './components/AWSBadges/AWSBadge';
import SapPng from './components/AWSBadges/sap.png';
import SaaPng from './components/AWSBadges/saa.png';
import DaPng from './components/AWSBadges/da.png';

export default (props) => (
  <div className={styles.skillWrapper}>
    <div className={styles.left}>
      <SkillCategory
        {...props}
        category={'Frontend'}
        skills={[
          'HTML',
          'CSS',
          'Sass',
          'JavaScript',
          'TypeScript',
          'React',
          'Redux',
          'Jest',
          'React Testing Library',
        ]}
      />
      <SkillCategory
        {...props}
        category={'Backend'}
        skills={[
          'C#',
          '.NET',
          'xUnit',
          'Python',
          'Go',
          'NodeJs',
          'Express',
          'Kotlin',
          'SQL',
          'dbt',
        ]}
      />
      <SkillCategory
        {...props}
        category={'DevOps Tools'}
        skills={[
          'TeamCity',
          'Github Action',
          'CircleCI',
          'New Relic',
          'Sumo Logic',
          'Cloudformation',
          'Terraform',
        ]}
      />
      <SkillCategory
        {...props}
        category={'Development'}
        skills={['Agile', 'Pair Programming', 'TDD', 'TBD', 'Git', 'Github']}
      />
    </div>
    <div className={styles.right}>
      <AWSBadge awsBadgeUrl={SapPng} awsAlt={"AWS Solution Architect Professional Badge"} link="https://www.credly.com/badges/5cf1e40d-8365-4a46-b334-99dbc3796c8d/public_url"></AWSBadge>
      <AWSBadge awsBadgeUrl={SaaPng} awsAlt={"AWS Solution Architect Associate Badge"} link="https://www.credly.com/badges/d7ec68f1-9de8-440f-b927-2e6fa5c44eb7/public_url"></AWSBadge>
      <AWSBadge awsBadgeUrl={DaPng} awsAlt={"AWS Developer Architect Badge"} link="https://www.credly.com/badges/79feed9b-2e3e-4dda-97a9-95a6f684c2e8/public_url"></AWSBadge>
    </div>
  </div>
);
