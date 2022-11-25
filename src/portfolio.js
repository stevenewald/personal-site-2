import React from 'react';
import './index.css';
import './output.css';
import Project from './project.js';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.project_1 = React.createRef();
        this.project_2 = React.createRef();
        this.project_3 = React.createRef();

        this.plane_text = "I modified a kit-built RC plane to hold a Raspberry Pi and Navio2 sensor board. This enabled me to program an autonomous flight routine from scratch. The resulting plane was able to take-off, fly through waypoints, and land, all on its own."
        this.frat_text = "Kappa Theta Pi is a co-ed tech fraternity focused on pre-professional technological development. I serve on the board of executives as VP of Technology, and created the website (viewable at ktpnu.com)."
        this.radix_text = "I created a python library to support efficient grid-based word pathfinding utilizing a radix trie data structure. This allows users to find words in a grid in O(mn) time."
    }

    render() {
        return (
            <section class="gray-bg" id="portTarg">
                <div><Project ref={this.project_1} aura-hidden='true' header_text={"Autonomous Model Plane Project"} alt="Picture of RC Plane being set up" image_src="https://i.ibb.co/h8jPcY2/secondary-plane.jpg" subtext={this.plane_text}/></div>
                <div><Project ref={this.project_2} aura-hidden='true' header_text={"Co-ed Tech Fraternity Website"} alt="Screenshot of Kappa Theta Pi website" image_src="https://i.ibb.co/pPWym5V/Screenshot-2022-11-13-at-1-11-34-PM.png" subtext={this.frat_text}/></div>
                <div><Project ref={this.project_3} aura-hidden='true' header_text={"Radix Trie Pathfinding Library"} alt="GIF of algorithm performing word pathfinding" image_src="https://camo.githubusercontent.com/f3e5e22a2a27818b4c9ef732d152ccc392fb039a0508e4ddeedb78d3219ced27/68747470733a2f2f6d65646961332e67697068792e636f6d2f6d656469612f4b6b62743864704a76486b573442473533642f67697068792e6769663f6369643d373930623736313139303736383431616636626162303733383031396661336639653433363831306434386132636537267269643d67697068792e6769662663743d67" subtext={this.radix_text}/></div>
                
                <div class="portfolio-cont">
                    <h1 id="port-head-text">Personal Projects</h1>

                    <p id="port-subhead-text">
                        Some of the things I've made
                    </p>


                    <div class="three-img-cont">
                        <a onClick={() => this.project_1.current.toggleOpen("open")}><div id="port-img-1" class="portfolio-img" alt="GIF of RC Plane taking off">
                            <div
                                class="portfolio-blur">
                                <h2 class="port-tagline">Autonomous model plane</h2>
                                <p class="port-sub-tagline">Engineering</p>
                            </div>
                        </div></a>


                        <a onClick={() => this.project_2.current.toggleOpen("open")}><div id="port-img-3" class="portfolio-img" alt="Screenshot of Kappa Theta Pi website">
                            <div
                                class="portfolio-blur">
                                <h2 class="port-tagline">Tech fraternity website</h2>
                                <p class="port-sub-tagline">Web dev</p>
                            </div>
                        </div></a>

                        <a onClick={() => this.project_3.current.toggleOpen("open")}><div id="port-img-2" class="portfolio-img" alt="GIF of algorithm performing word pathfinding">
                            <div
                                class="portfolio-blur">
                                <h2 class="port-tagline">Grid-based radix-trie-optimized pathfinding library</h2>
                                <p class="port-sub-tagline">Algorithmic development</p>
                            </div>
                        </div></a>
                    </div>
                    <div id="bottom-bit" class="w-1 h-1 relative bottom-60"></div>
                </div>
            </section>
        )
    }

    componentDidMount() {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                document.getElementById("port-img-1").classList.add('active');
                document.getElementById("port-img-2").classList.add('active');
                document.getElementById("port-img-3").classList.add('active');
                this.props.handler(2);
              }
            });
          });
        observer.observe(document.getElementById("bottom-bit"));
    }
}

export default Portfolio;