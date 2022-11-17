import React from 'react';
import './index.css';

class Intro extends React.Component {
    render() {
        return (
            <div className='intro-page'>
        <div className='text-container'>
          <h4 className='intro-text first-active'>Welcome, </h4>
          <h4 className='intro-text first-active'>my name is <span class="gradient-text">Steve</span>.</h4>
        </div>
        <div className='text-container relative right-8 right-32'>
            <h4 className='intro-text' id="ima">I am a </h4>
            <div class="container w-0 h-0 relative bottom-[1.32rem]">
                <h4 className='intro-text second-active absolute w-0 h-0'>Sophomore</h4>
                <h4 className='intro-text second-active absolute w-0 h-0'>(make some better things)</h4>
                <h4 className='intro-text second-active absolute w-0 h-0'>Racing drone enthusiast</h4>
                <h4 className='intro-text second-active absolute w-0 h-0'>Hackathon winner</h4>
                <h4 className='intro-text second-active absolute w-0 h-0'>Skier</h4>
                <h4 className='intro-text second-active absolute w-0 h-0'>Programmer</h4>
            </div>
        </div>
      </div>
        )
    }

    componentDidMount() {
        document.querySelectorAll('.first-active').forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, 1+idx*1000);
            setTimeout(() => {
                span.classList.add('fade');
            }, 3500+idx*100);
        })
        setTimeout(() => {
            document.getElementById("ima").classList.add('active');
        }, 4000);

        document.querySelectorAll('.second-active').forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, 5000+idx*1300);
            if (idx===5) {
                setTimeout(() => {
                    document.getElementById("ima").classList.add('fadeop');
                }, 6800+idx*1300);
                setTimeout(() => {
                    document.getElementsByClassName("intro-page")[0].style.top="-100vh";
                }, 8300+idx*1300);
            } else {
                setTimeout(() => {
                    span.classList.add('fade');
                }, 6300+idx*1300);
            }
        })
    }
}

export default Intro;