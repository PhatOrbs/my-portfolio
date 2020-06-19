import React from "react";
import "./style.css";

function ContactForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col m10 offset-m1 s12">
                    <div className="card black" id="contactCard">
                    <h2 className="center-align">Contact Form</h2>
                    <div className="row">
                        <form className="col m8 offset-m2 s12">
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="name" type="text" />
                            <placeholder forHTML="name">Name</placeholder>
                                </div>
                                <div className="input-field col s12">
                            <input id="email" type="email" className="form-input" />
                            <placeholder forHTML="email">Email</placeholder>
                        </div>
                        <div className="input-field col s12">
                          <input id="textarea1" className="materialize-textarea"></input>
                          <placeholder forHTML="textarea1">Message</placeholder>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col m12">
                         <p className="right-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                        </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ContactForm;
