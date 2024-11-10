import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

class App extends Component {
  render(){
    return (
      <div className='cd-flex'>
        <Header/>
        <div className=" container">
          <hr/>
          <AboutMe/>
          <hr/>
          <Projects/>
          <hr/>
          <Footer/>
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
