import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faAward } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Aboutme() {
  return (
    <div className="about-me-container">
      <div className="about-me-title">
        <h4>Know more</h4>
        <h2>About me</h2>
      </div>

      <div className="card-container">
        <div className="experience-education-container">
          <div className="experience-card">
            <FontAwesomeIcon className="about-icons" icon={faAward} size="2x"/>
            <h2>Experience</h2>
            <p>2+ years</p>
            <p>Frontend Development</p>
          </div>
          <div className="education-card">
            <FontAwesomeIcon className="about-icons" icon={faGraduationCap} size="2x"/>
            <h2>Education</h2>
            <p>Bachelor's Degree in</p>
            <p>Applied Computer Science</p>
          </div>
        </div>
        <div className="my-description">
          My area of specialisation is frontend development. I have an experience of over 2.5 years in frontend development. 
          Besides frontend development, I ventured into Backend development in which have an experience of 1.5 years.
          <br />
          I'm a pursuant of Degree in Bachelor of Science in Applied Computer Science, currently in my 3rd year of studies.
          Passion for solving problems using various programming languages is the main reason that led me to pursue my course.
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
