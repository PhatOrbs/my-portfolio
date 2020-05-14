import React from "react";
import "./style.css";
import logo from "./Me.jpg";
import logo1 from "./whiteresume.jpg";
import logo2 from "./github-icon_cyan.png";
import logo3 from "./linkedin_blue.png";
import logo4 from "./CSS3_logo.png";
import logo5 from "./Javascript_logo.png";
import logo6 from "./Nodejs_logo.png";
import logo7 from "./React_logo.png";
import logo8 from "./Visualstudio_logo.png";


function AboutMeCard() {
    return ( 
    <div className="col s12 m3 l3 offset-l1">
      <div className="card black" id="aboutMeCard">
        <div className="card-content">
          <div classNAme="card-header">

          </div>
            <div className="card-image">
              <div className="col s7 offset-s3 m7 offset-m2 l8 offset-l2">
          <img src={logo} alt="logo"/>
          </div>

          <div className="row">
                <div className="col s12 m12 l12">
                  <div className="card-header center">
                    <h4 className="topskillHead">Top Skills</h4>
                    <br />
                    <div className="col s2 m2 l2">
                      <img src={logo4} alt="logo4" id="csslogo" />
                    </div>
                    <div className="col s2 m2 l2">
                      <img src={logo5} alt="logo5" id="jslogo" />
                    </div>
                    <div className="col s2 m2 l2">
                      <img src={logo6} alt="logo6" id="nodelogo" />
                    </div>
                    <div className="col s2 m2 l2">
                      <img src={logo7} alt="logo7" id="reactlogo" />
                    </div>
                    <div className="col s2 m2 l2">
                      <img src={logo8} alt="logo8" id="visualcodelogo" />
                    </div>
                  </div>
              </div>
            </div>
          
          <div className="card-header center" id="connectHeader">
            <h4>Connect with me</h4>
          </div>
          <div className="row">
            <div className="col s4 m4 l4">
            <a href="https://github.com/PhatOrbs" target="_blank">
                    <img src={logo2} alt="logo2" id="githubStyle" />
                    </a>
            </div>
            <div className="col s4 m4 l4">
            <a href="https://www.linkedin.com/in/eddy-collado-057532a8/" target="_blank">

                    <img src={logo3} alt="logo3" id="linkedinStyle" />
                    </a>
            </div>
            <div className="col s4 m4 l4">
            <a href="https://www.linkedin.com/in/eddy-collado-057532a8/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABbb_MMB30yLQcpJpwlpMxe2RCsZu7e3rBc,1589164782432)/" target="_blank">

                    <img src={logo1} alt="logo1" id="resumeStyle" />
                    </a>
            </div>
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