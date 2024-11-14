import React from "react";
import "./About.css";
import profile from "../../assets/profilepic.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about-tittle">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Frontend Developer specializing in ReactJS, with a
              proven track record of building dynamic and efficient user
              interfaces for web applications.
            </p>
            <p>
              Proficient in leveraging React's component-based architecture to
              create reusable UI elements and streamline development workflows.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C++/C</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>600+</h1>
          <p>LEETCODE PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>300+</h1>
          <p>GFG PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5 Star</h1>
          <p>HACKERRANK PROBLEMS SOLVER</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
