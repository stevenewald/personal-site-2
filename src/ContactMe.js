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
            <section class="min-h-screen bg-white flex" id="contactTarg">
                <div class="flex flex-col justify-center w-full p-8 px-40 w-1/2">
                    <h1 class="font-semibold text-gray-800 capitalize text-5xl">contact me.</h1>

                    <p class="mt-4 text-gray-500">
                        Send me an email or fill out this form
                    </p>
                </div>

                <div class="flex flex-col justify-center p-8 pt-0 w-1/2 px-24 ">
                    <form>
                        <div class="-mx-2 md:items-center md:flex">
                            <div class="flex-1 px-2">
                                <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                                <input type="text" placeholder="Your Name" id="name-input" onChange={this.validateInputs} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="flex-1 px-2">
                                <label class="block mb-2 text-sm text-gray-600">Phone Number</label>
                                <input type="text" placeholder="123-456-7890" id="phone-input" onChange={this.validateInputs} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                        </div>

                        <div class="-mx-2 md:items-center md:flex">
                            <div class="flex-1 px-2 w-full mt-4 w-1/2">
                                    <label class="block mb-2 text-sm text-gray-600">Email address</label>
                                    <input type="email" id="email-input" placeholder="yourname@u.northwestern.edu" onChange={this.validateInputs} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                            <div class="flex-1 px-2 w-full mt-4 w-1/2 no-select-text">
                                <label class="block mb-2 text-sm text-gray-600">Requested response date</label>
                                <input type="date" id="datePicker"
                                    min="2022-01-01" max="2024-12-31"></input>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="block mb-2 text-sm text-gray-600" id="messagelabel">Message</label>
                            <textarea id="message-input" onChange={this.validateInputs} class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button id="sendbutt" class="bg-blue-500 w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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
                this.props.handler(2);
              }
            });
          });
        observer.observe(document.getElementById("messagelabel"));
    }
}
export default ContactMe;