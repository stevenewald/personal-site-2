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
            <div class="hidden w-0 h-0" ref={this.abs_cont} onClick={()=>this.toggleOpen("close")}>
            <div class="fixed flex justify-center top-0 bottom-0 left-0 right-0 w-full h-screen z-50">
                <div ref={this.card_cont} class="z-50"
                    //x-transition:enter="transition duration-300 ease-out"
                    //x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    //x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
                    //x-transition:leave="transition duration-150 ease-in"
                    //x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
                    //x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    //class="fixed inset-0 z-10 overflow-y-auto" 
                    //aria-labelledby="modal-title" role="dialog" aria-modal="true"
                >
                    <div class="flex items-end justify-center min-h-screen min-w-full text-center block p-0">

                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                            <div>
                                <div class="object-cover w-full h-48 rounded-md border-2 border-gray-300"  id="moreinfoplane" ref={this.proj_pic} alt=""></div>

                                <div class="mt-4 text-center">
                                    <h3 class="font-medium leading-6 text-gray-800 capitalize" id="modal-title">
                                        {this.props.header_text}
                                    </h3>

                                    <p class="mt-2 text-sm text-gray-500">
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