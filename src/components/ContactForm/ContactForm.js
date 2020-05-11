import React from "react";
import "./style.css";

function ContactForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col m10 offset-m1 s12">
                    <div className="card" id="contactCard">
                    <h2 class="center-align">Contact Form</h2>
                    <div className="row">
                        <form className="col m8 offset-m2 s12">
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="name" type="text" />
                            <label for="name">Name</label>
                                </div>
                                <div class="input-field col s12">
                            <input id="email" type="email" class="form-input" />
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s12">
                          <textarea id="message" class="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>
                    
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col m12">
                         <p class="right-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
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
