import React from "react";
import logo1 from "./github-icon_cyan.png";
import logo2 from "./linkedin_blue.png";
import logo3 from "./whiteresume.jpg";
import "./style.css";

function ConnectLinks() {
    return (
        <div className="connectLinksContainer">
            <div className="row">
                <div className="col s4 m1 l12">
                <a href="https://github.com/PhatOrbs" target="_blank">
                        <img src={logo1} alt="logo1" id="githubIcon" />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col s4 m1 l12">
                <a href="https://www.linkedin.com/in/eddy-collado-057532a8/" target="_blank">
                        <img src={logo2} alt="logo2" id="linkedinIcon" />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col s4 m1 l12">
                <a href="https://www.linkedin.com/in/eddy-collado-057532a8/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABbb_MMB30yLQcpJpwlpMxe2RCsZu7e3rBc,1586347457718)/" target="_blank">
                        <img src={logo3} alt="logo3" id="resumeIcon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ConnectLinks;