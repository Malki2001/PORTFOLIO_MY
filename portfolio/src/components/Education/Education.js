import React from "react";
import "./Education.css";

import profile from '../../assets/img/girl.jpg';
import { FaGraduationCap } from 'react-icons/fa';



function Education() {
  return (
    <section className= "education" id="education">
      <h2 className= "title">Education</h2>
      <div className="content">
        <img
          src={profile}
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className= "aboutItem">
            {/* <img src={} alt="Cursor icon" /> */}
            <FaGraduationCap size={40} className="icon-circle"/>
            <div className= "aboutItemText">
              <h6>2021-Present</h6>
              <p>B.Sc (Hons) in Software Engineering (Reading) </p>
              <p>University of Colombo School of Computing</p>
              <h5>Current GPA - 3.50</h5>
            </div>
          </li>
          <li className= "aboutItem">
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <FaGraduationCap size={40} className="icon-circle"/>
            <div className= "aboutItemText">
              <h6>2018-2020</h6>
              <p>GCE Advance Level</p>
              <p>Sangamiththa Girls’ College , Galle</p>
              <h5>A-1 B-1 C-1 (Physical Science Stream) - Z Score 1.67</h5>
            </div>
          </li>
          <li className= "aboutItem">
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <FaGraduationCap size={40} className="icon-circle"/>
            <div className= "aboutItemText">
              <h6>2007-2017</h6>
              <p>GCE Ordinary Level</p>
              <p>Sangamiththa Girls’ College , Galle</p>
              <h5>A-9 (English Medium)</h5>
            </div>
          </li>
       
        </ul>
      </div>
    </section>
  );
}

export default Education
