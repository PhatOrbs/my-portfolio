import React from "react";
import "./style.css";
import AboutMeCard from "../AboutMe/AboutMeCard";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
// import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
// import ContactForm from "../ContactForm/ContactForm";

function Card() {
  return (
    <div>
      <div className="row">
        <AboutMeCard />
        <PortfolioCard />
        {/* <ConnectWithMe /> */}
        </div>
        <div className="row">
          {/* <ContactForm /> */}
        </div>
        </div>
  );
}

export default Card;
