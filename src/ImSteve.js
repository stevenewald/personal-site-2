import React from 'react';
import './index.css';
class ImSteve extends React.Component {
    render() {
        return (
            <div class="splash-cont" id="homeTarg">
                <div class="imsteve-text-cont">
                    <div class="imsteve-text">
                        <div class="blue-icon-cont">
                            <div class="blue-icon-smaller">
                                <svg class="person-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                        </div>
                        <h1 id="stevetext" class="head-text">
                            Hi, I'm
                            <span id="stevespan" class="gradient-text">
                                    Steve
                            </span>
                        </h1>

                        <h3 id="swe-text" class="head-text">
                            Software engineer and sophomore studying at Northwestern University
                        </h3>

                        <div id="pers-inf-cont">
                            <p class="icon-text-cont">
                                <svg class="blue-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" clip-rule="evenodd"><path d="M22 9.74l-2 1.02v7.24c-1.007 2.041-5.606 3-8.5 3-3.175 0-7.389-.994-8.5-3v-7.796l-3-1.896 12-5.308 11 6.231v8.769l1 3h-3l1-3v-8.26zm-18 1.095v6.873c.958 1.28 4.217 2.292 7.5 2.292 2.894 0 6.589-.959 7.5-2.269v-6.462l-7.923 4.039-7.077-4.473zm-1.881-2.371l9.011 5.694 9.759-4.974-8.944-5.066-9.826 4.346z"/></svg>

                                <span class="small-x-margins">Software engineer and student</span>
                            </p>

                            <p class="icon-text-cont">
                                <svg class="blue-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" clip-rule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
                                
                                <span class="small-x-margins">Steve@steve.ee</span>
                            </p>

                            <p class="icon-text-cont">
                            <svg class="blue-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>

                                <span class="small-x-margins">Evanston, IL</span>
                            </p>
                        </div>
                    </div>

                    <div class="cv-cont">

                        <div>
                            <a href="#" id="cvtext" tabindex="0" role="link">Download my curriculum vitae:</a>
                            <div class="flex">
                                <button class="blue-button">
                                    <svg class="bb-icon" xmlns="http://www.w3.org/2000/svg" stroke="none" fill="white" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm-3 3h-7v1h7v-1z"/></svg>

                                    <a href="https://steve.ee/StevenEwaldResume.pdf"><span class="bb-link">Download CV</span></a>
                                </button>
                                <button id="bb2" class="blue-button">
                                    <svg class="bb-icon" xmlns="http://www.w3.org/2000/svg" stroke="none" fill="white" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm-3 3h-7v1h7v-1z"/></svg>

                                    <a href=""><span class="bb-link">Contact me</span></a>
                                </button>
                            </div>                                
                        </div>
                    </div>
                </div>

                <div class="picture-cont">
                    <div class="picture-cont-cont">
                        <img id="stevepic" src="https://steve.ee/assets/images/Steve_1.JPG"></img>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                this.props.handler(0);
                }
            });
            });
        observer.observe(document.getElementById("pers-inf-cont"));
    }
}
export default ImSteve;