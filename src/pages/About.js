import React from 'react';
import "./About.css";
import skills from '../images/skills.png';
// import tech_skills from "../../assets/tech_skills.png";

const Skill = ({ title, percentage }) => {
  return (
    <div className="skill">
      <span className="title">{title}</span>
      <span className="percent">{percentage}%</span>
      <div class="progress-bar">
        <div class="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className='Skills'>
      <h1 className="heading">Skills</h1>
      <div className='skills'>
      <div className="pbars">
        <Skill title="Python3" percentage={95} />
        <Skill title="Java/C++" percentage={75} />
        <Skill title="SQL/MongoDB" percentage={80} />
        <Skill title="Computer Vision and Machine Learning" percentage={70} />
        <Skill title="UI/UX" percentage={65} />
        <Skill title="Operating System" percentage={70} />
      </div>
      <div className='skill_img'>
        <img src={skills} alt="Not Loaded" />
      </div>
      </div>
    </section>
  );
};

export default Skills;