import React from "react";
import "./style.css";
import logo from "./Me.jpg";

function AboutMeCard() {
    return ( 
    <div className="col s12 m3 l3">
      <div className="card" id="aboutMeCard">
        <div className="card-content">
            <div className="card-image">
          <img src={logo} alt="logo"/>
          <span className="card-title"></span>
        </div>
          <p className="aboutmeStyle">With 4 years of experience creating in Adobe Suite and 2 years experience in web development, 
            I can utilize both a technical and creative background to provide strong problem solving, 
            quick turn around time, collaborate ideas and concepts, and creating future projects to improve the company with the user in mind.
            <br />
            <br />
            I have had a passion for tech since I was a child and have never felt more excited than now in moving forward in my career path in tech.
            I am readlily available by email: eddcollado@gmail.com or by phone number: 9548042372.</p>
        </div>
        </div>
        </div>
        
    );
}

export default AboutMeCard;