import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header.js';
import ImSteve from './ImSteve.js';
import Intro from './intro.js';
import ContactMe from './ContactMe.js';
import Portfolio from './portfolio.js';
import './output.css';
class Landing extends React.Component {
  constructor() {
    super();
    this.state = {activeNav:0};
    this.handler = this.handler.bind(this);
  }
  handler(val) {
    this.setState({
      activeNav: val
    });
  }

  render() {
    return (
      <div>
        <Header nav={this.state.activeNav}/>
        <ImSteve handler={this.handler}/>
        <Portfolio handler={this.handler}/>
        <ContactMe handler={this.handler}/>
      </div>
    )
  }
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
