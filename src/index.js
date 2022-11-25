import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import ImSteve from './ImSteve.js';
import ContactMe from './ContactMe.js';
import Portfolio from './portfolio.js';
import Footer from './footer.js';
import AboutMe from './AboutMe.js';
import Integration from './Integration.js';
import './output.css';


class HomePage extends React.Component {
  render() {
    return (
      <div>
          <ImSteve handler={this.props.handler}/>
          <AboutMe handler={this.props.handler}/>
          <Integration handler={this.props.handler}/>
          <Portfolio handler={this.props.handler}/>
          <ContactMe handler={this.props.handler}/>
          <Footer />
        </div>
    )
  }
}


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
      <Router>
        <Header nav={this.state.activeNav}/>
        <Routes>
          <Route exact path='/' exact element={<HomePage handler={this.handler}/>} />
          <Route path='/plane' element={<HomePage handler={this.handler}/>} />
        </Routes>
      </Router>
    )
  }
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
