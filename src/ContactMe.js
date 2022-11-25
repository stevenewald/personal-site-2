import React from 'react';
import './index.css';

class ContactMe extends React.Component {
    constructor() {
        super();
        this.validateInputs = this.validateInputs.bind(this);
    }

    onlyLetters(str) {
        return /^[a-zA-Z\s.,]+$/.test(str);
    }

    validateInputs() {
        //name
        const nameval = String(document.getElementById("name-input").value);
        const phoneval = String(document.getElementById("phone-input").value);
        const emailval = String(document.getElementById("email-input").value);
        const messageval = String(document.getElementById("message-input").value);

        var all_correct = true;
        if (nameval.length>0) {
            if(!this.onlyLetters(nameval)) {
                all_correct = false;
                document.getElementById("name-input").style.backgroundColor = "#FFCCCB";
            } else {
                document.getElementById("name-input").style.backgroundColor = "";
            }
        } else {
            all_correct = false;
        }

        if (phoneval.length>0) {
            if((!phoneval.match(/^\d{10}$/) && (!phoneval.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)))) {
                all_correct = false;
                document.getElementById("phone-input").style.backgroundColor = "#FFCCCB";
            } else {
                document.getElementById("phone-input").style.backgroundColor = "";
            }
        } else {
            all_correct = false;
        }

        if(emailval.length>0) {
            if(!emailval.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                all_correct = false;
                document.getElementById("email-input").style.backgroundColor = "#FFCCCB";
            } else {
                document.getElementById("email-input").style.backgroundColor = "";
            }
        } else {
            all_correct = false;
        }

        if(messageval.length>0) {
            if(!this.onlyLetters(messageval)) {
                all_correct = false;
                document.getElementById("message-input").style.backgroundColor = "#FFCCCB";
            } else {
                document.getElementById("message-input").style.backgroundColor = "";
            }
        } else {
            all_correct = false;
        }

        if (all_correct) {
            document.getElementById("sendbutt").style.backgroundColor = "green";
        } else {
            document.getElementById("sendbutt").style.backgroundColor = "#3B82F6";
        }
    }
    render() {
        return(
            <section class="contact-container" id="contactTarg">
                <div class="contact-text-cont">
                    <h1 id="contact-text">contact me.</h1>

                    <p id="contact-subtext">
                        Send me an email or fill out the form.
                    </p>
                </div>

                <div class="contact-form-container">
                    <form>
                        <div class="contact-input-cont">
                            <div class="contact-halftext">
                                <label class="text-inputbox" for="name-input">Full Name</label>
                                <input type="text" placeholder="Your Name" id="name-input" name="name-input" onChange={this.validateInputs} class="text-input" />
                            </div>

                            <div class="contact-halftext">
                                <label class="text-inputbox" for="phone-input">Phone Number</label>
                                <input type="text" placeholder="123-456-7890" id="phone-input" name="phone-input" onChange={this.validateInputs} class="text-input" />
                            </div>

                        </div>

                        <div class="contact-input-cont">
                            <div class="contact-halftext contact-fulltext">
                                    <label class="text-inputbox" for="email-input">Email address</label>
                                    <input type="email" id="email-input" name="email-input" placeholder="yourname@u.northwestern.edu" onChange={this.validateInputs} class="text-input" />
                                </div>

                            <div class="contact-halftext contact-fulltext no-select-text">
                                <label class="text-inputbox" for="date-input">Requested response date</label>
                                <input type="date" id="datePicker" name="date-input"
                                    min="2022-01-01" max="2024-12-31"></input>
                            </div>
                        </div>

                        <div class="message-box-cont">
                            <label class="text-inputbox" id="messagelabel" for="message-input">Message</label>
                            <textarea id="message-input" name="message-input" onChange={this.validateInputs} class="text-input" placeholder="Message"></textarea>
                        </div>

                        <button id="sendbutt" class="send-button">
                            send me a message
                        </button>
                    </form>
                </div>
            </section>
        )
    }

    componentDidMount() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.props.handler(4);
              }
            });
          });
        observer.observe(document.getElementById("messagelabel"));
    }
}
export default ContactMe;