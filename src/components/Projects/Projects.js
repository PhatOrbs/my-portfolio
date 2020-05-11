import React from "react";
import logo1 from "./cocktail_mixtape1.gif";
import logo2 from "./quarantinee_app.gif";
import logo3 from "./weatherDashboard.gif";
import logo4 from "./workDayScheduler.gif";
import "./style.css";

function Projects() {
    return (
        <div className="projectsContainer">
            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-image">
                                <a href="https://phatorbs.github.io/GUIsProject1/" target="_blank">
                                <img src={logo1} alt="logo"
                                alt="The Cocktail Mixtap App!" /></a>
                                    <span className="card-title"></span>
                                    <div>
                                        <p>A theme finder app that helps you make a themed drink
                                        and suggests 3 playlists from Spotify to host for your party/theme.</p>
                                    </div>
                                    <div class="card-footer" id="cocktailbtn">
                                        <div class="btn-primary center-align">
                                            <a href="https://phatorbs.github.io/GUIsProject1/"
                                                class="btn btn-primary app pulse" target="_blank">Cocktail Mixtape App</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-image">
                            <a href="https://guis-electric-boogaloo.herokuapp.com/" target="_blank">
                                <img src={logo2} alt="logo"
                                alt="The Quarantinee App!" /></a>
                                    <span className="card-title"></span>
                                    <div>
                                    <p>The social media app for Gamers and entertainment.
                                        Share your favorite TV shows, quarantine tips, and 
                                        sharing your streaming platform with other users.</p>
                                </div>
                                <div class="card-footer" id="cocktailbtn">
                                        <div class="btn-primary center-align">
                                            <a href="https://guis-electric-boogaloo.herokuapp.com/"
                                                class="btn btn-primary app pulse" target="_blank">Quarantinee App</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
            <div className="col s12 m6 l6">
                <div className="card">
                <div className="card-content">
                            <div className="card-image">
                            <a href="https://phatorbs.github.io/Homework6.0/" target="_blank">
                                <img src={logo3} alt="logo3"
                                alt="weatherApp" /></a>
                                <span className="card-title"></span>
                                <div>
                                    <p>A weather dashboard app where you can search for
                                    any city in the world and this app displays the current weather, 
                                    as well as a 5 day forecast for the searched city.</p>
                                </div>
                                <div class="card-footer" id="cocktailbtn">
                                        <div class="btn-primary center-align">
                                            <a href="https://phatorbs.github.io/Homework6.0/"
                                                class="btn btn-primary app pulse" target="_blank">Weather App</a>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m6 l6">
                <div className="card">
                <div className="card-content">
                            <div className="card-image">
                            <a href="https://phatorbs.github.io/Homework5.0/" target="_blank">
                                <img src={logo4} alt="logo4"
                                alt="WorkDayScheduler" /></a>
                            <span className="card-title"></span>
                            <div>
                                <p>A work day scheduler app that uses local storage to store your data.</p>
                            </div>
                            <div class="card-footer" id="cocktailbtn">
                                        <div class="btn-primary center-align">
                                            <a href="https://phatorbs.github.io/Homework5.0/"
                                                class="btn btn-primary app pulse" target="_blank">Work Day Scheduler App</a>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    );
}

export default Projects;