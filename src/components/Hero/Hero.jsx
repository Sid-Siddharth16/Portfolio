import React from "react";
import "./Hero.css";
import profile from "../../assets/profilepic.jpeg";

const Hero = () => {
  const handleLinkedInRedirect = () => {
    window.location.href = 'https://www.linkedin.com/in/16siddharth/';
  };

  const handleResumeRedirect = () => {
    window.location.href = 'https://drive.google.com/file/d/1WA3Kdbz9Y0BqvFOvPcmyu_Hl7V2_Aa-M/view?usp=sharing';
  };

  return (
    <>
      <div className="hero">
        <img src={profile} alt="Profile" />
        <h1>
          <span>I'm Siddharth Pandey</span>, Frontend Developer.
        </h1>
      </div>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleLinkedInRedirect}>
          Connect with Me
        </div>
        <div className="hero-resume" onClick={handleResumeRedirect}>
          My Resume
        </div>
      </div>
    </>
  );
};

export default Hero;
