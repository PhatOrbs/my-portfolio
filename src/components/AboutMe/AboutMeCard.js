import React from "react";
import "./style.css";
import logo from "./Me.jpg";
import logo1 from "./whiteresume.jpg";
import logo2 from "./github-icon_cyan.png";
import logo3 from "./linkedin_blue.png";

function AboutMeCard() {
    return ( 
    <div className="col s12 m3 l3 offset-l1">
      <div className="card black" id="aboutMeCard">
        <div className="card-content">
          <div classNAme="card-header">
            
          </div>
            <div className="card-image">
          <img src={logo} alt="logo"/>
          <div className="row">
            <div className="col s4 m4 l4">
            <a href="https://github.com/PhatOrbs" target="_blank">
                    <img src={logo2} alt="logo" id="githubStyle" />
                    </a>
            </div>
            <div className="col s4 m4 l4">
            <a href="https://www.linkedin.com/in/eddy-collado-057532a8/" target="_blank">

                    <img src={logo3} alt="logo2" id="linkedinStyle" />
                    </a>
            </div>
            <div className="col s4 m4 l4">
            <a href="https://www.linkedin.com/in/eddy-collado-057532a8/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABbb_MMB30yLQcpJpwlpMxe2RCsZu7e3rBc,1586347457718)/" target="_blank">

                    <img src={logo1} alt="logo3" id="resumeStyle" />
                    </a>
            </div>
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
        </div>
    );
}

export default AboutMeCard;