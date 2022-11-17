import React from 'react';
import './index.css';
import './output.css';

class Portfolio extends React.Component {
    render() {
        return (
            <section class="gray-bg" id="portTarg">
                <div class="portfolio-cont">
                    <h1 id="port-head-text">Personal Projects</h1>

                    <p id="port-subhead-text">
                        Some of the things I've made
                    </p>


                    <div class="three-img-cont">
                        <a href="https://github.com/stevenewald/SolarPlane"><div id="port-img-1" class="portfolio-img">
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