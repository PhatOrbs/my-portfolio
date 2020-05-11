import React from "react";
import "./style.css";
import Projects from "../Projects/Projects";


function PortfolioCard() {
    return ( 
    <div className="col s12 m7 l7">
      {/* <div className="card"> */}
        <div className="card-content">
          <Projects />
        </div>
        </div>
        // </div>
        
    );
}

export default PortfolioCard;