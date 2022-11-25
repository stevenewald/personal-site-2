import React from 'react';
import './index.css';

class Project extends React.Component {
    constructor() {
        super();
        this.toggleOpen = this.toggleOpen.bind(this);
        this.card_cont = React.createRef();
        this.abs_cont = React.createRef();
        this.proj_pic = React.createRef();
    }

    toggleOpen(openOrClose) {
        var obj = this.card_cont;
        var abs = this.abs_cont;
        if(openOrClose==="close") {
            setTimeout(() => {
                obj.current.classList.remove('long-duration');
                obj.current.classList.remove('transition-out');
                obj.current.classList.add('short-duration');
                obj.current.classList.add('transition-in');
            }, 1);
            setTimeout(() => {
                obj.current.classList.remove('move-down');
                obj.current.classList.add('move-up');
            }, 3);
            setTimeout(() => {
                abs.current.classList.add('no-show');
            }, 300);
        } else if(openOrClose==="open") {
            setTimeout(() => {
                abs.current.classList.remove('no-show');
                obj.current.classList.add("long-duration");
                obj.current.classList.add("transition-out");
            }, 1);
            setTimeout(() => {
                obj.current.classList.add('move-up');
            }, 2);
            setTimeout(() => {
                obj.current.classList.remove('move-up');
                obj.current.classList.add('move-down');
            }, 3);
        }
    }
    render() {
        return (
            <div class="no-show no-size" ref={this.abs_cont} onClick={()=>this.toggleOpen("close")}>
            <div class="project-popup-cont z-50">
                <div ref={this.card_cont} class="z-50 transitions"
                    //x-transition:enter="transition long-duration transition-out"
                    //x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    //x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
                    //x-transition:leave="transition short-duration transition-in"
                    //x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
                    //x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    //class="fixed inset-0 z-10 overflow-y-auto" 
                    //aria-labelledby="modal-title" role="dialog" aria-modal="true"
                >
                    <div class="transition-card-cont">

                        <div class="card-cont-cont">
                            <div>
                                <div class="card-image"  id="moreinfoplane" ref={this.proj_pic} alt=""></div>

                                <div class="card-text-cont">
                                    <h3 class="card-header" id="modal-title">
                                        {this.props.header_text}
                                    </h3>

                                    <p class="card-subtext">
                                    {this.props.subtext}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    componentDidMount() {
        this.proj_pic.current.style.backgroundImage = "url('" + this.props.image_src + "')";
    }
}

export default Project;