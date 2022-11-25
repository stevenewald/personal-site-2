import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <div class="bg-gray-300 p-12" id="aboutmetarg">
                <div class="flex space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHPxYjOagRJig/profile-displayphoto-shrink_400_400/0/1649132175326?e=1674691200&v=beta&t=HzfpYt9W-yoLH8sbJ-ArQzC3xLTj8UVjTBJBsT53YdE" alt="" class="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start"></img>
                    <div class="flex flex-col w-1/2">
                        <h4 class="text-lg font-semibold text-center md:text-left">More about me</h4>
                        <p>I like robots. I've interned at one robotics startup, been a full-stack developer at another, and am interning at Amazon Robotics this summer. Aside from that, I won first place in a hackathon this year, am one of two maintainers of a node package with 1.8 million monthly downloads, and am helping to found a co-ed CS fraternity at Northwestern.</p>
                    </div>
                    <div id="stevepic2"></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.props.handler(1);
              }
            });
          });
        observer.observe(document.getElementById("stevepic2"));
    }
}
export default AboutMe;