import React from 'react';
import styles from './About.module.scss';
import SkillCategory from './SkillCategory';

export default (props) => (
  <div className={styles.skillWrapper}>
    <SkillCategory
      {...props}
      category={'Frontend'}
      skills={['HTML', 'CSS', 'Sass', 'JavaScript', 'React', 'Redux']}
    />
    <SkillCategory
      {...props}
      category={'Backend'}
      skills={['Java', 'Spring Boot', 'Junit', 'Jwt', 'MySQL', 'C#', '.NET']}
    />
    <SkillCategory
      {...props}
      category={'DevOps Tool'}
      skills={[
        'TeamCity',
        'Github Action',
        'AWS Suite',
        'NewRelic',
        'SumoLogic',
        'Cloudformation',
        'terraform',
      ]}
    />
    <SkillCategory
      {...props}
      category={'Development'}
      skills={['Agile', 'Jira', 'Confluence', 'TDD', 'Git', 'Github']}
    />
    <SkillCategory
      {...props}
      category={'Cloud'}
      skills={['AWS Certified Developer', 'AWS Certified Solution Architect']}
    />
  </div>
);
