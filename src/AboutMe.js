import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <div class="aboutme-cont" id="aboutmetarg">
                <div class="aboutme-cont-cont">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHPxYjOagRJig/profile-displayphoto-shrink_400_400/0/1649132175326?e=1674691200&v=beta&t=HzfpYt9W-yoLH8sbJ-ArQzC3xLTj8UVjTBJBsT53YdE" alt="" class="aboutme-img"></img>
                    <div class="aboutme-text-cont">
                        <h4 class="aboutme-header">More about me</h4>
                        <p>I've interned at one robotics startup, been a full-stack developer at another, and am interning at Amazon Robotics this summer. Aside from that, I won first place in a hackathon this year, and I'm one of two maintainers of a node package with 1.8 million monthly downloads. Lastly, I'm helping to found a co-ed CS fraternity at Northwestern (visit ktpnu.com, I made the website too!).</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutMe;