import React from 'react';
import './index.css';
import './output.css';
import Plane from './plane.js';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.toggleOpen = this.toggleOpen.bind(this);
        this.c1A = React.createRef(); //card 1 absolute container
        this.c1C = React.createRef(); //card 1 card object

        this.plane_text = "I modified a kit-built model plane to hold a raspberry pi+navio2 sensor board, allowing me to program an autonomous flight routine from scratch."
    }

    toggleOpen(obj, abs, openOrClose) {
        if(openOrClose==="close") {
            setTimeout(() => {
                obj.current.classList.remove('duration-300');
                obj.current.classList.remove('ease-out');
                obj.current.classList.add('duration-150');
                obj.current.classList.add('ease-in');
            }, 1);
            setTimeout(() => {
                obj.current.classList.remove('-translate-y-96');
                obj.current.classList.remove('opacity-100');
                obj.current.classList.remove('scale-150');
                obj.current.classList.add('translate-y-20');
                obj.current.classList.add('opacity-0');
                obj.current.classList.add('scale-95');
            }, 3);
            setTimeout(() => {
                abs.current.classList.add('hidden');
            }, 300);
        } else if(openOrClose==="open") {
            setTimeout(() => {
                abs.current.classList.remove('hidden');
                obj.current.classList.add("transition");
                obj.current.classList.add("duration-300");
                obj.current.classList.add("ease-out");
            }, 1);
            setTimeout(() => {
                obj.current.classList.add('translate-y-20');
                obj.current.classList.add('scale-95');
                obj.current.classList.add('opacity-0')
            }, 2);
            setTimeout(() => {
                obj.current.classList.remove('scale-95');
                obj.current.classList.remove('opacity-0');
                obj.current.classList.remove('translate-y-20');
                obj.current.classList.add('-translate-y-96');
                obj.current.classList.add('opacity-100');
                obj.current.classList.add('scale-150')
            }, 3);
        }
    }
    render() {
        return (
            <section class="gray-bg" id="portTarg">
                <div><Plane cardHandler={this.toggleOpen} header_text={"Autonomous Model Plane Project"} subtext={this.plane_text} abs_cont={this.c1A} card_cont={this.c1C}/></div>
                <div class="portfolio-cont">
                    <h1 id="port-head-text">Personal Projects</h1>

                    <p id="port-subhead-text">
                        Some of the things I've made
                    </p>


                    <div class="three-img-cont">
                        <a onClick={() => this.toggleOpen(this.c1C, this.c1A, "open")}><div id="port-img-1" class="portfolio-img">
                            <div
                                class="portfolio-blur">
                                <h2 class="port-tagline">Autonomous model plane</h2>
                                <p class="port-sub-tagline">Engineering</p>
                            </div>
                        </div></a>


                        <a href="https://ktpnu.com"><div id="port-img-3" class="portfolio-img">
                            <div
                                class="portfolio-blur">
                                <h2 class="port-tagline">Tech fraternity website</h2>
                                <p class="port-sub-tagline">Web dev</p>
                            </div>
                        </div></a>

                        <a href="https://github.com/stevenewald/radix-pathfinding"><div id="port-img-2" class="portfolio-img">
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
                this.props.handler(1);
              }
            });
          });
        observer.observe(document.getElementById("bottom-bit"));
    }
}

export default Portfolio;