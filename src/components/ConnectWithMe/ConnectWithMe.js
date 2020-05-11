import React from "react";
import "./style.css";
import ConnectLinks from "../ConnectLinks/ConnectLinks";

function ConnectWithMe() {
    return (
        <div className="col s12 m2 l2">
      <div className="card" id="ConnectCard">
        <div className="card-content">
            <ConnectLinks />
        </div>
        </div>
        </div>
        
    );
}

export default ConnectWithMe;